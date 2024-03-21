import React from 'react';

function ModalContent({ country, closeModal }) {
  console.log(Object.entries(country.languages));
  return (
    // Fond modal, cliquable pour fermer
    <div 
      onClick={closeModal} // Gestion de l'événement onClick pour fermer le modal en cliquant à l'extérieur de celui-ci
      className='fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center'
    >
      {/* Contenu du modal */}
      <div 
        onCanPlay={e => e.stopPropagation()} // Empêche la propagation de l'événement lorsqu'un média commence à être lu
        className='min-w-[500px] relative rounded p-7 bg-gray-50'
      >
        {/* Bouton de fermeture du modal */}
        <button
          onClick={closeModal} // Gestion de l'événement onClick pour fermer le modal
          className='absolute top-2 right-1 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded'
        >
          X
        </button>
        {/* Titre du modal */}
        <h2 className='text-2xl mb-4'>Here is {country.name.common}'s information</h2>
        {/* Langues */}
        <p className='text-lg mb-2'> 
          <span className='font-semibold'>Languages(s)</span>: {Object.entries(country.languages).map(lang => lang[1] + "")}
        </p>
        {/* Capitale */}
        <p className='text-lg mb-2'> 
          <span className='font-semibold'>Capital</span>: {country.capital[0]}
        </p>
        {/* Population */}
        <p className='text-lg mb-2'> 
          <span className='font-semibold'>Population</span>: {country.population} inhabitants
        </p>
      </div>
    </div>
  );
}

export default ModalContent;
