import React from 'react';

const Testimonials = () => {
  const clients = [
    {
      name: 'Rowhan Smith',
      role: 'CEO, Foreclosure',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Shipra Kayak',
      role: 'Brand Designer',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'John Lepore',
      role: 'CEO, Foreclosure',
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Marry Freeman',
      role: 'Marketing Manager at Mixit',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      name: 'Lucy',
      role: 'Sales Rep at Alibaba',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  ];

  // 2 copy list barobar chhe
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="testimonials" className="py-20  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Happy <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* overflow-hidden aa main wrapper par compulsory chhe */}
      <div className="relative overflow-hidden">
        <style>
          {`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                /* -50% barobar chhe 2 copy list maate */
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              /* Animation speed thodi vadhaari chhe smooth laage */
              animation: scroll 10s linear infinite;
              /* will-change hatavi didhu chhe */
            }
            
            /* --- AA NAVO SUDHARO CHHE --- */
            /* Hover karva par animation atkavva maate */
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="flex animate-scroll w-max">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 mx-4"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl h-full">
                {/* Client Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg">
                      <img 
                        src={client.img} 
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {client.text}
                </p>

                {/* Client Info */}
                <div className="text-center border-t pt-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">
                    {client.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {client.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;