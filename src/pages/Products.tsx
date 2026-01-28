const sampleProducts = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, category: 'Electronics', stock: 45 },
    { id: 2, name: 'Smart Watch', price: 249.99, category: 'Electronics', stock: 23 },
    { id: 3, name: 'Laptop Stand', price: 49.99, category: 'Accessories', stock: 67 },
    { id: 4, name: 'USB-C Hub', price: 39.99, category: 'Accessories', stock: 89 },
    { id: 5, name: 'Mechanical Keyboard', price: 129.99, category: 'Electronics', stock: 34 },
    { id: 6, name: 'Ergonomic Mouse', price: 59.99, category: 'Accessories', stock: 56 },
];

export default function Products() {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Product Catalog</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        This is a <span className="font-semibold text-green-600">MEDIUM PAGE</span> - simple product listing
                    </p>
                </div>

                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Product
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Stock
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {sampleProducts.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{product.category}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">${product.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.stock > 50 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {product.stock} units
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-xs text-blue-800">
                        <strong>📦 Bundle Note:</strong> This page only needs basic React + routing, but in BASELINE it loads everything!
                    </p>
                </div>
            </div>
        </div>
    );
}
