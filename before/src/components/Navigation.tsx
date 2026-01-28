import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();

    const links = [
        { path: '/products', label: 'Products' },
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/add-product', label: 'Add Product' },
        { path: '/login', label: 'Login' },
    ];

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-8">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-indigo-600">Bundle Demo</span>
                        </div>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === link.path
                                        ? 'border-indigo-500 text-gray-900'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
