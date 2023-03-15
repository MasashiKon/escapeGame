const gameState = {
    items: {
        minusDriver: {
            id: 'minusDriver',
            found: false,
            done: false,
            description: "This is a minus-driver."
        },

        hammer: {
            id: 'hammer',
            found: false,
            done: false,
            description: 'This is a hammer'
        },

        pcCable: {
            id: 'pcCable',
            found: false,
            done: false,
            description: 'This is a pc cable'
        },

        key1: {
            id: 'key1',
            found: false,
            done: false,
            description: 'This is a key'
        },

        key2: {
            id: 'key2',
            found: false,
            done: false,
            description: 'This is a key'
        },

        key3: {
            id: 'key3',
            found: false,
            done: false,
            description: 'This is a key'
        },

        key4: {
            id: 'key4',
            found: false,
            done: false,
            description: 'This is a key'
        },

        handle: {
            id: 'handle',
            found: false,
            done: false,
            description: 'This is a handle'
        },

        bottle: {
            id: 'bottle',
            found: false,
            done: false,
            description: 'This is a bottle'
        },

        bigHammer: {
            id: 'bigHammer',
            found: false,
            done: false,
            description: 'This is a big hammer'
        },

        leaves: {
            id: 'leaves',
            found: false,
            done: false,
            description: 'These are leaves'
        },

        scissors: {
            id: 'scissors',
            found: false,
            done: false,
            description: 'These are scissors'
        },

        bananas: {
            id: 'bananas',
            found: false,
            done: false,
            description: 'These are bananas'
        },

        protein: {
            id: 'protein',
            found: false,
            done: false,
            description: 'This is a protein bottle'
        },

        milk: {
            id: 'milk',
            found: false,
            done: false,
            description: 'This is milk'
        },

        ball: {
            id: 'ball',
            found: false,
            done: false,
            description: 'This is a ball'
        },

        straw: {
            id: 'straw',
            found: false,
            done: false,
            description: 'This is a straw'
        },

        screenControler: {
            id: 'screenControler',
            found: false,
            done: false,
            description: 'This is a screenControler'
        }


    },

    doneEvents: {
        box1: false,

        paint: {
            counter: 0,
            isDone: false
        },
        
        doped: false, 

        hollowSpace: false,

        screen: {
            appear: false,
            on: false,
            status: 0,
            hintArray: ['screenLayerOn', 'hint1']
        },

        face1Door: {
            keyInserted: false,
            turned: false,
            open: false
        },

        vine: false,

        vault: {
            num: [],
            isDone: false
        },

        glassCup: {
            ingredients: [],
            isDone: false
        },

        lid: false,

        ball: false,

        controlPanelKey: false,

        closet: {
            count: 0,
            done: false
        },

        gameEnd: false,

        applause: false
    },

    itemBar: [],

    itemBarOpen: false,

    grabedItem: {
        id: undefined,
        icon: undefined
    },

    clickedArea: {
        area: {},
        target: undefined,
        set: false,
    }
}


const config = {
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    backgroundColor: "#FFFFFF",
    // plugins: {
    //     global: [{
    //         key: 'rexSoundFade',
    //         plugin: SoundFadePlugin,
    //         start: true
    //     },
    //     // ...
    //     ]
    // },
    scene: [StartScene, GameScene1, GameScene2, GameScene3, GameScene4, Face1KeyHole, Shed1, Shed2, Shed3, DeskLamp, GameSceneDrawer1Upside, GameSceneDrawer1Downside, GameSceneDrawer2, GameSceneDrawer3, GameSceneDrawer4, ControlPanel, MixScene, PeekThroughNum, BallScene, Box1Scene, ScreenSide, PaintNum, Vault, GoalScene]
};


const game = new Phaser.Game(config);