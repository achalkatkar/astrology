// Function to display planet information
function displayPlanetInfo(planet) {
    const info = {
      Sun: {
        sign: 'Taurus',
        house: '3rd',
        degree: '12°'
      },
      Moon: {
        sign: 'Leo',
        house: '6th',
        degree: '25°'
      },
      Mercury: {
        sign: 'Aries',
        house: '2nd',
        degree: '5°'
      },
      // Add more planets here
    };
  
    const planetData = info[planet];
    
    if (planetData) {
      document.getElementById('planet-name').innerHTML = Planet: <strong>${planet}</strong>;
      document.getElementById('planet-sign').innerHTML = Sign: <strong>${planetData.sign}</strong>;
      document.getElementById('planet-house').innerHTML = House: <strong>${planetData.house}</strong>;
      document.getElementById('planet-degree').innerHTML = Degree: <strong>${planetData.degree}</strong>;
    }
  }
  
  // Add event listeners to each planet
  const planets = document.querySelectorAll('.planet');
  planets.forEach(planet => {
    planet.addEventListener('click', () => {
      const planetName = planet.getAttribute('data-planet');
      displayPlanetInfo(planetName);
    });
  });