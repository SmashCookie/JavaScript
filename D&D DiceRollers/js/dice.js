let Dice = {
  number: 0,
  roll: function(die, mod, amountOfRolls) {
    // resets the number value every time the function is called
    this.number = 0;
    /* if the mod is 0, set the mod to 1 to get the correct number using the Math.floor function.
       Math.random always returns a float number. here we use Math.floor to get the nearest number rounding down.
       Therefor if the mod is set to 0, the number can be 0, which is not a valid dice throw.
       A mod of 0 would return 0-5, but if we check for this, and change the mod to 1 we get a throw of 1-6. */
    if (mod === 0) {
      mod = 1;
    }
    for (var i = 0; i < amountOfRolls; i++) {
      this.number += Math.floor(Math.random() * die) + parseInt(mod);
    }
    console.log(this.number);
    return this.number;
  }
}
