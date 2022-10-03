class Box1Scene extends Phaser.Scene {
    constructor() {
        super({key: 'Box1Scene'})
    }

    preload() {
        this.load.image('box1', 'imageFile/box1.png');
        this.load.image('box1Close', 'imageFile/box1Close.png');
        this.load.image('box1KeyHole', 'imageFile/box1KeyHole.png');
        this.load.image('box1KeyHoleInserted', 'imageFile/box1KeyHoleInserted.png');
        this.load.image('box1KeyHoleInsertedTurned', 'imageFile/box1KeyHoleInsertedTurned.png');
        this.load.image('hammerLayer', 'imageFile/hammerLayer.png');
        this.load.image('straw', 'imageFile/straw.png');
    }

    create() {

        if (!gameState.items.key1.done && !gameState.doneEvents.box1) {

            this.add.image(0, 0, 'box1').setOrigin(0, 0);
            this.box1Close = this.add.image(0, 0, 'box1Close').setOrigin(0, 0);
            this.box1KeyHole = this.add.image(0, 0, 'box1KeyHole').setOrigin(0, 0);
            this.box1KeyHoleInserted = this.add.image(0, 0, 'box1KeyHoleInserted').setOrigin(0, 0);
            this.box1KeyHoleInsertedTurned = this.add.image(0, 0, 'box1KeyHoleInsertedTurned').setOrigin(0, 0);
            this.hammerLayer = this.add.image(0, 0, 'hammerLayer').setOrigin(0, 0);

            this.box1KeyHoleInsertedTurned.setVisible(false);
            this.box1KeyHoleInserted.setVisible(false);
            this.hammerLayer.setVisible(false);

            //Key1 Action
            this.key1DropZone = this.add.graphics();
            this.key1TurnArea = this.add.graphics();
            const key1DropZonePoint = [410, 470, 90];

            this.setHitArea(this.key1DropZone, key1DropZonePoint, false, true, true);
        
            //Hammer
            this.hammerHitArea = this.add.graphics();
            const hammerHitAreaPoints = [350, 80, 440, 80, 460, 350, 350, 350];

            this.input.on('drop', function (pointer, gameObject, dropZone) {

                if (gameState.grabedItem.id === 'key1') { 
                    gameState.itemBar = gameState.itemBar.filter(function(value, index, arr) { 
                        return value !== 'key1';
                    });
                    gameState.items.key1.done = true;
                    this.itemBar.destroy();
                    this.itemBarConstructor();
                    this.box1KeyHole.destroy();
                    this.key1DropZone.destroy();
                    this.box1KeyHoleInserted.setVisible(true);
                    this.setHitArea(this.key1TurnArea, key1DropZonePoint, false);
                    this.key1TurnArea.on('pointerup', function() {
                        gameState.doneEvents.box1 = true;
                        this.box1KeyHoleInserted.destroy();
                        this.box1Close.destroy();
                        this.box1KeyHoleInsertedTurned.setVisible(true);
                        this.hammerLayer.setVisible(true);
                        this.setHitArea(this.hammerHitArea, hammerHitAreaPoints, false);
                        this.hammerHitArea.on('pointerdown', function() {
                            this.hammerHitArea.destroy();
                            this.hammerLayer.destroy();
                            this.getItem('straw');
                        }, this);
                        this.key1TurnArea.destroy();
                        this.unlock = this.sound.add('unlock');
                        this.unlock.play();
                    }, this);
                }
        
            }, this);

        } else if (gameState.items.key1.done && !gameState.doneEvents.box1) {

            this.add.image(0, 0, 'box1').setOrigin(0, 0);
            this.box1Close = this.add.image(0, 0, 'box1Close').setOrigin(0, 0);
            this.box1KeyHoleInserted = this.add.image(0, 0, 'box1KeyHoleInserted').setOrigin(0, 0);
            this.box1KeyHoleInsertedTurned = this.add.image(0, 0, 'box1KeyHoleInsertedTurned').setOrigin(0, 0);
            this.hammerLayer = this.add.image(0, 0, 'hammerLayer').setOrigin(0, 0);

            this.box1KeyHoleInsertedTurned.setVisible(false);
            this.hammerLayer.setVisible(false);

            this.key1TurnArea = this.add.graphics();
            const key1HitAreaPoint = [410, 470, 130];

            this.setHitArea(this.key1TurnArea, key1HitAreaPoint, false);

            //Hammer
            this.hammerHitArea = this.add.graphics();
            const hammerHitAreaPoints = [350, 80, 440, 80, 460, 350, 350, 350];



            this.key1TurnArea.on('pointerup', function() {
                gameState.doneEvents.box1 = true;
                this.box1KeyHoleInserted.destroy();
                this.box1Close.destroy();
                this.box1KeyHoleInsertedTurned.setVisible(true);
                this.hammerLayer.setVisible(true);
                this.setHitArea(this.hammerHitArea, hammerHitAreaPoints, false);
                this.key1TurnArea.destroy();
                this.unlock = this.sound.add('unlock');
                this.unlock.play();
                this.hammerHitArea.on('pointerdown', function() {
                    this.hammerHitArea.destroy();
                    this.hammerLayer.destroy();
                    this.getItem('straw');
                }, this);
            }, this);

        } else if (gameState.doneEvents.box1 && !gameState.items.straw.found) {

            this.add.image(0, 0, 'box1').setOrigin(0, 0);
            this.box1KeyHoleInsertedTurned = this.add.image(0, 0, 'box1KeyHoleInsertedTurned').setOrigin(0, 0);
            this.hammerLayer = this.add.image(0, 0, 'hammerLayer').setOrigin(0, 0);
            
            //Hammer
            this.hammerHitArea = this.add.graphics();
            const hammerHitAreaPoints = [350, 80, 440, 80, 460, 350, 350, 350];

            this.setHitArea(this.hammerHitArea, hammerHitAreaPoints, false);

            this.hammerHitArea.on('pointerdown', function() {
                this.hammerHitArea.destroy();
                this.hammerLayer.destroy();
                this.getItem('straw');
            }, this);

        } else {

            this.add.image(0, 0, 'box1').setOrigin(0, 0);
            this.box1KeyHoleInsertedTurned = this.add.image(0, 0, 'box1KeyHoleInsertedTurned').setOrigin(0, 0);

        }

        this.itemBarConstructor();
        this.navBelowArrowBConstructor('Box1Scene', 'GameScene3');
        
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

}