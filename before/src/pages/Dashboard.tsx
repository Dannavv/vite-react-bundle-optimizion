const stats = [
    { label: 'Total Products', value: '2,345', change: '+12%', positive: true },
    { label: 'Revenue', value: '$45,231', change: '+8%', positive: true },
    { label: 'Orders', value: '892', change: '-3%', positive: false },
    { label: 'Customers', value: '1,234', change: '+15%', positive: true },
];

const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', amount: 299.99, status: 'Completed' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: 149.99, status: 'Processing' },
    { id: 'ORD-003', customer: 'Bob Johnson', amount: 599.99, status: 'Shipped' },
    { id: 'ORD-004', customer: 'Alice Brown', amount: 89.99, status: 'Completed' },
];

export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        This is a <span className="font-semibold text-green-600">MEDIUM PAGE</span> - analytics and charts
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="flex-1">
                                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
                                    </div>
                                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {stat.change}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Orders</h3>
                    </div>
                    <div className="border-t border-gray-200">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {recentOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {order.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {order.customer}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            ${order.amount}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="text-xs text-blue-800">
                        <strong>📦 Bundle Note:</strong> Dashboard needs React + some charts, but BASELINE loads country-state-city too!
                    </p>
                </div>
            </div>
        </div>
    );
}
