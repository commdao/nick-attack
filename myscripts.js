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
       return Math.floor(Math.random() * 10);
   }

   // Now's the function to change text -- EMBARASSEDLAUGH because you tried so hard to combine functions
   // function attack() {
   //    damageField.innerText = '4'
   //}

   // can I just put the critical choices variable right here? or is up top best practices?
   var crticalChoice = new Set([5, 7, 9])

   // Instead of designating a specific number, utilize the Random Number
   function attack() {
   // Realize you can set a new variable right in the middle of the function, as long as it's defined "soon"
       var recentAttack = getRandoNumber();
       if (crticalChoice.has(recentAttack)){
           recentAttack += 5
       }
       if (recentAttack == 0){
           console.log('miss')
       }
       damageField.innerText = recentAttack
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