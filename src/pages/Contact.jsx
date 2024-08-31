import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-purple-600 text-white py-10 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4">We'd love to hear from you. Reach out to us with any questions or feedback.</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold">Get in Touch</h2>
              <form className="mt-8 space-y-4">
                <div>
                  <label className="block text-gray-600">Your Name</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Email Address</label>
                  <input
                    type="email"
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-600">Message</label>
                  <textarea
                    className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Type your message here..."
                    rows="5"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-semibold">Contact Details</h2>
              <p className="mt-8 text-lg text-gray-600">
                If you prefer, you can reach us directly using the information below.
              </p>
              <div className="mt-6 space-y-4">
                <p className="text-lg">
                  <span className="font-semibold">Address:</span> 123 Main Street, Anytown, USA
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Phone:</span> +1 (555) 123-4567
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Email:</span> support@yourcompany.com
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Working Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">Our Location</h2>
          <div className="mt-8">
            {/* Embed Google Map */}
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509375!2d144.9537353153158!3d-37.817209742555616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57799991f3c2d0b!2sEnvato!5e0!3m2!1sen!2sau!4v1606370643868!5m2!1sen!2sau"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
