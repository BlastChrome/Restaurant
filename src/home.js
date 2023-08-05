import createAppend from "./createAppend";
export default function Home() {
    var div = document.createElement('div');
    div.className = 'home'; 
    div.appendChild(createAppend('p', 'Where Culinary Delights Await!')); 
    div.appendChild(createAppend('p', 'Discover a dining experience like no other at Savory Fusion Bistro'));
    div.appendChild(createAppend('img', '../src/assets/images/chef.png'));
    div.appendChild(createAppend('p', '<a href="#">Order online</a> or visit us!'));
    return div; // Return the div element
  } 

  
