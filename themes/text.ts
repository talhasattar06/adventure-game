import chalk from "chalk";

export const jungleMode: string = chalk.hex('#76E043')("\nYou step into the lush jungle 🌿🌺, enveloped by a symphony of vibrant colors and exotic sounds. Towering trees stretch toward the sky, their leaves whispering ancient secrets 🍃. Sunlight filters through the canopy, casting a dance of shadows on the forest floor 🌞. Every step feels like a journey into the unknown, filled with the intoxicating aroma of damp earth and blooming flora. Suddenly, the tranquil atmosphere is shattered as a dark shadow 🐾 emerges from the underbrush, ready to challenge your resolve. 🌌🍃\n")

export const caveMode: string = chalk.hex('#8A8888')("\nEmerging from the bright world outside, you find yourself at the entrance of a dark cave 🕳️✨, its mouth like a gaping maw. As you venture inside, the air cools ❄️, and your surroundings transform into a realm of glittering crystals and echoing chambers. The silence here is mesmerizing, and every stalactite glimmers like a jewel in the dark 💎. You feel a sense of wonder at the hidden beauty around you. Out of nowhere, the echoes are interrupted by the sudden presence lurking in the shadows 🦇. 🌠🔦\n")

export const fairyLand: string = chalk.hex('#FCA4B1')("\nAs you step into the enchanting fairyland 🌸🧚‍♀️, iridescent flowers bloom all around you, each petal shimmering with an otherworldly glow 🌈. A soft, magical breeze carries laughter and music 🎶, filling the air with joy. It feels as if you've walked into a living dream, where every moment is filled with whimsy and beauty. Just as you begin to lose yourself in the wonder, a strange figure materializes before you, breaking the spell of enchantment ⚡. 🌟✨\n")

export const cyberCity: string = chalk.hex('#442CA3')("\nYou arrive in a dazzling cybercity 🌆💡, where neon lights flash and towering skyscrapers reach for the stars 🌌. The streets hum with energy ⚡, alive with the pulse of technology and innovation. As you navigate this vibrant landscape, you're struck by the marvels that surround you, each corner revealing something new and exciting. However, amidst the brilliance, the atmosphere suddenly shifts, and a futuristic being 🤖 appears, ready to disrupt the harmony of this futuristic world. 🚀💥\n")

export const storyline: {mode: number, message: string}[] = [
    {"mode": 1, "message": chalk.hex('#76E043')(`\nYou find yourself stepping into a breathtaking jungle 🌴🌺, where nature thrives in vibrant colors and cacophonous sounds. Towering trees create a lush canopy above, with sunlight cascading through the leaves like a golden waterfall 🌞. The air is rich with the scent of damp earth and exotic blooms, igniting a sense of adventure within you. Just as you begin to absorb the beauty of your surroundings, a dark shadow 🐾 leaps from the foliage, ready to confront you. 🌌🍃\n`)},

    {"mode": 2, "message": chalk.hex('#8A8888')(`\nAfter conquering the challenges of the jungle, you stumble upon the mouth of a cave 🕳️💎. Its entrance beckons you with an air of mystery and intrigue 🌌. As you venture inside, the world shifts dramatically; the cave glimmers with thousands of crystals, illuminating your path with a magical light 💡. The cool air carries a soothing silence, broken only by the soft dripping of water. Just when you think you've found solace in this hidden realm, a silhouette emerges from the darkness 🦇, challenging your newfound courage. 🌠🔦\n`)},

    {"mode": 3, "message": chalk.hex('#FFB6C1')(`\nEmerging from the cave, you find yourself transported to a fairyland 🌸✨ filled with enchanting sights and sounds. Iridescent flowers bloom around you, their petals shimmering in every hue imaginable 🌈. Laughter and music fill the air, wrapping you in a warm embrace of joy and wonder 🎶. It feels like a paradise, untouched and magical. However, your moment of bliss is abruptly interrupted as a strange figure appears ⚡, disrupting the enchantment of this whimsical world. 🌟✨\n`)},

    {"mode": 4, "message": chalk.hex('#442CA3')(`\nWith the fairyland behind you, you step into the bustling cybercity 🌆🤖, a realm of dazzling neon lights and towering structures. The streets hum with energy and innovation ⚡, each corner revealing futuristic marvels. You are captivated by the lively atmosphere, feeling a sense of awe at the technological wonders surrounding you. Yet, as you lose yourself in this vibrant urban landscape, a futuristic being 🛸 materializes, ready to test your resolve in this high-tech environment. 🚀💥\n`)}
]
