class Vault extends Phaser.Scene {
    constructor() {
        super({key: 'Vault'})
    }

    preload() {
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
        this.load.image('drinkLayer', 'imageFIle/drinkLayer.png');
        this.load.image('drinkStrawLayer', 'imageFIle/drinkStrawLayer.png')
        this.load.image('drinkDone', 'imageFIle/drinkDone.png')
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
        this.load.audio('tap', 'soundFile/カーソル移動1.mp3');
        this.load.audio('correct', 'soundFile/決定ボタンを押す40.mp3');
        this.load.audio('dropKey', 'soundFile/鍵を落とす.mp3');
        this.load.audio('drinkSound', 'soundFile/drinking1.mp3');
        this.load.audio('vaultOpneSound', 'soundFile/deep_bass_vib.mp3');
        this.load.audio('vaultOpneSound2', 'soundFile/カメラのシャッター2.mp3');
        this.load.audio('vaultOpneSound3', 'soundFile/電車蒸気噴出.mp3');
        this.load.spritesheet('ballSpriteSheet', 'imageFile/ballSpriteSheet.png', { frameWidth: 800, frameHeight: 600 });
        this.load.spritesheet('drinkSpriteSheet', 'imageFile/drinkSpriteSheet.png', { frameWidth: 800, frameHeight: 600 });
    }

