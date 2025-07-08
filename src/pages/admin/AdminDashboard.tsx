import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  ShoppingBag, 
  Menu as MenuIcon, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  DollarSign,
  Clock,
  Star
} from 'lucide-react';

// Composants pour chaque section
const DashboardOverview: React.FC = () => {
  const stats = [
    {
      title: 'Revenus du jour',
      value: '1,247€',
      change: '+12%',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      title: 'Commandes',
      value: '47',
      change: '+8%',
      icon: <ShoppingBag className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Clients',
      value: '1,234',
      change: '+15%',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Note moyenne',
      value: '4.8',
      change: '+0.2',
      icon: <Star className="w-6 h-6" />,
      color: 'bg-yellow-500',
    },
  ];

  const recentOrders = [
    {
      id: '#1234',
      customer: 'Marie Dubois',
      items: 'Burger Gourmet, Salade César',
      total: '32.50€',
      status: 'En préparation',
      time: '14:30',
    },
    {
      id: '#1235',
      customer: 'Pierre Martin',
      items: 'Pizza Margherita, Tiramisu',
      total: '24.50€',
      status: 'Prête',
      time: '14:25',
    },
    {
      id: '#1236',
      customer: 'Sophie Laurent',
      items: 'Risotto aux Champignons',
      total: '19.00€',
      status: 'Livrée',
      time: '14:15',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En préparation':
        return 'bg-yellow-100 text-yellow-800';
      case 'Prête':
        return 'bg-green-100 text-green-800';
      case 'Livrée':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Vue d'ensemble de votre restaurant</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change} vs hier</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphiques et commandes récentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique des ventes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Ventes de la semaine
          </h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Graphique des ventes (Chart.js)</p>
          </div>
        </div>

        {/* Commandes récentes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Commandes récentes
            </h3>
            <Link
              to="/admin/orders"
              className="text-orange-500 hover:text-orange-600 text-sm font-medium"
            >
              Voir tout
            </Link>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900">{order.id}</span>
                    <span className="text-sm text-gray-500">{order.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-xs text-gray-500">{order.items}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-gray-900">{order.total}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OrdersManagement: React.FC = () => {
  const orders = [
    {
      id: '#1234',
      customer: 'Marie Dubois',
      email: 'marie@email.com',
      items: ['Burger Gourmet', 'Salade César', 'Tiramisu'],
      total: 45.50,
      status: 'En préparation',
      time: '14:30',
      date: '2024-01-15',
    },
    {
      id: '#1235',
      customer: 'Pierre Martin',
      email: 'pierre@email.com',
      items: ['Pizza Margherita', 'Vin Rouge'],
      total: 32.00,
      status: 'Prête',
      time: '14:25',
      date: '2024-01-15',
    },
    {
      id: '#1236',
      customer: 'Sophie Laurent',
      email: 'sophie@email.com',
      items: ['Risotto aux Champignons'],
      total: 19.00,
      status: 'Livrée',
      time: '14:15',
      date: '2024-01-15',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En préparation':
        return 'bg-yellow-100 text-yellow-800';
      case 'Prête':
        return 'bg-green-100 text-green-800';
      case 'Livrée':
        return 'bg-blue-100 text-blue-800';
      case 'Annulée':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des commandes</h1>
          <p className="text-gray-600">Suivez et gérez toutes les commandes</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commande
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Articles
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">{order.date} à {order.time}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {order.items.join(', ')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {order.total.toFixed(2)}€
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const MenuManagement: React.FC = () => {
  const menuItems = [
    {
      id: '1',
      name: 'Burger Gourmet',
      category: 'Plats',
      price: 18.90,
      description: 'Pain artisanal, steak de bœuf, fromage affiné',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true,
    },
    {
      id: '2',
      name: 'Salade César',
      category: 'Entrées',
      price: 14.50,
      description: 'Salade fraîche, poulet grillé, parmesan',
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: true,
    },
    {
      id: '3',
      name: 'Tiramisu',
      category: 'Desserts',
      price: 8.50,
      description: 'Mascarpone, café, cacao',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
      available: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion du menu</h1>
          <p className="text-gray-600">Gérez vos plats et catégories</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Ajouter un plat</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {item.available ? 'Disponible' : 'Indisponible'}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-lg font-bold text-orange-500">
                  {item.price.toFixed(2)}€
                </span>
              </div>
              
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center justify-center space-x-1">
                  <Edit className="w-4 h-4" />
                  <span>Modifier</span>
                </button>
                <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm flex items-center justify-center space-x-1">
                  <Trash2 className="w-4 h-4" />
                  <span>Supprimer</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomersManagement: React.FC = () => {
  const customers = [
    {
      id: '1',
      name: 'Marie Dubois',
      email: 'marie@email.com',
      phone: '01 23 45 67 89',
      orders: 12,
      totalSpent: 245.50,
      lastOrder: '2024-01-15',
      status: 'Actif',
    },
    {
      id: '2',
      name: 'Pierre Martin',
      email: 'pierre@email.com',
      phone: '01 98 76 54 32',
      orders: 8,
      totalSpent: 156.00,
      lastOrder: '2024-01-10',
      status: 'Actif',
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      email: 'sophie@email.com',
      phone: '01 11 22 33 44',
      orders: 3,
      totalSpent: 67.50,
      lastOrder: '2024-01-05',
      status: 'Inactif',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gestion des clients</h1>
        <p className="text-gray-600">Consultez et gérez vos clients</p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commandes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total dépensé
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dernière commande
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">
                          {customer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.orders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {customer.totalSpent.toFixed(2)}€
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{customer.lastOrder}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'Actif' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Tableau de bord', href: '/admin', icon: BarChart3, current: location.pathname === '/admin' },
    { name: 'Commandes', href: '/admin/orders', icon: ShoppingBag, current: location.pathname === '/admin/orders' },
    { name: 'Menu', href: '/admin/menu', icon: MenuIcon, current: location.pathname === '/admin/menu' },
    { name: 'Clients', href: '/admin/customers', icon: Users, current: location.pathname === '/admin/customers' },
    { name: 'Paramètres', href: '/admin/settings', icon: Settings, current: location.pathname === '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-4 bg-orange-500">
          <h1 className="text-xl font-bold text-white">Administration</h1>
        </div>
        
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'bg-orange-100 text-orange-700'
                    : 'text-gray-700 hover:bg-gray-100'
                } group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header mobile */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Administration</h1>
            <div></div>
          </div>
        </div>

        {/* Contenu */}
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/menu" element={<MenuManagement />} />
            <Route path="/customers" element={<CustomersManagement />} />
            <Route path="/settings" element={<div>Paramètres (à implémenter)</div>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;