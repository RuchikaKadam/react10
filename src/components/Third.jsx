import React from 'react';

export default function Third() {
  return (
    <div className="min-h-screen bg-black-glass text-white p-6 main" >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Primary Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-white-glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Web Design & Development</h3>
            <p>
              Creating attractive, easy-to-use websites that work well for businesses and
              individuals online.
            </p>
          </div>
          <div className="bg-gray-white-glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Full-Stack Solutions</h3>
            <p>
              Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP,
              and Python.
            </p>
          </div>
          <div className="bg-gray-white-glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">UI/UX</h3>
            <p>
              Creating and developing websites with Good UI and UX.
            </p>
          </div>
          <div className="bg-gray-white-glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Marketing & SEO</h3>
            <p>
              Using SEO and marketing strategies to boost online visibility and promote products or
              services and content-writing
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">Exploring Creativity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-white-glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Visual Storytelling</h3>
            <p>
              Taking and editing photos or videos that tell engaging stories, bringing concepts and
              ideas to life visually.
            </p>
          </div>
          <div className="bg-gray-white-glass p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Digital Content Creation</h3>
            <p>
              Creating digital elements, such as 3D models, graphics, animations, videos, and
              AI-generated content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
