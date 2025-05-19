import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';
import coffee from '../assets/coffee25.png';
import icecoffee from '../assets/icecofee100.png';
import lattescoffee from '../assets/lattescofee200.png';
import sand from '../assets/sand400.png';
import beer from '../assets/beer300.png';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('25'); // Estado para la pestaña activa
  const [barPosition, setBarPosition] = useState({ left: 0, width: 0 }); // Estado para la posición y ancho de la barra verde
  const barRef = useRef(null); // Referencia para la barra verde

  // Datos para las pestañas
  const tabsData = [
    {
      id: '25',
      title: '25',
      subtitle: 'Customize your drink',
      description: 'Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.',
      img: coffee,
    },
    {
      id: '100',
      title: '100',
      subtitle: 'Brewed hot or iced coffee or tea, bakery item, packaged snack and more',
      description: 'Treat yourself to an iced coffee, buttery croissant, bag of chips and more.',
      img: icecoffee,
    },
    {
      id: '200',
      title: '200',
      subtitle: 'Handcrafted drink (Cold Brew, lattes and more) or hot breakfast',
      description: 'Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.',
      img: lattescoffee,
    },
    {
      id: '300',
      title: '300',
      subtitle: 'Sandwich, protein box or at-home coffee',
      description: 'Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®. ',
      img: sand,
    },
    {
      id: '400',
      title: '400',
      subtitle: 'Select Starbucks® merchandise',
      description: 'Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.',
      img: beer,
    },
  ];

  // Este hook maneja el movimiento de la barra verde cuando se cambia de pestaña
  useEffect(() => {
    const activeButton = document.querySelector('.tablinks.active');
    if (activeButton && barRef.current) {
      const width = activeButton.offsetWidth; // Ancho del botón activo
      const left = activeButton.offsetLeft; // Posición del botón activo
      console.log(`width: ${width}, left: ${left}`); // Verificar valores calculados
      setBarPosition({ width, left }); // Actualiza la posición y el ancho de la barra verde
    }
  }, [activeTab]); // El efecto se ejecuta cuando cambia la pestaña activa

  return (
    <div className='topTabs'>
      <div className="top-text-tab">
        <h2>Get your favorites for free</h2>
      </div>

      <div className="tab">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tablinks ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
            <span>★</span>
          </button>
        ))}

        {/* Barra verde única que se mueve */}
        <div
          ref={barRef}
          className="active-bar"
          style={{
            position: 'absolute',
            bottom: '0px',
            left: `${barPosition.left}px`,  // Cambia la posición horizontal
            width: `${barPosition.width}px`, // Cambia el ancho
            height: '4px',
            backgroundColor: '#008248',
            transition: 'left 0.3s ease, width 0.3s ease', // Animación suave de la barra verde
          }}
        />
      </div>

      <div className="tab-content-wrapper">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            className={`tabcontent ${activeTab === tab.id ? 'active' : ''}`}
          >
            <div className="tab-content">
              <img className="imgtab" src={tab.img} alt={tab.title} />
              <div className="text-content">
                <h3>{tab.subtitle}</h3>
                <p>{tab.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
