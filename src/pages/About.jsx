import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 ">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-10 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4">Learn more about our journey and values.</p>
        </div>
      </header>

      {/* Company Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Who We Are</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a passionate team dedicated to providing the best shopping experience.
          </p>
          <p className="mt-4 text-gray-600">
            Since our founding, we have been committed to bringing the best products to our customers. Our journey began with a simple idea and has grown into a thriving eCommerce business.
          </p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            To provide top-quality products at unbeatable prices, all while delivering exceptional customer service.
          </p>
          <p className="mt-4 text-gray-600">
            We believe in sustainability, integrity, and innovation. Our mission is to create a positive impact in the lives of our customers and the community.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto w-[100%] px-6 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
          <div className="mt-12 flex flex-wrap w-[33%] gap-8">
            {/* Example Team Member */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img className="w-24 h-24 mx-auto rounded-full" src="https://via.placeholder.com/150" alt="Team Member" />
              <h3 className="mt-4 text-xl font-medium">John Doe</h3>
              <p className="text-blue-600">CEO & Founder</p>
              <p className="mt-2 text-gray-600">John is the visionary behind our company, leading us with passion and dedication.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
