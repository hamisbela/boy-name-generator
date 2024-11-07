import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Baby } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const path = location.pathname;

  const getTitle = () => {
    switch (path) {
      case '/african-boy-names':
        return 'African Boy Name Generator';
      case '/american-boy-names':
        return 'American Boy Name Generator';
      case '/french-boy-names':
        return 'French Boy Name Generator';
      case '/german-boy-names':
        return 'German Boy Name Generator';
      case '/indian-boy-names':
        return 'Indian Boy Name Generator';
      case '/japanese-boy-names':
        return 'Japanese Boy Name Generator';
      case '/russian-boy-names':
        return 'Russian Boy Name Generator';
      default:
        return 'Boy Name Generator';
    }
  };

  return (
    <header className="text-center pt-16 pb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Baby className="w-8 h-8 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800">{getTitle()}</h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto px-4 mb-8">
        Discover the perfect name for your baby boy with our intelligent name generator.
        Create strong, meaningful names that will last a lifetime.
      </p>
      
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">All Names</Link>
          <Link to="/african-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">African Names</Link>
          <Link to="/american-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">American Names</Link>
          <Link to="/french-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">French Names</Link>
          <Link to="/german-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">German Names</Link>
          <Link to="/indian-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">Indian Names</Link>
          <Link to="/japanese-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">Japanese Names</Link>
          <Link to="/russian-boy-names" className="text-blue-600 hover:text-blue-800 transition-colors">Russian Names</Link>
        </div>
      </nav>
    </header>
  );
}