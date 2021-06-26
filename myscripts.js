   // Get the things from the HTML / REF content
   var attackButton = document.querySelector(".attack-button");
   var magicButton = document.querySelector(".magic-attack-button");

   var damageField = document.querySelector(".js_attack_damage");
   var magicField = document.querySelector(".js_magic_damage")

   // We want to identify the starting enemy HP
   var enemyHealth = document.querySelector(".enemy-health");
   // Do we need an Event Listener for the Enemy Health?


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
       return Math.floor(Math.random() * 10);
   }

   // Now's the function to change text -- EMBARASSEDLAUGH because you tried so hard to combine functions
   // function attack() {
   //    damageField.innerText = '4'
   //}

   // can I just put the critical choices variable right here? or is up top best practices?
   var crticalChoice = new Set([5, 7, 9])

   // Instead of designating a specific number, utilize the Random Number
   // function attack() {
   // Realize you can set a new variable right in the middle of the function, as long as it's defined "soon"
      // var recentAttack = getRandoNumber();
      // if (crticalChoice.has(recentAttack)){
      //     recentAttack += 5
      // }
      // if (recentAttack == 0){
      //     console.log('miss')
      // }
      // damageField.innerText = recentAttack
   // } 

   // OH GAH NICK ADDED ANOTHER VERSION, BUT I'M STILL LEARNING THE VERSION ABOVE
   var recentAttacks = []
   
   function attack(){
       var recentAttack = getRandoNumber();
       recentAttack = multiplier(recentAttack)
       damageField.innerText = recentAttack
       // Nick is on a roll, so let's just replicate for now
       recentAttacks.push(recentAttack)
       console.log(recentAttacks)
       // now we can store all of the players attacks, he says
   }
   // NICK SAYS: calls a f that gets a RandoNum and assigns it to the recentAttack variable
   // Then, re-assigns that variable to the RESULT of the f Multiplier
   // THEN, sets the damage field inner text to the damage dealt
   function multiplier(recentAttack){
       if (recentAttack == 5){
           recentAttack *= 4
       }
       return recentAttack
   }

   // Now we make the magic attack its own thing, let's give it a higher bonus
   function magicAttack() {

       var recentMagicAttack = getRandoNumber();
            console.log(recentMagicAttack)
        // using multiple if statements for now, Nick introduced Sets concept for the first time
        // utilized Sets for the attack above, but want to keep Magic as is to study, at capacity for concepts today
        if (recentMagicAttack == 7){
            console.log('KABOOM!')
            recentMagicAttack += 21
        }
        if (recentMagicAttack == 8){
            console.log('KABOOM!!')
            recentMagicAttack += 25
        }
        if (recentMagicAttack == 9){
            console.log('KABOOM!!!')
            recentMagicAttack += 50
        }
        if (recentMagicAttack == 0){
            console.log('sad trombone noise')
        }
       magicField.innerText = recentMagicAttack
   }

   // How do we subtract the recentAttack / recentMagicAttack from the enemy HP? 
    //  function takeDamage() {
    //    var remainingHealth = enemyHealth - rececentAttack & recentMagicAttack
   // something.innerText = remainingHealth
   //}