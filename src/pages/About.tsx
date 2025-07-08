import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      id: '1',
      name: 'Chef Antoine Dubois',
      role: 'Chef Exécutif',
      image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '15 ans d\'expérience dans la haute gastronomie française',
    },
    {
      id: '2',
      name: 'Marie Laurent',
      role: 'Sous-Chef',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Spécialiste des desserts et pâtisseries artisanales',
    },
    {
      id: '3',
      name: 'Pierre Martin',
      role: 'Sommelier',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert en accords mets et vins, certification niveau 3',
    },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'Nous nous engageons à offrir une qualité exceptionnelle dans chaque plat que nous servons.',
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Convivialité',
      description: 'Notre équipe crée une atmosphère chaleureuse pour des moments inoubliables.',
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Tradition',
      description: 'Nous perpétuons les traditions culinaires françaises avec une touche moderne.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-black/60 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Une passion pour la gastronomie française depuis 1985
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Une Tradition Familiale
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Fondé en 1985 par la famille Dubois, notre restaurant est né d'une passion 
                  profonde pour la gastronomie française authentique. Depuis près de 40 ans, 
                  nous perpétuons les traditions culinaires tout en innovant constamment.
                </p>
                <p>
                  Notre chef Antoine Dubois, fils du fondateur, a repris les rênes en 2010 
                  et a su moderniser notre carte tout en préservant l'âme de notre cuisine. 
                  Chaque plat raconte une histoire, chaque saveur évoque un souvenir.
                </p>
                <p>
                  Nous sélectionnons rigoureusement nos producteurs locaux et privilégions 
                  les circuits courts pour vous offrir des produits d'exception, dans le 
                  respect de la saisonnalité et de l'environnement.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Notre restaurant"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">40</div>
                  <div className="text-sm">Années d'Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre passion culinaire au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés au service de votre plaisir gustatif
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Nous Trouver
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Adresse</h3>
                    <p className="text-gray-300">
                      123 Rue de la Gastronomie<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Horaires</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Lundi - Vendredi: 11h30 - 14h30, 18h30 - 22h30</p>
                      <p>Samedi - Dimanche: 12h00 - 23h00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Réservation</h3>
              <p className="text-gray-300 mb-6">
                Pour une expérience optimale, nous recommandons de réserver votre table à l'avance.
              </p>
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-semibold">Téléphone:</span> 01 23 45 67 89
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Email:</span> contact@restaurant.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;