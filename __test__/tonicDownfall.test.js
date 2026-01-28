const { Cauldron } = require("../src/cauldron");

describe(`Crear el Tonic of Downfall.`, () => {
    it(`Cuando tienes menos de 2 ingredientes`, () => {
        const ingedients = [];
        const potion = Cauldron.createPotion(ingedients);
        expect(potion.name).toBe('Tonic of Downfall');
    });

    it(`Cuando tienes más de 4 ingredientes`, () => {
        const ingedients = [
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
                "_id": "6702b44f76863c206a48cce1",
                "name": "Tranquility Flower",
                "description": "A tranquil flower that helps to alleviate insanity and calm the mind.",
                "value": 5,
                "effects": [
                    "least_restore_insanity"
                ],
                "image": "/images/ingredients/restore/restore_12.webp",
                "type": "ingredient"
            },

            {
                "_id": "6702b44f76863c206a48ccd9",
                "name": "Fortitude Root",
                "description": "A potent root that strengthens the constitution and fortifies the body.",
                "value": 270,
                "effects": [
                    "greater_restore_constitution"
                ],
                "image": "/images/ingredients/restore/restore_4.webp",
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

            {
                "_id": "6702b44f76863c206a48ccea",
                "name": "Breeze Blossom",
                "description": "A light flower that gently restores dexterity and movement.",
                "value": 6,
                "effects": [
                    "least_restore_dexterity"
                ],
                "image": "/images/ingredients/restore/restore_21.webp",
                "type": "ingredient"
            },

        ];
        const potion = Cauldron.createPotion(ingedients);
        expect(potion.name).toBe('Tonic of Downfall');
    });

    it('Cuando los ingredientes no coinciden ni en el atributo ni en el efecto', () => {
        const ingrs = [
            {
                "_id": "6702b44f76863c206a48cce4",
                "name": "Fleeting Breeze",
                "description": "A light herb that aids in restoring dexterity and grace.",
                "value": 140,
                "effects": [
                    "greater_restore_dexterity"
                ],
                "image": "/images/ingredients/restore/restore_15.webp",
                "type": "ingredient"
            },
            {
                "_id": "6702b46b76863c206a48ccfb",
                "name": "Sickly Sap",
                "description": "A viscous sap that slows movement and reduces dexterity.",
                "value": 175,
                "effects": [
                    "greater_damage_dexterity"
                ],
                "image": "/images/ingredients/damage/damage_9.webp",
                "type": "ingredient"
            },
        ];

        const potion = Cauldron.createPotion(ingrs);
        expect(potion.name).toBe('Tonic of Downfall');
    });
});