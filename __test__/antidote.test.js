const { Antidote } = require("../src/antidote");
const { Cauldron } = require("../src/cauldron");


describe("Cuando todos los ingredientes llevan el efecto de tipo 'Restore'", () => {
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
        expect(antidote.value).toBe(7);
    });

    it(`El tipo será "antidote"`, () => {
        const antidote = Cauldron.createPotion(restoreIngredients);
        expect(antidote.type).toBe('antidote');

    });
});