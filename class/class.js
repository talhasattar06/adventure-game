export class Player {
    name;
    health = 100;
    playerAttack = 50;
    healthPotion = 3;
    potionHeal = 40;
    potionDropChance = 50;
    constructor(name) {
        this.name = name;
    }
}
export class Enemy {
    jungleEnemies = ["Tiger", "Gorilla", "Snake"];
    caveEnemies = ["Warrior", "Assasian", "Skeleton"];
    fairyEnemies = ["Goblin", "Dragon", "Elf"];
    cyberEnemies = ["Cyborg", "Alien", "Spiderbot"];
    enemyMaxHealth = 70;
    enemyAttack = 30;
}
