document.getElementById('kundaliForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const name1 = formData.get('name1');
    const name2 = formData.get('name2');
  
    // Generate a random compatibility score
    const gunaScore = Math.floor(Math.random() * 37); // Max score is 36 in real Guna Milan
  
    let message = '';
    if (gunaScore >= 30) {
      message = 'Excellent Match! High compatibility.';
    } else if (gunaScore >= 24) {
      message = 'Good Match. Promising relationship.';
    } else if (gunaScore >= 18) {
      message = 'Average Match. Needs understanding.';
    } else {
      message = 'Low compatibility. Consider astrological remedies.';
    }
  
    document.getElementById('result').innerHTML = `
      <h3>Match Result for ${name1} & ${name2}</h3>
      <p><strong>Guna Milan Score:</strong> ${gunaScore} / 36</p>
      <p>${message}</p>
    `;
  })