class ControlPanel extends Phaser.Scene {
    constructor() {
        super({key: 'ControlPanel'})
    }


    create() {
       
        this.add.image(0, 0, 'controlPanel').setOrigin(0, 0);
        this.handleSound = this.sound.add('handleSound');

        //Handle setting
        if (!gameState.items.handle.done) {

            this.handleHole = this.add.image(0, 0, 'handleHole').setOrigin(0, 0);

            this.handleSetZone = this.add.graphics();
            const handleSetZonePoint = [392, 110, 50];

            this.setHitArea(this.handleSetZone, handleSetZonePoint, false, true, true);

            this.input.on('drop',  function (pointer, gameObject, dropZone) {
                if (dropZone === this.handleSetZone && gameState.grabedItem.id === 'handle') {
                    this.common = this.sound.add('common');
                    this.common.play();
                    this.itemDone('handle');
                    this.handleSetZone.destroy();
                    this.handleHole.destroy();

                    this.handleSprite = this.add.sprite(0, 0, 'handleSpriteSheet').setOrigin(0, 0);

                    this.anims.create({
                        key: 'handleAction',
                        frames: this.anims.generateFrameNumbers('handleSpriteSheet', { start: 0, end: 4 }),
                        frameRate: 10,
                        repeat: 2
                    });

                    this.handleActionZone = this.add.graphics();
                    const handleActionZonePoints = [393, 350, 50];

                    this.setHitArea(this.handleActionZone, handleActionZonePoints, false);

                    this.handleActionZone.on('pointerup', function() {
                        if (gameState.doneEvents.glassCup.ingredients.length === 4 && gameState.doneEvents.controlPanelKey) {

                            this.scene.stop('ControlPanel');
                            this.scene.start('MixScene');

                        }

                        this.handleSprite.anims.play('handleAction', true);
                        let handleSoundCount = 0;
                        this.handleSound.play();
                        const handleSoundRepeat = setInterval(() => {

                            this.handleSound.play();
                            handleSoundCount ++;

                            if(handleSoundCount >= 2) {clearInterval(handleSoundRepeat)};

                        }, 510);


                        if(!gameState.doneEvents.screen.appear) {
                            gameState.doneEvents.screen.appear = true;
                        } 
                    }, this);
                }

            }, this);

        } else {

            this.handleSprite = this.add.sprite(0, 0, 'handleSpriteSheet').setOrigin(0, 0);

            this.anims.create({
                key: 'handleAction',
                frames: this.anims.generateFrameNumbers('handleSpriteSheet', { start: 0, end: 4 }),
                frameRate: 10,
                repeat: 2
            });

            this.handleActionZone = this.add.graphics();
            const handleActionZonePoints = [393, 350, 50];

            this.setHitArea(this.handleActionZone, handleActionZonePoints, false);

            this.handleActionZone.on('pointerup', function() {
                if (gameState.doneEvents.glassCup.ingredients.length === 4 && gameState.doneEvents.controlPanelKey) {

                    this.scene.stop('ControlPanel');
                    this.scene.start('MixScene');

                }

                this.handleSprite.anims.play('handleAction', true);
                let handleSoundCount = 0;
                this.handleSound.play();
                const handleSoundRepeat = setInterval(() => {

                    this.handleSound.play();
                    handleSoundCount ++;

                    if(handleSoundCount >= 2) {clearInterval(handleSoundRepeat)};

                }, 510);

                if(!gameState.doneEvents.screen.appear) {
                    gameState.doneEvents.screen.appear = true;
                } 
            }, this);

        }

        // Key hole
        if (!gameState.items.key4.done) {

            this.controlPanelKeyHole = this.add.image(0, 0, 'controlPanelKeyHole').setOrigin(0, 0);

            this.controlPanelKeyHoleDropArea = this.add.graphics();
            const controlPanelKeyHoleDropAreaPoints = [391, 420, 35];

            this.setHitArea(this.controlPanelKeyHoleDropArea, controlPanelKeyHoleDropAreaPoints, false, true, true);

            this.input.on('drop', function(p, ob, dropZone) {

                if (dropZone === this.controlPanelKeyHoleDropArea && gameState.grabedItem.id === 'key4') {

                    this.itemDone('key4');
                    this.controlPanelKeyHoleDropArea.destroy();
                    this.controlPanelKeyHole.destroy();

                    this.controlPanelKeyHoleInserted = this.add.image(0, 0, 'controlPanelKeyHoleInserted').setOrigin(0, 0);

                    this.controlPanelKeyHoleInsertedHitArea = this.add.graphics();
                    const controlPanelKeyHoleInsertedHitAreaPoints = [391, 420, 35];

                    this.setHitArea(this.controlPanelKeyHoleInsertedHitArea, controlPanelKeyHoleInsertedHitAreaPoints, false);

                    this.controlPanelKeyHoleInsertedHitArea.on('pointerup', function() {

                        this.controlPanelKeyHoleInsertedHitArea.destroy();
                        this.controlPanelKeyHoleInserted.destroy();

                        this.controlPanelKeyHoleTurned = this.add.image(0, 0, 'controlPanelKeyHoleTurned').setOrigin(0, 0);
                        gameState.doneEvents.controlPanelKey = true;
                        this.key4Sound = this.sound.add('key4Sound');
                        this.key4Sound.play();

                    }, this)
                }

            }, this);

        } else if (gameState.items.key4.done && !gameState.doneEvents.controlPanelKey) {

            this.controlPanelKeyHoleInserted = this.add.image(0, 0, 'controlPanelKeyHoleInserted').setOrigin(0, 0);

            this.controlPanelKeyHoleInsertedHitArea = this.add.graphics();
            const controlPanelKeyHoleInsertedHitAreaPoints = [391, 420, 35];

            this.setHitArea(this.controlPanelKeyHoleInsertedHitArea, controlPanelKeyHoleInsertedHitAreaPoints, false);

            this.controlPanelKeyHoleInsertedHitArea.on('pointerup', function() {

                this.controlPanelKeyHoleInsertedHitArea.destroy();
                this.controlPanelKeyHoleInserted.destroy();

                this.controlPanelKeyHoleTurned = this.add.image(0, 0, 'controlPanelKeyHoleTurned').setOrigin(0, 0);
                gameState.doneEvents.controlPanelKey = true;
                this.key4Sound = this.sound.add('key4Sound');
                this.key4Sound.play();

            }, this)

        } else {

            this.controlPanelKeyHoleTurned = this.add.image(0, 0, 'controlPanelKeyHoleTurned').setOrigin(0, 0);

        }

        this.itemBarConstructor();
        this.navBelowArrowBConstructor('ControlPanel', 'GameScene3');
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