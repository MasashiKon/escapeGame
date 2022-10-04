class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene'})
    }
    
    preload() {
        this.load.image('rightArrow', 'imageFile/rightArrow.png');
        this.load.image('leftArrow', 'imageFile/leftArrow.png');
        this.load.image('belowArrow', 'imageFile/belowArrow.png');
        this.load.image('itemIcon', 'imageFile/item.png');
        this.load.image('itemBar', 'imageFile/itemBar.png');
        this.load.image('backIcon', 'imageFile/backIcon.png');
        this.load.image('hammer', 'imageFile/hammer.png');
        this.load.audio('common', 'soundFile/button34.mp3');
        this.load.audio('unlock', 'soundFile/turning_a_lock2.mp3');
        this.load.audio('locked', 'soundFile/microwave.mp3');
        this.load.plugin('rexdragplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdragplugin.min.js', true);
        this.load.plugin('rexsoundfadeplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsoundfadeplugin.min.js', true);

        this.load.image('ballScene', 'imageFile/BallScene.png');
        this.load.image('ballLayer', 'imageFile/ballLayer.png');
        this.load.image('ball', 'imageFile/ball.png');

        this.load.image('box1', 'imageFile/box1.png');
        this.load.image('box1Close', 'imageFile/box1Close.png');
        this.load.image('box1KeyHole', 'imageFile/box1KeyHole.png');
        this.load.image('box1KeyHoleInserted', 'imageFile/box1KeyHoleInserted.png');
        this.load.image('box1KeyHoleInsertedTurned', 'imageFile/box1KeyHoleInsertedTurned.png');
        this.load.image('hammerLayer', 'imageFile/hammerLayer.png');
        this.load.image('straw', 'imageFile/straw.png');

        this.load.image('controlPanel', 'imageFile/controlPanel.png');
        this.load.image('handle', 'imageFile/handle.png');
        this.load.image('handleHole', 'imageFile/handleHole.png');
        this.load.image('handleScene', 'imageFile/handleScene.png');
        this.load.image('controlPanelKeyHole', 'imageFile/ControlPanelKeyHole.png');
        this.load.image('controlPanelKeyHoleInserted', 'imageFile/ControlPanelKeyHoleInserted.png');
        this.load.image('controlPanelKeyHoleTurned', 'imageFile/ControlPanelKeyHoleTurned.png');
        this.load.audio('handleSound', 'soundFile/staple.mp3');
        this.load.audio('key4Sound', 'soundFile/stopFire.mp3');
        this.load.audio('mixStart', 'soundFile/pcOn.mp3');
        this.load.audio('mixEnd', 'soundFile/pcOff.mp3');
        this.load.spritesheet('handleSpriteSheet', 'imageFile/handleSpriteSheet.png', { frameWidth: 800, frameHeight: 600 })

        this.load.image('deskLamp', 'imageFile/DeskLamp.png');

        this.load.image('face1KeyHole', 'imageFile/Face1KeyHole.png');
        this.load.image('face1KeyInserted', 'imageFile/Face1KeyInserted.png');
        this.load.image('face1KeyTurned', 'imageFile/Face1KeyTurned.png');

        this.load.image('face1', 'imageFile/Face1.png');
        this.load.image('face1KeyFalse', 'imageFile/Face1KeyFalse.png');
        this.load.image('face1KeyTrue', 'imageFile/Face1KeyTrue.png');
        this.load.image('face1Beyond', 'imageFile/Face1Beyond.png');
        this.load.audio('doorSound', 'soundFile/opendoor.mp3');

        this.load.image('face2', 'imageFile/Face2.png');
        this.load.image('scissors', 'imageFile/scissors.png');
        this.load.image('scissorsLayer', 'imageFile/scissorsLayer.png');


        // this.load.image('closetDoorRight', 'imageFile/Face2ClosetDoorRight.png');
        // this.load.image('closetDoorLeft', 'imageFile/Face2ClosetDoorLeft.png');

        this.load.image('Face2ClosetDoorDefault', 'imageFile/Face2ClosetDoorDefault.png');
        this.load.image('Face2ClosetDoor2', 'imageFile/Face2ClosetDoor2.png');
        this.load.image('Face2ClosetDoor3', 'imageFile/Face2ClosetDoor3.png');
        this.load.image('Face2ClosetDoor4', 'imageFile/Face2ClosetDoor4.png');
        
        //this.load.image('pensRange', 'imageFile/30x30.png');
        
        this.load.image('deskDrawer1', 'imageFile/deskDrawer1.png');
        this.load.image('drawer1FalseRange', 'imageFile/206x40.png');
        this.load.image('drawer1TrueRange', 'imageFile/237x70.png');
        this.load.image('clickedArea', 'imageFile/10x10.png');
        //this.load.image('pcCable', 'imageFile/pcCable.png');
        this.load.image('key1', 'imageFile/key1.png');  
        this.load.image('drawer2Open', 'imageFile/drawer2Open.png');  
        this.load.image('drawer3Open', 'imageFile/drawer3Open.png');  
        this.load.image('drawer4Open', 'imageFile/drawer4Open.png'); 

        this.load.audio('break2', 'soundFile/heavyPunch.mp3');
        this.load.audio('break', 'soundFile/punch3.mp3');
        this.load.audio('drawerOpen', 'soundFile/openDrawer.mp3');
        this.load.audio('drawerClose', 'soundFile/cupboard1_C.mp3');

        this.load.image('face3', 'imageFile/Face3.png');
        this.load.image('bracketClose', 'imageFile/bracketCloseScene.png');
        this.load.image('bracketOpenFalse', 'imageFile/bracketOpenFalseScene.png');
        this.load.image('bracketOpenTrue', 'imageFile/bracketOpenTrueScene.png');
        this.load.image('bracketOpenTrueFalse', 'imageFile/bracketOpenTrueFalseScene.png');
        this.load.image('Face3HandleLayer', 'imageFile/Face3HandleLayer.png');
        this.load.image('monitorLayer', 'imageFile/monitorLayer.png');
        this.load.image('screenLayerOn', 'imageFile/screenLayerOn.png');
        this.load.image('hint1', 'imageFile/hint1.png');
        this.load.image('bigHammerLayer', 'imageFile/bigHammerLayer.png');
        this.load.image('vineLayer', 'imageFile/vineLayer.png');
        this.load.image('leavesLayer', 'imageFile/leavesLayer.png');
        this.load.image('leaves', 'imageFile/leaves.png');
        this.load.image('bigHammer', 'imageFile/bigHammer.png');
        this.load.audio('screenSound', 'soundFile/button35.mp3');
        this.load.audio('scissorsSound', 'soundFile/scissors3.mp3');
        this.load.audio('bracketSound', 'soundFile/bofu.mp3');

        this.load.image('face4', 'imageFile/Face4.png');
        this.load.image('paintDefault', 'imageFile/paintDefault.png');
        this.load.image('paintClicked', 'imageFile/paintClicked.png');
        this.load.image('paintDone', 'imageFile/paintDone.png');
        this.load.image('Face4GlassCupLayer', 'imageFile/Face4GlassCupLayer.png');
        this.load.image('vaultDoor', 'imageFile/vaultDoor.png');
        this.load.image('face4HummerHitAction', 'imageFile/face4HummerHitAction.png');
        this.load.image('face4BallDoneLayer', 'imageFile/Face4BallDoneLayer.png');
        this.load.image('key4Layer', 'imageFile/key4Layer.png');
        this.load.image('key4', 'imageFile/key4.png');
        this.load.audio('paintSound', 'soundFile/takeDVD.mp3');
        this.load.audio('paintRemoved', 'soundFile/openDVDCase.mp3');

        this.load.image('drawer1Down', 'imageFile/drawer1Downside.png');
        this.load.image('key1Layer', 'imageFile/key1Layer.png');

        this.load.image('drawer1Up', 'imageFile/drawer1Upside.png');
        this.load.image('pcCableLayer', 'imageFile/pcCableLayer.png');
        this.load.image('screenControler', 'imageFile/screenControler.png');
        this.load.image('screenControlerLayer', 'imageFile/screenControlerLayer.png');

        this.load.image('drawer3', 'imageFile/drawer3.png');    
        this.load.image('bananaLayer', 'imageFile/drawer2BananasLayer.png');
        this.load.image('bananas', 'imageFile/bananas.png'); 

        this.load.image('drawer3', 'imageFile/drawer3.png');    
        this.load.image('handle', 'imageFile/handle.png'); 
        this.load.image('handleLayer', 'imageFile/handleLayer.png');
        
        this.load.image('drawer4', 'imageFile/drawer4.png');
        this.load.image('drawer4Lid', 'imageFile/drawer4Lid.png');
        this.load.image('iceLayer', 'imageFile/iceLayer.png');
        this.load.image('milkLayer', 'imageFile/milkLayer.png');
        this.load.image('milk', 'imageFile/milk.png'); 
        this.load.audio('drip', 'soundFile/potapota.mp3');
        this.load.audio('acid', 'soundFile/roasting_butter.mp3');
        this.load.audio('acid2', 'soundFile/gutugutu.mp3');
        this.load.spritesheet('drawer4LidSpriteSheet', 'imageFile/drawer4LidSpriteSheet.png', { frameWidth: 800, frameHeight: 600 });

        this.load.audio('applause', 'soundFile/waa.mp3');

        this.load.image('paintNum', 'imageFile/paintNum.png');

        this.load.image('peekThroughNum', 'imageFile/PeekThroughNum.png');

        this.load.image('screenSide', 'imageFile/ScreenSide.png');
        this.load.image('key2Layer', 'imageFile/key2Layer.png');
        this.load.image('key2', 'imageFile/key2.png');
        this.load.image('power', 'imageFile/powerLayer.png');
        this.load.image('powerPressed', 'imageFile/powerLayerPressed.png');

        this.load.image('shed', 'imageFile/shed.png');
        this.load.image('shed1BottleLayer', 'imageFile/Shed1BottleLayer.png');
        //this.load.image('shed1Num', 'imageFile/Shed1Num.png');
        this.load.image('bottle', 'imageFile/bottle.png');

        this.load.image('shed2', 'imageFile/shed2.png');
        this.load.image('messageLayer', 'imageFile/messageLayer.png');

        this.load.image('proteinLayer', 'imageFile/proteinLayer.png');
        this.load.image('protein', 'imageFile/protein.png');

        this.load.image('vault', 'imageFile/VaultScene.png');
        this.load.image('vaultNumsLayer', 'imageFile/vaultNumsLayer.png');
        this.load.image('vaultInside', 'imageFile/vaultInside.png');
        this.load.image('vaultLine', 'imageFile/vaultLine.png');
        this.load.image('vaultMask', 'imageFile/vaultMask.png');
        this.load.image('glassCup', 'imageFile/glassCup.png');
        this.load.image('glassCupAndKey3', 'imageFile/glassCupAndKey3.png');
        this.load.image('drinkLayerBanana', 'imageFile/drinkLayerBanana.png');
        this.load.image('drinkLayerBananaAndFull', 'imageFile/drinkLayerBananaAndFull.png');
        this.load.image('drinkLayerBananaAndHalf', 'imageFile/drinkLayerBananaAndHalf.png');
        this.load.image('drinkLayerFull', 'imageFile/drinkLayerFull.png');
        this.load.image('drinkLayerHalf', 'imageFile/drinkLayerHalf.png');
        this.load.image('drinkLayerLeaf', 'imageFile/drinkLayerLeaf.png');
        this.load.image('drinkLayerBananaAndLeaf', 'imageFile/drinkLayerBananaAndLeaf.png');
        this.load.image('drinkLayerLeafAndHalf', 'imageFile/drinkLayerLeafAndHalf.png');
        this.load.image('drinkLayerBananaAndLeafAndHalf', 'imageFile/drinkLayerBananaAndLeafAndHalf.png');
        this.load.image('drinkLayerLeafAndFull', 'imageFile/drinkLayerLeafAndFull.png');
        this.load.image('drinkLayerBananaAndLeafAndFull', 'imageFile/drinkLayerBananaAndLeafAndFull.png');
        this.load.image('drinkLayer', 'imageFile/drinkLayer.png');
        this.load.image('drinkStrawLayer', 'imageFile/drinkStrawLayer.png')
        this.load.image('drinkDone', 'imageFile/drinkDone.png')
        this.load.image('key3', 'imageFile/key3.png');
        this.load.image('zero', 'imageFile/zero.png');
        this.load.image('one', 'imageFile/one.png');
        this.load.image('two', 'imageFile/two.png');
        this.load.image('three', 'imageFile/three.png');
        this.load.image('four', 'imageFile/four.png');
        this.load.image('five', 'imageFile/five.png');
        this.load.image('six', 'imageFile/six.png');
        this.load.image('seven', 'imageFile/seven.png');
        this.load.image('eight', 'imageFile/eight.png');
        this.load.image('nine', 'imageFile/nine.png');
        this.load.image('ballActionMask', 'imageFile/ballActionMask.png');
        this.load.audio('tap', 'soundFile/cursorMove.mp3');
        this.load.audio('correct', 'soundFile/button40.mp3');
        this.load.audio('dropKey', 'soundFile/dropKey.mp3');
        this.load.audio('drinkSound', 'soundFile/drinking1.mp3');
        this.load.audio('vaultOpneSound', 'soundFile/deep_bass_vib.mp3');
        this.load.audio('vaultOpneSound2', 'soundFile/cameraShutter.mp3');
        this.load.audio('vaultOpneSound3', 'soundFile/pushu.mp3');
        this.load.spritesheet('ballSpriteSheet', 'imageFile/ballSpriteSheet.png', { frameWidth: 800, frameHeight: 600 });
        this.load.spritesheet('drinkSpriteSheet', 'imageFile/drinkSpriteSheet.png', { frameWidth: 800, frameHeight: 600 });
        
    }

    create() {
    
        this.add.text(200, 300, "Escape Room", { font: "50px Times New Roman", fill:"#000000"});
        
        this.input.on('pointerup', () => {
            this.common = this.sound.add('common');
            this.common.play();
            this.scene.stop('StartScene');
            this.scene.start('GameScene1');
        })
    }

}


