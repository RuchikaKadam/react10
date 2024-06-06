import React from 'react';

export default function First() {
  return (
    <div className="max-w-lg min-w-[80dvw] mx-auto bg-black-glass rounded-lg p-6 shadow-lg text-white main">
      <div className="flex items-center  mb-4">
        <img className="w-16 h-16 rounded-full mr-4" src="https://placehold.co/100x100" alt="Profile Picture" />
        <div>
          <h2 className="text-xl font-bold">Ruchika Kadam</h2>
          <p className="bg-teal-600 rounded-full px-4 py-1 inline-block mt-2 shadow-sm shadow-white">Full-stack Web Developer</p>
        </div>
      </div>
      <hr className="border-teal-500 my-4" />
      <div className='flex justify-evenly'>
      <ProfileDetail icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 128 128'%3E%3Cpath fill='%238b5738' d='M23.36 116.32v-7.42c7.4-1.9 67.86 0 81.28 0v7.42c0 4.24-18.2 7.68-40.64 7.68s-40.64-3.44-40.64-7.68'/%3E%3Cellipse cx='64' cy='108.48' fill='%23ffb17a' rx='40.64' ry='7.68'/%3E%3Cellipse cx='64' cy='108.48' fill='%23cc8552' rx='40.64' ry='7.68'/%3E%3Cpath fill='%2381d4fa' d='M69.96 65.49c-.75-.31-1.07-.92-1.07-1.73c0-.81.25-1.39.98-1.64c4.61-1.86 27.77-10.73 27.77-38.36l-.18-4.82l-66.98-.08l-.12 5.07c0 26.79 23.08 36.25 27.68 38.11c.75.31 1.22.82 1.22 1.73s-.39 1.39-1.13 1.64c-4.61 1.86-27.77 10.73-27.77 38.36a6.95 6.95 0 0 0 5.34 6.5c5.04 1.19 14.38 2.57 30.53 2.57c13.91 0 21.7-1.01 26.03-2.03c3.08-.73 5.29-3.44 5.36-6.6l.01-.61c.01-26.79-23.06-36.25-27.67-38.11' opacity='0.75'/%3E%3Cpath fill='%231d44b3' d='m97.46 18.94l-66.98-.08l-.11 4.52S37.62 27.1 64 27.1s33.63-3.72 33.63-3.72z' opacity='0.39'/%3E%3Cpath fill='%238b5738' d='M23.36 17.94v-7.87c7.18-.96 70.91 0 81.28 0v7.87c0 3.36-18.2 6.08-40.64 6.08s-40.64-2.72-40.64-6.08'/%3E%3Cellipse cx='64' cy='10.08' fill='%23cc8552' rx='40.64' ry='6.08'/%3E%3Cpath fill='%23ffca28' d='M90.59 108.57c.92-.27 1.42-1.31.97-2.16c-3.14-5.94-16.54-6.11-21.61-17.27c-3.38-7.45-3.57-17.81-3.67-22.24c-.14-5.99 2.85-7.28 2.85-7.28c14.16-5.7 24.57-18.86 25.17-30.61c.06-1.17-22.18 9.17-29.83 10.66c-14.14 2.76-28.23-.87-28.31-.37c5.24 11.47 15.79 17.46 22.86 20.32c1.68.69 4.46 3.3 4.37 11.14c-.07 5.61-.77 20.4-10.44 26.69c-3.64 2.37-11.69 5.84-13.19 9.61c-.33.83.14 1.77 1.01 1.99c2.76.7 11.18 1.93 24.27 1.93c10.29.01 20.45-.93 25.55-2.41'/%3E%3Cpath fill='%23e2a610' d='M42.37 43.29c5.36 2.77 17.12 6.72 22.92 4.72s28.23-16.01 29-19c.96-3.7-26 5.71-35.49 7.91c-6.43 1.49-18.71.72-21.47 1.3c-2.75.57.11 2.52 5.04 5.07'/%3E%3Cpath fill='%23fff' d='M45.79 37.66c1.26 2.94 3.56 9.61.56 10.75c-3 1.15-7.39-3.11-9.47-7.39s-1.89-9.96 1.25-10.05c3.14-.09 5.99 2.8 7.66 6.69M42.9 80.6c-3.13 3.66-5.48 8.58-4.59 13.33c.94 5.01 5.6 3.63 7.22 2.36c5.16-4.05 3.75-9.24 7.74-15.07c.68-1 3.52-4.13 3.12-6.1c-.24-1.17-2.96-1.77-7.91.71c-2.18 1.1-3.97 2.9-5.58 4.77' opacity='0.6'/%3E%3C/svg%3E" label="AGE" value="23 years old" />
      <ProfileDetail icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%23ece055' d='M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19'/%3E%3C/svg%3E" label="LOCATION" value="Pune, Maharashtra" />
      <ProfileDetail icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%23ece055' d='M5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v3a.75.75 0 0 1-1.5 0v-3A3.25 3.25 0 0 1 5.25 2h3a.75.75 0 0 1 0 1.5zm0 17a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0zM18.75 20.5a1.75 1.75 0 0 0 1.75-1.75v-3a.75.75 0 0 1 1.5 0v3A3.25 3.25 0 0 1 18.75 22h-3a.75.75 0 0 1 0-1.5zm-10.5-1A1.75 1.75 0 0 1 9.982 21h4.036a1.75 1.75 0 0 1 1.732-1.5h3q.06 0 .118-.01c.085-.273.132-.564.132-.874v-.366A2.25 2.25 0 0 0 16.75 16h-9.5A2.25 2.25 0 0 0 5 18.25v.366c0 .31.043.6.121.873a1 1 0 0 0 .129.011zM12 14a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5'/%3E%3C/svg%3E" label="PERSONALITY TYPE" value="INFJ-C" />
      </div>
      <hr className="border-teal-500 my-4" />
      <div className="flex justify-center space-x-4">
        <SocialLink icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.368 2.368 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247'/%3E%3C/svg%3E" href="#" />
        <SocialLink icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 256 256'%3E%3Cg fill='none'%3E%3Crect width='256' height='256' fill='%23fff' rx='60'/%3E%3Crect width='256' height='256' fill='%230a66c2' rx='60'/%3E%3Cpath fill='%23fff' d='M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4'/%3E%3C/g%3E%3C/svg%3E" href="#" />
        <SocialLink icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23f89320' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 13h7.5M9.424 7.268l4.999-4.999m2.21 14.375l-2.402 2.415a3.19 3.19 0 0 1-4.524 0l-3.77-3.787a3.223 3.223 0 0 1 0-4.544l3.77-3.787a3.19 3.19 0 0 1 4.524 0l2.302 2.313'/%3E%3C/svg%3E" href="#" />
        <SocialLink icon="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M19.885 3.906a.62.62 0 0 0-.354.12c-.08.08-.161.196-.161.313c0 .2.236.474.673.923c1.822 1.754 2.738 3.903 2.732 6.494c-.007 2.867-.97 5.17-2.844 6.954c-.394.353-.556.63-.557.867c0 .116.08.237.16.353a.58.58 0 0 0 .353.162c.434 0 1.04-.512 1.833-1.509c1.542-1.89 2.24-3.978 2.279-6.824c.036-2.847-.857-4.777-2.603-6.77c-.63-.712-1.153-1.082-1.511-1.083m-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824c.791.997 1.398 1.51 1.832 1.509a.57.57 0 0 0 .352-.162c.08-.116.16-.237.16-.353c0-.237-.162-.514-.556-.866c-1.873-1.785-2.837-4.087-2.844-6.955c-.006-2.591.91-4.74 2.732-6.494c.437-.449.674-.722.673-.923c0-.117-.08-.233-.161-.313a.62.62 0 0 0-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386c-.281-.18-2.001-1.5.402-5.423c.466-.77 1.076-1.47 1.834-3.041c0 0 .67.946.32 2.998c-.523 3.101 2.271 2.214 2.314 2.257c.976 1.15-.808 3.17-.917 3.233c-.108.061 5.096-3.13 1.399-7.935c-.253.253-.582 1.442-1.267 1.266c-.684-.174 2.125-3.494-2.868-7.468M9.955 18.916q.036.024.038.024z'/%3E%3C/svg%3E" href="#" />
      </div>
    </div>
  );
}

function ProfileDetail({ icon, label, value }) {
  return (
    <div className="flex items-center mb-4">
      <div className="bg-teal-800 p-2 rounded-full mr-2">
        <img className="w-6 h-6" src={icon} alt={`${label} Icon`} />
      </div>
      <div>
        <p className="text-sm text-teal-300">{label}</p>
        <p className="text-lg">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }) {
  return (
    <a href={href} className="text-teal-300">
      <img className="w-6 h-6" src={icon} alt="Social Icon" />
    </a>
  );
}