    create() {

        if (!gameState.doneEvents.glassCup.isDone) {

            //Vault pass
            if (!gameState.doneEvents.vault.isDone) {

                gameState.doneEvents.vault.num = [];

                this.vaultLineLeft = this.add.image(0, 0, 'vaultLine').setOrigin(0, 0);
                this.vaultLineRight = this.add.image(0, 0, 'vaultLine').setOrigin(0, 0);
        
                this.add.image(0, 0, 'vaultInside').setOrigin(0, 0);
        
                this.glassCup = this.add.image(0, 170, 'glassCupAndKey3').setOrigin(0, 0);
        
                this.vaultMask = this.add.image(0, 0, 'vaultMask').setOrigin(0, 0);

                this.tap = this.sound.add('tap');
                this.correct = this.sound.add('correct');

                const passNumber = 5132;

                this.vault = this.add.image(0, 0, 'vault').setOrigin(0, 0);
                this.vaultNumsLayer = this.add.image(0, 0, 'vaultNumsLayer').setOrigin(0, 0);

                this.zeroPanelHitArea = this.add.graphics();
                const zeroPanelHitAreaPoints = [240, 440, 290, 440, 290, 490, 240, 490];

                this.setHitArea(this.zeroPanelHitArea, zeroPanelHitAreaPoints, false);

                this.zeroPanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('zero');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.onePanelHitArea = this.add.graphics();
                const onePanelHitAreaPoints = [160, 380, 205, 375, 200, 430, 160, 430];

                this.setHitArea(this.onePanelHitArea, onePanelHitAreaPoints, false);

                this.onePanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('one');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.twoPanelHitArea = this.add.graphics();
                const twoPanelHitAreaPoints = [240, 375, 285, 375, 285, 420, 240, 420];

                this.setHitArea(this.twoPanelHitArea, twoPanelHitAreaPoints, false);

                this.twoPanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('two');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.threePanelHitArea = this.add.graphics();
                const threePanelHitAreaPoints = [325, 375, 375, 375, 370, 420, 325, 420];

                this.setHitArea(this.threePanelHitArea, threePanelHitAreaPoints, false);

                this.threePanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('three');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.fourPanelHitArea = this.add.graphics();
                const fourPanelHitAreaPoints = [160, 310, 210, 310, 210, 355, 160, 355];

                this.setHitArea(this.fourPanelHitArea, fourPanelHitAreaPoints, false);

                this.fourPanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('four');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.fivePanelHitArea = this.add.graphics();
                const fivePanelHitAreaPoints = [240, 305, 295, 305, 285, 355, 240, 355];

                this.setHitArea(this.fivePanelHitArea, fivePanelHitAreaPoints, false);

                this.fivePanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('five');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.sixPanelHitArea = this.add.graphics();
                const sixPanelHitAreaPoints = [330, 305, 380, 305, 380, 350, 330, 355];

                this.setHitArea(this.sixPanelHitArea, sixPanelHitAreaPoints, false);

                this.sixPanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('six');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.sevenPanelHitArea = this.add.graphics();
                const sevenPanelHitAreaPoints = [155, 230, 210, 230, 215, 280, 160, 280];

                this.setHitArea(this.sevenPanelHitArea, sevenPanelHitAreaPoints, false);

                this.sevenPanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('seven');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.eightPanelHitArea = this.add.graphics();
                const eightPanelHitAreaPoints = [245, 235, 310, 235, 305, 280, 240, 280];

                this.setHitArea(this.eightPanelHitArea, eightPanelHitAreaPoints, false);

                this.eightPanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('eight');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.ninePanelHitArea = this.add.graphics();
                const ninePanelHitAreaPoints = [330, 235, 385, 235, 380, 285, 330, 285];

                this.setHitArea(this.ninePanelHitArea, ninePanelHitAreaPoints, false);

                this.ninePanelHitArea.on('pointerup', function() {

                    if (gameState.doneEvents.vault.num.length <= 3) {

                        gameState.doneEvents.vault.num.push('nine');

                        this.numPanel();

                        this.tap.play();
                    }

                }, this);


                this.cancelPanelHitArea = this.add.graphics();
                const cancelPanelHitAreaPoints = [155, 445, 210, 440, 210, 480, 155, 485];

                this.setHitArea(this.cancelPanelHitArea, cancelPanelHitAreaPoints, false);

                this.cancelPanelHitArea.on('pointerup', function() {

                        gameState.doneEvents.vault.num = [];

                        this.numPanel();

                        this.tap.play();
                }, this);


                this.enterPanelHitArea = this.add.graphics();
                const enterPanelHitAreaPoints = [325, 435, 375, 435, 370, 485, 320, 485];

                this.setHitArea(this.enterPanelHitArea, enterPanelHitAreaPoints, false);

                this.enterPanelHitArea.on('pointerup', function() {

                        const enteredNum = gameState.doneEvents.vault.num
                                                    .reduce((string, ele) => {
                                                    
                                                        switch (ele) {
                                                            case 'zero':
                                                                string = string + '0';
                                                                break;
                                                            case 'one':
                                                                string = string + '1';
                                                                break;
                                                            case 'two':
                                                                string = string + '2';
                                                                break;
                                                            case 'three':
                                                                string = string + '3';
                                                                break;
                                                            case 'four':
                                                                string = string + '4';
                                                                break;
                                                            case 'five':
                                                                string = string + '5';
                                                                break;
                                                            case 'six':
                                                                string = string + '6';
                                                                break;
                                                            case 'seven':
                                                                string = string + '7';
                                                                break;
                                                            case 'eight':
                                                                string = string + '8';
                                                                break;
                                                            case 'nine':
                                                                string = string + '9';
                                                                break;
                                                        }

                                                        return string;

                                                    }, '');
                        
                        if (passNumber === Number(enteredNum)) {

                            this.correct.play();

                            gameState.doneEvents.vault.isDone = true;

                            this.numsContainer.destroy();

                            this.vaultNumsLayer.setVisible(false);
                            this.panel.setVisible(false);

                            setTimeout (() => {

                                this.vaultNumsLayer.setVisible(true);
                                this.panel.setVisible(true);

                                setTimeout (() => {

                                    this.vaultNumsLayer.destroy();
                                    this.panel.destroy();

                                    setTimeout(() => {
                                    
                                        this.vaultOpneSound = this.sound.add('vaultOpneSound', {volume: .1});

                                        this.vaultOpneSound.play();

                                        const moveVault = setInterval(() => {

                                            this.vault.x -= 10;

                                            if(this.vault.x <= -750) {
                                                this.vaultOpneSound.stop();
                                                clearInterval(moveVault);
                                            }

                                        }, 30);

                                        setTimeout(() => {

                                            //Ball

                                            if (!gameState.doneEvents.ball) {
                                            
                                                this.ballDropArea = this.add.graphics();
                                                const ballDropAreaPoints = [675, 250, 720, 250, 720, 365, 675, 365];

                                                this.setHitArea(this.ballDropArea, ballDropAreaPoints, false, true, true);



                                                this.input.on('drop', function(p, ob, dropZone) {

                                                    if(dropZone === this.ballDropArea && gameState.grabedItem.id === 'ball') {
                                                        this.itemDone('ball');
                                                        this.ballDropArea.destroy();
                                                        gameState.doneEvents.ball = true;

                                                        this.ballSprite = this.add.sprite(0, 0, 'ballSpriteSheet').setOrigin(0, 0);
                                                        this.ballActionMask = this.add.sprite(0, 0, 'ballActionMask').setOrigin(0, 0);

                                                        this.anims.create({
                                                            key: 'ballAction',
                                                            frames: this.anims.generateFrameNumbers('ballSpriteSheet', { start: 0, end: 4 }),
                                                            frameRate: 4,
                                                            repeat: 0
                                                        });

                                                        this.ballSprite.anims.play('ballAction', true);

                                                        gameState.doneEvents.ball = true;

                                                        const destroyBall = setTimeout(() => {

                                                            this.ballSprite.destroy();
                                                            this.ballActionMask.destroy();

                                                        }, 1300)

                                                        const keySound = setTimeout(() => {

                                                            this.keyDrop = this.sound.add('dropKey');
                                                            this.keyDrop.play();

                                                        }, 2000)
                                            
                                                        
                                                    }

                                                }, this);
                                            }

                                            this.vaultOpneSound2 = this.sound.add('vaultOpneSound2');
                                            this.vaultOpneSound2.play();

                                            const moveLine = setInterval(() => {

                                                this.vaultLineLeft.x -= 20;
                                                this.vaultLineRight.x += 20;

                                                if(this.vaultLineLeft.x <= -100) {
                                                    clearInterval(moveLine);
                                                }

                                            }, 30)

                                        }, 3000)

                                        setTimeout(() => {

                                            this.vaultOpneSound3 = this.sound.add('vaultOpneSound3');
                                            this.vaultOpneSound3.play();

                                            const moveGlass = setInterval(() => {

                                                this.glassCup.y -= 5;

                                                if(this.glassCup.y <= 0) {
                                                    clearInterval(moveGlass);
                                                }

                                            }, 30)

                                        }, 4000)

                                        setTimeout(() => {

                                            this.key3HitArea = this.add.graphics();
                                            const key3HitAreaPoints = [350, 370, 470, 370, 470, 510, 350, 510];

                                            this.setHitArea(this.key3HitArea, key3HitAreaPoints, false);

                                            this.key3HitArea.on('pointerdown', function() {

                                                this.key3HitArea.destroy();

                                                this.glassCup.destroy();
                                                this.glassCup = this.add.image(0, 0, 'glassCup').setOrigin(0, 0);

                                                this.getItem('key3');

                                                this.ingredientsDropArea = this.add.graphics();
                                                const ingredientsDropAreapoints = [350, 370, 470, 370, 470, 510, 350, 510];
        
                                                this.setHitArea(this.ingredientsDropArea, ingredientsDropAreapoints, false, true, true);

                                                this.input.on('drop', function(p, ob, dropZone) {

                                                    if (dropZone === this.ingredientsDropArea) {

                                                        switch (gameState.grabedItem.id) {

                                                            case 'bananas':
                                                                this.common.play();
                                                                gameState.doneEvents.glassCup.ingredients.push('bananas');
                                                                this.itemDone('bananas');
                                                                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
                                    
                                                                        this.glassCup.destroy();
                                    
                                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
                                                                        
                                    
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
                                    
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);
                                    
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
                        
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);
                        
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
            
                                                                                this.glassCup.destroy();
                        
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);
            
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);
            
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);

                                                                } else {
                                    
                                                                    this.glassCup.destroy();
                                    
                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBanana').setOrigin(0, 0);
                                    
                                                                }
                                                                break;
                                                            case 'protein':
                                                                this.common.play();
                                                                gameState.doneEvents.glassCup.ingredients.push('protein');
                                                                this.itemDone('protein');
                                                                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
                                    
                                                                        this.glassCup.destroy();
                                    
                                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
                                    
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
                                    
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);
                                    
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
                        
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);
                        
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
            
                                                                                this.glassCup.destroy();
                        
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);
            
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);
            
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                                                } else {
                                    
                                                                    this.glassCup.destroy();
                                    
                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);
                                    
                                                                }
                                                                break;
                                                            case 'milk':
                                                                this.common.play();
                                                                gameState.doneEvents.glassCup.ingredients.push('milk');
                                                                this.itemDone('milk');
                                                                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')
                                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
                                    
                                                                        this.glassCup.destroy();
                                    
                                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
                                    
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {
                                    
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);
                                    
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
                        
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);
                        
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
            
                                                                                this.glassCup.destroy();
                        
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);
            
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);
            
                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                                                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
            
                                                                                this.glassCup.destroy();
                                    
                                                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                                                } else {
                                    
                                                                    this.glassCup.destroy();
                                    
                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);
                                    
                                                                }
                                                                break;
                                                                case 'leaves':
                                                                    this.common.play();
                                                                    gameState.doneEvents.glassCup.ingredients.push('leaves');
                                                                    this.itemDone('leaves');
                                                                    if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
                                        
                                                                            this.glassCup.destroy();
                                        
                                                                            this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
                                        
                                                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
                                        
                                                                                    this.glassCup.destroy();
                                        
                                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);
                                        
                                                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
                            
                                                                                    this.glassCup.destroy();
                                        
                                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);
                            
                                                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
                
                                                                                    this.glassCup.destroy();
                            
                                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);
                
                                                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {
                
                                                                                    this.glassCup.destroy();
                                        
                                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);
                
                                                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
                
