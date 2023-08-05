export default function Menu() {
    var div = document.createElement('div');
    div.className = 'contact';  
    div.innerHTML = `
    <p>📞 <a href="tel:+1555555555">555 555 555</a></p>
    <p>🏠 445 E 3rd St, Long Beach, CA 90802</p><img src="../src/assets/images/contact/location-image.jpg"
        alt="Savory Fusion Bistro restaurant location">
    `;


    return div; // Return the div element
  }