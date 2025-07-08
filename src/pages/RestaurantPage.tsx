import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Star, Plus, Loader2, Clock, MapPin } from "lucide-react";

// Interfaces pour typer nos données
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Restaurant {
  _id: string;
  name: string;
  description: string;
  mainImage: string;
  address: string;
  cuisine: string;
  rating: number;
  menu: MenuItem[];
}

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/restaurants/${id}`
        );
        if (!response.ok) {
          throw new Error("Restaurant non trouvé");
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]); // L'effet se relance si l'ID dans l'URL change

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  // Affichage en cas de chargement ou d'erreur
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-accent" />
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Erreur : {error}
      </div>
    );
  if (!restaurant)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Restaurant non trouvé.
      </div>
    );

  // Grouper le menu par catégorie
  const menuByCategory = restaurant.menu.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="bg-creme min-h-screen">
      {/* Hero Section du Restaurant */}
      <section className="relative h-80 bg-gray-800">
        <img
          src={restaurant.mainImage}
          alt={restaurant.name}
          className="absolute h-full w-full object-cover opacity-40"
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">{restaurant.name}</h1>
            <p className="mt-2 text-xl">{restaurant.cuisine}</p>
            <div className="mt-4 flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />{" "}
                {restaurant.rating.toFixed(1)}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-1" /> {restaurant.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu du Restaurant */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(menuByCategory).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-bold text-noir-profond capitalize mb-6 border-b-2 border-accent pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-noir-profond mb-2 flex-grow">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gris-moyen mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-noir-profond">
                        {item.price.toFixed(2)}€
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-accent hover:bg-accent-hover text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                        aria-label={`Ajouter ${item.name} au panier`}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default RestaurantPage;
