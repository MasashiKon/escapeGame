class GameScene4 extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene4'})
    }

    preload() {
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
    }

    create() {
        this.add.image(0, 0, 'face4').setOrigin(0, 0);

        //Vault setting
        this.vaultDoor = this.add.image(0, 0, 'vaultDoor').setOrigin(0, 0);

        this.vaultDoorHitArea = this.add.graphics();
        const vaultDoorHitAreaPoints = [210, 175, 370, 180, 367, 325, 210, 315];

        if (!gameState.doneEvents.paint.isDone) {
            this.paintSound = this.sound.add('paintSound');
            this.paintRemoved = this.sound.add('paintRemoved');

            // Paint Setting
            this.paintDefault = this.add.image(0, 0, 'paintDefault').setOrigin(0, 0);
            this.paintClicked = this.add.image(0, 0, 'paintClicked').setOrigin(0, 0);

            //this.paintDefault.setVisible(false);
            this.paintClicked.setVisible(false);

            this.paintDefaultHitArea = this.add.graphics();
            const paintDefaultHitAreaPoints = [80, 95, 480, 95, 480, 390, 80, 390];
            this.paintClickedHitArea = this.add.graphics();
            const paintClickedHitAreaPoints = [85, 95, 480, 125, 455, 415, 60, 390];

            this.setHitArea(this.paintDefaultHitArea, paintDefaultHitAreaPoints, false);
            this.setHitArea(this.paintClickedHitArea, paintClickedHitAreaPoints, false, false); 
            
            this.paintDefaultHitArea.on('pointerup', function() {
                if (gameState.doneEvents.paint.counter < 4) {
                    this.paintDefault.setVisible(false);
                    this.paintClicked.setVisible(true);

                    this.paintDefaultHitArea.input.alwaysEnabled = false;    
                    this.paintClickedHitArea.input.alwaysEnabled = true;
                    this.paintSound.play();

                    gameState.doneEvents.paint.counter ++;
                } else {
                    
                    this.paintDefault.destroy();
                    this.paintClicked.destroy();

                    this.paintDefaultHitArea.destroy();
                    this.paintClickedHitArea.destroy();

                    gameState.doneEvents.paint.isDone = true;

                    this.paintRemoved.play();

                    this.add.image(0, 0, 'paintDone').setOrigin(0, 0);

                    this.setHitArea(this.vaultDoorHitArea, vaultDoorHitAreaPoints, false);

                    this.vaultDoorHitArea.on('pointerup', function() {

                        this.scene.stop('GameSene4');
                        this.scene.start('Vault');

                    }, this);


                    this.paintNumHitArea = this.add.graphics();
                    const paintNumHitArea = [265, 475, 10];
        
                    this.setHitArea(this.paintNumHitArea, paintNumHitArea, false);
        
                    this.paintNumHitArea.on('pointerup', function() {
        
                        this.scene.stop('GameScene4');
                        this.scene.start('PaintNum');
        
                    }, this);

                }
            }, this);

            this.paintClickedHitArea.on('pointerup', function() {

                this.paintDefault.setVisible(true);
                this.paintClicked.setVisible(false);

                this.paintDefaultHitArea.input.alwaysEnabled = true;    
                this.paintClickedHitArea.input.alwaysEnabled = false;

                this.paintSound.play();

            }, this);

        } else if (!gameState.doneEvents.vault.isDone) {

            this.add.image(0, 0, 'paintDone').setOrigin(0, 0);

            this.setHitArea(this.vaultDoorHitArea, vaultDoorHitAreaPoints, false);

            this.vaultDoorHitArea.on('pointerup', function() {

                this.scene.stop('GameSene4');
                this.scene.start('Vault');

            }, this);


            this.paintNumHitArea = this.add.graphics();
            const paintNumHitArea = [265, 475, 10];

            this.setHitArea(this.paintNumHitArea, paintNumHitArea, false);

            this.paintNumHitArea.on('pointerup', function() {

                this.scene.stop('GameScene4');
                this.scene.start('PaintNum');

            }, this);

        } else if (gameState.doneEvents.vault.isDone) {

            this.vaultDoor.destroy();
            this.vaultDoor = this.add.image(-150, -10, 'vaultDoor').setOrigin(0, 0);

            this.add.Face4GlassCupLayer = this.add.image(0, 0, 'Face4GlassCupLayer').setOrigin(0, 0);

            this.add.image(0, 0, 'paintDone').setOrigin(0, 0);

            this.setHitArea(this.vaultDoorHitArea, vaultDoorHitAreaPoints, false);

            this.vaultDoorHitArea.on('pointerup', function() {

                this.scene.stop('GameSene4');
                this.scene.start('Vault');

            }, this);


            this.paintNumHitArea = this.add.graphics();
            const paintNumHitArea = [265, 475, 10];

            this.setHitArea(this.paintNumHitArea, paintNumHitArea, false);

            this.paintNumHitArea.on('pointerup', function() {

                this.scene.stop('GameScene4');
                this.scene.start('PaintNum');

            }, this);

        }

        // //Hummer action
        // this.face4HammerHitAction = this.add.image(0, 0, 'face4HummerHitAction').setOrigin(0, 0);
        // this.face4HammerHitAction.setVisible(false);

        // this.face4HammerHitActionDropZone = this.add.graphics();
        // const face4HammerHitActionDropZonePoints = [535, 220, 740, 220, 750, 390, 530, 380];

        // this.setHitArea(this.face4HammerHitActionDropZone, face4HammerHitActionDropZonePoints, false, true ,true);

        // this.input.on('drop', function (pointer, gameObject, dropZone) {

        //     if (gameState.grabedItem.id === 'hammer' && !gameState.doneEvents.doped) { 

        //         this.face4HammerHitAction.setVisible(true);

        //         const actionAnim = setTimeout(() => {
        //             this.face4HammerHitAction.setVisible(false);
        //         }, 100)
        //     }
    
        // }, this);


        //Ball Done
        if (gameState.doneEvents.ball) {

            this.add.image(0, 0, 'face4BallDoneLayer').setOrigin(0, 0);
            
            if (!gameState.items.key4.found) {

                this.key4Layer = this.add.image(0, 0, 'key4Layer').setOrigin(0, 0);

                this.key4LayerHitArea = this.add.graphics();
                const key4LayerHitAreaPoints = [685, 355, 730, 367, 685, 375];

                this.setHitArea(this.key4LayerHitArea, key4LayerHitAreaPoints, false);

                this.key4LayerHitArea.on('pointerdown', function() {

                    this.getItem('key4');
                    this.key4Layer.destroy();
                    this.key4LayerHitArea.destroy();

                }, this);

            }

        }

        this.itemBarConstructor();
        this.navArrowsConstructor('GameScene4', 'GameScene3', 'GameScene1');
        
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