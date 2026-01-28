const { Cauldron } = require("../src/cauldron");


describe('Cuando los efectos de ingredientes asociados llevarán los nombres: “Increase”', () => {
    describe('Cuando todos los ingredientes tienen el mismo atributo HP', () => {
        it('El tipo será essence', () => {
            const ingr = [
                {
                    "_id": "6702b39d76863c206a48cccb",
                    "name": "Crimson Lotus",
                    "description": "A sacred flower that boosts one's health noticeably.",
                    "value": 110,
                    "effects": [
                        "increase_hit_points"
                    ],
                    "image": "/images/ingredients/increase/increase_2.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b39d76863c206a48cccb",
                    "name": "Crimson Lotus",
                    "description": "A sacred flower that boosts one's health noticeably.",
                    "value": 110,
                    "effects": [
                        "increase_hit_points"
                    ],
                    "image": "/images/ingredients/increase/increase_2.webp",
                    "type": "ingredient"
                },
            ];

            const elixir = Cauldron.createPotion(ingr);
            expect(elixir.type).toBe('essence');
        });

        describe('Cuando todos los efectos son del mismo tipo (lesser, greater, …)', () => {
            describe('Cuando el numero de ingredientes es 2', () => {
                it('El valor resultante del atributo será la suma de values de los ingredientes más un 20%', () => {
                    const ingredients = [
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },

                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },

                    ];

                    const essence = Cauldron.createPotion(ingredients);
                    expect(essence.value).toBe(60); // 25 + 25 = 50 -> 50 + (50*0.2) = 60
                });
            });
            describe('Cuando el numero de ingredientes es 3', () => {
                it('El valor resultante del atributo será la suma de values de los ingredientes más un 40%', () => {
                    const ingredients = [
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },

                    ];

                    const essence = Cauldron.createPotion(ingredients);
                    expect(essence.value).toBe(105); // 25 + 25 + 25 = 75 -> 75 + (75*0.4) = 105
                });
            });

            describe('Cuando el numero de ingredientes es 4', () => {
                it('El valor resultante del atributo será la suma de values de los ingredientes más un 80%', () => {
                    const ingredients = [
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },
                        {
                            "_id": "6702b39d76863c206a48cccc",
                            "name": "Ironbark Berry",
                            "description": "A hard berry that enhances hit points by a small amount.",
                            "value": 25,
                            "effects": [
                                "lesser_increase_hit_points"
                            ],
                            "image": "/images/ingredients/increase/increase_3.webp",
                            "type": "ingredient"
                        },

                    ];

                    const essence = Cauldron.createPotion(ingredients);

                    expect(essence.value).toBe(180); // 25 + 25 + 25 + 25 = 100 -> 100 + (100*0.8) = 180
                });
            });

            it('El nombre de la poción resultante deberá ser: Essence of + modifier + heal', () => {
                const ingredients = [
                    {
                        "_id": "6702b39d76863c206a48cccc",
                        "name": "Ironbark Berry",
                        "description": "A hard berry that enhances hit points by a small amount.",
                        "value": 25,
                        "effects": [
                            "lesser_increase_hit_points"
                        ],
                        "image": "/images/ingredients/increase/increase_3.webp",
                        "type": "ingredient"
                    },

                    {
                        "_id": "6702b39d76863c206a48cccc",
                        "name": "Ironbark Berry",
                        "description": "A hard berry that enhances hit points by a small amount.",
                        "value": 25,
                        "effects": [
                            "lesser_increase_hit_points"
                        ],
                        "image": "/images/ingredients/increase/increase_3.webp",
                        "type": "ingredient"
                    },

                ];

                const essence = Cauldron.createPotion(ingredients);
                expect(essence.name).toBe("Essence of lesser heal"); // 25 + 25 = 50 -> 50 + (50*0.2) = 60
            });
        });


        describe("Cuando todos los efectos son de diferente tipo (lesser, greater, …)", () => {
            it('El valor resultante del atributo será la suma de values de los ingredientes', () => {
                const ingredients = [
                    {
                        "_id": "6702b39d76863c206a48cccc",
                        "name": "Ironbark Berry",
                        "description": "A hard berry that enhances hit points by a small amount.",
                        "value": 25,
                        "effects": [
                            "lesser_increase_hit_points"
                        ],
                        "image": "/images/ingredients/increase/increase_3.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b39d76863c206a48ccca",
                        "name": "Heartroot",
                        "description": "A rare root known to strengthen the body's vitality permanently.",
                        "value": 275,
                        "effects": [
                            "greater_increase_hit_points"
                        ],
                        "image": "/images/ingredients/increase/increase_1.webp",
                        "type": "ingredient"
                    },
                ];

                const essence = Cauldron.createPotion(ingredients);
                expect(essence.value).toBe(300);
            });

            it('El nombre de la poción resultante deberá ser Essence of + modifier + heal. El modificador del nombre será el que corresponda con el modificador más pequeño', () => {
                const ingredients = [
                    {
                        "_id": "6702b39d76863c206a48cccc",
                        "name": "Ironbark Berry",
                        "description": "A hard berry that enhances hit points by a small amount.",
                        "value": 25,
                        "effects": [
                            "lesser_increase_hit_points"
                        ],
                        "image": "/images/ingredients/increase/increase_3.webp",
                        "type": "ingredient"
                    },
                    {
                        "_id": "6702b39d76863c206a48ccca",
                        "name": "Heartroot",
                        "description": "A rare root known to strengthen the body's vitality permanently.",
                        "value": 275,
                        "effects": [
                            "greater_increase_hit_points"
                        ],
                        "image": "/images/ingredients/increase/increase_1.webp",
                        "type": "ingredient"
                    },
                ];

                const essence = Cauldron.createPotion(ingredients);
                expect(essence.name).toBe("Essence of lesser heal");
            });
        })

    });


    describe('Cuando no todos los ingredientes tienen el mismo atributo HP', () => {
        it('No podremos crear el elixir. El tipo de la poción creada no será “essence”.', () => {
            const ingr = [
                {
                    "_id": "6702b39d76863c206a48cccb",
                    "name": "Crimson Lotus",
                    "description": "A sacred flower that boosts one's health noticeably.",
                    "value": 110,
                    "effects": [
                        "increase_hit_points"
                    ],
                    "image": "/images/ingredients/increase/increase_2.webp",
                    "type": "ingredient"
                },
                {
                    "_id": "6702b39d76863c206a48cccb",
                    "name": "Crimson Lotus",
                    "description": "A sacred flower that boosts one's health noticeably.",
                    "value": 110,
                    "effects": [
                        "increase_NOHIT_POINTS"
                    ],
                    "image": "/images/ingredients/increase/increase_2.webp",
                    "type": "ingredient"
                },
            ]

            const failedPotion = Cauldron.createPotion(ingr);
            expect(failedPotion.type).not.toBe('essence');
        });
    });
});


describe('Cuando alguno de los efectos de ingredientes no lleva el nombre “Increase”.', () => {
    it('No podremos crear el elixir. El tipo de la poción creada no será “essence”.', () => {
        const ingrs = [
            {
                "_id": "6702b39d76863c206a48cccb",
                "name": "Crimson Lotus",
                "description": "A sacred flower that boosts one's health noticeably.",
                "value": 110,
                "effects": [
                    "increase_hit_points"
                ],
                "image": "/images/ingredients/increase/increase_2.webp",
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
        expect(fail.type).not.toBe('essence');
    });
});