import React, { useState, useEffect, useRef } from 'react';

export default function Fifth() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const skills = [
    { name: 'Node.js', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 128 128'%3E%3Cpath fill='%235fa04e' d='M114.313 55.254a.26.26 0 0 0-.145.044l-2.346 1.37a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.368a.26.26 0 0 0 .29 0l2.342-1.368a.31.31 0 0 0 .145-.263V56.93a.3.3 0 0 0-.145-.26l-2.343-1.371a.26.26 0 0 0-.144-.044zM63.22 71.638c-.427 0-.852.104-1.214.308l-11.549 6.727a2.46 2.46 0 0 0-1.214 2.124V94.22c0 .874.462 1.69 1.214 2.128l3.04 1.746c1.476.728 1.997.726 2.662.726c2.17 0 3.415-1.339 3.415-3.64V81.935a.356.356 0 0 0-.348-.351h-1.474a.356.356 0 0 0-.35.351v13.248c0 1.019-1.069 2.04-2.776 1.167l-3.155-1.835c-.116-.058-.175-.206-.175-.322V80.767c0-.116.059-.26.175-.319l11.545-6.697c.087-.058.233-.058.349 0l11.548 6.697c.115.059.172.174.172.32v13.424c0 .145-.057.264-.172.322l-11.548 6.727c-.087.058-.233.058-.349 0l-2.951-1.779c-.087-.058-.203-.087-.29-.029c-.81.466-.952.527-1.734.789c-.174.058-.463.173.115.493l3.85 2.302c.376.203.78.319 1.214.319s.867-.115 1.214-.26l11.549-6.727a2.46 2.46 0 0 0 1.214-2.128V80.797c0-.874-.462-1.687-1.214-2.124l-11.549-6.727a2.5 2.5 0 0 0-1.214-.308m18.03 6.13a2.236 2.236 0 0 0-2.227 2.243a2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.228-1.019 2.228-2.242a2.254 2.254 0 0 0-2.228-2.242zm-.03.379a1.86 1.86 0 0 1 1.883 1.864c0 1.02-.84 1.894-1.882 1.894c-1.012 0-1.852-.846-1.852-1.894s.869-1.864 1.852-1.864zm-.809.611v2.562h.494v-1.016h.434c.174 0 .231.058.26.203c0 .03.086.67.086.786h.52c-.058-.116-.087-.466-.116-.67c-.028-.32-.056-.553-.404-.582c.174-.059.463-.146.463-.612c0-.67-.58-.67-.868-.67zm.435.408h.404c.146 0 .376 0 .376.349c0 .116-.056.351-.376.351h-.405zm-14.47 2.01c-3.3 0-5.268 1.398-5.268 3.757c0 2.534 1.968 3.23 5.123 3.551c3.79.379 4.08.933 4.08 1.69c0 1.31-1.044 1.864-3.475 1.864c-3.068 0-3.733-.758-3.965-2.301c0-.175-.142-.29-.316-.29H61.05a.35.35 0 0 0-.346.349c0 1.98 1.041 4.31 6.107 4.31c3.645 0 5.758-1.458 5.758-4.02c0-2.505-1.68-3.174-5.238-3.64c-3.59-.466-3.965-.728-3.965-1.572c0-.699.318-1.63 2.98-1.63c2.373 0 3.269.525 3.617 2.126a.34.34 0 0 0 .319.26h1.533c.088 0 .175-.057.234-.115a.5.5 0 0 0 .085-.263c-.231-2.795-2.053-4.077-5.758-4.077z'/%3E%3Cpath fill='%23333' d='M86.072 24.664a.7.7 0 0 0-.352.089a.76.76 0 0 0-.375.638V44.32c0 .174-.09.35-.263.466a.55.55 0 0 1-.52 0l-3.066-1.775a1.49 1.49 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.753 1.279v14.24c0 .524.29 1.02.753 1.282l12.27 7.135a1.49 1.49 0 0 0 1.477 0l12.269-7.135c.463-.262.753-.758.753-1.282V30.168c0-.553-.29-1.05-.753-1.311l-7.32-4.104a.84.84 0 0 0-.373-.089zM13.687 42.43c-.231 0-.462.084-.664.2L.753 49.739A1.49 1.49 0 0 0 0 51.047l.03 19.102c0 .263.143.525.375.642a.66.66 0 0 0 .724 0l7.294-4.193c.463-.262.75-.758.75-1.282v-8.94c0-.524.29-1.02.754-1.282l3.096-1.805c.231-.146.493-.204.753-.204s.521.058.724.204l3.096 1.805c.463.262.753.758.753 1.282v8.94c0 .524.288 1.02.75 1.282l7.236 4.193a.7.7 0 0 0 .753 0a.72.72 0 0 0 .376-.642V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.8 1.8 0 0 0-.664-.201Zm100.667.21c-.253 0-.504.066-.736.198l-12.272 7.131c-.463.262-.75.758-.75 1.283v14.24c0 .524.287 1.02.75 1.282l12.184 6.987a1.43 1.43 0 0 0 1.447 0l7.38-4.133a.72.72 0 0 0 .375-.642a.72.72 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.641v-4.456a.72.72 0 0 1 .375-.64l3.85-2.214a.7.7 0 0 1 .753 0l3.846 2.213a.76.76 0 0 1 .378.641v3.495c0 .263.144.525.375.641a.7.7 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .724-1.283v-3.465c0-.524-.29-1.017-.724-1.28l-12.184-7.104a1.5 1.5 0 0 0-.738-.198zM80.757 53.274c.065 0 .131.015.19.045l4.194 2.446c.116.058.175.202.175.319v4.892c0 .146-.059.264-.175.322l-4.195 2.446a.43.43 0 0 1-.378 0l-4.195-2.446c-.116-.058-.175-.205-.175-.322v-4.892c0-.146.06-.261.175-.32l4.195-2.445a.4.4 0 0 1 .19-.045z'/%3E%3Cpath fill='url(%23deviconNodejsWordmark0)' d='M47.982 42.893a1.48 1.48 0 0 0-1.476 0L34.322 49.97a1.46 1.46 0 0 0-.724 1.281v14.181c0 .525.29 1.02.724 1.282l12.184 7.076a1.48 1.48 0 0 0 1.476 0l12.183-7.076c.463-.262.724-.757.724-1.282V51.251c0-.524-.29-1.02-.724-1.281z'/%3E%3Cpath fill='url(%23deviconNodejsWordmark1)' d='m60.194 49.97l-12.241-7.077a2 2 0 0 0-.376-.145L33.859 66.364c.116.146.26.262.405.35l12.242 7.076c.347.204.752.262 1.128.145l12.879-23.703a.9.9 0 0 0-.319-.262'/%3E%3Cpath fill='url(%23deviconNodejsWordmark2)' d='M60.194 66.713c.348-.204.608-.553.724-.932l-13.4-23.063c-.346-.058-.723-.029-1.041.175L34.322 49.94l13.11 24.053c.173-.029.376-.087.55-.175z'/%3E%3Cdefs%3E%3ClinearGradient id='deviconNodejsWordmark0' x1='34.513' x2='27.157' y1='15.535' y2='30.448' gradientTransform='translate(0 24.664)scale(1.51263)' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%233f873f'/%3E%3Cstop offset='.33' stop-color='%233f8b3d'/%3E%3Cstop offset='.637' stop-color='%233e9638'/%3E%3Cstop offset='.934' stop-color='%233da92e'/%3E%3Cstop offset='1' stop-color='%233dae2b'/%3E%3C/linearGradient%3E%3ClinearGradient id='deviconNodejsWordmark1' x1='30.009' x2='50.533' y1='23.359' y2='8.288' gradientTransform='translate(0 24.664)scale(1.51263)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.138' stop-color='%233f873f'/%3E%3Cstop offset='.402' stop-color='%2352a044'/%3E%3Cstop offset='.713' stop-color='%2364b749'/%3E%3Cstop offset='.908' stop-color='%236abf4b'/%3E%3C/linearGradient%3E%3ClinearGradient id='deviconNodejsWordmark2' x1='21.917' x2='40.555' y1='22.261' y2='22.261' gradientTransform='translate(0 24.664)scale(1.51263)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.092' stop-color='%236abf4b'/%3E%3Cstop offset='.287' stop-color='%2364b749'/%3E%3Cstop offset='.598' stop-color='%2352a044'/%3E%3Cstop offset='.862' stop-color='%233f873f'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" },
    { name: 'TypeScript', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 128 128'%3E%3Cpath fill='%23000' d='M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1A23 23 0 0 1 80 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73l4.6-2.64l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49 49 0 0 1 .14-5.16c.06-.08 10-.12 22-.1h21.81z'/%3E%3C/svg%3E" },
    { name: 'npm', img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 128 128'%3E%3Cpath fill='%23cb3837' d='M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z'/%3E%3C/svg%3E" },
    { name: 'PHP', img: 'https://placehold.co/100x100' },
    { name: 'MySQL', img: 'https://placehold.co/100x100' },
    { name: 'React', img: 'https://placehold.co/100x100' },
    { name: 'Python', img: 'https://placehold.co/100x100' },
    { name: 'JavaScript', img: 'https://placehold.co/100x100' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${(currentIndex + 1) * (100 / (skills.length + 1))}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="bg-black-glass text-white p-6 rounded-lg max-w-lg mx-auto main">
      <h2 className="text-center text-xl mb-4">Development Skills</h2>
      <div className="relative overflow-hidden">
        <div
          id="slider"
          ref={sliderRef}
          className="flex transition-transform duration-300"
          style={{ width: `${(skills.length + 1) * 100}%` }}
        >
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.img}
              alt={skill.name}
              className="w-24 h-24 mx-2 rounded-full"
              style={{ transform: `translateX(${index * (100 / (skills.length + 1))}%)` }}
            />
          ))}
          {/* Display the first skill at the end for looping effect */}
          <img
            key={skills.length}
            src={skills[0].img}
            alt={skills[0].name}
            className="w-24 h-24 mx-2 rounded-full"
            style={{ transform: `translateX(${skills.length * (100 / (skills.length + 1))}%)` }}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div
          id="slider-indicator"
          className="w-20 bg-gray-white-glass h-0.2 "
          style={{ transform: `translateX(${currentIndex * (100 / skills.length)}%)` }}
        ></div>
      </div>
    </div>
  );
}