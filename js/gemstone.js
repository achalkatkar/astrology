const gemstoneMap = {
    aries: {
      gem: "Red Coral",
      meaning: "Boosts courage and vitality.",
      color: "Red",
      number: "9",
      image: "../images/red-corol.jpg"
    },
    taurus: {
      gem: "Emerald",
      meaning: "Enhances love and prosperity.",
      color: "Green",
      number: "6",
      image: "../images/emerald.jpg"
    },
    gemini: {
      gem: "Emerald",
      meaning: "Improves communication and intellect.",
      color: "Light Green",
      number: "5",
      image: "../images/emerald.jpg"
    },
    cancer: {
      gem: "Pearl",
      meaning: "Brings emotional balance and peace.",
      color: "White",
      number: "2",
      image: "../images/pearl.jpg"
    },
    leo: {
      gem: "Ruby",
      meaning: "Increases leadership and confidence.",
      color: "Orange-Red",
      number: "1",
      image: "../images/red-sapphire.jpg"
    },
    virgo: {
      gem: "Emerald",
      meaning: "Sharpens memory and decision making.",
      color: "Green",
      number: "5",
      image: "../images/emerald.jpg"
    },
    libra: {
      gem: "Diamond",
      meaning: "Balances relationships and luxury.",
      color: "White",
      number: "6",
      image: "../images/diamond.jpg"
    },
    scorpio: {
      gem: "Red Coral",
      meaning: "Gives strength and motivation.",
      color: "Red",
      number: "9",
      image: "../images/red-corol.jpg"
    },
    sagittarius: {
      gem: "Yellow Sapphire",
      meaning: "Supports success and wisdom.",
      color: "Yellow",
      number: "3",
      image: "../images/yellow-sapphire.jpg"
    },
    capricorn: {
      gem: "Blue Sapphire",
      meaning: "Aids in discipline and success.",
      color: "Dark Blue",
      number: "8",
      image: "../images/blue-sapphire.jpg"
    },
    aquarius: {
      gem: "Blue Sapphire",
      meaning: "Enhances focus and patience.",
      color: "Blue",
      number: "8",
      image: "../images/blue-sapphire.jpg"
    },
    pisces: {
      gem: "Yellow Sapphire",
      meaning: "Promotes spirituality and health.",
      color: "Yellow",
      number: "3",
      image: "../images/yellow-sapphire.jpg"
    }
  };
  
  function getZodiacSign(day, month) {
    const signs = [
      ["capricorn", 20], ["aquarius", 19], ["pisces", 20], ["aries", 20],
      ["taurus", 21], ["gemini", 21], ["cancer", 23], ["leo", 23],
      ["virgo", 23], ["libra", 23], ["scorpio", 22], ["sagittarius", 22],
      ["capricorn", 31]
    ];
    return (day < signs[month][1]) ? signs[month - 1][0] : signs[month][0];
  }
  
  function getZodiac() {
    const input = document.getElementById("birthDate").value;
    if (!input) return alert("Please select your birth date");
  
    const date = new Date(input);
    const day = date.getDate();
    const month = date.getMonth() + 1;
  
    const sign = getZodiacSign(day, month);
    const data = gemstoneMap[sign];
  
    document.getElementById("result").innerHTML = `
      <h2>Zodiac: ${sign.charAt(0).toUpperCase() + sign.slice(1)}</h2>
      <p><strong>Gemstone:</strong> ${data.gem}</p>
      <p><strong>Meaning:</strong> ${data.meaning}</p>
      <p><strong>Lucky Color:</strong> ${data.color}</p>
      <p><strong>Lucky Number:</strong> ${data.number}</p>
      <img src="${data.image}" alt="${data.gem}">
    `;
  }

  