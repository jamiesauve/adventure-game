import { roll } from "../utils/dice-roller";

export const BattleManager = () => {

  console.log('starting Battle Manager')

  const lynx = {
    name: "Lynx",
    attackDamage: {
      base: "1d4+4",
      current: "1d4+4",
      currentModifiers: []
    },
    attackChanceToHit: {
      base: "1d6+8",
      current: "1d6+8",
      currentModifiers: []
    },
    defenseChanceToBlock: {
      base: "1d4+4",
      current: "1d4+4",
      currentModifiers: []
    },
    defenseDamageToBlock: {
      base: "1d6+4",
      current: "1d4+4",
      currentModifiers: []
    },
    health: {
      base: 34,
      current: 132,
      currentModifiers: []
    },
    speed: {
      base: "1d10+25",
      current: "1d10+25",
      currentModifiers: []
    },
  };

  const dustling = {
    name: "The Dustling",
    attackDamage: {
      base: "1d4+4",
      current: "1d4+4",
      currentModifiers: []
    },
    attackChanceToHit: {
      base: "1d6+8",
      current: "1d6+8",
      currentModifiers: []
    },
    defenseChanceToBlock: {
      base: "1d6+4",
      current: "1d6+4",
      currentModifiers: []
    },
    defenseDamageToBlock: {
      base: "1d6+2",
      current: "1d6+2",
      currentModifiers: []
    },
    health: {
      base: 24,
      current: 119,
      currentModifiers: []
    },
    speed: {
      base: "1d10+25",
      current: "1d10+25",
      currentModifiers: []
    },
  };

  const attackTarget = (attacker: Record<string, any>, target: Record<string, any>) => { 
    const attackerChanceToHitScore = roll(attacker.attackChanceToHit.current).total ?? 0;
    const targetChanceToBlockScore = roll(target.defenseChanceToBlock.current).total ?? 0;

    console.log(`${attacker.name} attacks! Attacker's hit roll: ${attackerChanceToHitScore} | Target's block roll: ${targetChanceToBlockScore}`);

    if (attackerChanceToHitScore >= targetChanceToBlockScore) {
      const attackerAttackDamage =  roll(attacker.attackDamage.current).total ?? 0;
      
      let targetDamageBlocked = 0;

      if ((attackerChanceToHitScore - 5) >= targetChanceToBlockScore) {
        target.health.current -= attackerAttackDamage;
      } else {
        targetDamageBlocked = roll(target.defenseDamageToBlock.current).total ?? 0;

        if (attackerAttackDamage > targetDamageBlocked) {
          target.health.current -= (attackerAttackDamage - targetDamageBlocked);
        }
      }


      console.log(`${attacker.name} deals ${attackerAttackDamage} and ${target.name} blocks ${targetDamageBlocked}. This leaves ${target.name} at ${target.health.current} health.`)

      if (target.health.current <= 0) {
        target.health.current = 0;
      }
    } else {
      console.log('Attack misses');
    }
  }

  const setup = () => { 
    let turnIndex = 0;

    const lynxSpeed = 100 - (roll(lynx.speed.current).total ?? 0)
    const dustlingSpeed = 100 - (roll(dustling.speed.current).total ?? 0)
    console.log('speeds: lynx - ', lynxSpeed, ', dustling - ', dustlingSpeed);    

    let isLynxDead = false;
    let isDustlingDead = false;

    while ((!isLynxDead && !isDustlingDead)) {
      if (Number.isInteger(turnIndex / lynxSpeed)) {
        console.log('Lynx Attack')
        attackTarget(lynx, dustling)  
      }

      if (dustling.health.current === 0) {
        isDustlingDead = true;
      }

      if (lynx.health.current === 0) {
        isLynxDead = true;
      }

      if (Number.isInteger(turnIndex / dustlingSpeed)) {
        console.log('Dustling Attack')
        attackTarget(dustling, lynx)  
      }
        
      if (dustling.health.current === 0) {
        isDustlingDead = true;
      }

      if (lynx.health.current === 0) {
        isLynxDead = true;
      }

      turnIndex++;
    }

    console.log({ turnIndex })

    if (isLynxDead) {
      console.log('The Dustling wins!')
    } else if (isDustlingDead) {
      console.log('Lynx wins!')
    }
  }

  return <>
    <button onClick={setup}>Set up</button>
  </>
}