class GameScene2 extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene2'})
    }

    preload() {
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

        this.load.audio('break2', 'soundFile/パンチで壁を破壊.mp3');
        this.load.audio('break', 'soundFile/重いパンチ3.mp3');
        this.load.audio('drawerOpen', 'soundFile/引き出しを開ける.mp3');
        this.load.audio('drawerClose', 'soundFile/cupboard1_C.mp3');
    }

    create() {
        this.face2 = this.add.image(0, 0, 'face2').setOrigin(0, 0);
        this.locked = this.sound.add('locked');
        this.drawerOpen = this.sound.add('drawerOpen');
        this.drawerClose = this.sound.add('drawerClose');
        
        // Drawer1

        const deskDrawer1 = this.add.image(0, 0, 'deskDrawer1').setOrigin(0, 0);
        deskDrawer1.setVisible(false);

        const drawer1FalseRange = this.add.graphics();
        
        drawer1FalseRange.fillStyle(0x00000).fillRect(453, 415, 206, 40);
        const drawer1TrueRangeAbove = this.add.graphics();
        const drawer1TrueRangeAboveX = 440;
        const drawer1TrueRangeAboveY = 390;

        drawer1TrueRangeAbove.fillStyle(0x000000);

        drawer1TrueRangeAbove.beginPath();
        drawer1TrueRangeAbove.moveTo(drawer1TrueRangeAboveX, drawer1TrueRangeAboveY);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX + 238, drawer1TrueRangeAboveY);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX + 240, drawer1TrueRangeAboveY + 40);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 40);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 25);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 25);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 40);
        drawer1TrueRangeAbove.lineTo(drawer1TrueRangeAboveX , drawer1TrueRangeAboveY + 45);

        drawer1TrueRangeAbove.closePath();
        drawer1TrueRangeAbove.fillPath();

        const drawer1TrueRangeBelow = this.add.graphics();
        const drawer1TrueRangeBelowX = 440;
        const drawer1TrueRangeBelowY = 435;

        drawer1TrueRangeBelow.fillStyle(0x000000);

        drawer1TrueRangeBelow.beginPath();
        drawer1TrueRangeBelow.moveTo(drawer1TrueRangeBelowX, drawer1TrueRangeBelowY + 20);
        // drawer1TrueRangeBelow.lineTo(drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 40);
        // drawer1TrueRangeBelow.lineTo(drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 45);
        // drawer1TrueRangeBelow.lineTo(drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 45);
        // drawer1TrueRangeBelow.lineTo(drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 40);
        drawer1TrueRangeBelow.lineTo(drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 50);
        drawer1TrueRangeBelow.lineTo(drawer1TrueRangeBelowX + 245, drawer1TrueRangeAboveY + 80);
        drawer1TrueRangeBelow.lineTo(drawer1TrueRangeBelowX , drawer1TrueRangeBelowY + 45);

        drawer1TrueRangeBelow.closePath();
        drawer1TrueRangeBelow.fillPath();

        const drawer1TrueRangeCenter = this.add.graphics();

        drawer1TrueRangeCenter.fillStyle(0x000000);

        drawer1TrueRangeCenter.beginPath();
        drawer1TrueRangeCenter.moveTo(drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 25);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 25);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 45);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 45);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 50);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeBelowX, drawer1TrueRangeBelowY + 20);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeAboveX , drawer1TrueRangeAboveY + 45);
        drawer1TrueRangeCenter.lineTo(drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 45);

        //[[drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 25], [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 25], [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 45], [drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 45], [drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 50], [drawer1TrueRangeBelowX, drawer1TrueRangeBelowY + 20], [drawer1TrueRangeAboveX , drawer1TrueRangeAboveY + 45], [drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 45]]
   

        drawer1TrueRangeCenter.closePath();
        drawer1TrueRangeCenter.fillPath();

        drawer1TrueRangeAbove.setVisible(false);
        drawer1TrueRangeAbove.setInteractive(new Phaser.Geom.Polygon([[drawer1TrueRangeAboveX, drawer1TrueRangeAboveY], 
            [drawer1TrueRangeAboveX + 238, drawer1TrueRangeAboveY], 
            [drawer1TrueRangeAboveX + 240, drawer1TrueRangeAboveY + 40], 
            [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 40], 
            [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 25], 
            [drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 25], 
            [drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 40], 
            [drawer1TrueRangeAboveX , drawer1TrueRangeAboveY + 45]]), Phaser.Geom.Polygon.Contains);
        
        drawer1TrueRangeBelow.setVisible(false);
        drawer1TrueRangeBelow.setInteractive(new Phaser.Geom.Polygon([[drawer1TrueRangeBelowX, drawer1TrueRangeBelowY + 20], 
                                                                    // [drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 40], 
                                                                    // [drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 45], 
                                                                    // [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 45], 
                                                                    // [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 40], 
                                                                    [drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 50], 
                                                                    [drawer1TrueRangeBelowX + 245, drawer1TrueRangeAboveY + 80], 
                                                                    [drawer1TrueRangeBelowX , drawer1TrueRangeBelowY + 45]]), Phaser.Geom.Polygon.Contains);

        drawer1TrueRangeCenter.setVisible(false);
        drawer1TrueRangeCenter.setInteractive(new Phaser.Geom.Polygon([[drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 25], [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 25], [drawer1TrueRangeAboveX + 175, drawer1TrueRangeAboveY + 45], [drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 45], [drawer1TrueRangeBelowX + 238, drawer1TrueRangeAboveY + 50], [drawer1TrueRangeBelowX, drawer1TrueRangeBelowY + 20], [drawer1TrueRangeAboveX , drawer1TrueRangeAboveY + 45], [drawer1TrueRangeAboveX + 75, drawer1TrueRangeAboveY + 45]]), Phaser.Geom.Polygon.Contains);

        drawer1FalseRange.setVisible(false);
        drawer1FalseRange.setInteractive(new Phaser.Geom.Rectangle(453, 415, 206, 40), Phaser.Geom.Rectangle.Contains);
        drawer1FalseRange.input.alwaysEnabled = true;
        

        drawer1FalseRange.on('pointerup', () => {
            this.drawerOpen.play();
            this.drawer3HitArea.input.alwaysEnabled = false;
            if (this.drawer2HitArea) { this.drawer2HitArea.input.alwaysEnabled = false };
            this.drawer4HitArea.input.alwaysEnabled = false; 
            deskDrawer1.setVisible(true);
            drawer1FalseRange.input.alwaysEnabled = false;
            drawer1TrueRangeAbove.input.alwaysEnabled = true;
            drawer1TrueRangeBelow.input.alwaysEnabled = true;
            drawer1TrueRangeCenter.input.alwaysEnabled = true;
        })

        drawer1TrueRangeCenter.on('pointerup', () => {
            this.drawerClose.play();
            this.drawer3HitArea.input.alwaysEnabled = true;
            this.drawer4HitArea.input.alwaysEnabled = true; 
            if (this.drawer2HitArea) { this.drawer2HitArea.input.alwaysEnabled = true };
            deskDrawer1.setVisible(false);
            drawer1FalseRange.input.alwaysEnabled = true;
            drawer1TrueRangeAbove.input.alwaysEnabled = false;
            drawer1TrueRangeBelow.input.alwaysEnabled = false;
            drawer1TrueRangeCenter.input.alwaysEnabled = false;
        })

        
        drawer1TrueRangeAbove.on('pointerup', () => {
            this.scene.stop('GameScene2');
            this.scene.start('GameSceneDrawer1Upside');
        })
        
        drawer1TrueRangeBelow.on('pointerup', () => {
            this.scene.stop('GameScene2');
            this.scene.start('GameSceneDrawer1Downside');
        })

        /* cursor pointer memo
        drawer1FalseRange.on('pointerup', function(pointer) {
            deskDrawer1.visible = !deskDrawer1.visible;
            //drawer1TrueRange.input.alwaysEnabled = true;
            console.log(pointer.x, pointer.y)
            if (gameState.clickedArea.area) {
                gameState.clickedArea.area.destroy();
            }
            gameState.clickedArea.area = this.add.image(pointer.x, pointer.y, 'clickedArea');
            gameState.clickedArea.area.setInteractive();
            console.log("I'm false range.");
            
        }, this)
        */
        

        // Drawer2

        if (!gameState.items.key2.done) { 

            this.key2DropArea = this.add.graphics();
            const key2DropAreaPoints = [740, 418, 20];

            this.setHitArea(this.key2DropArea, key2DropAreaPoints, false, true, true);

            this.key2DropArea.on('pointerup', function() {

                this.locked.play();

            }, this);

            this.input.on('drop', function(p, ob, dropZone) {

                if (dropZone === this.key2DropArea && gameState.grabedItem.id === 'key2') {

                    this.itemDone('key2');
                    this.unlock = this.sound.add('unlock');
                    this.unlock.play();
                    this.key2DropArea.destroy();
                    gameState.items.key2.done = true;

                    
                    this.drawer2HitArea = this.add.graphics();
                    this.drawer2HitAreaPoints = [660, 410, 760, 400, 760, 465, 660, 465];
        
                    this.setHitArea(this.drawer2HitArea, this.drawer2HitAreaPoints, false);
        
                    this.drawer2HitArea.on('pointerup', function() {
                        this.drawerOpen.play();
                        this.drawer3HitArea.input.alwaysEnabled = false; 
                        this.drawer4HitArea.input.alwaysEnabled = false;
                        drawer1FalseRange.input.alwaysEnabled = false;
        
                        this.drawer2Open = this.add.image(0, 0, 'drawer2Open').setOrigin(0, 0);
                        this.drawer2HitArea.input.alwaysEnabled = false;
        
                        this.drawer2OpenHitAreaClose = this.add.graphics();
                        const drawer2OpenHitAreaClose  = [650, 405, 770, 400, 770, 460, 650, 460];
        
                        this.setHitArea(this.drawer2OpenHitAreaClose, drawer2OpenHitAreaClose, false);
        
                        this.drawer2OpenHitArea = this.add.graphics();
                        const drawer2OpenHitArea  = [650, 370, 770, 363, 770, 400, 650, 405];
        
                        this.setHitArea(this.drawer2OpenHitArea, drawer2OpenHitArea, false);
        
                        this.drawer2OpenHitAreaClose.on('pointerup', function() {
                            this.drawerClose.play();
                            this.drawer3HitArea.input.alwaysEnabled = true;
                            this.drawer4HitArea.input.alwaysEnabled = true; 
                            drawer1FalseRange.input.alwaysEnabled = true;
                            this.drawer2Open.destroy();
                            this.drawer2OpenHitAreaClose.destroy();
                            this.drawer2OpenHitArea.destroy();
        
                            this.drawer2HitArea.input.alwaysEnabled = true;
                        }, this);
        
                        this.drawer2OpenHitArea.on('pointerup', function() {
                            this.scene.stop('GameScene2');
                            this.scene.start('GameSceneDrawer2');
                        }, this);
        
                    }, this);


                }

            }, this)

    } else {

        this.drawer2HitArea = this.add.graphics();
        this.drawer2HitAreaPoints = [660, 410, 760, 400, 760, 465, 660, 465];

        this.setHitArea(this.drawer2HitArea, this.drawer2HitAreaPoints, false);

        this.drawer2HitArea.on('pointerup', function() {
            this.drawerOpen.play();
            this.drawer3HitArea.input.alwaysEnabled = false;
            this.drawer4HitArea.input.alwaysEnabled = false; 
            drawer1FalseRange.input.alwaysEnabled = false;

            this.drawer2Open = this.add.image(0, 0, 'drawer2Open').setOrigin(0, 0);
            this.drawer2HitArea.input.alwaysEnabled = false;

            this.drawer2OpenHitAreaClose = this.add.graphics();
            const drawer2OpenHitAreaClose  = [650, 405, 770, 400, 770, 460, 650, 460];

            this.setHitArea(this.drawer2OpenHitAreaClose, drawer2OpenHitAreaClose, false);

            this.drawer2OpenHitArea = this.add.graphics();
            const drawer2OpenHitArea  = [650, 370, 770, 363, 770, 400, 650, 405];

            this.setHitArea(this.drawer2OpenHitArea, drawer2OpenHitArea, false);

            this.drawer2OpenHitAreaClose.on('pointerup', function() {
                this.drawerClose.play();
                this.drawer3HitArea.input.alwaysEnabled = true;
                this.drawer4HitArea.input.alwaysEnabled = true; 
                drawer1FalseRange.input.alwaysEnabled = true;
                this.drawer2Open.destroy();
                this.drawer2OpenHitAreaClose.destroy();
                this.drawer2OpenHitArea.destroy();

                this.drawer2HitArea.input.alwaysEnabled = true;
            }, this);

            this.drawer2OpenHitArea.on('pointerup', function() {
                this.scene.stop('GameScene2');
                this.scene.start('GameSceneDrawer2');
            }, this);

        }, this);

    }


        // Drawer3
        this.drawer3HitArea = this.add.graphics();
        this.drawer3HitAreaPoints = [660, 465, 760, 465, 760, 510, 660, 510];

        this.setHitArea(this.drawer3HitArea, this.drawer3HitAreaPoints, false);

        this.drawer3HitArea.on('pointerup', function() {
            this.drawerOpen.play();
            if (this.drawer2HitArea) { this.drawer2HitArea.input.alwaysEnabled = false; }
            this.drawer4HitArea.input.alwaysEnabled = false; 
            drawer1FalseRange.input.alwaysEnabled = false;

            this.drawer3Open = this.add.image(0, 0, 'drawer3Open').setOrigin(0, 0);
            this.drawer3HitArea.input.alwaysEnabled = false;

            this.drawer3OpenHitAreaClose = this.add.graphics();
            const drawer3OpenHitAreaClose  = [650, 480, 770, 480, 770, 525, 650, 525];

            this.setHitArea(this.drawer3OpenHitAreaClose, drawer3OpenHitAreaClose, false);

            this.drawer3OpenHitArea = this.add.graphics();
            const drawer3OpenHitArea  = [650, 440, 770, 440, 770, 480, 650, 480];

            this.setHitArea(this.drawer3OpenHitArea, drawer3OpenHitArea, false);

            this.drawer3OpenHitAreaClose.on('pointerup', function() {
                this.drawerClose.play();
                if (this.drawer2HitArea) { this.drawer2HitArea.input.alwaysEnabled = true; }
                this.drawer4HitArea.input.alwaysEnabled = true; 
                drawer1FalseRange.input.alwaysEnabled = true;

                this.drawer3Open.destroy();
                this.drawer3OpenHitAreaClose.destroy();
                this.drawer3OpenHitArea.destroy();

                this.drawer3HitArea.input.alwaysEnabled = true;
            }, this);

            this.drawer3OpenHitArea.on('pointerup', function() {
                this.scene.stop('GameScene2');
                this.scene.start('GameSceneDrawer3');
            }, this);

        }, this);


        // Drawer4
        this.drawer4HitArea = this.add.graphics();
        this.drawer4HitAreaPoints = [660, 515, 760, 515, 760, 600, 660, 600];

        this.setHitArea(this.drawer4HitArea, this.drawer4HitAreaPoints, false);

        this.drawer4HitArea.on('pointerup', function() {
            this.drawerOpen.play();
            if (this.drawer2HitArea) { this.drawer2HitArea.input.alwaysEnabled = false; }
            this.drawer3HitArea.input.alwaysEnabled = false; 
            drawer1FalseRange.input.alwaysEnabled = false;

            this.drawer4Open = this.add.image(0, 0, 'drawer4Open').setOrigin(0, 0);
            this.drawer4HitArea.input.alwaysEnabled = false;

            this.drawer4OpenHitAreaClose = this.add.graphics();
            const drawer4OpenHitAreaClose  = [640, 515, 760, 505, 760, 600, 640, 600];

            this.setHitArea(this.drawer4OpenHitAreaClose, drawer4OpenHitAreaClose, false);

            this.drawer4OpenHitArea = this.add.graphics();
            const drawer4OpenHitArea  = [640, 485, 760, 475, 760, 505, 640, 515];

            this.setHitArea(this.drawer4OpenHitArea, drawer4OpenHitArea, false);

            this.drawer4OpenHitAreaClose.on('pointerup', function() {
                this.drawerClose.play();
                if (this.drawer2HitArea) { this.drawer2HitArea.input.alwaysEnabled = true; }
                this.drawer3HitArea.input.alwaysEnabled = true; 
                drawer1FalseRange.input.alwaysEnabled = true;

                this.drawer4Open.destroy();
                this.drawer4OpenHitAreaClose.destroy();
                this.drawer4OpenHitArea.destroy();

                this.drawer4HitArea.input.alwaysEnabled = true;
            }, this);

            this.drawer4OpenHitArea.on('pointerup', function() {
                this.scene.stop('GameScene2');
                this.scene.start('GameSceneDrawer4');
            }, this);

        }, this);
        
        
        //Lamp hit area

        this.deskLampHitArea = this.add.graphics();
        const deskLampHitAreaPoints = [675, 220, 50];

        this.setHitArea(this.deskLampHitArea, deskLampHitAreaPoints, false);

        this.deskLampHitArea.on('pointerup', function() {
            this.scene.stop('GameScene2');
            this.scene.start('DeskLamp');
        }, this)

        //Scissors

        if (!gameState.items.scissors.found) {

            this.scissorsLayer = this.add.image(0, 0, 'scissorsLayer').setOrigin(0, 0);

            this.scissorsLayerHitArea = this.add.graphics();
            const scissorsLayerHitAreaPoints = [485, 325, 515, 325, 515, 350, 485, 350];

            this.setHitArea( this.scissorsLayerHitArea, scissorsLayerHitAreaPoints, false);

            this.scissorsLayerHitArea.on('pointerdown', function() {

                this.scissorsLayer.destroy();
                this.scissorsLayerHitArea.destroy();

                this.getItem('scissors');

            }, this);

        }

        //Closet

        if (!gameState.doneEvents.closet.done) {

            this.closetDoor = this.add.image(0, 0, 'Face2ClosetDoorDefault').setOrigin(0, 0);

            this.closetHitArea = this.add.graphics();
            const closetHitAreaPoints = [40, 130, 330, 130, 330, 600, 40, 600];

            this.setHitArea(this.closetHitArea, closetHitAreaPoints, false, true, true);

            this.closetHitArea.on('pointerup', function() {

                this.locked.play();

            }, this);

            this.input.on('drop', function(o, ob, dropZone) {

                this.break = this.sound.add('break');
                this.break2 = this.sound.add('break2');

                if (dropZone === this.closetHitArea && gameState.grabedItem.id === 'bigHammer') {

                    if (gameState.doneEvents.closet.count < 1) {

                        this.break.play();

                    } else if (gameState.doneEvents.closet.count < 2) {

                        this.closetDoor.destroy();
                        this.closetDoor = this.add.image(0, 0, 'Face2ClosetDoor2').setOrigin(0, 0);
                        this.break.play();

                    } else if (gameState.doneEvents.closet.count < 3) {

                        this.closetDoor.destroy();
                        this.closetDoor = this.add.image(0, 0, 'Face2ClosetDoor3').setOrigin(0, 0);
                        this.break.play();

                    } else if (gameState.doneEvents.closet.count < 4) {

                        this.closetDoor.destroy();
                        this.closetDoor = this.add.image(0, 0, 'Face2ClosetDoor4').setOrigin(0, 0);
                        this.break.play();

                    } else if (gameState.doneEvents.closet.count < 5) {

                        this.closetDoor.destroy();
                        this.closetHitArea.destroy();
                        gameState.doneEvents.closet.done = true;
                        this.break2.play();


                        this.goalHitArea = this.add.graphics();
                        const goalHitAreaPoints = [40, 130, 330, 130, 330, 600, 40, 600];

                        this.setHitArea(this.goalHitArea, goalHitAreaPoints, false);


                        this.goalHitArea.on('pointerup', function() {

                            this.goalHitArea.destroy();

                            this.whiteBack = this.add.graphics();
                            this.whiteBack.fillStyle(0xFFFFFF, 0);
                            this.whiteBack.fillRect(0, 0, 800, 600);
                            let count = 0;

                            const goalAnims = setInterval(() => {

                                if (count > 8) {

                                    setTimeout(goalAnims);

                                    this.scene.stop('GameScene2');
                                    this.scene.start('GoalScene');

                                } else {

                                this.face2.scale += 0.1;
                                this.face2.x += 10;
                                this.face2.y -= 20;
                                this.whiteBack.fillStyle(0xFFFFFF, count * 0.1);
                                this.whiteBack.fillRect(0, 0, 800, 600);
                                count ++;
                                
                                }

                            }, 200);

                        }, this)
                    }

                    gameState.doneEvents.closet.count ++;

                }

            }, this);

        } else {

            this.goalHitArea = this.add.graphics();
            const goalHitAreaPoints = [40, 130, 330, 130, 330, 600, 40, 600];

            this.setHitArea(this.goalHitArea, goalHitAreaPoints, false);


            this.goalHitArea.on('pointerup', function() {

                this.goalHitArea.destroy();

                this.whiteBack = this.add.graphics();
                this.whiteBack.fillStyle(0xFFFFFF, 0);
                this.whiteBack.fillRect(0, 0, 800, 600);
                let count = 0;

                const goalAnims = setInterval(() => {

                    if (count > 8) {

                        setTimeout(goalAnims);

                        this.scene.stop('GameScene2');
                        this.scene.start('GoalScene');

                    } else {

                        this.face2.scale += 0.1;
                        this.face2.x += 10;
                        this.face2.y -= 20;
                        this.whiteBack.fillStyle(0xFFFFFF, count * 0.1);
                        this.whiteBack.fillRect(0, 0, 800, 600);
                        count ++;
                    
                    }

                }, 200);

            }, this)
        }




        this.itemBarConstructor();
        this.navArrowsConstructor('GameScene2', 'GameScene1', 'GameScene3');
    }

    navArrowsConstructor(from, leftTo, rightTo) {
        this.rightArrow = this.add.image(780, 300, 'rightArrow');
        this.leftArrow = this.add.image(20, 300, 'leftArrow');
        
        this.rightArrow.setVisible(false);
        this.leftArrow.setVisible(false);
            
        this.rightArrow.setInteractive();
        this.leftArrow.setInteractive();
    
        this.rightArrow.input.alwaysEnabled = true;
        this.leftArrow.input.alwaysEnabled = true;
            
    
        this.rightArrow.on('pointerover', () => {
            this.rightArrow.setVisible(true);
        });
        this.rightArrow.on('pointerout', () => {
            this.rightArrow.setVisible(false);
        });
    
        this.leftArrow.on('pointerover', () => {
            this.leftArrow.setVisible(true);
        });
        this.leftArrow.on('pointerout', () => {
            this.leftArrow.setVisible(false);
        });

        if (rightTo) {
            this.rightArrow.on('pointerup', () => {
                this.scene.stop(from);
                this.scene.start(rightTo);
            });
        }

        if (leftTo) {
            this.leftArrow.on('pointerup', () => {
                this.scene.stop(from);
                this.scene.start(leftTo);
            });
        }
    }

    navBelowArrowBConstructor(from, belowTo) {

        this.belowArrow = this.add.image(400, 580, 'belowArrow');
        
        this.belowArrow.setVisible(false);
            
        this.belowArrow.setInteractive();
    
        this.belowArrow.input.alwaysEnabled = true;
            
    
        this.belowArrow.on('pointerover', () => {
            this.belowArrow.setVisible(true);
        });
        this.belowArrow.on('pointerout', () => {
            this.belowArrow.setVisible(false);
        });

        if (belowTo) {
            this.belowArrow.on('pointerup', () => {
                this.scene.stop(from);
                this.scene.start(belowTo);
            });
        }

    }

    itemBarConstructor() {
        this.itemIcon = this.add.image(720, 30, 'itemIcon');

        gameState.itemBarOpen ? this.itemBar = this.add.container(400, 30) : this.itemBar = this.add.container(400, -30);

        this.itemBarBackground = this.add.image(0, 0, 'itemBar');
        this.backIcon = this.add.image(320, 0, 'backIcon');

        this.itemBar.add(this.itemBarBackground);
        this.itemBar.add(this.backIcon);

        
        this.itemIcon.setInteractive();
        this.backIcon.setInteractive();

        this.itemIcon.on('pointerup', function() {
            if (this.itemBar.y > -30) {
                
            } else {
                const barDown = setInterval(() => {
                    if(this.itemBar.y >= 18) {
                        clearInterval(barDown);
                    }
                    this.itemBar.y += 12;
                }, 30);
            }

            gameState.itemBarOpen = true;

        }, this)

        this.backIcon.on('pointerup', function() {
            if (this.itemBar.y < 30) {

            } else {
                const barUp = setInterval(() => {
                    if(this.itemBar.y <= -30) {
                        clearInterval(barUp);
                    }
                    this.itemBar.y -= 12;
                }, 30);
            }

            gameState.itemBarOpen = false;
        }, this)

        for (let [i, item] of gameState.itemBar.entries()) {
            
            if (gameState.items[item].found) {
                gameState.items[item].icon = this.add.image(-370 + 40 + i * 60, 0, `${item}`).setInteractive();
                gameState.items[item].icon.alwaysEnabled = true
                this.itemBar.add(gameState.items[item].icon);


                gameState.items[item].icon.on('pointerdown', function(pointer) {
                    gameState.grabedItem.id = gameState.items[item].id;
                    gameState.grabedItem.icon = this.add.image(pointer.x, pointer.y, gameState.items[item].id);
                    
                    gameState.items[item].icon.drag = this.plugins.get('rexdragplugin').add(gameState.grabedItem.icon);
                    
                    gameState.items[item].icon.drag.drag();
        
                    gameState.items[item].icon.setVisible(false);
            
                    gameState.grabedItem.icon.on('dragend', function() {
                        gameState.grabedItem.icon.destroy();
                        gameState.items[item].icon.setVisible(true);
                        gameState.grabedItem = { id: undefined, icon: undefined }
                    }, [gameState.grabedItem.icon, this]);
                }, this);

            }

        }
    }

    destroyItemBar() {
        this.itemIcon.destory();
        this.itemBarBackground.destory();
        this.backIcon.destory();
        this.itemBar.destory();
    }

    setHitArea(object, pointArr, visible = true, enable = true, dropZone = false) {

        if(pointArr.length % 2 !== 0) {

            if(pointArr.length === 3) {

                object.fillStyle(0x000000, 0.5);
                object.fillCircle(pointArr[0], pointArr[1], pointArr[2]);
                object.setVisible(true);
                object.setInteractive(new Phaser.Geom.Circle(pointArr[0], pointArr[1], pointArr[2]), Phaser.Geom.Circle.Contains, dropZone);
                object.input.alwaysEnabled = enable;

            } else {

                return console.log('Points are add number.');

            }         

        } else if (pointArr.length < 6) {
            const tempPoints = [700 ,500 ,800 ,500, 700, 600];
            for(let i = 0; pointArr.length < 6; i += 2) {
                if(pointArr.length <= i) {
                    pointArr.push(tempPoints[i], tempPoints[i + 1]);
                }
            }
        } 

        object.fillStyle(0x000000, 0.5);

        object.beginPath();
        
        for(let [i, v] of pointArr.entries()) {
                if(i === 1) {
                    object.moveTo(pointArr[0], pointArr[1]);
                } else if (i % 2 === 1) {
                    object.lineTo(pointArr[i-1], pointArr[i]);
                }
        }

        object.closePath();
        object.fillPath();

        object.setVisible(visible);
        object.setInteractive(new Phaser.Geom.Polygon(pointArr), Phaser.Geom.Polygon.Contains, dropZone);
        object.input.alwaysEnabled = enable;

    }

    getItem(item) {
        gameState.itemBar.push(item);
        gameState.items[item].found = true;
        this.itemBar.destroy();
        this.itemBarConstructor();
        this.common = this.sound.add('common');
        this.common.play();
    }

    itemDone(item) {
        gameState.itemBar = gameState.itemBar.filter(function(value, index, arr) { 
            return value !== item;
        });
        gameState.items[item].done = true;
        this.itemBar.destroy();
        this.itemBarConstructor();
    }
}