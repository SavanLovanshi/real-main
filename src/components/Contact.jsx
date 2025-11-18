import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  // Update state to match the fields from the image
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    areaCity: '',
  });
  
  // State to handle submission message, replacing alert()
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Set a success message instead of using alert()
    setSubmissionMessage('Thank you! We will contact you soon.');
    
    // Reset the new form fields
    setFormData({
      fullName: '',
      email: '',
      mobileNumber: '',
      areaCity: '',
    });

    // Optional: Clear the message after a few seconds
    setTimeout(() => {
      setSubmissionMessage('');
    }, 5000);
  };

  return (
    // Your original styling is preserved
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Your original 2-column grid is preserved */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Your original "Get In Touch" info block is preserved */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start your project? Contact us today and let's create something amazing together.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Phone className="text-purple-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">hello@creativehub.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="text-pink-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">123 Creative Street, Design City, DC 12345</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Your original form container styling is preserved */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Full Name"
                />
              </div>
              
              {/* Field 2: Email Address */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter Email Address"
                />
              </div>

              {/* Field 3: Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Mobile Number"
                />
              </div>
              
              {/* Field 4: Area, City */}
              <div>
                <label htmlFor="areaCity" className="block text-gray-700 font-medium mb-2">Area, City</label>
                <input
                  type="text"
                  id="areaCity"
                  name="areaCity"
                  value={formData.areaCity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Area, City"
                />
              </div>
              
              {/* Updated Button */}
              <button 
                type="submit"
                // Updated text and styling for this button only
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 cursor-pointer text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:shadow-lg transition-all"
              >
                Get Quick Quote
              </button>
            </form>

            {/* Submission Message Area */}
            {submissionMessage && (
              <p className="mt-4 text-center text-green-600 font-medium">
                {submissionMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;