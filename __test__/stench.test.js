const { Cauldron } = require("../src/cauldron");

describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Decrease”', () => {
    describe('Cuando todos los ingredientes tienen el mismo atributo HP', () => {
        it('El tipo será stench', () => {
            const ingr = [
                {
                    "_id": "6702b3b776863c206a48ccd2",
                    "name": "Ashen Petal",
                    "description": "A petal from a forbidden flower that barely reduces hit points.",
                    "value": 6,
                    "effects": [
                        "least_decrease_hit_points"
                    ],
                    "image": "/images/ingredients/decrease/decrease_4.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b3b776863c206a48ccd2",
                    "name": "Ashen Petal",
                    "description": "A petal from a forbidden flower that barely reduces hit points.",
                    "value": 6,
                    "effects": [
                        "least_decrease_hit_points"
                    ],
                    "image": "/images/ingredients/decrease/decrease_4.webp",
                    "type": "ingredient"
                },
            ];

            const stench = Cauldron.createPotion(ingr);
            expect(stench.type).toBe('stench');
        });

        describe('Cuando todos los efectos son del mismo tipo (lesser, greater, …)', () => {
            describe('Cuando el numero de ingredientes es 2', () => {
                it('El valor resultante del atributo será la suma de values de los ingredientes más un 20%', () => {
                    const ingredients = [
                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        },

                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        }
                    ];

                    const essence = Cauldron.createPotion(ingredients);
                    expect(essence.value).toBe(-1 * (260 + 260 + (520 * 0.2))); // 6 + 6 = 12 -> 12 + (12*0.2) = 14.4
                });
            });

            describe('Cuando el numero de ingredientes es 3', () => {
                it('El valor resultante del atributo será la suma de values de los ingredientes más un 40%', () => {
                    const ingredients = [
                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        },

                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        },

                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        }

                    ];

                    const essence = Cauldron.createPotion(ingredients);
                    expect(essence.value).toBe(-1 * (260 + 260 + 260 + (780 * 0.4)));
                });
            });

            describe('Cuando el numero de ingredientes es 4', () => {
                it('El valor resultante del atributo será la suma de values de los ingredientes más un 80%', () => {
                    const ingredients = [
                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b3b776863c206a48cccf",
                            "name": "Witherleaf",
                            "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                            "value": 260,
                            "effects": [
                                "greater_decrease_hit_points"
                            ],
                            "image": "/images/ingredients/decrease/decrease_1.webp",
                            "type": "ingredient"
                        }
                    ];

                    const essence = Cauldron.createPotion(ingredients);

                    expect(essence.value).toBe(-1 * (260 + 260 + 260 + 260 + (1040 * 0.8)));
                });
            });

            it('El nombre de la poción resultante deberá ser: Stench of + modifier + damage', () => {
                const ingredients = [
                    {
                        "_id": "6702b3b776863c206a48cccf",
                        "name": "Witherleaf",
                        "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                        "value": 260,
                        "effects": [
                            "greater_decrease_hit_points"
                        ],
                        "image": "/images/ingredients/decrease/decrease_1.webp",
                        "type": "ingredient"
                    },

                    {
                        "_id": "6702b3b776863c206a48cccf",
                        "name": "Witherleaf",
                        "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                        "value": 260,
                        "effects": [
                            "greater_decrease_hit_points"
                        ],
                        "image": "/images/ingredients/decrease/decrease_1.webp",
                        "type": "ingredient"
                    }

                ];

                const essence = Cauldron.createPotion(ingredients);
                expect(essence.name).toBe("Stench of greater damage");
            });

        });


        describe("Cuando todos los efectos son de diferente tipo (lesser, greater, …)", () => {
            it('El valor resultante del atributo será la suma de values de los ingredientes', () => {
                const ingredients = [
                    {
                        "_id": "6702b3b776863c206a48ccd1",
                        "name": "Bloodthorn Berry",
                        "description": "A poisonous berry that slightly decreases one's overall health.",
                        "value": 35,
                        "effects": [
                            "lesser_decrease_hit_points"
                        ],
                        "image": "/images/ingredients/decrease/decrease_3.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b3b776863c206a48cccf",
                        "name": "Witherleaf",
                        "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                        "value": 260,
                        "effects": [
                            "greater_decrease_hit_points"
                        ],
                        "image": "/images/ingredients/decrease/decrease_1.webp",
                        "type": "ingredient"
                    },
                ];

                const essence = Cauldron.createPotion(ingredients);
                expect(essence.value).toBe(-1 * (35 + 260));
            });

            it('El nombre de la poción resultante deberá ser Stench of + modifier + damage. El modificador del nombre será el que corresponda con el modificador más pequeño', () => {
                const ingredients = [
                    {
                        "_id": "6702b3b776863c206a48ccd1",
                        "name": "Bloodthorn Berry",
                        "description": "A poisonous berry that slightly decreases one's overall health.",
                        "value": 35,
                        "effects": [
                            "lesser_decrease_hit_points"
                        ],
                        "image": "/images/ingredients/decrease/decrease_3.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b3b776863c206a48cccf",
                        "name": "Witherleaf",
                        "description": "A cursed leaf that permanently saps the life force of anyone who consumes it.",
                        "value": 260,
                        "effects": [
                            "greater_decrease_hit_points"
                        ],
                        "image": "/images/ingredients/decrease/decrease_1.webp",
                        "type": "ingredient"
                    },
                ];

                const essence = Cauldron.createPotion(ingredients);
                expect(essence.name).toBe("Stench of lesser damage");
            });
        })

    });


    describe('Cuando no todos los ingredientes tienen el mismo atributo HP', () => {
        it('No podremos crear el elixir. El tipo de la poción creada no será “stench”.', () => {
            const ingr = [
                {
                    "_id": "6702b3b776863c206a48ccd1",
                    "name": "Bloodthorn Berry",
                    "description": "A poisonous berry that slightly decreases one's overall health.",
                    "value": 35,
                    "effects": [
                        "lesser_decrease_hit_points"
                    ],
                    "image": "/images/ingredients/decrease/decrease_3.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b3b776863c206a48ccd1",
                    "name": "Bloodthorn Berry",
                    "description": "A poisonous berry that slightly decreases one's overall health.",
                    "value": 35,
                    "effects": [
                        "lesser_decrease_NOHIT_POINTS"
                    ],
                    "image": "/images/ingredients/decrease/decrease_3.webp",
                    "type": "ingredient"
                },
            ];

            const failedPotion = Cauldron.createPotion(ingr);
            expect(failedPotion.type).not.toBe('stench');
        });
    });
});

describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Decrease”.', () => {
    it('No podremos crear el elixir. El tipo de la poción creada no será “stench”.', () => {
        const ingrs = [
            {
                "_id": "6702b3b776863c206a48ccd1",
                "name": "Bloodthorn Berry",
                "description": "A poisonous berry that slightly decreases one's overall health.",
                "value": 35,
                "effects": [
                    "lesser_decrease_hit_points"
                ],
                "image": "/images/ingredients/decrease/decrease_3.webp",
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
        const fail = Cauldron.createPotion(ingrs);
        expect(fail.type).not.toBe('stench');
    });
});