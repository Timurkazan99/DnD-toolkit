
const diceRoll = (str) => {
  const regExp = /\d{1,}/g;
  const [count, dice, modifierValue] = str.match(regExp);
  const sign = str.match(/[-, +]/);
  const modifier = parseInt(`${sign}${modifierValue}`);
  let result = 0;

  for (let i = 0; i < count; i += 1) {
    const temp = Math.floor(Math.random() * (parseInt(dice) + 1)) + 1;
    result += temp;
  }
  result += modifier;

  console.log(result);

  return result;
}
