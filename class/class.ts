export class Player {
    name: string
    health: number = 100
    playerAttack: number = 50;
    healthPotion: number = 3;
    potionHeal: number = 40;
    potionDropChance: number = 50;
    constructor(name: string) {
        this.name = name
    }
}

export class Enemy {
    jungleEnemies: string[] = ["Tiger", "Gorilla", "Snake"];
    caveEnemies: string[] = ["Warrior", "Assasian", "Skeleton"];
    fairyEnemies: string[] = ["Goblin", "Dragon", "Elf"];
    cyberEnemies: string[] = ["Cyborg", "Alien", "Spiderbot"];

    enemyMaxHealth: number = 70;
    enemyAttack: number = 30;
}