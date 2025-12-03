import React from 'react'
import Heroslider from '../Components/Heroslider';

const Home = () => {
   return (
    <main className="flex-grow">
      {/* Hero Slider is part of Home Page */}
      <Heroslider />

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#C5A059] uppercase tracking-widest text-sm font-bold">Our Philosophy</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-gray-900 mb-6">Capturing Moments That Last a Lifetime</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            We believe that every love story is unique and deserves to be told with authenticity and grace. 
            From the quiet, intimate glances to the grand celebrations, our lens focuses on the emotions 
            that make your day truly yours. Based in Thailand, we travel globally to document love in all its forms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 mb-4 rounded overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1537633552985-df842978041b' : i === 2 ? '1519225421479-59435e9e5080' : '1522673607200-1645062acb31'}?q=80&w=800&auto=format&fit=crop`} 
                    alt="Portfolio Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2">Collection 0{i}</h3>
                <p className="text-sm text-gray-500">Explore our curated galleries featuring stunning weddings from around the world.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home