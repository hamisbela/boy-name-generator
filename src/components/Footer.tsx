import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/african-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  African Boy Names
                </Link>
              </li>
              <li>
                <Link to="/american-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  American Boy Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">European Names</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/french-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  French Boy Names
                </Link>
              </li>
              <li>
                <Link to="/german-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  German Boy Names
                </Link>
              </li>
              <li>
                <Link to="/russian-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Russian Boy Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Asian Names</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/indian-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Indian Boy Names
                </Link>
              </li>
              <li>
                <Link to="/japanese-boy-names" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Japanese Boy Names
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Name Generator Tool
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Our Names
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}