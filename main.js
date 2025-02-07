#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { Player } from "./class/class.js";
import { jungle, cave, fairy, cyber } from "./themes/theme.js";
import { ask } from "./func/battle.js";
import { jungleMode, caveMode, fairyLand, cyberCity, storyline } from "./themes/text.js";
import chalkAnimation from "chalk-animation";
async function welcome() {
    let title = chalkAnimation.rainbow(`\n\t---------------------------------\n\t    Welcome To Adventure Game\n\t---------------------------------\n`, 5);
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
    title.stop();
}
await welcome();
async function main() {
    let condition = true;
    let gameUser = await inquirer.prompt([
        {
            name: "name",
            message: "Enter your name: ",
            type: "input",
        },
    ]);
    let player = new Player(gameUser.name);
    GAME: while (condition) {
        let theme = await inquirer.prompt([
            {
                name: "mode",
                message: "Select a mode: ",
                type: "list",
                choices: ["Jungle", "Cave", "Fairyland", "Cybercity", "Storyline"],
            },
        ]);
        switch (theme.mode) {
            case "Jungle":
                console.log(jungleMode);
                await new Promise(resolve => setTimeout(resolve, 3500));
                await jungle(player);
                break;
            case "Cave":
                console.log(caveMode);
                await new Promise(resolve => setTimeout(resolve, 3500));
                await cave(player);
                break;
            case "Fairyland":
                console.log(fairyLand);
                await new Promise(resolve => setTimeout(resolve, 3500));
                await fairy(player);
                break;
            case "Cybercity":
                console.log(cyberCity);
                await new Promise(resolve => setTimeout(resolve, 3500));
                await cyber(player);
                break;
            case "Storyline":
                console.log(storyline[0].message);
                await new Promise(resolve => setTimeout(resolve, 3500));
                await jungle(player);
                if (player.health > 0) {
                    console.log(storyline[1].message);
                    await new Promise(resolve => setTimeout(resolve, 3500));
                    await cave(player);
                    if (player.health > 0) {
                        console.log(storyline[2].message);
                        await new Promise(resolve => setTimeout(resolve, 3500));
                        await fairy(player);
                        if (player.health > 0) {
                            console.log(storyline[3].message);
                            await new Promise(resolve => setTimeout(resolve, 3500));
                            await cyber(player);
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        break;
                    }
                }
                else {
                    break;
                }
                break;
        }
        if (player.health > 0) {
            console.log();
            let confirm = await inquirer.prompt([
                {
                    name: "continue",
                    message: "Do you want to continue?",
                    type: "confirm",
                },
            ]);
            switch (confirm.continue) {
                case true:
                    continue GAME;
                case false:
                    condition = false;
                    if (ask.option === "Run") {
                        console.log(chalk.hex('#F23F73')(`\nYou left the ${theme.mode}, ${player.name}, but the enemies are still lurking! We hope to see you back soon to take them down! ⚔️🌍`));
                    }
                    else {
                        if (theme.mode === "Storyline") {
                            console.log(chalk.hex('#FC701E')(`\n🎉 Congratulations, ${player.name}! You have triumphed over every foe across all realms! 🌟 Your courage and valor have become legends! Hope to see you back soon to embark on your next epic quest! 🚀🏆`));
                        }
                        else {
                            console.log(chalk.hex('#FC701E')(`\nCongratulations, ${player.name}! You're a true hero! More places need your help — hope to see you back soon to keep the adventure going! 🌟⚔️`));
                        }
                    }
                    break;
            }
        }
        else {
            condition = false;
            console.log(chalk.hex('#F33A6A')(`You have lost your battle... ⚔️💔\n`));
        }
    }
}
main();
