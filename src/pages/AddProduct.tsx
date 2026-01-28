import { useState } from 'react';
// BASELINE: Static import - This 9MB library is loaded for ALL pages! (BAD!)
import { Country, State, City } from 'country-state-city';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        country: '',
        state: '',
        city: '',
    });

    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [selectedState, setSelectedState] = useState<any>(null);

    const countries = Country.getAllCountries();
    const states = selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : [];
    const cities = selectedState ? City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode) : [];

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const country = countries.find(c => c.isoCode === e.target.value);
        setSelectedCountry(country);
        setSelectedState(null);
        setFormData({ ...formData, country: country?.name || '', state: '', city: '' });
    };

    const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const state = states.find(s => s.isoCode === e.target.value);
        setSelectedState(state);
        setFormData({ ...formData, state: state?.name || '', city: '' });
    };

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, city: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Product data:', formData);
        alert('Product added! Check console for data.');
    };

    return (
        <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        This is a <span className="font-semibold text-red-600">HEAVY PAGE</span> - uses country-state-city library (9MB+)
                    </p>
                </div>

                <div className="bg-white shadow sm:rounded-lg">
                    <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6 space-y-6">
                        {/* Product Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                required
                                step="0.01"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={3}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Inventory Location</h3>

                            {/* Country Dropdown */}
                            <div className="mb-4">
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country ({countries.length} countries loaded)
                                </label>
                                <select
                                    id="country"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={selectedCountry?.isoCode || ''}
                                    onChange={handleCountryChange}
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country.isoCode} value={country.isoCode}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* State Dropdown */}
                            {selectedCountry && (
                                <div className="mb-4">
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                        State/Province ({states.length} available)
                                    </label>
                                    <select
                                        id="state"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        value={selectedState?.isoCode || ''}
                                        onChange={handleStateChange}
                                    >
                                        <option value="">Select a state</option>
                                        {states.map((state) => (
                                            <option key={state.isoCode} value={state.isoCode}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {/* City Dropdown */}
                            {selectedState && (
                                <div className="mb-4">
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City ({cities.length} available)
                                    </label>
                                    <select
                                        id="city"
                                        required
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        value={formData.city}
                                        onChange={handleCityChange}
                                    >
                                        <option value="">Select a city</option>
                                        {cities.map((city) => (
                                            <option key={city.name} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        <div className="pt-5">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-xs text-red-800">
                        <strong>⚠️ HEAVY PAGE:</strong> This page imports country-state-city library (~9MB of location data).
                        In BASELINE, this gets bundled into the main chunk, so even the Login page loads this massive library!
                    </p>
                    <p className="text-xs text-red-600 mt-2">
                        <strong>The Problem:</strong> Users visiting /login download 9MB+ of data they don't need!
                    </p>
                </div>
            </div>
        </div>
    );
}
