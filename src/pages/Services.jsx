import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-10 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4">Discover the range of services we offer to enhance your shopping experience.</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Service */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <i className="text-blue-600 text-3xl fas fa-shipping-fast"></i> {/* Icon example using FontAwesome */}
              </div>
              <h3 className="text-xl font-medium">Fast Shipping</h3>
              <p className="mt-2 text-gray-600">Get your products delivered quickly with our expedited shipping options.</p>
            </div>
            {/* Add more services as needed */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <i className="text-blue-600 text-3xl fas fa-headset"></i>
              </div>
              <h3 className="text-xl font-medium">24/7 Customer Support</h3>
              <p className="mt-2 text-gray-600">Our customer support team is available around the clock to assist you.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <i className="text-blue-600 text-3xl fas fa-sync-alt"></i>
              </div>
              <h3 className="text-xl font-medium">Easy Returns</h3>
              <p className="mt-2 text-gray-600">We offer hassle-free returns and exchanges on all products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Need Help?</h2>
          <p className="mt-4 text-lg">
            If you have any questions or need assistance, don't hesitate to contact our support team.
          </p>
          <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
};

export default Services;
