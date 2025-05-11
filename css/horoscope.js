const zodiacData = [
    { name: "Aries", dates: "Mar 21 - Apr 19", icon: "♈", forecast: "You're full of energy today. Avoid rash decisions." },
    { name: "Taurus", dates: "Apr 20 - May 20", icon: "♉", forecast: "Stability is key today. Good for long-term plans." },
    { name: "Gemini", dates: "May 21 - Jun 20", icon: "♊", forecast: "Communication flows easily. Great day to connect." },
    { name: "Cancer", dates: "Jun 21 - Jul 22", icon: "♋", forecast: "Emotions are strong. Trust your heart." },
    { name: "Leo", dates: "Jul 23 - Aug 22", icon: "♌", forecast: "Be bold and show your leadership." },
    { name: "Virgo", dates: "Aug 23 - Sep 22", icon: "♍", forecast: "Analyze the details. Organize your thoughts." },
    { name: "Libra", dates: "Sep 23 - Oct 22", icon: "♎", forecast: "Seek harmony. Great time for diplomacy." },
    { name: "Scorpio", dates: "Oct 23 - Nov 21", icon: "♏", forecast: "Mystery surrounds you. Reveal truths wisely." },
    { name: "Sagittarius", dates: "Nov 22 - Dec 21", icon: "♐", forecast: "Explore new ideas. Open your mind." },
    { name: "Capricorn", dates: "Dec 22 - Jan 19", icon: "♑", forecast: "Focus and discipline bring success." },
    { name: "Aquarius", dates: "Jan 20 - Feb 18", icon: "♒", forecast: "Innovate and think differently." },
    { name: "Pisces", dates: "Feb 19 - Mar 20", icon: "♓", forecast: "Let your imagination guide you." },
  ];
  
  const container = document.getElementById("zodiacCards");
  
  zodiacData.forEach((zodiac) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="icon">${zodiac.icon}</div>
      <div class="name">${zodiac.name}</div>
      <div class="dates">${zodiac.dates}</div>
      <div class="card-info">${zodiac.forecast}</div>
    `;
  
    card.addEventListener("click", () => {
      document.querySelectorAll(".card").forEach(c => {
        if (c !== card) c.classList.remove("expanded");
      });
      card.classList.toggle("expanded");
    });
  
    container.appendChild(card);
  })