import React, { useState, useEffect } from 'react';
import './Rewards.css'; // Asegúrate de tener tu archivo CSS para el banner

const Banner = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica si el usuario ha desplazado 100px hacia abajo
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agrega un listener de scroll cuando se monta el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? 'banner fixed' : 'banner'}>
      {/* Contenido del banner */}
    </div>
  );
};

export default Banner;
