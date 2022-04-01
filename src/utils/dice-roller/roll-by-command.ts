import { regexRollPatterns } from './regex-roll-patterns';
import { rollUsingAdvantage } from './basic-rolls';

export const rollByCommand = ( 
  rollCommand: string,
  advOrDis?: ("adv" | "dis"),
) => {
  let command = rollCommand;

  try {
    let numberOfDice = 0;
    let numberOfSides = 0;
    let bonus = 0;

    // parse core roll
    if (regexRollPatterns.dN.test(command)) {
      numberOfDice = 1;
      numberOfSides = parseInt(command.substring(1, command.length))
    } 
    else if (regexRollPatterns.NdN.test(command)) {
      numberOfDice = parseInt(command.substring(0, command.indexOf('d')));
      numberOfSides = parseInt(command.substring(command.indexOf('d') + 1, command.length));
    } 
    else if (regexRollPatterns.dNplusN.test(command)) {
      numberOfDice = 1;
      numberOfSides = parseInt(command.substring(1, command.indexOf('+')))
      bonus = parseInt(command.substring(command.indexOf('+') + 1, command.length));
    }  else if (regexRollPatterns.NdNplusN.test(command)) {
      numberOfDice = parseInt(command.substring(0, command.indexOf('d')));
      numberOfSides = parseInt(command.substring(command.indexOf('d') + 1, command.indexOf('+')))
      bonus = parseInt(command.substring(command.indexOf('+') + 1, command.length));
    } 
    else if (regexRollPatterns.dNminusN.test(command)) {
      numberOfDice = 1;
      numberOfSides = parseInt(command.substring(1, command.indexOf('-')))
      bonus = 0 - parseInt(command.substring(command.indexOf('-') + 1, command.length));
    } 
    else if (regexRollPatterns.NdNminusN.test(command)) {
      numberOfDice = parseInt(command.substring(0, command.indexOf('d')));
      numberOfSides = parseInt(command.substring(command.indexOf('d') + 1, command.indexOf('-')))
      bonus = 0 - parseInt(command.substring(command.indexOf('-') + 1, command.length));
    } else {
      return {
        errorMessage: `Unrecognized command: ${command}. Type '::help' for instructions about using 'roll'.`
      }
    }

    let individualResults = []

    // make actual rolls
    for (let i = 0; i < numberOfDice; i++) {
      const [ result ] = rollUsingAdvantage(numberOfSides, advOrDis);
      individualResults.push(result)
    }

    const total = individualResults.reduce((aggr, resultSet) => {
      return aggr + resultSet.total;
    }, 0) + bonus;

    // const individualResultsLabel = getResultsLabel({
    //   individualResults,
    //   numberOfSides,
    // })

    return {
      actionLabel: `rolls ${command}`,
      bonus,
      individualResults,
      // individualResultsLabel,
      total,
    }
  } catch (err) {
    console.error(err)

    return {
      errorMessage: `Unrecognized command: ${command}`
    }
  }
}