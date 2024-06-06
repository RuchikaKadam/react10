import React, { useState } from 'react';

export default function Second() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-black-glass p-4 rounded-lg shadow-lg text-white max-w-4xl mx-auto my-8 main">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <div className="border-b-2 border-teal-600 w-16 mb-4"></div>
      <p
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isExpanded ? 'max-h-full' : 'max-h-20'
        }`}
      >
        Hello there! My name is Ruchika and I'm from Pune. I am a full-stack developer and I develope websites which are robust, fast and offer a UX. Building and developing business friendly websites to increase the avenue is my strong point. In free time, you can find me reading books or articles. 
      </p>
      <button
        onClick={toggleExpand}
        className="mt-2 bg-gray-white-glass focus:outline-none"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
}
