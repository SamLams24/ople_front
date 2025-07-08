import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Clock,
  MapPin,
  ArrowRight,
  ChefHat,
  Pizza,
  Truck,
  Loader2
} from "lucide-react";

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  mainImage: string;
  rating: number;
}

const featuredDishes = [
  {
    id: "1",
    name: "Burger Gourmet",
    description: "Pain artisanal, steak de bœuf, fromage affiné",
    price: 18.9,
    image:
      "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8
  },
  {
    id: "2",
    name: "Salade César",
    description: "Salade fraîche, poulet grillé, parmesan, croûtons",
    price: 14.5,
    image:
      "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6
  },
  {
    id: "3",
    name: "Pizza Margherita",
    description: "Pâte fine, tomates fraîches, mozzarella, basilic",
    price: 16.0,
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9
  }
];

const featuredRestaurants = [
  {
    _id: "1",
    name: "Le Gourmet",
    cuisine: "Française",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7
  },
  {
    _id: "2",
    name: "Bella Italia",
    cuisine: "Italienne",
    image:
      "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8
  },
  {
    _id: "3",
    name: "Sushi Zen",
    cuisine: "Japonaise",
    image:
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6
  }
];

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/restaurants`
        );
        if (!response.ok) {
          throw new Error("Impossible de charger les restaurants");
        }
        const data = await response.json();
        // On ne garde que les 3 premiers pour la page d'accueil
        setRestaurants(data.slice(0, 3));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);

  const backgroundImageUrl =
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="bg-creme text-noir-profond">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-noir-profond tracking-tight">
            Vos plats préférés, <br />
            <span className="text-accent">livrés en un clic.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gris-moyen">
            Oplé vous connecte aux meilleurs restaurants de la ville. Simple,
            rapide, délicieux.
          </p>
          <div className="mt-10">
            <input
              type="text"
              placeholder="Entrez votre adresse de livraison"
              className="w-full max-w-lg px-6 py-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition"
            />
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Comment ça marche ?</h2>
            <p className="text-gris-moyen mt-2">En 3 étapes simples.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <ChefHat className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                1. Choisissez un restaurant
              </h3>
              <p className="text-gris-moyen">
                Explorez des centaines de menus.
              </p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Pizza className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                2. Commandez vos plats
              </h3>
              <p className="text-gris-moyen">Ajoutez vos envies au panier.</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-4 rounded-full">
                  <Truck className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                3. Recevez votre livraison
              </h3>
              <p className="text-gris-moyen">
                Suivez votre commande en temps réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants populaires */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Restaurants populaires près de chez vous
            </h2>
          </div>
          {loading && (
            <div className="flex justify-center">
              <Loader2 className="w-10 h-10 animate-spin text-accent" />
            </div>
          )}

          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((resto) => (
                <div
                  key={resto._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <img
                    src={resto.mainImage} // Utilise mainImage du modèle Restaurant
                    alt={resto.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{resto.name}</h3>
                    <p className="text-gris-moyen">{resto.cuisine}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-noir-profond font-bold">
                        {resto.rating.toFixed(1)} ★
                      </span>
                      <Link
                        to={`/restaurant/${resto._id}`} // Le lien est déjà correct
                        className="text-accent font-semibold hover:underline"
                      >
                        Voir le menu
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
