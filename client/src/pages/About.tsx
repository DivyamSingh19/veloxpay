import React from "react";

const About = () => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 bg-black text-white flex flex-col items-center justify-center px-6 py-8 overflow-auto">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-purple-400">
          About VeloxPay
        </h1>
        <p className="text-white text-sm leading-relaxed">
          VeloxPay is a <span className="font-bold">minimalist payments application</span>  built using the
          MERN stack. Designed as a portfolio project, it focuses on core
          payment functionalities, API interactions, and a clean user
          experience.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-300">
          Tech Stack
        </h2>
        <ul className="text-white text-sm space-y-1">
          <li>
            🟢 <strong>MongoDB</strong> – NoSQL database for transactions.
          </li>
          <li>
            ⚛️ <strong>Express.js & Node.js</strong> – Secure backend.
          </li>
          <li>
            ⚛️ <strong>React</strong> – Optimized frontend.
          </li>
          <li>
            🐳 <strong>Docker</strong> – Containerized deployment.
          </li>
          <li>
            🔐 <strong>JWT Authentication</strong> – Secure sessions.
          </li>
          <li>
            💳 <strong>Payment Integration</strong> – Simulated transactions.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-purple-300">
          Key Features
        </h2>
        <ul className="text-white text-sm space-y-1">
          <li>✅ Minimal & Lightweight – Clean UI/UX.</li>
          <li>✅ Secure Transactions – Tokenized payments.</li>
          <li>✅ Developer-Centric – RESTful APIs.</li>
          <li>✅ Real-Time Updates – WebSocket support.</li>
          <li>✅ Dockerized Deployment – Portable & scalable.</li>
        </ul>

        <p className="text-white text-md mt-6">
          🚀 This project is a hands-on exploration of <span className="font-bold">building a scalable,
          containerized payment solution.</span>
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="https://github.com/DivyamSingh19/VeloxPay"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition"
          >
            Check out the Code →
          </a>

          <a
            href="https://divyamsingh19.netlify.app"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium rounded-lg transition"
          >
            Developer Info →
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
