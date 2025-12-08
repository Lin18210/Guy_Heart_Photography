import React, { useState } from 'react';

// Placeholder image (Replace with your actual import path)
import contactImage from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/40.webp'; 

const ContactSection = () => {
  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    country: 'Thailand', // Defaulting to the placeholder text
    phone: '',
    source: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // 'success' | 'error' | ''
  const [loading, setLoading] = useState(false);

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form reload
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Your Access Key
          access_key: '3d3a905d-49fd-47fa-9319-85f4dbcf863e',
          
          // Mapping our specific fields to the API
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: `${formData.country} ${formData.phone}`,
          date: formData.date,
          source: formData.source,
          message: formData.message,
          
          // Optional: Subject line for the email you receive
          subject: `New Wedding Inquiry from ${formData.firstName} ${formData.lastName}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          date: '',
          country: 'Thailand',
          phone: '',
          source: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white w-full">
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto">
        
        {/* --- LEFT COLUMN: FORM --- */}
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          
          <h2 className="text-4xl md:text-6xl font-serif text-[#7a93a5] mb-8 text-center md:text-left tracking-wide">
            CONTACT
          </h2>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mb-6 p-4 bg-green-50 text-green-600 border border-green-200 text-sm font-serif text-center">
              Thank you! Your message has been sent successfully. We will be in touch soon.
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-200 text-sm font-serif text-center">
              Something went wrong. Please check your connection and try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Fields */}
            <div>
              <label className="block text-[#7a93a5] text-sm mb-2 font-serif">
                Your & your partners name: (required)
              </label>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    required
                    className="w-full border border-gray-300 p-3 text-sm text-gray-600 focus:outline-none focus:border-[#7a93a5] transition-colors"
                  />
                </div>
                <div className="w-1/2">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    required
                    className="w-full border border-gray-300 p-3 text-sm text-gray-600 focus:outline-none focus:border-[#7a93a5] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-[#7a93a5] text-sm mb-2 font-serif">
                Email (required)
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 text-sm text-gray-600 focus:outline-none focus:border-[#7a93a5] transition-colors"
              />
            </div>

            {/* Date Field */}
            <div>
              <label className="block text-[#7a93a5] text-sm mb-2 font-serif">
                Wedding Date (if you have one):
              </label>
              <input 
                type="date" 
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full md:w-1/2 border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none focus:border-[#7a93a5] transition-colors uppercase"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-[#7a93a5] text-sm mb-2 font-serif">
                Your Phone Number
              </label>
              <div className="flex gap-4">
                <div className="w-1/3">
                  <input 
                    type="text" 
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Thailand" 
                    className="w-full border border-gray-300 p-3 text-sm text-gray-600 focus:outline-none focus:border-[#7a93a5] transition-colors"
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Country</span>
                </div>
                <div className="w-2/3">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+66" 
                    className="w-full border border-gray-300 p-3 text-sm text-gray-600 focus:outline-none focus:border-[#7a93a5] transition-colors"
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Number</span>
                </div>
              </div>
            </div>

            {/* How did you hear us */}
            <div>
              <label className="block text-[#7a93a5] text-sm mb-2 font-serif">
                How did you hear us?
              </label>
              <select 
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 text-sm text-gray-400 focus:outline-none focus:border-[#7a93a5] transition-colors bg-white"
              >
                <option value="">Select an option</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="Google Search">Google Search</option>
                <option value="Friend Recommendation">Friend Recommendation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Textarea */}
            <div>
              <label className="block text-[#7a93a5] text-sm mb-2 font-serif">
                Share any details or info you'd love me to know!
              </label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your wedding vision, location, and what you dream of capturing."
                className="w-full border border-gray-300 p-3 text-sm text-gray-600 focus:outline-none focus:border-[#7a93a5] transition-colors"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                disabled={loading}
                className="px-10 py-3 border border-gray-300 text-gray-500 font-serif text-sm hover:bg-[#7a93a5] hover:text-white hover:border-[#7a93a5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

          </form>
        </div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <div className="w-full md:w-1/2 h-[500px] md:h-[200px] relative min-h-[800px]">
          <img 
            src={contactImage} 
            alt="Bride holding flowers" 
            className="absolute inset-0 w-full h-full object-cover  rounded-4xl"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;