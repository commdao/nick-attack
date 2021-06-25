   // Get the things from the HTML / REF content
   var attackButton = document.querySelector(".attack-button");
   var magicButton = document.querySelector(".magic-attack-button");

   var damageField = document.querySelector(".js_attack_damage");
   var magicField = document.querySelector(".js_magic_damage")
   // Create Event Listeners to "listen" for the action
   attackButton.addEventListener("click", attack)

   // the item after "click", is it going to be the problem of it's re-used?
   magicButton.addEventListener("click", magicAttack)
   
   // Remember how to do a function first
   // function nickJoke() {
   //    console.log('Farts')
   //}

   // Set the function to a Random number instead of Nick's joke
   // function get RandoNumber() {
   //  console.log(Math.random() * 5)  
   //}

   // Note: Nick solved the rounding numbers thing, so use his instead of .toFixed(0)
   // console.log(Math.floor(Math.random() * 5)
   
   // Still don't fully understand RETURN, but it seems to make a better function than just "printing" via console.log
   function getRandoNumber() {
       // Nick said to make this simpler (removed the 420 joke), now build towards Crit Hit implementation
       // Simplifying a Borderlands 3 crit damage vid: (base damage) * (percentage chance + multiplier)
       // Example: 1000 * (100% * 20%), weird how guaranteed crits are in that game
       // Oh, actually maybe we should keep this section the same and address the bonus in the attacks below
       return Math.floor(Math.random() * 10);
   }

   // Now's the function to change text -- EMBARASSEDLAUGH because you tried so hard to combine functions
   // function attack() {
   //    damageField.innerText = '4'
   //}

   // Instead of designating a specific number, utilize the Random Number
   function attack() {
   // Realize you can set a new variable right in the middle of the function, as long as it's defined "soon"
   // So do I just add the percentage chance and bonus multiplier, TRYING to say a 50% chance to do 20% extra
   // var recentAttack = getRandoNumber() * (50% + 20%); DID NOT WORK
   // I don't think this math makes sense, but can I just simplify that to 70% then? (50 + 20) - NOPE
   // Oh is it because of something with the percentages? Do I just use the decimals then?
       var recentAttack = getRandoNumber() * (.5 + .2);
       damageField.innerText = recentAttack
   } 
   // Now we make the magic attack its own thing, but uh, still the same maths for now
   function magicAttack() {
    // the math is probably wrong, let's switch the percentages from above, lower chance but higher bonus
    // is that the right way of thinking? I mean ... it's .7 in the end in both cases
       var recentMagicAttack = getRandoNumber() * (.2 + .5);
       magicField.innerText = recentMagicAttack
   }