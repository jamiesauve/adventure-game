export const rollD = (numberOfSides: number) => {
  return Math.floor(Math.random() * numberOfSides) + 1
};

export const rollWithFullResult =  (numberOfSides: number) => {
  const result = rollD(numberOfSides);

  return {
    total: result,
    allDiceResults: [ result ],
  }
}

export const rollWithAdvantage = (numberOfSides: number) => {
  const roll1 = rollD(numberOfSides);
  const roll2 = rollD(numberOfSides);

  let total;
  let allDiceResults = [
    roll1,
    roll2,
  ]

  if (roll1 > roll2) {
    total = roll1;
  } else {
    total = roll2;
  }

  return {
    total,
    allDiceResults,
  }
};

export const rollWithDisadvantage = (numberOfSides: number) => {
  const roll1 = rollD(numberOfSides);
  const roll2 = rollD(numberOfSides);

  let total;
  let allDiceResults = [
    roll1,
    roll2,
  ]

  if (roll1 < roll2) {
    total = roll1;
  } else {
    total = roll2;
  }

  return {
    total,
    allDiceResults,
  }
};

export const rollUsingAdvantage = (numberOfSides: number, advOrDis?: ("adv" | "dis")) => {
  const individualResults = [];

  if (advOrDis === "adv") {
    individualResults.push(rollWithAdvantage(numberOfSides))
  } else if (advOrDis === "dis") {
    individualResults.push(rollWithDisadvantage(numberOfSides))
  } else {
    individualResults.push(rollWithFullResult(numberOfSides))
  }

  return individualResults;
}

