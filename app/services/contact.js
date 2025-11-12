import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Our Campus Hiring Team</h2>
        <p className="text-lg text-gray-600 mb-6">
          Email: campus@triotechsolutions.com | Hours: Monday - Friday, 9 AM - 6 PM
        </p>
        <div className="flex justify-center gap-4">
          <a href="/contact" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;