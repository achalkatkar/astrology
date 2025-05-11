const vastuTools = {
    pyramid: {
      name: "Pyramid",
      use: "Balances energies and enhances positivity in the space.",
      location: "Center of the home or important rooms.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Small_pyramid.jpg/640px-Small_pyramid.jpg"
    },
    yantra: {
      name: "Shree Yantra",
      use: "Attracts wealth, peace, and spiritual power.",
      location: "North-East direction of home or prayer room.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sri_Yantra_design.jpg"
    },
    windchime: {
      name: "Wind Chime",
      use: "Disperses stagnant energy with sound vibration.",
      location: "Entrance or balcony (metal chimes in West).",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Wind_chime.jpg"
    },
    mirror: {
      name: "Mirror",
      use: "Expands space and reflects positive energy when placed properly.",
      location: "North or East walls. Avoid facing bed or main door.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Wall_mirror.jpg"
    },
    rocksalt: {
      name: "Rock Salt",
      use: "Absorbs negativity and purifies indoor energy.",
      location: "Corners of rooms or under the bed in a bowl.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Himalayan_rock_salt_lamps.jpg"
    }
  };
  
  function createToolCards() {
    const grid = document.getElementById("toolGrid");
    grid.innerHTML = "";
  
    Object.entries(vastuTools).forEach(([key, tool]) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${tool.image}" alt="${tool.name}">
        <h3>${tool.name}</h3>
        <p>${tool.use}</p>
        <div class="extra-info" id="info-${key}">
          <p><strong>Ideal Location:</strong> ${tool.location}</p>
        </div>
        <button onclick="toggleInfo('${key}')">More Info</button>
      `;
      grid.appendChild(card);
    });
  }
  
  function toggleInfo(id) {
    const info = document.getElementById("info-" + id);
    info.classList.toggle("visible");
  }
  
  function filterTools() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(input) ? "block" : "none";
    });
  }
  
  createToolCards();