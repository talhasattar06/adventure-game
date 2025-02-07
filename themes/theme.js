import { Enemy } from "../class/class.js";
import { battle } from "../func/battle.js";
let enemy = new Enemy();
// Jungle
export async function jungle(player) {
    await battle(player, enemy.jungleEnemies, enemy.enemyMaxHealth, ["Arrow & Bow", "Knife", "Stick"], "Jungle");
}
// Cave
export async function cave(player) {
    await battle(player, enemy.caveEnemies, enemy.enemyMaxHealth, ["Sword", "Flail", "Whip"], "Cave");
}
// Fairyland
export async function fairy(player) {
    await battle(player, enemy.fairyEnemies, enemy.enemyMaxHealth, ["Tiger Claw", "Dagger", "Boomerang"], "Fairyland");
}
// Cybercity
export async function cyber(player) {
    await battle(player, enemy.cyberEnemies, enemy.enemyMaxHealth, ["Gauntlet", "Lightsaber", "Shock Gun"], "Cybercity");
}
