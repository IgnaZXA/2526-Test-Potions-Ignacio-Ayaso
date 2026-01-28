const { Cauldron } = require("../src/cauldron");


/**
 * Cuando todos los ingredientes llevan el efecto de tipo“Damage”.
 * Las reglas para crear los tests serán las mismas que en Antidotos, sólamente cambiando los nombres por “Poison of”, los tipos por “poison” y los values serán negativos.
 * 
 */

describe("Cuando todos los ingredientes llevan el efecto de tipo 'Damage'", () => {

    describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {

        const damageIngredients = [
            {
                "_id": "6702b46b76863c206a48ccf9",
                "name": "Brute's Bane",
                "description": "A potent toxin that saps strength from even the mightiest foes.",
                "value": 80,
                "effects": [
                    "damage_strength"
                ],
                "image": "/images/ingredients/damage/damage_7.webp",
                "type": "ingredient"
            },
            {
                "_id": "6702b46b76863c206a48ccfc",
                "name": "Crimson Toxin",
                "description": "A potent poison derived from rare red flowers that can weaken even the strongest warriors.",
                "value": 30,
                "effects": [
                    "lesser_damage_strength"
                ],
                "image": "/images/ingredients/damage/damage_10.webp",
                "type": "ingredient"
            },
        ];

        it(`El nombre corresponderá debera ser el correspondiente. Poison of + ""`, () => {
            const poison = Cauldron.createPotion(damageIngredients);
            expect(poison.name).toBe("Poison of damage strength");
        });

        it(`El value será negativo e igual a la suma de los valores según la tabla de modificadores`, () => {
            const poison = Cauldron.createPotion(damageIngredients);
            // Al ser damage_strength (3) y lesser_damage_strength (2) la suma debe ser -5
            expect(poison.value).toBe(-5); // Igual
            expect(poison.value).toBeLessThan(0); // Negativo
        });

        it(`El tipo será "poison"`, () => {
            const poison = Cauldron.createPotion(damageIngredients);
            expect(poison.type).toBe('poison');
        });
    });

    describe("Cuando todos los ingredientes no tienen el mismo atributo(INT, DEX…)", () => {
        it(`No podremos crear el elixir. El tipo no puede ser "poison"`, () => {
            const notAllSameAttributeIngredients = [
                {
                    "_id": "6702b44f76863c206a48ccd7",
                    "name": "Wisdom's Nectar",
                    "description": "A golden liquid that enhances intelligence and sharpens the mind.",
                    "value": 85,
                    "effects": [
                        "restore_intelligence"
                    ],
                    "image": "/images/ingredients/restore/restore_2.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b44f76863c206a48cceb",
                    "name": "Elixir of Charisma",
                    "description": "A shimmering potion that boosts the charm of those who drink it.",
                    "value": 85,
                    "effects": [
                        "restore_charisma"
                    ],
                    "image": "/images/ingredients/restore/restore_22.webp",
                    "type": "ingredient"
                },
            ];
            const failedPotion = Cauldron.createPotion(notAllSameAttributeIngredients);
            expect(failedPotion.name).toBe('Tonic of Downfall');
            expect(failedPotion.type).not.toBe('poison');
        });
    });
});

describe('Si alguno de los ingredientes no tiene el nombre “Restore”.', () => {
    it(`No podremos crear un antídoto.El tipo no puede ser poison`, () => {
        const notAllRestoreIngredients = [

            {
                "_id": "6702b44f76863c206a48cce2",
                "name": "Mightroot",
                "description": "A root that enhances strength, giving the user a bit more power.",
                "value": 9,
                "effects": [
                    "least_restore_strength"
                ],
                "image": "/images/ingredients/restore/restore_13.webp",
                "type": "ingredient"
            },

            {
                "_id": "6702b46b76863c206a48cd0e",
                "name": "Defenseless Herb",
                "description": "A herb that leaves the user vulnerable by reducing constitution.",
                "value": 12,
                "effects": [
                    "least_damage_constitution"
                ],
                "image": "/images/ingredients/damage/damage_28.webp",
                "type": "ingredient"
            },
        ];
        const failedPotion = Cauldron.createPotion(notAllRestoreIngredients);
        expect(failedPotion.name).toBe('Tonic of Downfall');
        expect(failedPotion.type).not.toBe('poison');
    });
});