                                                                                    this.glassCup.destroy();
                                        
                                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);
        
                                                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
                
                                                                                    this.glassCup.destroy();
                                        
                                                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);
        
                                                                    } else {
                                        
                                                                        this.glassCup.destroy();
                                        
                                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerLeaf').setOrigin(0, 0);
                                        
                                                                    }
                                                                    break;
                                                            default:
                                                                break;
                                                        }

                                                    }
                    

                                                }, this);

                                            }, this);

                                        }, 5000)

                                    }, 500);

                                }, 500);

                            }, 500);



                        } else {

                            gameState.doneEvents.vault.num = [];

                            this.numPanel();

                            this.tap.play();
        
                        }


                }, this);

                this.numsContainer = this.add.container();
                this.numsContainer.add(this.zeroPanelHitArea);
                this.numsContainer.add(this.onePanelHitArea);
                this.numsContainer.add(this.twoPanelHitArea);
                this.numsContainer.add(this.threePanelHitArea);
                this.numsContainer.add(this.fourPanelHitArea);
                this.numsContainer.add(this.fivePanelHitArea);
                this.numsContainer.add(this.sixPanelHitArea);
                this.numsContainer.add(this.sevenPanelHitArea);
                this.numsContainer.add(this.eightPanelHitArea);
                this.numsContainer.add(this.ninePanelHitArea);
                this.numsContainer.add(this.cancelPanelHitArea);
                this.numsContainer.add(this.enterPanelHitArea);

            } else if (gameState.doneEvents.vault.isDone && !gameState.items.key3.found) {

                this.add.image(0, 0, 'vaultInside').setOrigin(0, 0);
                this.vault = this.add.image(-750, 0, 'vault').setOrigin(0, 0);
                this.glassCup = this.add.image(0, 0, 'glassCupAndKey3').setOrigin(0, 0);

                this.key3HitArea = this.add.graphics();
                const key3HitAreaPoints = [350, 370, 470, 370, 470, 510, 350, 510];

                this.setHitArea(this.key3HitArea, key3HitAreaPoints, false);

                //Ball

                if (!gameState.doneEvents.ball) {
                    
                    this.ballDropArea = this.add.graphics();
                    const ballDropAreaPoints = [675, 250, 720, 250, 720, 365, 675, 365];

                    this.setHitArea(this.ballDropArea, ballDropAreaPoints, false, true, true);


                    this.input.on('drop', function(p, ob, dropZone) {

                        if(dropZone === this.ballDropArea && gameState.grabedItem.id === 'ball') {
                            this.itemDone('ball');
                            this.ballDropArea.destroy();
                            gameState.doneEvents.ball = true;

                            this.ballSprite = this.add.sprite(0, 0, 'ballSpriteSheet').setOrigin(0, 0);
                            this.ballActionMask = this.add.sprite(0, 0, 'ballActionMask').setOrigin(0, 0);

                            this.anims.create({
                                key: 'ballAction',
                                frames: this.anims.generateFrameNumbers('ballSpriteSheet', { start: 0, end: 4 }),
                                frameRate: 4,
                                repeat: 0
                            });

                            this.ballSprite.anims.play('ballAction', true);
                            
                            gameState.doneEvents.ball = true;

                            const destroyBall = setTimeout(() => {

                                this.ballSprite.destroy();
                                this.ballActionMask.destroy();

                            }, 1300)

                            const keySound = setTimeout(() => {

                                this.keyDrop = this.sound.add('dropKey');
                                this.keyDrop.play();

                            }, 2000)
                            
                        }

                    }, this)

                }

                this.key3HitArea.on('pointerdown', function() {

                    this.key3HitArea.destroy();

                    this.glassCup.destroy();
                    this.glassCup = this.add.image(0, 0, 'glassCup').setOrigin(0, 0);

                    this.getItem('key3');

                    this.ingredientsDropArea = this.add.graphics();
                    const ingredientsDropAreapoints = [350, 370, 470, 370, 470, 510, 350, 510];

                    this.setHitArea(this.ingredientsDropArea, ingredientsDropAreapoints, false, true, true);


                    this.input.on('drop', function(p, ob, dropZone) {

                        if(dropZone === this.ballDropArea && gameState.grabedItem.id === 'ball') {
                            this.itemDone('ball');
                            this.ballDropArea.destroy();
                            gameState.doneEvents.ball = true;

                            this.ballSprite = this.add.sprite(0, 0, 'ballSpriteSheet').setOrigin(0, 0);
                            this.ballActionMask = this.add.sprite(0, 0, 'ballActionMask').setOrigin(0, 0);

                            this.anims.create({
                                key: 'ballAction',
                                frames: this.anims.generateFrameNumbers('ballSpriteSheet', { start: 0, end: 4 }),
                                frameRate: 4,
                                repeat: 0
                            });

                            this.ballSprite.anims.play('ballAction', true);

                            gameState.doneEvents.ball = true;

                            const destroyBall = setTimeout(() => {

                                this.ballSprite.destroy();
                                this.ballActionMask.destroy();

                            }, 1300)

                            const keySound = setTimeout(() => {

                                this.keyDrop = this.sound.add('dropKey');
                                this.keyDrop.play();

                            }, 2000)
                        }


                        if (dropZone === this.ingredientsDropArea) {

                            switch (gameState.grabedItem.id) {

                                case 'bananas':
                                    this.common.play();
                                    gameState.doneEvents.glassCup.ingredients.push('bananas');
                                    this.itemDone('bananas');
                                    if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
        
                                            this.glassCup.destroy();
        
                                            this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
        
                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();

                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);

                                    } else {
        
                                        this.glassCup.destroy();
        
                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBanana').setOrigin(0, 0);
        
                                    }
                                    break;
                                case 'protein':
                                    this.common.play();
                                    gameState.doneEvents.glassCup.ingredients.push('protein');
                                    this.itemDone('protein');
                                    if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
        
                                            this.glassCup.destroy();
        
                                            this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
        
                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();

                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                    } else {
        
                                        this.glassCup.destroy();
        
                                        this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);
        
                                    }
                                    break;
                                case 'milk':
                                    this.common.play();
                                    gameState.doneEvents.glassCup.ingredients.push('milk');
                                    this.itemDone('milk');
                                    if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {
        
                                            this.glassCup.destroy();
        
                                            this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {
        
                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();

                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                    } else {
        
                                        this.glassCup.destroy();
        
                                        this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);
        
                                    }
                                    break;
                                    case 'leaves':
                                        this.common.play();
                                        gameState.doneEvents.glassCup.ingredients.push('leaves');
                                        this.itemDone('leaves');
                                        if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
            
                                                this.glassCup.destroy();
            
                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
            
                                        } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
            
                                                        this.glassCup.destroy();
            
                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);
            
                                        } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                        this.glassCup.destroy();
            
                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                        } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                        this.glassCup.destroy();

                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                        } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                        this.glassCup.destroy();
            
                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                        } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                        this.glassCup.destroy();
            
                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                        } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                        this.glassCup.destroy();
            
                                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);

                                        } else {
            
                                            this.glassCup.destroy();
            
                                            this.glassCup = this.add.image(0, 0, 'drinkLayerLeaf').setOrigin(0, 0);
            
                                        }
                                        break;
                                default:
                                    break;
                            }

                        }


                    }, this);

                }, this);


            } else if (gameState.items.key3.found && !gameState.doneEvents.glassCup.isDone) {

                this.add.image(0, 0, 'vaultInside').setOrigin(0, 0);
                this.vault = this.add.image(-750, 0, 'vault').setOrigin(0, 0);
                
                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')
                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                        if (this.glassCup) {this.glassCup.destroy()};

                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')
                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                if (this.glassCup) {this.glassCup.destroy()};

                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                    if (this.glassCup) {this.glassCup.destroy()};

                    this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                    if (this.glassCup) {this.glassCup.destroy()};

                    this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                    if (this.glassCup) {this.glassCup.destroy()};

                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeaf').setOrigin(0, 0);

                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                    if (this.glassCup) {this.glassCup.destroy()};

                    this.glassCup = this.add.image(0, 0, 'drinkLayerBanana').setOrigin(0, 0);

                } else {

                    if (this.glassCup) {this.glassCup.destroy()};

                    this.glassCup = this.add.image(0, 0, 'glassCup').setOrigin(0, 0);

                }

                this.ingredientsDropArea = this.add.graphics();
                const ingredientsDropAreapoints = [350, 370, 470, 370, 470, 510, 350, 510];

                this.setHitArea(this.ingredientsDropArea, ingredientsDropAreapoints, false, true, true);

                this.input.on('drop', function(p, ob, dropZone) {

                    if (dropZone === this.ingredientsDropArea) {

                        switch (gameState.grabedItem.id) {

                            case 'bananas':
                                this.common.play();
                                gameState.doneEvents.glassCup.ingredients.push('bananas');
                                this.itemDone('bananas');
                                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                        this.glassCup.destroy();

                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);

                                } else {

                                    this.glassCup.destroy();

                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBanana').setOrigin(0, 0);

                                }
                                break;
                            case 'protein':
                                this.common.play();
                                gameState.doneEvents.glassCup.ingredients.push('protein');
                                this.itemDone('protein');
                                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                        this.glassCup.destroy();

                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                } else {

                                    this.glassCup.destroy();

                                    this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);

                                }
                                break;
                            case 'milk':
                                this.common.play();
                                gameState.doneEvents.glassCup.ingredients.push('milk');
                                this.itemDone('milk');
                                if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')
                                    && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                        this.glassCup.destroy();

                                        this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                            && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndHalf').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerFull').setOrigin(0, 0);

                                } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'leaves')) {

                                                this.glassCup.destroy();

                                                this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                } else {

                                    this.glassCup.destroy();

                                    this.glassCup = this.add.image(0, 0, 'drinkLayerHalf').setOrigin(0, 0);

                                }
                                break;
                                case 'leaves':
                                    this.common.play();
                                    gameState.doneEvents.glassCup.ingredients.push('leaves');
                                    this.itemDone('leaves');
                                    if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')
                                        && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {
        
                                            this.glassCup.destroy();
        
                                            this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {
        
                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndFull').setOrigin(0, 0);
        
                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk') 
                                                && gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                    this.glassCup.destroy();

                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'protein')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'milk')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerLeafAndHalf').setOrigin(0, 0);

                                    } else if (gameState.doneEvents.glassCup.ingredients.some(ingr => ingr === 'bananas')) {

                                                    this.glassCup.destroy();
        
                                                    this.glassCup = this.add.image(0, 0, 'drinkLayerBananaAndLeaf').setOrigin(0, 0);

                                    } else {
        
                                        this.glassCup.destroy();
        
                                        this.glassCup = this.add.image(0, 0, 'drinkLayerLeaf').setOrigin(0, 0);
        
                                    }
                                    break;
                            default:
                                break;
                        }

                    }


                }, this);

                //Ball

                if (!gameState.doneEvents.ball) {
                
                    this.ballDropArea = this.add.graphics();
                    const ballDropAreaPoints = [675, 250, 720, 250, 720, 365, 675, 365];

                    this.setHitArea(this.ballDropArea, ballDropAreaPoints, false, true, true);



                    this.input.on('drop', function(p, ob, dropZone) {

                        if(dropZone === this.ballDropArea && gameState.grabedItem.id === 'ball') {
                            this.itemDone('ball');
                            this.ballDropArea.destroy();
                            gameState.doneEvents.ball = true;

                            this.ballSprite = this.add.sprite(0, 0, 'ballSpriteSheet').setOrigin(0, 0);
                            this.ballActionMask = this.add.sprite(0, 0, 'ballActionMask').setOrigin(0, 0);

                            this.anims.create({
                                key: 'ballAction',
                                frames: this.anims.generateFrameNumbers('ballSpriteSheet', { start: 0, end: 4 }),
                                frameRate: 4,
                                repeat: 0
                            });

                            this.ballSprite.anims.play('ballAction', true);

                            gameState.doneEvents.ball = true;

                            const destroyBall = setTimeout(() => {

                                this.ballSprite.destroy();
                                this.ballActionMask.destroy();

                            }, 1300)

                            const keySound = setTimeout(() => {

                                this.keyDrop = this.sound.add('dropKey');
                                this.keyDrop.play();

                            }, 2000)
                
                            
                        }

                    }, this);
                }
            }

        } else if (!gameState.items.straw.done && !gameState.doneEvents.doped) {

            this.vaultInside = this.add.image(0, 0, 'vaultInside').setOrigin(0, 0);
            this.drinkLayer = this.add.image(0, 0, 'drinkLayer').setOrigin(0, 0);

            this.drinkLayerDropArea = this.add.graphics();
            const drinkLayerDropArea = [350, 370, 470, 370, 470, 520, 350, 520];

            this.setHitArea(this.drinkLayerDropArea, drinkLayerDropArea, false, true, true);

            this.input.on('drop', function(p, ob, dropZone) {

                if(dropZone === this.drinkLayerDropArea && gameState.grabedItem.id === 'straw') {

                    this.drinkLayer.destroy();
                    this.drinkStrawLayer = this.add.image(0, 0, 'drinkStrawLayer').setOrigin(0, 0);
                    this.itemDone('straw');

                    this.drinkStrawLayerHitArea = this.add.graphics();
                    const drinkStrawLayerHitAreaPoints = [430, 320, 500, 340, 490, 370, 450, 360, 430, 400, 410, 390];

                    this.setHitArea(this.drinkStrawLayerHitArea, drinkStrawLayerHitAreaPoints, false);

                    this.drinkStrawLayerHitArea.on('pointerup', function() {

                        gameState.doneEvents.doped = true;
                        this.drinkStrawLayerHitArea.destroy();

                        this.drinkAction = this.add.sprite(0, 0, 'drinkAction').setOrigin(0, 0);

                        this.anims.create({
                            key: 'drinkAction',
                            frames: this.anims.generateFrameNumbers('drinkSpriteSheet', { start: 0, end: 3 }),
                            frameRate: 1,
                            repeat: 0
                        });


                        this.drinkStrawLayer.destroy();
                        this.drinkSound = this.sound.add('drinkSound');
                        this.drinkSound.play();
                        this.drinkAction.anims.play('drinkAction');

                    }, this)

                }

            }, this);

        } else if (gameState.items.straw.done && !gameState.doneEvents.doped) {

            this.vaultInside = this.add.image(0, 0, 'vaultInside').setOrigin(0, 0);
            this.drinkStrawLayer = this.add.image(0, 0, 'drinkStrawLayer').setOrigin(0, 0);

            this.drinkStrawLayerHitArea = this.add.graphics();
            const drinkStrawLayerHitAreaPoints = [430, 320, 500, 340, 490, 370, 450, 360, 430, 400, 410, 390];

            this.setHitArea(this.drinkStrawLayerHitArea, drinkStrawLayerHitAreaPoints, false);

            this.drinkStrawLayerHitArea.on('pointerup', function() {

                gameState.doneEvents.doped = true;
                this.drinkStrawLayerHitArea.destroy();

                this.drinkAction = this.add.sprite(0, 0, 'drinkAction').setOrigin(0, 0);

                this.anims.create({
                    key: 'drinkAction',
                    frames: this.anims.generateFrameNumbers('drinkSpriteSheet', { start: 0, end: 3 }),
                    frameRate: 1,
                    repeat: 0
                });


                this.drinkStrawLayer.destroy();
                this.drinkSound = this.sound.add('drinkSound');
                this.drinkSound.play();
                this.drinkAction.anims.play('drinkAction');

            }, this)

        } else {

            this.vaultInside = this.add.image(0, 0, 'vaultInside').setOrigin(0, 0);
            this.drinkStrawLayer = this.add.image(0, 0, 'drinkDone').setOrigin(0, 0);

        }
    
        
        this.itemBarConstructor();
        this.navBelowArrowBConstructor('Vault', 'GameScene4');
        
    }

    numPanel() {
        
        if (this.panel) {

            this.panel.destroy();

        }

        this.panel = this.add.container(205 - (gameState.doneEvents.vault.num.length - 1) * 30, 70);

        for (let [i, item] of gameState.doneEvents.vault.num.entries()) {

            this.panel.add(this.add.image(100 + i * 30, 100, [item]));

        }


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