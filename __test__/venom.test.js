const { Cauldron } = require("../src/cauldron");

describe("Cuando los efectos de ingredientes asociados llevarán los nombres: “Setback”", () => {
    describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
        const boostSameAttringredients = [
            {
                "_id": "6702b51d76863c206a48cd2a",
                "name": "Dusk Fern",
                "description": "A shadowy fern that clouds the mind, lowering intelligence.",
                "value": 35,
                "effects": [
                    "lesser_setback_intelligence"
                ],
                "image": "/images/ingredients/setback/setback_2.webp",
                "type": "ingredient"
            },
            {
                "_id": "6702b51d76863c206a48cd2a",
                "name": "Dusk Fern",
                "description": "A shadowy fern that clouds the mind, lowering intelligence.",
                "value": 35,
                "effects": [
                    "lesser_setback_intelligence"
                ],
                "image": "/images/ingredients/setback/setback_2.webp",
                "type": "ingredient"
            },

        ];

        it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al múltiplo de 5 inmediatamente inferior.', () => {
            const venom = Cauldron.createPotion(boostSameAttringredients);
            expect(venom.value).toBe(-35);
        });

        it('El tipo será venom', () => {
            const venom = Cauldron.createPotion(boostSameAttringredients);
            expect(venom.type).toBe('venom');
        });

        describe(`Cuando todos los efectos son de tipo least`, () => {
            it('El nombre de la poción será: Least + Attribute + venom', () => {
                const leastSetbackIngredients = [
                    {
                        "_id": "6702b51d76863c206a48cd33",
                        "name": "Frostvine",
                        "description": "A vine that numbs the body and reduces dexterity.",
                        "value": 17,
                        "effects": [
                            "least_setback_dexterity"
                        ],
                        "image": "/images/ingredients/setback/setback_11.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b51d76863c206a48cd33",
                        "name": "Frostvine",
                        "description": "A vine that numbs the body and reduces dexterity.",
                        "value": 17,
                        "effects": [
                            "least_setback_dexterity"
                        ],
                        "image": "/images/ingredients/setback/setback_11.webp",
                        "type": "ingredient"
                    },
                ];
                const elixir = Cauldron.createPotion(leastSetbackIngredients);
                expect(elixir.name).toBe("Least dexterity venom");
            });
        });

        describe('Cuando todos los efectos son de tipo lesser', () => {
            it('El nombre de la poción será: Lesser + Attribute + venom', () => {
                const lesserSetbackIngrdients = [
                    {
                        "_id": "6702b51d76863c206a48cd2a",
                        "name": "Dusk Fern",
                        "description": "A shadowy fern that clouds the mind, lowering intelligence.",
                        "value": 35,
                        "effects": [
                            "lesser_setback_intelligence"
                        ],
                        "image": "/images/ingredients/setback/setback_2.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b51d76863c206a48cd2a",
                        "name": "Dusk Fern",
                        "description": "A shadowy fern that clouds the mind, lowering intelligence.",
                        "value": 35,
                        "effects": [
                            "lesser_setback_intelligence"
                        ],
                        "image": "/images/ingredients/setback/setback_2.webp",
                        "type": "ingredient"
                    },
                ];

                const elixir = Cauldron.createPotion(lesserSetbackIngrdients);
                expect(elixir.name).toBe("Lesser intelligence venom");
            });
        });

        describe('Cuando todos los efectos son de tipo normal', () => {
            it('El nombre de la poción será: Attribute + venom', () => {
                const normalSetBackIngredients = [
                    {
                        "_id": "6702b51d76863c206a48cd39",
                        "name": "Cloudcap Mushroom",
                        "description": "A rare mushroom that reduces dexterity.",
                        "value": 72,
                        "effects": [
                            "setback_dexterity"
                        ],
                        "image": "/images/ingredients/setback/setback_17.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b51d76863c206a48cd39",
                        "name": "Cloudcap Mushroom",
                        "description": "A rare mushroom that reduces dexterity.",
                        "value": 72,
                        "effects": [
                            "setback_dexterity"
                        ],
                        "image": "/images/ingredients/setback/setback_17.webp",
                        "type": "ingredient"
                    },
                ];

                const elixir = Cauldron.createPotion(normalSetBackIngredients);
                expect(elixir.name).toBe('Dexterity venom');
            });
        });

        describe('Cuando todos los efectos son de tipo greater', () => {
            it('El nombre de la poción será: Greater + Attribute + venom', () => {
                const greaterSetBackIngredients = [

                    {
                        "_id": "6702b51d76863c206a48cd2c",
                        "name": "Banshee’s Breath",
                        "description": "A spectral herb that saps charisma.",
                        "value": 250,
                        "effects": [
                            "greater_setback_charisma"
                        ],
                        "image": "/images/ingredients/setback/setback_4.webp",
                        "type": "ingredient"
                    },

                    {
                        "_id": "6702b51d76863c206a48cd2c",
                        "name": "Banshee’s Breath",
                        "description": "A spectral herb that saps charisma.",
                        "value": 250,
                        "effects": [
                            "greater_setback_charisma"
                        ],
                        "image": "/images/ingredients/setback/setback_4.webp",
                        "type": "ingredient"
                    },

                ];

                const elixir = Cauldron.createPotion(greaterSetBackIngredients);

                expect(elixir.name).toBe('Greater charisma venom');
            });
        });

        describe('Cuando todos los efectos son de tipo diferente', () => {
            it('El nombre de la poción será: Modifier + Attribute + vemon El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
                const differentModifieres = [
                    {
                        "_id": "6702b51d76863c206a48cd36",
                        "name": "Dewberry",
                        "description": "A berry that dims the mind, lowering intelligence.",
                        "value": 38,
                        "effects": [
                            "lesser_setback_intelligence"
                        ],
                        "image": "/images/ingredients/setback/setback_14.webp",
                        "type": "ingredient"
                    },

                    {
                        "_id": "6702b51d76863c206a48cd2f",
                        "name": "Sorrow Bloom",
                        "description": "A melancholic bloom that dulls intelligence.",
                        "value": 8,
                        "effects": [
                            "least_setback_intelligence"
                        ],
                        "image": "/images/ingredients/setback/setback_7.webp",
                        "type": "ingredient"
                    },

                ];

                const elixir = Cauldron.createPotion(differentModifieres);
                expect(elixir.name).toBe('Least intelligence venom');
            });
        });
    });

    describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
        it('No podremos crear el elixir. El tipo de la poción creada no será “elixir”', () => {
            const ingredients = [
                {
                    "_id": "6702b51d76863c206a48cd2f",
                    "name": "Sorrow Bloom",
                    "description": "A melancholic bloom that dulls intelligence.",
                    "value": 8,
                    "effects": [
                        "least_setback_intelligence"
                    ],
                    "image": "/images/ingredients/setback/setback_7.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b51d76863c206a48cd3c",
                    "name": "Shadowroot",
                    "description": "A sinister root that saps dexterity for a short time.",
                    "value": 95,
                    "effects": [
                        "setback_dexterity"
                    ],
                    "image": "/images/ingredients/setback/setback_20.webp",
                    "type": "ingredient"
                },
            ];

            const failedPotion = Cauldron.createPotion(ingredients);
            expect(failedPotion.name).toBe('Tonic of Downfall');
            expect(failedPotion.type).not.toBe('venom');
            expect(failedPotion.type).toBe('failed');
        });
    });
});

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Frenzy”', () => {
    const frenzyIngredients1 = [
        {
            "_id": "6702b53d76863c206a48cd41",
            "name": "Lunatic's Thorn",
            "description": "A thorny herb that induces a subtle but lasting sense of insanity.",
            "value": 7,
            "effects": [
                "least_frenzy"
            ],
            "image": "/images/ingredients/frenzy/frenzy_4.webp",
            "type": "ingredient"
        },
        {
            "_id": "6702b53d76863c206a48cd41",
            "name": "Lunatic's Thorn",
            "description": "A thorny herb that induces a subtle but lasting sense of insanity.",
            "value": 7,
            "effects": [
                "least_frenzy"
            ],
            "image": "/images/ingredients/frenzy/frenzy_4.webp",
            "type": "ingredient"
        },
    ];

    it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al múltiplo de 5 inmediatamente inferior.', () => {
        const elixir1 = Cauldron.createPotion(frenzyIngredients1);
        expect(elixir1.value).toBe(-5);  // 7 + 7 = 14 / 2 --> 7 --> round a multiplo de 5 anterior --> 5 --> negado --> -5
        expect(elixir1.name.split(" ")[1]).toBe('frenzy');
    });

    it('El tipo será venom', () => {
        const elixir = Cauldron.createPotion(frenzyIngredients1);
        expect(elixir.type).toBe('venom');
    });

    describe(`Cuando todos los efectos son de tipo least`, () => {
        it('El nombre de la poción será: Least + calm + elixir', () => {
            const leastIngr = [
                {
                    "_id": "6702b53d76863c206a48cd41",
                    "name": "Lunatic's Thorn",
                    "description": "A thorny herb that induces a subtle but lasting sense of insanity.",
                    "value": 7,
                    "effects": [
                        "least_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_4.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b53d76863c206a48cd41",
                    "name": "Lunatic's Thorn",
                    "description": "A thorny herb that induces a subtle but lasting sense of insanity.",
                    "value": 7,
                    "effects": [
                        "least_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_4.webp",
                    "type": "ingredient"
                },
            ];
            const elixir = Cauldron.createPotion(leastIngr);
            expect(elixir.name).toBe("Least frenzy venom");
        });
    });

    describe('Cuando todos los efectos son de tipo lesser', () => {
        it('El nombre de la poción será: Lesser + frenzy + venom', () => {
            const lesserIngrdients = [
                {
                    "_id": "6702b53d76863c206a48cd40",
                    "name": "Whispering Fern",
                    "description": "A fern that whispers strange voices, causing mild frenzy in the user.",
                    "value": 28,
                    "effects": [
                        "lesser_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_3.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b53d76863c206a48cd40",
                    "name": "Whispering Fern",
                    "description": "A fern that whispers strange voices, causing mild frenzy in the user.",
                    "value": 28,
                    "effects": [
                        "lesser_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_3.webp",
                    "type": "ingredient"
                },
            ];

            const elixir = Cauldron.createPotion(lesserIngrdients);
            expect(elixir.name).toBe("Lesser frenzy venom");
        });
    });

    describe('Cuando todos los efectos son de tipo normal', () => {
        it('El nombre de la poción será: Frenzy + venom', () => {
            const normalIngredients = [
                {
                    "_id": "6702b53d76863c206a48cd3f",
                    "name": "Chaos Bloom",
                    "description": "A flower with erratic patterns that induces a deep sense of insanity.",
                    "value": 95,
                    "effects": [
                        "frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_2.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b53d76863c206a48cd3f",
                    "name": "Chaos Bloom",
                    "description": "A flower with erratic patterns that induces a deep sense of insanity.",
                    "value": 95,
                    "effects": [
                        "frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_2.webp",
                    "type": "ingredient"
                },
            ];

            const elixir = Cauldron.createPotion(normalIngredients);
            expect(elixir.name).toBe('Frenzy venom');
        });
    });

    describe('Cuando todos los efectos son de tipo greater', () => {
        it('El nombre de la poción será: Greater + frenzy + venom', () => {
            const greaterIngredients = [
                {
                    "_id": "6702b53d76863c206a48cd3e",
                    "name": "Madcap Mushroom",
                    "description": "A twisted mushroom that drives the consumer to the edge of madness.",
                    "value": 285,
                    "effects": [
                        "greater_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_1.webp",
                    "type": "ingredient"
                },

                {
                    "_id": "6702b53d76863c206a48cd3e",
                    "name": "Madcap Mushroom",
                    "description": "A twisted mushroom that drives the consumer to the edge of madness.",
                    "value": 285,
                    "effects": [
                        "greater_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_1.webp",
                    "type": "ingredient"
                },
            ];

            const elixir = Cauldron.createPotion(greaterIngredients);

            expect(elixir.name).toBe('Greater frenzy venom');
        });
    });

    describe('Cuando todos los efectos son de tipo diferente', () => {
        it('El nombre de la poción será: Modifier + calm + elixir El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
            const differentModifieres = [
                {
                    "_id": "6702b53d76863c206a48cd3e",
                    "name": "Madcap Mushroom",
                    "description": "A twisted mushroom that drives the consumer to the edge of madness.",
                    "value": 285,
                    "effects": [
                        "greater_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_1.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b53d76863c206a48cd40",
                    "name": "Whispering Fern",
                    "description": "A fern that whispers strange voices, causing mild frenzy in the user.",
                    "value": 28,
                    "effects": [
                        "lesser_frenzy"
                    ],
                    "image": "/images/ingredients/frenzy/frenzy_3.webp",
                    "type": "ingredient"
                },

            ];
            const elixir = Cauldron.createPotion(differentModifieres);
            expect(elixir.name).toBe('Lesser frenzy venom');
        });
    });


});

describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Setback” o “Frenzy”', () => {
    it('No podremos crear el elixir. El tipo de la poción creada no será “venom”', () => {
        const ingredientsToFail = [
            {
                "_id": "6702b56a76863c206a48cd44",
                "name": "Tranquil Leaf",
                "description": "A calming leaf that restores clarity and reduces madness.",
                "value": 78,
                "effects": [
                    "calm"
                ],
                "image": "/images/ingredients/calm/calm_2.webp",
                "type": "ingredient"
            },
            {
                "_id": "6702b53d76863c206a48cd3e",
                "name": "Madcap Mushroom",
                "description": "A twisted mushroom that drives the consumer to the edge of madness.",
                "value": 285,
                "effects": [
                    "greater_frenzy"
                ],
                "image": "/images/ingredients/frenzy/frenzy_1.webp",
                "type": "ingredient"
            },
        ];

        const failedPotion = Cauldron.createPotion(ingredientsToFail);
        expect(failedPotion.type).not.toBe('venom');
    });
});
