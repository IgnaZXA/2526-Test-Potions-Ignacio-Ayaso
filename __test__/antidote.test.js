const { Cauldron } = require("../src/cauldron");


describe("Cuando todos los ingredientes llevan el efecto de tipo 'Restore'", () => {

    describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {

        const restoreIngredients = [
            {
                "_id": "6702b44f76863c206a48cce8",
                "name": "Giant's Tear",
                "description": "A tear known for its ability to enhance strength and fortitude.",
                "value": 250,
                "effects": [
                    "greater_restore_strength"
                ],
                "image": "/images/ingredients/restore/restore_19.webp",
                "type": "ingredient"
            },
            {
                "_id": "6702b44f76863c206a48ccdc",
                "name": "Titan's Blood",
                "description": "A rare blood known for its ability to enhance strength tremendously.",
                "value": 75,
                "effects": [
                    "restore_strength"
                ],
                "image": "/images/ingredients/restore/restore_7.webp",
                "type": "ingredient"
            },
        ];

        it(`El nombre corresponderá debera ser el correspondiente. Antidote of + ""`, () => {
            const antidote = Cauldron.createPotion(restoreIngredients);
            expect(antidote.name).toBe("Antidote of restore strength");
        });

        it(`El value será positivo e igual a la suma de los valores según la tabla de modificadores`, () => {
            const antidote = Cauldron.createPotion(restoreIngredients);
            // Al ser greater_restore_strength y restore_strength la suma debe ser 7
            expect(antidote.value).toBe(4 + 3); // Igual
            expect(antidote.value).toBeGreaterThan(0); // Positivo
        });

        it(`El tipo será "antidote"`, () => {
            const antidote = Cauldron.createPotion(restoreIngredients);
            expect(antidote.type).toBe('antidote');
        });
    });

    describe("Cuando todos los ingredientes no tienen el mismo atributo(INT, DEX…)", () => {
        it(`No podremos crear el elixir. El tipo no puede ser "antidote"`, () => {
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
            expect(failedPotion.type).not.toBe('antidote');
        });
    });
});

describe('Si alguno de los ingredientes no tiene el nombre “Restore”.', () => {
    it(`No podremos crear un antídoto.El tipo no puede ser “antidote”`, () => {
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
        expect(failedPotion.type).not.toBe('antidote');
    });
});