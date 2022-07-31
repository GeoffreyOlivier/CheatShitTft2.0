//example api request: replace with your API request here in folder API
/* eslint-disable */
export const getUser = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        {
            "name": "Aatrox",
            "origine": "Shimmerscale Warrior",
            "id": 2,
            "cost": 1,
            "image": {
                "Aatrox": require('../assets/images/Champion/Aatrox.png')
            },
            "itemsA": [
                51,
                6,
                15
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Ezreal",
            "origine": "Swiftshot Tempest",
            "id": 3,
            "cost": 1,
            "image": {
                "Ezreal": require('../assets/images/Champion/Ezreal.png')
            },
            "itemsA": [
                5,
                21,
                23,
                25
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Sejuani",
            "origine": "Guild Cavalier",
            "id": 4,
            "cost": 1,
            "image": {
                "Sejuani": require('../assets/images/Champion/Sejuani.png')
            },
            "itemsA": [
                27,
                51,
                15,
                46
            ],
            "itemsB": [
                53,
                14,
                38,
                12
            ],
            "itemsC": [
                41,
                54,
                24,
                49
            ]
        },
        {
            "name": "TahmKench",
            "origine": "Revel Bruiser",
            "id": 5,
            "cost": 1,
            "image": {
                "TahmKench": require('../assets/images/Champion/TahmKench.png')
            },
            "itemsA": [
                15,
                51,
                6,
                12
            ],
            "itemsB": [
                14,
                54,
                38,
                24
            ],
            "itemsC": [
                53,
                50,
                27,
                41
            ]
        },
        {
            "name": "Heimerdinger",
            "origine": "Trainer Mage",
            "id": 6,
            "cost": 1,
            "image": {
                "Heimerdinger": require('../assets/images/Champion/Heimerdinger.png')
            },
            "itemsA": [
                2,
                9,
                53
            ],
            "itemsB": [
                52,
                49
            ],
            "itemsC": []
        },
        {
            "name": "Karma",
            "origine": "Dragonmancerne Jade",
            "id": 7,
            "cost": 1,
            "image": {
                "Karma": require('../assets/images/Champion/Karma.png')
            },
            "itemsA": [
                5,
                16,
                23,
                25,
                34
            ],
            "itemsB": [
                22,
                30,
                44
            ],
            "itemsC": [
                0,
                9,
                21
            ]
        },
        {
            "name": "Senna",
            "origine": "Ragewing Cannoneer",
            "id": 8,
            "cost": 1,
            "image": {
                "Senna": require('../assets/images/Champion/Senna.png')
            },
            "itemsA": [
                20,
                10,
                16,
                39,
                33
            ],
            "itemsB": [
                23,
                13,
                36,
                21
            ],
            "itemsC": [
                44,
                52,
                26
            ]
        },
        {
            "name": "Leona",
            "origine": "Mirage Guardian",
            "id": 9,
            "cost": 1,
            "image": {
                "Leona": require('../assets/images/Champion/Leona.png')
            },
            "itemsA": [
                51,
                46,
                12,
                15
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Vladimir",
            "origine": "Astral Mage",
            "id": 11,
            "cost": 1,
            "image": {
                "Vladimir": require('../assets/images/Champion/Vladimir.png')
            },
            "itemsA": [
                0,
                34,
                15,
                51,
                12,
                38
            ],
            "itemsB": [
                50,
                6,
                46,
                24,
                4
            ],
            "itemsC": [
                21,
                25,
                54
            ]
        },
        {
            "name": "Sett",
            "origine": "Ragewing Dragonmancer",
            "id": 12,
            "cost": 1,
            "image": {
                "Sett": require('../assets/images/Champion/Sett.png')
            },
            "itemsA": [
                33,
                4,
                10,
                20,
                50
            ],
            "itemsB": [
                23,
                16,
                39,
                21,
                6,
                51,
                12
            ],
            "itemsC": [
                46,
                15,
                54,
                38,
                14
            ]
        },
        {
            "name": "Skarner",
            "origine": "Astral Bruiser",
            "id": 13,
            "cost": 1,
            "image": {
                "Skarner": require('../assets/images/Champion/Skarner.png')
            },
            "itemsA": [
                54,
                38,
                46
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Taric",
            "origine": "Jade Guardian",
            "id": 14,
            "cost": 1,
            "image": {
                "Taric": require('../assets/images/Champion/Taric.png')
            },
            "itemsA": [
                46,
                38,
                6
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Nidalee",
            "origine": "Astrale Shapeshifter",
            "id": 15,
            "cost": 1,
            "image": {
                "Nidalee": require('../assets/images/Champion/Nidalee.png')
            },
            "itemsA": [
                20,
                4,
                33,
                10
            ],
            "itemsB": [
                50,
                39,
                16,
                36,
                23
            ],
            "itemsC": [
                13,
                21,
                26
            ]
        },
        {
            "name": "Ashe",
            "origine": "Jade, Dragonmancerne, Tireuse d'\u00e9lite",
            "id": 16,
            "cost": 2,
            "image": {
                "Ashe": require('../assets/images/Champion/Ashe.png')
            },
            "itemsA": [
                45,
                20,
                30,
                44
            ],
            "itemsB": [],
            "itemsC": [
                0,
                21,
                23,
                25,
                34
            ]
        },
        {
            "name": "Nami",
            "origine": "Astrale Mage Mystic",
            "id": 10,
            "cost": 2,
            "image": {
                "Nami": require('../assets/images/Champion/Nami.png')
            },
            "itemsA": [
                44,
                22,
                34,
                0,
                45
            ],
            "itemsB": [
                25,
                23,
                30,
                9
            ],
            "itemsC": [
                5,
                16,
                21
            ]
        },
        {
            "name": "Braum",
            "origine": "Scalescorn Gardien",
            "id": 17,
            "cost": 2,
            "image": {
                "Braum": require('../assets/images/Champion/Braum.png')
            },
            "itemsA": [
                51,
                6,
                12
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Yone",
            "origine": "Mirage Warrior",
            "id": 18,
            "cost": 2,
            "image": {
                "Yone": require('../assets/images/Champion/Yone.png')
            },
            "itemsA": [
                36,
                4,
                33,
                20,
                50
            ],
            "itemsB": [
                13,
                21,
                16,
                10
            ],
            "itemsC": [
                39,
                25,
                23
            ]
        },
        {
            "name": "Twitch",
            "origine": "Guild Swiftshot",
            "id": 19,
            "cost": 2,
            "image": {
                "Twitch": require('../assets/images/Champion/Twitch.png')
            },
            "itemsA": [
                20,
                23,
                10,
                39,
                16
            ],
            "itemsB": [
                36,
                21,
                33,
                52,
                2
            ],
            "itemsC": [
                13,
                45,
                44
            ]
        },
        {
            "name": "Gnar",
            "origine": "Shapeshifter Jade",
            "id": 20,
            "cost": 2,
            "image": {
                "Gnar": require('../assets/images/Champion/Gnar.png')
            },
            "itemsA": [
                33,
                4,
                50,
                51,
                12,
                20
            ],
            "itemsB": [
                6,
                15,
                46,
                38,
                16,
                23,
                39
            ],
            "itemsC": [
                21,
                10,
                14,
                54
            ]
        },
        {
            "name": "Jinx",
            "origine": "Revel Cannoneer",
            "id": 21,
            "cost": 2,
            "image": {
                "Jinx": require('../assets/images/Champion/Jinx.png')
            },
            "itemsA": [],
            "itemsB": [
                16,
                21,
                23,
                39
            ],
            "itemsC": [
                9,
                26
            ]
        },
        {
            "name": "Kayn",
            "origine": "Ragewing Shimmerscale Assassin",
            "id": 22,
            "cost": 2,
            "image": {
                "Kayn": require('../assets/images/Champion/Kayn.png')
            },
            "itemsA": [
                23,
                4,
                10,
                21
            ],
            "itemsB": [
                33,
                13,
                14,
                16,
                52
            ],
            "itemsC": [
                36,
                39
            ]
        },
        {
            "name": "Lillia",
            "origine": "Scalescorn Cavalier Mage",
            "id": 23,
            "cost": 2,
            "image": {
                "Lillia": require('../assets/images/Champion/Lillia.png')
            },
            "itemsA": [
                34,
                24,
                50,
                6,
                51,
                12
            ],
            "itemsB": [
                0,
                4,
                15,
                46,
                38
            ],
            "itemsC": [
                25,
                21,
                33,
                54,
                14
            ]
        },
        {
            "name": "Thresh",
            "origine": "Whispers Gardien",
            "id": 24,
            "cost": 2,
            "image": {
                "Thresh": require('../assets/images/Champion/Thresh.png')
            },
            "itemsA": [
                53,
                41,
                2
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Tristana",
            "origine": "Trainer Cannoneer",
            "id": 25,
            "cost": 2,
            "image": {
                "Tristana": require('../assets/images/Champion/Tristana.png')
            },
            "itemsA": [
                20,
                10,
                39,
                23,
                16
            ],
            "itemsB": [
                26,
                21,
                52,
                2,
                33
            ],
            "itemsC": [
                13,
                4,
                36,
                45
            ]
        },
        {
            "name": "Shen",
            "origine": "Ragewing Bruiser Warrior",
            "id": 26,
            "cost": 2,
            "image": {
                "Shen": require('../assets/images/Champion/Shen.png')
            },
            "itemsA": [
                15,
                46,
                51,
                38,
                54
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Qiyana",
            "origine": "Tempest Assassin",
            "id": 27,
            "cost": 2,
            "image": {
                "Qiyana": require('../assets/images/Champion/Qiyana.png')
            },
            "itemsA": [
                22,
                23,
                44,
                24
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Illaoi",
            "origine": "Astrale Bruisere",
            "id": 28,
            "cost": 3,
            "image": {
                "Illaoi": require('../assets/images/Champion/Illaoi.png')
            },
            "itemsA": [
                15,
                46,
                51
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Lulu",
            "origine": "Mystic Evoker Trainer",
            "id": 29,
            "cost": 3,
            "image": {
                "Lulu": require('../assets/images/Champion/Lulu.png')
            },
            "itemsA": [
                9,
                52,
                53
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Swain",
            "origine": "Shapeshifter Ragewing Dragonmancer",
            "id": 30,
            "cost": 3,
            "image": {
                "Swain": require('../assets/images/Champion/Swain.png')
            },
            "itemsA": [
                20,
                22,
                25,
                23,
                16,
                33
            ],
            "itemsB": [
                21,
                36,
                45
            ],
            "itemsC": [
                34,
                0,
                13,
                30
            ]
        },
        {
            "name": "Anivia",
            "origine": "Jade Evoker Legend",
            "id": 31,
            "cost": 3,
            "image": {
                "Anivia": require('../assets/images/Champion/Anivia.png')
            },
            "itemsA": [
                0,
                34,
                22,
                44,
                16,
                30
            ],
            "itemsB": [
                23,
                25,
                5
            ],
            "itemsC": [
                21,
                9,
                45
            ]
        },
        {
            "name": "Diana",
            "origine": "Scalescorn Assassin",
            "id": 32,
            "cost": 3,
            "image": {
                "Diana": require('../assets/images/Champion/Diana.png')
            },
            "itemsA": [
                23,
                21,
                4,
                24,
                50,
                14,
                34
            ],
            "itemsB": [
                25,
                33,
                13,
                16
            ],
            "itemsC": [
                22,
                0
            ]
        },
        {
            "name": "Elise",
            "origine": "Shapeshifter Wisper",
            "id": 33,
            "cost": 3,
            "image": {
                "Elise": require('../assets/images/Champion/Elise.png')
            },
            "itemsA": [
                20,
                4,
                33,
                21
            ],
            "itemsB": [
                25,
                23,
                16,
                50
            ],
            "itemsC": [
                13,
                34,
                0
            ]
        },
        {
            "name": "LeeSin",
            "origine": "Tempest Dragonmancer",
            "id": 34,
            "cost": 3,
            "image": {
                "LeeSin": require('../assets/images/Champion/LeeSin.png')
            },
            "itemsA": [
                33,
                21,
                25,
                23,
                4,
                50
            ],
            "itemsB": [
                51,
                38,
                15,
                24,
                46,
                6,
                12
            ],
            "itemsC": [
                34,
                54,
                14
            ]
        },
        {
            "name": "Nunu",
            "origine": "Mirage Cavalier",
            "id": 35,
            "cost": 3,
            "image": {
                "Nunu": require('../assets/images/Champion/Nunu.png')
            },
            "itemsA": [
                38,
                4,
                50,
                51,
                12,
                46
            ],
            "itemsB": [
                6,
                15,
                24
            ],
            "itemsC": [
                34,
                54,
                14,
                21,
                22
            ]
        },
        {
            "name": "Olaf",
            "origine": "Scalescorn Bruiser Warrior",
            "id": 36,
            "cost": 3,
            "image": {
                "Olaf": require('../assets/images/Champion/Olaf.png')
            },
            "itemsA": [
                36,
                4,
                33,
                20,
                39,
                10
            ],
            "itemsB": [
                50,
                23,
                16
            ],
            "itemsC": [
                13,
                21,
                26
            ]
        },
        {
            "name": "Ryze",
            "origine": "Guild Mage",
            "id": 37,
            "cost": 3,
            "image": {
                "Ryze": require('../assets/images/Champion/Ryze.png')
            },
            "itemsA": [
                44,
                22,
                0,
                34
            ],
            "itemsB": [
                16,
                25,
                23,
                33
            ],
            "itemsC": [
                20,
                21,
                4
            ]
        },
        {
            "name": "Sylas",
            "origine": "Whispers Mage Bruiser",
            "id": 38,
            "cost": 3,
            "image": {
                "Sylas": require('../assets/images/Champion/Sylas.png')
            },
            "itemsA": [
                15,
                46,
                51,
                52
            ],
            "itemsB": [
                12,
                6
            ],
            "itemsC": []
        },
        {
            "name": "Varus",
            "origine": "Astral Swiftshot",
            "id": 39,
            "cost": 3,
            "image": {
                "Varus": require('../assets/images/Champion/Varus.png')
            },
            "itemsA": [
                20,
                16,
                39,
                10,
                33
            ],
            "itemsB": [
                23,
                36,
                21
            ],
            "itemsC": [
                13,
                44,
                45,
                26
            ]
        },
        {
            "name": "Volibear",
            "origine": "Shimmerscale Dragonmancer Legend",
            "id": 40,
            "cost": 3,
            "image": {
                "Volibear": require('../assets/images/Champion/Volibear.png')
            },
            "itemsA": [
                33,
                36,
                25,
                23,
                20,
                4
            ],
            "itemsB": [
                50,
                22,
                21,
                13,
                16,
                38,
                6,
                12
            ],
            "itemsC": [
                0,
                15,
                24,
                51
            ]
        },
        {
            "name": "Daeja",
            "origine": "Dragon Mirage",
            "id": 41,
            "cost": 4,
            "image": {
                "Daeja": require('../assets/images/Champion/Daeja.png')
            },
            "itemsA": [
                20,
                45,
                22,
                33
            ],
            "itemsB": [
                34,
                0,
                21,
                23,
                25,
                16
            ],
            "itemsC": [
                36,
                13
            ]
        },
        {
            "name": "Idas",
            "origine": "Dragon Shimmerscale Gardien",
            "id": 42,
            "cost": 8,
            "image": {
                "Idas": require('../assets/images/Champion/Idas.png')
            },
            "itemsA": [
                15,
                12,
                51
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Ornn",
            "origine": "Tempest Bruiser Legend",
            "id": 1,
            "cost": 4,
            "image": {
                "Ornn": require('../assets/images/Champion/Ornn.png')
            },
            "itemsA": [
                6,
                12,
                51
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "SyFen",
            "origine": "Dragon Whispers Bruiser",
            "id": 43,
            "cost": 4,
            "image": {
                "SyFen": require('../assets/images/Champion/SyFen.png')
            },
            "itemsA": [
                33,
                4,
                20,
                39,
                50,
                12
            ],
            "itemsB": [
                23,
                21,
                13,
                36,
                16
            ],
            "itemsC": [
                14,
                6,
                51,
                46,
                38,
                26
            ]
        },
        {
            "name": "ShiOhYu",
            "origine": "Dragon Jade Mystic",
            "id": 44,
            "cost": 8,
            "image": {
                "ShiOhYu": require('../assets/images/Champion/ShiOhYu.png')
            },
            "itemsA": [
                4,
                50,
                12,
                51
            ],
            "itemsB": [
                23,
                20,
                16,
                38,
                6,
                15,
                46
            ],
            "itemsC": [
                39,
                21,
                14
            ]
        },
        {
            "name": "Corki",
            "origine": "Revel Cannoneer",
            "id": 45,
            "cost": 4,
            "image": {
                "Corki": require('../assets/images/Champion/Corki.png')
            },
            "itemsA": [
                20,
                10,
                21,
                23,
                16
            ],
            "itemsB": [
                39,
                36,
                44,
                33
            ],
            "itemsC": [
                0,
                13,
                5,
                26
            ]
        },
        {
            "name": "Talon",
            "origine": "Guild Assassin",
            "id": 46,
            "cost": 4,
            "image": {
                "Talon": require('../assets/images/Champion/Talon.png')
            },
            "itemsA": [
                23,
                4,
                33,
                16,
                21
            ],
            "itemsB": [
                13,
                10,
                36,
                39,
                26,
                49
            ],
            "itemsC": [
                44,
                20,
                14
            ]
        },
        {
            "name": "Hecarim",
            "origine": "Ragewing Cavalier",
            "id": 47,
            "cost": 4,
            "image": {
                "Hecarim": require('../assets/images/Champion/Hecarim.png')
            },
            "itemsA": [
                15,
                30,
                51
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Neeko",
            "origine": "Shapeshifter Jade",
            "id": 48,
            "cost": 4,
            "image": {
                "Neeko": require('../assets/images/Champion/Neeko.png')
            },
            "itemsA": [
                51,
                15,
                46
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Sona",
            "origine": "Revel Evoker",
            "id": 49,
            "cost": 4,
            "image": {
                "Sona": require('../assets/images/Champion/Sona.png')
            },
            "itemsA": [
                0,
                34,
                45,
                44,
                30
            ],
            "itemsB": [
                22,
                25,
                23,
                9
            ],
            "itemsC": [
                21,
                16
            ]
        },
        {
            "name": "Xayah",
            "origine": "Ragewing Swiftshot",
            "id": 50,
            "cost": 4,
            "image": {
                "Xayah": require('../assets/images/Champion/Xayah.png')
            },
            "itemsA": [
                20,
                10,
                39,
                23,
                16,
                33
            ],
            "itemsB": [
                36,
                21,
                26
            ],
            "itemsC": [
                13,
                4,
                22
            ]
        },
        {
            "name": "AoShin",
            "origine": "Dragon Tempest",
            "id": 51,
            "cost": 10,
            "image": {
                "AoShin": require('../assets/images/Champion/AoShin.png')
            },
            "itemsA": [
                44,
                34,
                0,
                22
            ],
            "itemsB": [
                20,
                25,
                23,
                16,
                33,
                45
            ],
            "itemsC": [
                21,
                13,
                30
            ]
        },
        {
            "name": "AurelionSol",
            "origine": "Dragon Astral Evoker",
            "id": 52,
            "cost": 10,
            "image": {
                "AurelionSol": require('../assets/images/Champion/AurelionSol.png')
            },
            "itemsA": [
                44,
                34,
                0,
                22
            ],
            "itemsB": [
                16,
                33,
                25,
                23,
                45
            ],
            "itemsC": [
                13,
                20,
                30
            ]
        },
        {
            "name": "Shyvana",
            "origine": "Dragon Ragewing Shapeshifter",
            "id": 53,
            "cost": 10,
            "image": {
                "Shyvana": require('../assets/images/Champion/Shyvana.png')
            },
            "itemsA": [
                51,
                12,
                14,
                50,
                24
            ],
            "itemsB": [
                4,
                34,
                6,
                33
            ],
            "itemsC": [
                0,
                25,
                21,
                54
            ]
        },
        {
            "name": "Bard",
            "origine": "Bard Guild Mystic",
            "id": 54,
            "cost": 5,
            "image": {
                "Bard": require('../assets/images/Champion/Bard.png')
            },
            "itemsA": [
                9,
                52,
                53
            ],
            "itemsB": [],
            "itemsC": []
        },
        {
            "name": "Yasuo",
            "origine": "Mirage Dragonmancer Warrior",
            "id": 55,
            "cost": 5,
            "image": {
                "Yasuo": require('../assets/images/Champion/Yasuo.png')
            },
            "itemsA": [
                13,
                4,
                33,
                21,
                50,
                16
            ],
            "itemsB": [
                23,
                5,
                49
            ],
            "itemsC": [
                10,
                39,
                26,
                36,
                20
            ]
        },
        {
            "name": "Zo\u00e9",
            "origine": "Shimmerscale Mage Spell Thief",
            "id": 56,
            "cost": 5,
            "image": {
                "Zo\u00e9": require('../assets/images/Champion/Zo\u00e9.png')
            },
            "itemsA": [
                44,
                34,
                45,
                0
            ],
            "itemsB": [
                30,
                20,
                9
            ],
            "itemsC": [
                16,
                5,
                22,
                25,
                23,
                21,
                49
            ]
        },
        {
            "name": "Pyke",
            "origine": "Whispers Assassin",
            "id": 57,
            "cost": 5,
            "image": {
                "Pyke": require('../assets/images/Champion/Pyke.png')
            },
            "itemsA": [
                21,
                16,
                23,
                4,
                14
            ],
            "itemsB": [
                24,
                33,
                13,
                25
            ],
            "itemsC": [
                34,
                0
            ]
        },
        {
            "name": "Soraka",
            "origine": "Jade Starcaller",
            "id": 58,
            "cost": 5,
            "image": {
                "Soraka": require('../assets/images/Champion/Soraka.png')
            },
            "itemsA": [
                9,
                45,
                44,
                0
            ],
            "itemsB": [],
            "itemsC": []
        }
    ]
      
    })
  } catch (e) {
    return Promise.reject(e)
  }
}


module.exports = {
  getUser
}
