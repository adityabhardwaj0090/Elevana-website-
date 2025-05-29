
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1500&q=80')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Elevana</h1>
          <p className="text-xl">Invest in Verified Dubai Properties from Bangalore</p>
          <div className="mt-4 space-x-4">
            <button className="px-6 py-2 bg-green-500 rounded-full text-white">Book Site Visit</button>
            <button className="px-6 py-2 bg-blue-500 rounded-full text-white">WhatsApp Us</button>
          </div>
        </div>
      </div>
      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Elevana</h2>
        <p>We specialize in premium residential, commercial, studio, and hotel apartment investments in Dubai. With a local team based in Bangalore, we offer personalized consultation and 100% verified projects.</p>
      </section>
      <section className="p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Dubai Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow">
              <img className="rounded-md mb-4" src={`https://via.placeholder.com/300x200?text=Project+${item}`} alt={`Project ${item}`} />
              <h3 className="text-lg font-bold mb-2">Project {item}</h3>
              <p>Luxury apartments located in prime Dubai locations. Starting from AED 500,000.</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full">Download Brochure</button>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p>Phone / WhatsApp: <strong>+91 89517 52162</strong></p>
        <p>Office Address: <strong>Jayanagar, Bangalore</strong></p>
        <div className="mt-4">
          <button className="px-6 py-2 bg-green-600 text-white rounded-full">WhatsApp Us</button>
        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2025 Elevana. All rights reserved.</p>
      </footer>
    </div>
  );
}
