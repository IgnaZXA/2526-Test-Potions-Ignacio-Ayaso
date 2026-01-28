const { Cauldron } = require("../src/cauldron");

describe("Cuando los efectos de ingredientes asociados llevarán los nombres: “Boost”", () => {
    describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
        const boostSameAttringredients = [
            {
                "_id": "6702b4f876863c206a48cd24",
                "name": "Firepetal",
                "description": "A fiery petal that enhances strength when consumed.",
                "value": 44,
                "effects": [
                    "boost_strength"
                ],
                "image": "/images/ingredients/boost/boost_17.webp",
                "type": "ingredient"
            },
            {
                "_id": "6702b4f876863c206a48cd21",
                "name": "Thunderleaf",
                "description": "A leaf that enhances strength with each thunderstorm.",
                "value": 105,
                "effects": [
                    "boost_strength"
                ],
                "image": "/images/ingredients/boost/boost_14.webp",
                "type": "ingredient"
            },
        ];

        it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al múltiplo de 5 inmediatamente inferior.', () => {
            const elixir = Cauldron.createPotion(boostSameAttringredients);
            expect(elixir.value).toBe(70); // (44 + 105)/ 2 = 74.5 ----Multiplo de cinco inmediatamente inferior----> 70
        });

        it('El tipo será elixir', () => {
            const elixir = Cauldron.createPotion(boostSameAttringredients);
            expect(elixir.type).toBe('elixir');
        });

        describe(`Cuando todos los efectos son de tipo least`, () => {
            it('El nombre de la poción será: Least + Attribute + elixir', () => {
                const leastBoostIngredients = [
                    {
                        "_id": "6702b4f876863c206a48cd20",
                        "name": "Radiant Petal",
                        "description": "A petal that enhances charisma with its ethereal glow.",
                        "value": 9,
                        "effects": [
                            "least_boost_charisma"
                        ],
                        "image": "/images/ingredients/boost/boost_13.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b4f876863c206a48cd20",
                        "name": "Radiant Petal",
                        "description": "A petal that enhances charisma with its ethereal glow.",
                        "value": 9,
                        "effects": [
                            "least_boost_charisma"
                        ],
                        "image": "/images/ingredients/boost/boost_13.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b4f876863c206a48cd20",
                        "name": "Radiant Petal",
                        "description": "A petal that enhances charisma with its ethereal glow.",
                        "value": 9,
                        "effects": [
                            "least_boost_charisma"
                        ],
                        "image": "/images/ingredients/boost/boost_13.webp",
                        "type": "ingredient"
                    },
                ];
                const elixir = Cauldron.createPotion(leastBoostIngredients);
                expect(elixir.name).toBe("Least charisma elixir");
            });
        });

        describe('Cuando todos los efectos son de tipo lesser', () => {
            it('El nombre de la poción será: Lesser + Attribute + elixir', () => {
                const lesserBoostIngrdients = [
                    {
                        "_id": "6702b4f876863c206a48cd1c",
                        "name": "Frostmoss",
                        "description": "A cold moss that increases agility and dexterity.",
                        "value": 35,
                        "effects": [
                            "lesser_boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_9.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b4f876863c206a48cd1c",
                        "name": "Frostmoss",
                        "description": "A cold moss that increases agility and dexterity.",
                        "value": 35,
                        "effects": [
                            "lesser_boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_9.webp",
                        "type": "ingredient"
                    },
                ];

                const elixir = Cauldron.createPotion(lesserBoostIngrdients);
                expect(elixir.name).toBe("Lesser dexterity elixir");
            });
        });

        describe('Cuando todos los efectos son de tipo normal', () => {
            it('El nombre de la poción será: Attribute + elixir', () => {
                const normalBoostIngredients = [
                    {
                        "_id": "6702b4f876863c206a48cd23",
                        "name": "Amber Bloom",
                        "description": "A glowing bloom that enhances dexterity.",
                        "value": 50,
                        "effects": [
                            "boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_16.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b4f876863c206a48cd23",
                        "name": "Amber Bloom",
                        "description": "A glowing bloom that enhances dexterity.",
                        "value": 50,
                        "effects": [
                            "boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_16.webp",
                        "type": "ingredient"
                    },
                ];

                const elixir = Cauldron.createPotion(normalBoostIngredients);
                expect(elixir.name).toBe('Dexterity elixir');
            });
        });

        describe('Cuando todos los efectos son de tipo greater', () => {
            it('El nombre de la poción será: Greater + Attribute + elixir', () => {
                const greaterBoostIngredients = [
                    {
                        "_id": "6702b4f876863c206a48cd27",
                        "name": "Lion's Mane Fern",
                        "description": "A fern that grants greater agility and dexterity.",
                        "value": 165,
                        "effects": [
                            "greater_boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_20.webp",
                        "type": "ingredient"
                    }, {
                        "_id": "6702b4f876863c206a48cd27",
                        "name": "Lion's Mane Fern",
                        "description": "A fern that grants greater agility and dexterity.",
                        "value": 165,
                        "effects": [
                            "greater_boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_20.webp",
                        "type": "ingredient"
                    },
                ];

                const elixir = Cauldron.createPotion(greaterBoostIngredients);

                expect(elixir.name).toBe('Greater dexterity elixir');
            });
        });

        describe('Cuando todos los efectos son de tipo diferente', () => {
            it('El nombre de la poción será: Modifier + Attribute + elixir El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
                const differentModifieres = [
                    {
                        "_id": "6702b4f876863c206a48cd1c",
                        "name": "Frostmoss",
                        "description": "A cold moss that increases agility and dexterity.",
                        "value": 35,
                        "effects": [
                            "lesser_boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_9.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b4f876863c206a48cd27",
                        "name": "Lion's Mane Fern",
                        "description": "A fern that grants greater agility and dexterity.",
                        "value": 165,
                        "effects": [
                            "greater_boost_dexterity"
                        ],
                        "image": "/images/ingredients/boost/boost_20.webp",
                        "type": "ingredient"
                    },
                ];

                const elixir = Cauldron.createPotion(differentModifieres);
                expect(elixir.name).toBe('Lesser dexterity elixir');
            });
        });
    });

    describe('Cuando no todos los ingredientes tienen el mismo atributo (INT, DEX…)', () => {
        it('No podremos crear el elixir. El tipo de la poción creada no será “elixir”', () => {
            const ingredients = [
                {
                    "_id": "6702b4f876863c206a48cd27",
                    "name": "Lion's Mane Fern",
                    "description": "A fern that grants greater agility and dexterity.",
                    "value": 165,
                    "effects": [
                        "greater_boost_dexterity"
                    ],
                    "image": "/images/ingredients/boost/boost_20.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b4f876863c206a48cd14",
                    "name": "Dragonroot",
                    "description": "A rare root that grants immense strength when consumed.",
                    "value": 275,
                    "effects": [
                        "greater_boost_strength"
                    ],
                    "image": "/images/ingredients/boost/boost_1.webp",
                    "type": "ingredient"
                },
            ];

            const failedPotion = Cauldron.createPotion(ingredients);
            expect(failedPotion.name).toBe('Tonic of Downfall');
            expect(failedPotion.type).not.toBe('elixir');
            expect(failedPotion.type).toBe('failed');
        });
    });
});


describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Calm”', () => {
    const calmIngredients1 = [
        {
            "_id": "6702b56a76863c206a48cd46",
            "name": "Quieting Root",
            "description": "A root that brings about a gentle peace of mind with every consumption.",
            "value": 6,
            "effects": [
                "least_calm"
            ],
            "image": "/images/ingredients/calm/calm_4.webp",
            "type": "ingredient"
        }, {
            "_id": "6702b56a76863c206a48cd46",
            "name": "Quieting Root",
            "description": "A root that brings about a gentle peace of mind with every consumption.",
            "value": 6,
            "effects": [
                "least_calm"
            ],
            "image": "/images/ingredients/calm/calm_4.webp",
            "type": "ingredient"
        },
    ];

    const calmIngredients2 = [
        {
            "_id": "6702b56a76863c206a48cd43",
            "name": "Serenity Blossom",
            "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
            "value": 250,
            "effects": [
                "greater_calm"
            ],
            "image": "/images/ingredients/calm/calm_1.webp",
            "type": "ingredient"
        }, {
            "_id": "6702b56a76863c206a48cd43",
            "name": "Serenity Blossom",
            "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
            "value": 250,
            "effects": [
                "greater_calm"
            ],
            "image": "/images/ingredients/calm/calm_1.webp",
            "type": "ingredient"
        },
    ];

    it('El valor resultante del atributo será la media de los values de los ingredientes. Una vez calculada la media se redondeará al múltiplo de 5 inmediatamente inferior.', () => {

        const elixir1 = Cauldron.createPotion(calmIngredients1);
        expect(elixir1.value).toBe(5); // (250 + 250)/ 2 = 250 ----Multiplo de cinco inmediatamente inferior----> 250
        expect(elixir1.name.split(" ")[1]).toBe('calm');

        const elixir2 = Cauldron.createPotion(calmIngredients2);
        expect(elixir2.value).toBe(250);
    });

    it('El tipo será elixir', () => {
        console.log(calmIngredients1)
        const elixir = Cauldron.createPotion(calmIngredients1);
        expect(elixir.type).toBe('elixir');
    });

    describe(`Cuando todos los efectos son de tipo least`, () => {
        it('El nombre de la poción será: Least + calm + elixir', () => {
            const leastCalmIngr = [
                {
                    "_id": "6702b56a76863c206a48cd46",
                    "name": "Quieting Root",
                    "description": "A root that brings about a gentle peace of mind with every consumption.",
                    "value": 6,
                    "effects": [
                        "least_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_4.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b56a76863c206a48cd46",
                    "name": "Quieting Root",
                    "description": "A root that brings about a gentle peace of mind with every consumption.",
                    "value": 6,
                    "effects": [
                        "least_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_4.webp",
                    "type": "ingredient"
                },
            ];
            const elixir = Cauldron.createPotion(leastCalmIngr);
            expect(elixir.name).toBe("Least calm elixir");
        });
    });

    describe('Cuando todos los efectos son de tipo lesser', () => {
        it('El nombre de la poción será: Lesser + calm + elixir', () => {
            const lesserCalmIngrdients = [
                {
                    "_id": "6702b56a76863c206a48cd45",
                    "name": "Peaceful Herb",
                    "description": "An herb known for its ability to alleviate stress and minor insanity.",
                    "value": 32,
                    "effects": [
                        "lesser_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_3.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b56a76863c206a48cd45",
                    "name": "Peaceful Herb",
                    "description": "An herb known for its ability to alleviate stress and minor insanity.",
                    "value": 32,
                    "effects": [
                        "lesser_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_3.webp",
                    "type": "ingredient"
                }
            ];

            const elixir = Cauldron.createPotion(lesserCalmIngrdients);
            expect(elixir.name).toBe("Lesser calm elixir");
        });
    });

    describe('Cuando todos los efectos son de tipo normal', () => {
        it('El nombre de la poción será: Calm + elixir', () => {
            const normalCalmIngredients = [
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
            ];

            const elixir = Cauldron.createPotion(normalCalmIngredients);
            expect(elixir.name).toBe('Calm elixir');
        });
    });

    describe('Cuando todos los efectos son de tipo greater', () => {
        it('El nombre de la poción será: Greater + calm + elixir', () => {
            const greaterCalmIngredients = [
                {
                    "_id": "6702b56a76863c206a48cd43",
                    "name": "Serenity Blossom",
                    "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
                    "value": 250,
                    "effects": [
                        "greater_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_1.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b56a76863c206a48cd43",
                    "name": "Serenity Blossom",
                    "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
                    "value": 250,
                    "effects": [
                        "greater_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_1.webp",
                    "type": "ingredient"
                },
            ];

            const elixir = Cauldron.createPotion(greaterCalmIngredients);

            expect(elixir.name).toBe('Greater calm elixir');
        });
    });


    describe('Cuando todos los efectos son de tipo diferente', () => {
        it('El nombre de la poción será: Modifier + calm + elixir El modificador del nombre será el que corresponda con el modificador de ingrediente más pequeño.', () => {
            const differentModifieres = [
                {
                    "_id": "6702b56a76863c206a48cd46",
                    "name": "Quieting Root",
                    "description": "A root that brings about a gentle peace of mind with every consumption.",
                    "value": 6,
                    "effects": [
                        "least_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_4.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b56a76863c206a48cd43",
                    "name": "Serenity Blossom",
                    "description": "A rare flower that soothes the mind and banishes feelings of insanity.",
                    "value": 250,
                    "effects": [
                        "greater_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_1.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b56a76863c206a48cd45",
                    "name": "Peaceful Herb",
                    "description": "An herb known for its ability to alleviate stress and minor insanity.",
                    "value": 32,
                    "effects": [
                        "lesser_calm"
                    ],
                    "image": "/images/ingredients/calm/calm_3.webp",
                    "type": "ingredient"
                }
            ];

            const elixir = Cauldron.createPotion(differentModifieres);
            expect(elixir.name).toBe('Least calm elixir');
        });
    });


});

describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Calm” o “Boost”', () => {
    it('No podremos crear el elixir. El tipo de la poción creada no será “elixir”', () => {
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
        expect(failedPotion.type).not.toBe('elixir');
    });
});
