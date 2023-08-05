import './css/style.css';
import home from "./home.js"; 
import menu from "./menu.js"; 
import contact from "./contact.js";

const main = document.getElementById("main"); 

const cacheDom  = () => {
    const homeBtn = document.getElementById("home");
    const menuBtn = document.getElementById("menu"); 
    const contactBtn = document.getElementById("contact");   
    const navButtons = [homeBtn,menuBtn,contactBtn]
    return {navButtons}
}
const switchPage = (e) => { 
    if(e.target.classList.contains("current")){
        return;
    } else{
        let clickedBtn = e.target;
        if(clickedBtn.classList.contains("home-btn")){
            showPage('home'); 
            assignCurrentPage('home');
        }else if(clickedBtn.classList.contains("menu-btn")){
            showPage('menu'); 
            assignCurrentPage('menu');
        } else {
            showPage('contact') 
            assignCurrentPage('contact');
        }
    }
    
}

const init = () =>{
    //initialize the homescreen 
    showPage('home');
    const {navButtons} = cacheDom();  
    navButtons.forEach((button) =>{
        button.addEventListener('click',switchPage);

    })

}

const bindEvents = () =>{
}

const showPage = (page) =>{ 
    // If main has child nodes, remove them all
    while(main.hasChildNodes()) {
        main.removeChild(main.firstChild);
    }

    // Append the new page content based on the argument
    if(page === 'home') main.appendChild(home()); 
    if(page === 'contact') main.appendChild(contact());  // Note: You had a mistake here, it should be contact() instead of menu()
    if(page === 'menu') main.appendChild(menu());
}




const hidePage = () => {   

    while (main.firstChild){
        main.removeChild(main.firstChild);
    }
}

const assignCurrentPage = (page) => {
    const {navButtons} = cacheDom(); 
    navButtons.forEach((button) => {
       if(button.id == page){
        button.classList.add("current")
       } else{
        button.classList.remove('current');
       }
    })
}
init()





