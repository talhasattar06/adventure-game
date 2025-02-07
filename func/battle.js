import inquirer from "inquirer";
import chalk from "chalk";
import { Enemy } from "../class/class.js";
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
export let ask;
export async function battle(player, enemies, enemyMaxHealth, weapons, theme) {
    let fight = true;
    while (fight) {
        let enemyHealth = randomNum(30, enemyMaxHealth);
        let enemy = enemies[randomNum(0, enemies.length)];
        console.log(chalk.hex('#D2042D')(`${enemy} has appeared 👾`));
        await new Promise(resolve => setTimeout(resolve, 1200));
        console.log();
        ENEMY: while (enemyHealth > 0) {
            await new Promise(resolve => setTimeout(resolve, 300));
            console.log(chalk.hex('#96DED1')(`Your HP is: ${player.health} 💖`));
            console.log(chalk.hex('#DE3163')(`${enemy} HP is: ${enemyHealth} 🖤\n`));
            ask = await inquirer.prompt([
                {
                    name: "option",
                    message: "What would you like to do?",
                    type: "list",
                    choices: ["Attack", "Drink Health Potion", "Run"]
                }
            ]);
            switch (ask.option) {
                case "Attack":
                    let weaponChoice = await inquirer.prompt([
                        {
                            name: "weapon",
                            message: "Choose a weapon:",
                            type: "list",
                            choices: weapons
                        }
                    ]);
                    let attackDamage;
                    if (weaponChoice.weapon === "Arrow & Bow" || weaponChoice.weapon === "Knife" || weaponChoice.weapon === "Sword" || weaponChoice.weapon === "Flail" || weaponChoice.weapon === "Tiger Claw" || weaponChoice.weapon === "Dagger" || weaponChoice.weapon === "Gauntlet" || weaponChoice.weapon === "Lightsaber") {
                        attackDamage = randomNum(1, player.playerAttack);
                    }
                    else if (weaponChoice.weapon === "Stick" || weaponChoice.weapon === "Whip" || weaponChoice.weapon === "Boomerang" || weaponChoice.weapon === "Shock Gun") {
                        attackDamage = randomNum(1, 25);
                    }
                    else {
                        console.log("Please select a valid weapon.");
                        attackDamage = 0;
                    }
                    let damageTaken = randomNum(1, new Enemy().enemyAttack);
                    enemyHealth -= attackDamage;
                    player.health -= damageTaken;
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    console.log(chalk.hex('#32EDBC')(`\nYou struck the ${enemy} with ${attackDamage} damage ⚔️💥`));
                    console.log(chalk.hex('#D6184F')(`You received ${damageTaken} damage in return 🔥\n`));
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    if (player.health < 1) {
                        fight = false;
                        console.log(chalk.hex('#F33A6A')(`You've taken too much damage. You're too weak to go on. ⚰️`));
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        break ENEMY;
                    }
                    break;
                case "Drink Health Potion":
                    if (player.healthPotion > 0) {
                        player.healthPotion -= 1;
                        player.health += player.potionHeal;
                        await new Promise(resolve => setTimeout(resolve, 500));
                        console.log(chalk.hex('#9FE2BF')(`\nYou drank health potion, healing yourself for ${player.potionHeal} 💧`));
                        console.log(chalk.hex('#9FE2BF')(`You now have ${player.health} HP. 💖`));
                        console.log(chalk.hex('#9FE2BF')(`You now have ${player.healthPotion} Health Potion left 🧪\n`));
                        await new Promise(resolve => setTimeout(resolve, 500));
                    }
                    else {
                        console.log(chalk.hex('#F33A6A')(`You have no Health Potion left ❌🧪, defeat more enemies for a chance to get one ⚔️👾\n`));
                    }
                    break;
                case "Run":
                    console.log(chalk.hex('#F23F73')(`\nYou ran away from the ${enemy}. 🏃💨`));
                    await new Promise(resolve => setTimeout(resolve, 500));
                    console.log(chalk.hex('#F23F73')(`You left ${theme} 🌍`));
                    await new Promise(resolve => setTimeout(resolve, 500));
                    return;
            }
        }
        if (player.health < 1) {
            fight = false;
            console.log(chalk.hex('#F33A6A')(`\nYou limp out of the ${theme}, weak from the battle. 💔`));
            await new Promise(resolve => setTimeout(resolve, 1000));
            break;
        }
        else {
            fight = false;
            console.log(chalk.hex('#96DED1')(`You have ${player.health} HP left. 💖`));
            console.log(chalk.hex('#FC701E')(`\nYou Win!!! ${enemy} has been defeated! 🎉🏆`));
            console.log(chalk.hex('#FC701E')(`Congratulations, ${player.name}! You've conquered the ${theme} and defeated the enemies within! Your bravery shines bright! Ready for your next adventure? 🌟⚔️`));
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        if (randomNum(1, 100) < player.potionDropChance) {
            player.healthPotion++;
            console.log(chalk.hex('#9FE2BF')(`\nThe ${enemy} dropped a Health Potion!!! 🧪`));
            console.log(chalk.hex('#9FE2BF')(`You now have ${player.healthPotion} Health Potion(s)! 🎊`));
        }
    }
}
