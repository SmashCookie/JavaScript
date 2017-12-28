function rollDice(dice) {
  let amount = parseInt(document.getElementById("d" + dice + "Amount").value);
  let modifier = parseInt(document.getElementById("d" + dice + "mod").value);
  let output = document.getElementById("d" + dice + "result");
  let minus = document.getElementById('d' + dice + "-");
  if (minus.checked === true) {
    modifier = "-" + modifier;
  }
  let rollNumber = Dice.roll(dice, modifier, amount);
  output.value = rollNumber;
}
