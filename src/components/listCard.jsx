import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

function ListCard({ country }) {
  // Déclaration de l'état pour contrôler l'affichage du modal
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Carte de pays */}
      <li 
        onClick={() => setShowModal(true)} // Ouvrir le modal au clic sur la carte
        className='relative cursor-pointer rounded transition-transform duration-300 hover:-translate-y-1 will-change-transform'
      >
        {/* Nom du pays */}
        <h2 className='absolute left-0 top-0 p-2 bg-gray-50 drop-shadow-[2px_2px_1px_rgba(0, 0, 0, 0.5)] text-xl'>{country.name.common}</h2>
        {/* Drapeau du pays */}
        <img className='w-full h-full object-cover rounded' src={country.flags.svg} alt={country.name.common} />
      </li>

      {/* Affichage du modal si showModal est true */}
      {showModal && createPortal(
        <ModalContent country={country} closeModal={() => setShowModal(false)} />, // Passer les props au ModalContent
        document.body
      )}
    </>
  );
}

export default ListCard;
