import React, { useState } from 'react';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const planStyle = (plan) => {
    return selectedPlan === plan
      ? 'border-4 border-indigo-600'
      : 'border border-gray-200';
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-indigo-600 text-white py-10 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Pricing Plans</h1>
          <p className="mt-4">Choose a plan that fits your needs and budget.</p>
        </div>
      </header>

      {/* Pricing Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div
              className={`bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer ${planStyle(
                'Basic'
              )}`}
              onClick={() => handleSelectPlan('Basic')}
            >
              <h2 className="text-2xl font-semibold text-indigo-600">Basic</h2>
              <p className="mt-4 text-gray-600">For individuals starting out</p>
              <div className="mt-6 text-4xl font-bold">
                $10<span className="text-lg font-medium">/mo</span>
              </div>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li>1 GB Storage</li>
                <li>Email Support</li>
                <li>Basic Analytics</li>
              </ul>
              <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>

            {/* Standard Plan */}
            <div
              className={`bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer ${planStyle(
                'Standard'
              )}`}
              onClick={() => handleSelectPlan('Standard')}
            >
              <h2 className="text-2xl font-semibold text-indigo-600">Standard</h2>
              <p className="mt-4 text-gray-600">For growing businesses</p>
              <div className="mt-6 text-4xl font-bold">
                $30<span className="text-lg font-medium">/mo</span>
              </div>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li>10 GB Storage</li>
                <li>Priority Email Support</li>
                <li>Advanced Analytics</li>
                <li>Custom Domain</li>
              </ul>
              <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div
              className={`bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer ${planStyle(
                'Premium'
              )}`}
              onClick={() => handleSelectPlan('Premium')}
            >
              <h2 className="text-2xl font-semibold text-indigo-600">Premium</h2>
              <p className="mt-4 text-gray-600">For large enterprises</p>
              <div className="mt-6 text-4xl font-bold">
                $60<span className="text-lg font-medium">/mo</span>
              </div>
              <ul className="mt-6 space-y-4 text-gray-600">
                <li>Unlimited Storage</li>
                <li>24/7 Support</li>
                <li>All Features</li>
                <li>Dedicated Account Manager</li>
              </ul>
              <button className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
