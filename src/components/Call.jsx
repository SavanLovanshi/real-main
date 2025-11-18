import React from 'react';

const CallToAction = () => {
  return (
    <section 
      className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8"
      // Placeholder image similar to the one you provided
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Learn more about our listing process, as well as our 
          additional staging and design work.
        </h2>
        <button className="bg-white text-gray-900 cursor-pointer font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default CallToAction;