class GameScene3 extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene3'})
    }

    preload() {
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
        this.load.audio('screenSound', 'soundFile/決定ボタンを押す35.mp3');
        this.load.audio('scissorsSound', 'soundFile/scissors3.mp3');
        this.load.audio('bracketSound', 'soundFile/布団に倒れ込む.mp3');
    }

    create() {
        this.add.image(0, 0, 'face3').setOrigin(0, 0);
        this.screenSound = this.sound.add('screenSound');
        this.bracketSound = this.sound.add('bracketSound');

        if (!gameState.doneEvents.box1 && !gameState.items.straw.found) {

            const bracketClose = this.add.image(0, 0, 'bracketClose').setOrigin(0, 0);
            const bracketOpenFalse = this.add.image(0, 0, 'bracketOpenFalse').setOrigin(0, 0).setVisible(false);

        
            //Bracket hit area
            
            this.bracketCloseHitArea = this.add.graphics();
            const bracketHitAreaPoints = [140, 420, 200, 420, 260, 380, 350, 380, 400, 410, 560, 410, 560, 530, 140, 550];

            this.setHitArea(this.bracketCloseHitArea, bracketHitAreaPoints, false);

            this.bracketCloseHitArea.input.alwaysEnabled = true;

            
            this.bracketOpenFalseHitArea1 = this.add.graphics();
            const bracketOpenFalseHitArea1Points = [140, 405, 270, 405, 270, 450, 140, 450];

            this.setHitArea(this.bracketOpenFalseHitArea1, bracketOpenFalseHitArea1Points, false);

            //this.bracketOpenFalseHitArea1.input.alwaysEnabled = true;


            this.bracketOpenFalseHitArea2 = this.add.graphics();
            const bracketOpenFalseHitArea2Points = [335, 410, 365, 400, 425, 415, 400, 410, 560, 410, 560, 530, 470, 450, 335, 450];

            this.setHitArea(this.bracketOpenFalseHitArea2, bracketOpenFalseHitArea2Points, false);

            //this.bracketOpenFalseHitArea2.input.alwaysEnabled = true;

            this.box1HitArea = this.add.graphics();
            const box1HitAreaPoints = [270, 385, 335, 395, 335, 450, 270, 450];

            this.setHitArea(this.box1HitArea, box1HitAreaPoints, false);


            this.bracketCloseHitArea.on('pointerup', function() {
                bracketClose.setVisible(false);
                bracketOpenFalse.setVisible(true);

                this.bracketCloseHitArea.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = true;
                this.box1HitArea.input.alwaysEnabled = true;

                this.bracketSound.play();
            }, this);

            this.bracketOpenFalseHitArea1.on('pointerup', function() {
                bracketClose.setVisible(true);
                bracketOpenFalse.setVisible(false);

                this.bracketCloseHitArea.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = false;
                this.box1HitArea.input.alwaysEnabled = false;

                this.bracketSound.play();
            }, this);

            this.bracketOpenFalseHitArea2.on('pointerup', function() {
                bracketClose.setVisible(true);
                bracketOpenFalse.setVisible(false);

                this.bracketCloseHitArea.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = false;
                this.box1HitArea.input.alwaysEnabled = false;

                this.bracketSound.play();
            }, this);
    
            this.box1HitArea.on('pointerup', () => {
                this.scene.stop('GameScene3');
                this.scene.start('Box1Scene');
            })

        } else if (gameState.doneEvents.box1 && !gameState.items.straw.found) {
            const bracketClose = this.add.image(0, 0, 'bracketClose').setOrigin(0, 0);
            const bracketOpenFalse = this.add.image(0, 0, 'bracketOpenTrueFalse').setOrigin(0, 0).setVisible(false);

        
            //Bracket hit area
            
            this.bracketCloseHitArea = this.add.graphics();
            const bracketHitAreaPoints = [140, 420, 200, 420, 260, 380, 350, 380, 400, 410, 560, 410, 560, 530, 140, 550];

            this.setHitArea(this.bracketCloseHitArea, bracketHitAreaPoints, false);

            this.bracketCloseHitArea.input.alwaysEnabled = true;


            
            this.bracketOpenFalseHitArea1 = this.add.graphics();
            const bracketOpenFalseHitArea1Points = [140, 405, 270, 405, 270, 450, 140, 450];

            this.setHitArea(this.bracketOpenFalseHitArea1, bracketOpenFalseHitArea1Points, false);

            //this.bracketOpenFalseHitArea1.input.alwaysEnabled = true;


            this.bracketOpenFalseHitArea2 = this.add.graphics();
            const bracketOpenFalseHitArea2Points = [335, 410, 365, 400, 425, 415, 400, 410, 560, 410, 560, 530, 470, 450, 335, 450];

            this.setHitArea(this.bracketOpenFalseHitArea2, bracketOpenFalseHitArea2Points, false);

            //this.bracketOpenFalseHitArea2.input.alwaysEnabled = true;

            this.box1HitArea = this.add.graphics();
            const box1HitAreaPoints = [270, 385, 335, 395, 335, 450, 270, 450];

            this.setHitArea(this.box1HitArea, box1HitAreaPoints, false);


            this.bracketCloseHitArea.on('pointerup', function() {
                bracketClose.setVisible(false);
                bracketOpenFalse.setVisible(true);

                this.bracketCloseHitArea.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = true;
                this.box1HitArea.input.alwaysEnabled = true;

                this.bracketSound.play();
            }, this);

            this.bracketOpenFalseHitArea1.on('pointerup', function() {
                bracketClose.setVisible(true);
                bracketOpenFalse.setVisible(false);

                this.bracketCloseHitArea.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = false;
                this.box1HitArea.input.alwaysEnabled = false;

                this.bracketSound.play();
            }, this);

            this.bracketOpenFalseHitArea2.on('pointerup', function() {
                bracketClose.setVisible(true);
                bracketOpenFalse.setVisible(false);

                this.bracketCloseHitArea.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = false;
                this.box1HitArea.input.alwaysEnabled = false;

                this.bracketSound.play();
            }, this);
    
            this.box1HitArea.on('pointerup', () => {
                this.scene.stop('GameScene3');
                this.scene.start('Box1Scene');
            })
        } else {
            const bracketClose = this.add.image(0, 0, 'bracketClose').setOrigin(0, 0);
            const bracketOpenFalse = this.add.image(0, 0, 'bracketOpenTrue').setOrigin(0, 0).setVisible(false);
        
            //Bracket hit area
            
            this.bracketCloseHitArea = this.add.graphics();
            const bracketHitAreaPoints = [140, 420, 200, 420, 260, 380, 350, 380, 400, 410, 560, 410, 560, 530, 140, 550];

            this.setHitArea(this.bracketCloseHitArea, bracketHitAreaPoints, false);

            this.bracketCloseHitArea.input.alwaysEnabled = true;


            
            this.bracketOpenFalseHitArea1 = this.add.graphics();
            const bracketOpenFalseHitArea1Points = [140, 405, 270, 405, 270, 450, 140, 450];

            this.setHitArea(this.bracketOpenFalseHitArea1, bracketOpenFalseHitArea1Points, false);

            //this.bracketOpenFalseHitArea1.input.alwaysEnabled = true;


            this.bracketOpenFalseHitArea2 = this.add.graphics();
            const bracketOpenFalseHitArea2Points = [335, 410, 365, 400, 425, 415, 400, 410, 560, 410, 560, 530, 470, 450, 335, 450];

            this.setHitArea(this.bracketOpenFalseHitArea2, bracketOpenFalseHitArea2Points, false);

            //this.bracketOpenFalseHitArea2.input.alwaysEnabled = true;

            this.box1HitArea = this.add.graphics();
            const box1HitAreaPoints = [270, 385, 335, 395, 335, 450, 270, 450];

            this.setHitArea(this.box1HitArea, box1HitAreaPoints, false);


            this.bracketCloseHitArea.on('pointerup', function() {
                bracketClose.setVisible(false);
                bracketOpenFalse.setVisible(true);

                this.bracketCloseHitArea.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = true;
                this.box1HitArea.input.alwaysEnabled = true;

                this.bracketSound.play();
            }, this);

            this.bracketOpenFalseHitArea1.on('pointerup', function() {
                bracketClose.setVisible(true);
                bracketOpenFalse.setVisible(false);

                this.bracketCloseHitArea.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = false;
                this.box1HitArea.input.alwaysEnabled = false;

                this.bracketSound.play();
            }, this);

            this.bracketOpenFalseHitArea2.on('pointerup', function() {
                bracketClose.setVisible(true);
                bracketOpenFalse.setVisible(false);

                this.bracketCloseHitArea.input.alwaysEnabled = true;
                this.bracketOpenFalseHitArea1.input.alwaysEnabled = false;
                this.bracketOpenFalseHitArea2.input.alwaysEnabled = false;
                this.box1HitArea.input.alwaysEnabled = false;

                this.bracketSound.play();
            }, this);
    
            this.box1HitArea.on('pointerup', () => {
                this.scene.stop('GameScene3');
                this.scene.start('Box1Scene');
            })
        };

        //Handle zone
        if (!gameState.items.handle.done && !gameState.doneEvents.screen.appear) {

            this.handleHitArea = this.add.graphics();
            const handleHitAreaPoints = [521, 329, 10];
    
            this.setHitArea(this.handleHitArea, handleHitAreaPoints, false);
    
            this.handleHitArea.on('pointerup', function() {
                this.scene.stop('GameScene3');
                this.scene.start('ControlPanel');
            }, this);
            
        } else if (gameState.items.handle.done && !gameState.doneEvents.screen.appear) {

            this.add.image(0, 0, 'Face3HandleLayer').setOrigin(0, 0);

            this.handleHitArea = this.add.graphics();
            const handleHitAreaPoints = [510, 320, 530, 320, 530, 390, 510, 390];
    
            this.setHitArea(this.handleHitArea, handleHitAreaPoints, false);
    
            this.handleHitArea.on('pointerup', function() {
                this.scene.stop('GameScene3');
                this.scene.start('ControlPanel');
            }, this);

        } else if (gameState.items.handle.done && gameState.doneEvents.screen.appear) {
            //Handle Area
            this.add.image(0, 0, 'monitorLayer').setOrigin(0, 0);
            this.add.image(0, 0, 'Face3HandleLayer').setOrigin(0, 0);

            this.handleHitArea = this.add.graphics();
            const handleHitAreaPoints = [510, 320, 530, 320, 530, 390, 510, 390];
    
            this.setHitArea(this.handleHitArea, handleHitAreaPoints, false);
    
            this.handleHitArea.on('pointerup', function() {
                this.scene.stop('GameScene3');
                this.scene.start('ControlPanel');
            }, this);

        }

        //Screen
        if(gameState.doneEvents.screen.appear) {

             //Screen Side
            this.screenHitArea = this.add.graphics();
            const screenHitAreaPoints = [470, 75, 470, 305, 500, 305, 500, 75];
            
            this.setHitArea(this.screenHitArea, screenHitAreaPoints, false);
            
            this.screenHitArea.on('pointerup', function() {
                this.scene.stop('GameScene3');
                this.scene.start('ScreenSide');
            }, this);

            if (gameState.doneEvents.screen.on) {

                this.switchScreen();

                this.controlerDropArea = this.add.graphics();
                const controlerDropAreaPoints = [90, 70, 470, 70, 470, 300, 90, 300];

                this.setHitArea(this.controlerDropArea, controlerDropAreaPoints, false, true, true);

                this.input.on('drop', function(p, ob, dropZone) {

                    if (dropZone === this.controlerDropArea && gameState.grabedItem.id === 'screenControler') {

                        if (gameState.doneEvents.screen.status < gameState.doneEvents.screen.hintArray.length - 1) {

                            gameState.doneEvents.screen.status ++;

                        } else {

                            gameState.doneEvents.screen.status = 0;

                        }

                        this.switchScreen();
                        this.screenSound.play();

                    }

                }, this);
            }

        }


        //Big hammer
        if (!gameState.items.leaves.found) {
            
            this.leavesLayer = this.add.image(0, 0, 'leavesLayer').setOrigin(0, 0);
            this.vineLayer = this.add.image(0, 0, 'vineLayer').setOrigin(0, 0);
            this.bigHammerLayer = this.add.image(0, 0, 'bigHammerLayer').setOrigin(0, 0);

            this.leavesLayerDropArea = this.add.graphics();
            const leavesLayerDropAreaPoints = [580, 180, 720, 180, 720, 500, 580, 500];

            this.setHitArea(this.leavesLayerDropArea, leavesLayerDropAreaPoints, false, true, true);

            this.input.on('drop', function(p, ob, dropZone) {

                if (dropZone === this.leavesLayerDropArea && gameState.grabedItem.id === 'scissors') {

                    this.leavesLayer.destroy();
                    this.leavesLayerDropArea.destroy();

                    this.getItem('leaves');

                    this.vineLayerDropArea = this.add.graphics();
                    const vineLayerDropAreaPoints = [620, 180, 680, 180, 680, 500, 620, 500];

                    this.setHitArea(this.vineLayerDropArea, vineLayerDropAreaPoints, false, true, true);

                    this.input.on('drop', function(p, ob, dropZone) {

                        if (dropZone === this.vineLayerDropArea && gameState.grabedItem.id === 'scissors' && gameState.doneEvents.doped) {
                            
                            this.vineLayer.destroy();
                            this.vineLayerDropArea.destroy();
                            
                            this.itemDone('scissors');
                            gameState.doneEvents.vine = true;
                            this.scissorsSound = this.sound.add('scissorsSound');
                            this.scissorsSound.play();

                            const stopScissorsSound = setTimeout(() => {

                                this.scissorsSound.stop();

                            }, 1000);

                            this.bigHammerLayerHitArea = this.add.graphics();
                            const bigHammerLayerHitAreaPoints = [580, 180, 720, 180, 720, 600, 580, 600];

                            this.setHitArea(this.bigHammerLayerHitArea, bigHammerLayerHitAreaPoints, false);

                            this.bigHammerLayerHitArea.on('pointerdown', function() {

                                if (gameState.doneEvents.doped) {
                                    
                                    this.bigHammerLayer.destroy();
                                    this.bigHammerLayerHitArea.destroy();

                                    this.getItem('bigHammer');

                                }

                            }, this);
                        }

                    }, this);

                }

            }, this);

        } else if (!gameState.doneEvents.vine) {

            this.vineLayer = this.add.image(0, 0, 'vineLayer').setOrigin(0, 0);
            this.bigHammerLayer = this.add.image(0, 0, 'bigHammerLayer').setOrigin(0, 0);

            this.vineLayerDropArea = this.add.graphics();
            const vineLayerDropAreaPoints = [620, 180, 680, 180, 680, 500, 620, 500];

            this.setHitArea(this.vineLayerDropArea, vineLayerDropAreaPoints, false, true, true);

            this.input.on('drop', function(p, ob, dropZone) {

                if (dropZone === this.vineLayerDropArea && gameState.grabedItem.id === 'scissors' && gameState.doneEvents.doped) {
                    
                    this.vineLayer.destroy();
                    this.vineLayerDropArea.destroy();
                    
                    this.itemDone('scissors');
                    this.scissorsSound = this.sound.add('scissorsSound');
                    this.scissorsSound.play();

                    const stopScissorsSound = setTimeout(() => {

                        this.scissorsSound.stop();

                    }, 1000);

                    gameState.doneEvents.vine = true;

                    this.bigHammerLayerHitArea = this.add.graphics();
                    const bigHammerLayerHitAreaPoints = [580, 180, 720, 180, 720, 600, 580, 600];

                    this.setHitArea(this.bigHammerLayerHitArea, bigHammerLayerHitAreaPoints, false);

                    this.bigHammerLayerHitArea.on('pointerdown', function() {

                        if (gameState.doneEvents.doped) {
                            
                            this.bigHammerLayer.destroy();
                            this.bigHammerLayerHitArea.destroy();

                            this.getItem('bigHammer');

                        }

                    }, this);
                }

            }, this);

        } else if (!gameState.items.bigHammer.found) {

            this.bigHammerLayer = this.add.image(0, 0, 'bigHammerLayer').setOrigin(0, 0);

            this.bigHammerLayerHitArea = this.add.graphics();
            const bigHammerLayerHitAreaPoints = [580, 180, 720, 180, 720, 600, 580, 600];

            this.setHitArea(this.bigHammerLayerHitArea, bigHammerLayerHitAreaPoints, false);

            this.bigHammerLayerHitArea.on('pointerdown', function() {

                if (gameState.doneEvents.doped) {
                    
                    this.bigHammerLayer.destroy();
                    this.bigHammerLayerHitArea.destroy();

                    this.getItem('bigHammer');

                }

            }, this);
            
        }

        // Peek through hitarea
        this.peekThroughNumHitArea = this.add.graphics();
        const peekThroughNumHitAreaPoints = [48, 400, 100, 440, 48, 450];

        this.setHitArea(this.peekThroughNumHitArea, peekThroughNumHitAreaPoints, false);

        this.peekThroughNumHitArea.on('pointerup', function() {

            this.scene.stop('GameScene3');
            this.scene.start('PeekThroughNum');

        }, this);

        //Ball scene hitarea
        this.ballSceneHitArea = this.add.graphics();
        const ballSceneHitAreaPoints = [490, 580, 510, 580, 510, 600, 490, 600];

        this.setHitArea(this.ballSceneHitArea, ballSceneHitAreaPoints, false);

        this.ballSceneHitArea.on('pointerup', function() {

            this.scene.stop('GameScene3');
            this.scene.start('BallScene');

        }, this);

        this.itemBarConstructor();
        this.navArrowsConstructor('GameScene3', 'GameScene2', 'GameScene4');
        
        
    }

    switchScreen() {

        if (this.screen) { this.screen.destroy() };

        this.screen = this.add.image(0, 0, gameState.doneEvents.screen.hintArray[gameState.doneEvents.screen.status]).setOrigin(0, 0);

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