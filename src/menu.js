export default function Menu() {
    var div = document.createElement('div');
    div.className = 'menu';  
    div.innerHTML = `
                    <div class="menu-item"><img src="../src/assets/images/menu/mediterranean-sushi-rolls.png" alt="Mediterranean Sushi Rolls">
                    <h2>Mediterranean Sushi Rolls</h2>
                    <p>Feta cheese, kalamata olives, cucumbers, nori; served with tzatziki sauce.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/tandoori-taco-twist.png" alt="Tandoori Taco Twist">
                        <h2>Tandoori Taco Twist</h2>
                        <p>Tandoori-spiced chicken, corn tortilla, mango salsa, cilantro-mint crema.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/bavarian-bahn-mi.png" alt="Pepe">
                        <h2>Bavarian Bahn Mi</h2>
                        <p>Bratwurst, sauerkraut, pickled daikon & carrots, spicy mustard, baguette.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/ramen-risotto-bowl.png" alt="Ramen Risotto Bowl">
                        <h2>Ramen Risotto Bowl</h2>
                        <p>Arborio rice, miso broth, seared scallops, pickled ginger, Parmesan.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/cajun-sashimi-salad.png" alt="Cajun Sashimi Salad">
                        <h2>Cajun Sashimi Salad</h2>
                        <p>Cajun-seasoned tuna sashimi, crisp lettuce, Creole-spiced vinaigrette.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/moroccan-bbq-sliders.png" alt="Moroccan BBQ Sliders">
                        <h2>Moroccan BBQ Sliders</h2>
                        <p>Pulled lamb, Moroccan spices, mini brioche buns, barbecue sauce, mint slaw.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/thai-paella-symphony.png" alt="Thai Paella Symphony">
                        <h2>Thai Paella Symphony</h2>
                        <p>Saffron-infused jasmine rice, lemongrass, mussels, shrimp, chorizo, cilantro.</p>
                    </div>
                    <div class="menu-item"><img src="../src/assets/images/menu/swiss-korean-fondue-pot.png" alt="Swiss-Korean Fondue Pot">
                        <h2>Swiss-Korean Fondue Pot</h2>
                        <p>Gruyère cheese, gochujang, bulgogi beef, kimchi, rye bread.</p>
                    </div>
                    `;


    return div; // Return the div element
  }