export default function First() {

    return(
        <div className="max-w-lg mx-auto bg-teal-700 rounded-lg p-6 shadow-lg text-white">
          <div className="flex items-center mb-4">
            <img className="w-16 h-16 rounded-full mr-4" src="https://placehold.co/100x100" alt="Profile Picture"/>
            <div>
              <h2 className="text-xl font-bold">Oktay Shakirov</h2>
              <p className="bg-teal-600 rounded-full px-4 py-1 inline-block mt-2">Hello, World!</p>
            </div>
          </div>
          <hr className="border-teal-500 my-4"/>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-teal-800 p-2 rounded-full mr-2">
                <img className="w-6 h-6" src="https://placehold.co/24x24" alt="Age Icon"/>
              </div>
              <div>
                <p className="text-sm text-teal-300">AGE</p>
                <p className="text-lg">29 years old</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-teal-800 p-2 rounded-full mr-2">
                <img className="w-6 h-6" src="https://placehold.co/24x24" alt="Location Icon"/>
              </div>
              <div>
                <p className="text-sm text-teal-300">LOCATION</p>
                <p className="text-lg">Berlin, Germany</p>
              </div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-teal-800 p-2 rounded-full mr-2">
              <img className="w-6 h-6" src="https://placehold.co/24x24" alt="Personality Type Icon"/>
            </div>
            <div>
              <p className="text-sm text-teal-300">PERSONALITY TYPE</p>
              <p className="text-lg">INTJ-T</p>
            </div>
          </div>
          <hr className="border-teal-500 my-4"/>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-teal-300">
              <img className="w-6 h-6" src="https://placehold.co/24x24" alt="GitHub Icon" />
            </a>
            <a href="#" className="text-teal-300">
              <img className="w-6 h-6" src="https://placehold.co/24x24" alt="LinkedIn Icon"/>
            </a>
            <a href="#" className="text-teal-300">
              <img className="w-6 h-6" src="https://placehold.co/24x24" alt="Instagram Icon"/>
            </a>
            <a href="#" className="text-teal-300">
              <img className="w-6 h-6" src="https://placehold.co/24x24" alt="Twitter Icon"/>
            </a>
          </div>
        </div>
    )
}