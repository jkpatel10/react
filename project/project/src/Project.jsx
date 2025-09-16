import React, { useState } from "react";

export default function Project() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const click = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("City:", city);
  };

  return (
     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px]">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-6">Input Form</h1>

        <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} className="border w-full px-3 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} className="border w-full px-3 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} className="border w-full px-3 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        <button onClick={click} className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition">Submit</button>

        <div className="mt-6 text-gray-700 space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>City:</strong> {city}</p>
        </div>
      </div>
    </div>
  );
}