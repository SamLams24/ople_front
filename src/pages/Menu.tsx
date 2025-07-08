import React, { useEffect, useState } from "react";
import { Star, Plus, Loader2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { ToastContainer, toast } from "react-toastify";

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurant: {
    _id: string;
    name: string;
  };
  available: boolean;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart } = useCart();

  const categories = [
    { id: "all", name: "Tous" },
    { id: "entrees", name: "Entrées" },
    { id: "plats", name: "Plats" },
    { id: "desserts", name: "Desserts" },
    { id: "boissons", name: "Boissons" }
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/menu`
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération du menu");
        }
        const data = await response.json();
        setMenuItems(data.items);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
    toast.success(`${item.name} a été ajouté au panier !`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-accent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Erreur: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-creme py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-noir-profond mb-4">
            Découvrez nos saveurs
          </h1>
          <p className="text-xl text-gris-moyen max-w-2xl mx-auto">
            Des plats préparés avec passion par nos restaurants partenaires.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${
                selectedCategory === category.id
                  ? "bg-noir-profond text-white shadow-lg"
                  : "bg-white text-noir-profond hover:bg-gray-100 hover:shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille des plats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-gris-moyen mb-1">
                  {item.restaurant.name}
                </p>
                <h3 className="text-lg font-semibold text-noir-profond mb-2 flex-grow">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-4">
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

        {filteredItems.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gris-moyen text-lg">
              Aucun plat trouvé dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
