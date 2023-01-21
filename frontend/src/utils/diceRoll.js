export const rollDice = (dice) => Math.floor(Math.random() * (parseInt(dice))) + 1;

const mapInfo = {
  count: {
    regex: /\d{1,}d/g,
    func: (str, regex) => str.match(regex)[0]?.slice(0, -1),
    dflt: 1,
  },
  dice: {
    regex: /d\d{1,}/g,
    func: (str, regex) => str.match(regex)[0].slice(1),
    dflt: 20,
  },
  modifier: {
    regex: /\+\d{1,}/g,
    func: (str, regex) => str?.match(regex)[0],
    dflt: 0,
  }
}

const getThrowInfo = (str) => {
  const params = ['count', 'dice', 'modifier']
  return params.map((param) => {
    const {regex, func, dflt} = mapInfo[param];
    try {
      const result = parseInt(func(str, regex));
      return !isNaN(result) ? result : dflt;
    } catch (e) {
      return dflt
    }
  })
}

const getType = (count, dice, modifier, result) => {
  const max = count * dice + modifier;
  const min = count * 1 + modifier;
  if (result > min && result < max) {
    return 'common';
  }
  if (result === max) {
    return 'critical';
  }
  return 'fail';
}

export const throwDice = (str) => {
  const [count, dice, modifier] = getThrowInfo(str);

  console.log(str);
  console.log(count, dice, modifier);

  let result = 0;

  for (let i = 0; i < count; i += 1) {
    const temp = rollDice(dice);
    result += temp;
  }
  result += modifier;
  const modifierStr = modifier < 0 ? `${modifier}` : `+${modifier}`
  const throwDice = `${result} (${count}d${dice}${modifierStr})`;

  return {
    type: getType(count, dice, modifier, result),
    throwDice: throwDice,
  };
}
