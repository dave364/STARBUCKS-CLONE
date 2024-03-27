import React, { useEffect } from 'react';
import './Tabs.css';
import coffee from '../assets/coffee25.png';
import icecoffee from '../assets/icecofee100.png';
import lattescoffee from '../assets/lattescofee200.png';
import sand from '../assets/sand400.png';
import beer from '../assets/beer300.png';
import { useLocation } from 'react-router-dom';

const Tabs = () => {
  useEffect(() => {
    // Hacer clic automáticamente en el elemento con el ID "defaultOpen" después de que el componente se monte
    document.getElementById("defaultOpen").click();
  }, []); // Utiliza un arreglo vacío como segundo argumento para que se ejecute solo una vez

  const openCity = (evt, cityName) => {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
  };

  const location = useLocation();
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div>
    <div className="top-text-tab">
    <h2>Get your favorites for free</h2>
  </div>
    <div>
      <div className="tab">
      <button className={`tablinks ${isActive('25') ? 'active' : ''}`} onClick={(e) => openCity(e, '25')} id="defaultOpen">25<span>★</span></button>
      <button className={`tablinks ${isActive('100') ? 'active' : ''}`} onClick={(e) => openCity(e, '100')}>100<span >★</span></button>
      <button className={`tablinks ${isActive('200') ? 'active' : ''}`} onClick={(e) => openCity(e, '200')}>200<span >★</span></button>
      <button className={`tablinks ${isActive('300') ? 'active' : ''}`} onClick={(e) => openCity(e, '300')}>300<span >★</span></button>
      <button className={`tablinks ${isActive('400') ? 'active' : ''}`} onClick={(e) => openCity(e, '400')}>400<span >★</span></button>

      </div>

      <div id="25" className="tabcontent">
        <img className='img' src={coffee} alt="25" />
        <h3>Customize your drink</h3>
        <p>Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup..</p>
        <span className="close" onClick={() => (document.getElementById("25").style.display = "none")}></span>
      </div>

      <div id="100" className="tabcontent">
        <img className='img' src={icecoffee} alt="100" />
        <h3>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h3>
        <p>Treat yourself to an iced coffee, buttery croissant, bag of chips and more..</p>
        <span className="close" onClick={() => (document.getElementById("100").style.display = "none")}></span>
      </div>

      <div id="200" className="tabcontent">
        <img className='img' src={lattescoffee} alt="200" />
        <h3>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h3>
        <p>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
        <span className="close" onClick={() => (document.getElementById("200").style.display = "none")}></span>
      </div>

      <div id="300" className="tabcontent">
        <img className='img' src={sand} alt="300" />
        <h3>Sandwich, protein box or at-home coffee</h3>
        <p>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</p>
        <span className="close" onClick={() => (document.getElementById("300").style.display = "none")}></span>
      </div>

      <div id="400" className="tabcontent">
        <img className='img' src={beer} alt="400" />
        <h3>Select Starbucks® merchandise</h3>
        <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
        <span className="close" onClick={() => (document.getElementById("400").style.display = "none")}>x</span>
      </div>
    </div>
    </div>
  );
};

export default Tabs;

