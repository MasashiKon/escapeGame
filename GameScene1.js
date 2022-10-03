class GameScene1 extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene1'})
    }

    preload() {
        this.load.image('face1', 'imageFile/Face1.png');
        this.load.image('face1KeyFalse', 'imageFile/Face1KeyFalse.png');
        this.load.image('face1KeyTrue', 'imageFile/Face1KeyTrue.png');
        this.load.image('face1Beyond', 'imageFile/Face1Beyond.png');
        this.load.audio('doorSound', 'soundFile/opendoor.mp3');
    }

    create() {

        if (!gameState.doneEvents.face1Door.turned && !gameState.doneEvents.face1Door.open) {
            this.face1 = this.add.image(0, 0, 'face1').setOrigin(0, 0);
            this.doorFalse = this.add.image(0, 0, 'face1KeyFalse').setOrigin(0, 0);

            this.locked = this.sound.add('locked');
            this.doorSound = this.sound.add('doorSound');

            //Key hole
            this.keyHoleHitArea = this.add.graphics();
            const keyHoleHitAreaPoints = [505, 400, 20];

            this.setHitArea(this.keyHoleHitArea, keyHoleHitAreaPoints, false, true, true);

            this.keyHoleHitArea.on('pointerup', function() {

                this.locked.play();

                // const playTwice = setTimeout(() => {

                //     this.locked.play();

                // }, 200)

            }, this)

            this.input.on('drop', function(p, ob, dropZone) {

                if (dropZone === this.keyHoleHitArea && gameState.grabedItem.id === 'key3') {

                    this.itemDone('key3');
                    this.unlock = this.sound.add('unlock');
                    this.unlock.play();
                    this.keyHoleHitArea.destroy();
                    gameState.doneEvents.face1Door.turned = true;


                    //Door Setting
                    this.doorHitArea = this.add.graphics();
                    const doorHitAreaPoints = [300, 200, 550, 180, 550, 600, 300, 600];

                    this.setHitArea(this.doorHitArea, doorHitAreaPoints, false);

                    this.doorHitArea.on('pointerup', function() {
                        this.face1.destroy();
                        this.doorFalse.destroy();
                        this.doorHitArea.destroy();

                        gameState.doneEvents.face1Door.open = true;
                        this.doorSound.play();

                        this.face1Beyond = this.add.image(0, 0, 'face1Beyond').setOrigin(0, 0);

                        this.shed1HitArea = this.add.graphics();
                        const shed1HitAreaPoints = [340, 230, 510, 230, 510, 320, 340, 320];
            
                        this.setHitArea(this.shed1HitArea, shed1HitAreaPoints, false);
            
                        this.shed1HitArea.on('pointerup', function() {
                            this.scene.stop('GameScene1');
                            this.scene.start('Shed1');
                        }, this);
            
                        this.shed2HitArea = this.add.graphics();
                        const shed2HitAreaPoints = [340, 330, 510, 330, 510, 420, 330, 430];
            
                        this.setHitArea(this.shed2HitArea, shed2HitAreaPoints, false);
            
                        this.shed2HitArea.on('pointerup', function() {
                            this.scene.stop('GameScene1');
                            this.scene.start('Shed2');
                        }, this);
                        
                        this.shed3HitArea = this.add.graphics();
                        const shed3HitAreaPoints = [330, 440, 510, 440, 510, 530, 330, 540];
            
                        this.setHitArea(this.shed3HitArea, shed3HitAreaPoints, false);
            
                        this.shed3HitArea.on('pointerup', function() {
                            this.scene.stop('GameScene1');
                            this.scene.start('Shed3');
                        }, this);

                    }, this);

                }
                // this.scene.stop('GameScene1');
                // this.scene.start('Face1KeyHole');
            }, this);

        } else if (gameState.doneEvents.face1Door.turned && !gameState.doneEvents.face1Door.open) {
            this.face1 = this.add.image(0, 0, 'face1').setOrigin(0, 0);
            this.face1KeyTrue = this.add.image(0, 0, 'face1KeyFalse').setOrigin(0, 0);

            this.doorSound = this.sound.add('doorSound');

            //Door Setting
            this.doorHitArea = this.add.graphics();
            const doorHitAreaPoints = [300, 200, 550, 180, 550, 600, 300, 600];

            this.setHitArea(this.doorHitArea, doorHitAreaPoints, false);

            this.doorHitArea.on('pointerup', function() {
                this.face1.destroy();
                this.face1KeyTrue.destroy();
                this.doorHitArea.destroy();

                gameState.doneEvents.face1Door.open = true;
                this.doorSound.play();

                this.face1Beyond = this.add.image(0, 0, 'face1Beyond').setOrigin(0, 0);

                this.shed1HitArea = this.add.graphics();
                const shed1HitAreaPoints = [340, 230, 510, 230, 510, 320, 340, 320];
    
                this.setHitArea(this.shed1HitArea, shed1HitAreaPoints, false);
    
                this.shed1HitArea.on('pointerup', function() {
                    this.scene.stop('GameScene1');
                    this.scene.start('Shed1');
                }, this);
    
                this.shed2HitArea = this.add.graphics();
                const shed2HitAreaPoints = [340, 330, 510, 330, 510, 420, 330, 430];
    
                this.setHitArea(this.shed2HitArea, shed2HitAreaPoints, false);
    
                this.shed2HitArea.on('pointerup', function() {
                    this.scene.stop('GameScene1');
                    this.scene.start('Shed2');
                }, this);
                
                this.shed3HitArea = this.add.graphics();
                const shed3HitAreaPoints = [330, 440, 510, 440, 510, 530, 330, 540];
    
                this.setHitArea(this.shed3HitArea, shed3HitAreaPoints, false);
    
                this.shed3HitArea.on('pointerup', function() {
                    this.scene.stop('GameScene1');
                    this.scene.start('Shed3');
                }, this);

            }, this);

        } else {

            this.face1Beyond = this.add.image(0, 0, 'face1Beyond').setOrigin(0, 0);

            this.shed1HitArea = this.add.graphics();
            const shed1HitAreaPoints = [340, 230, 510, 230, 510, 320, 340, 320];

            this.setHitArea(this.shed1HitArea, shed1HitAreaPoints, false);

            this.shed1HitArea.on('pointerup', function() {
                this.scene.stop('GameScene1');
                this.scene.start('Shed1');
            }, this);

            this.shed2HitArea = this.add.graphics();
            const shed2HitAreaPoints = [340, 330, 510, 330, 510, 420, 330, 430];

            this.setHitArea(this.shed2HitArea, shed2HitAreaPoints, false);

            this.shed2HitArea.on('pointerup', function() {
                this.scene.stop('GameScene1');
                this.scene.start('Shed2');
            }, this);
            
            this.shed3HitArea = this.add.graphics();
            const shed3HitAreaPoints = [330, 440, 510, 440, 510, 530, 330, 540];

            this.setHitArea(this.shed3HitArea, shed3HitAreaPoints, false);

            this.shed3HitArea.on('pointerup', function() {
                this.scene.stop('GameScene1');
                this.scene.start('Shed3');
            }, this);
            
        }

        this.itemBarConstructor();
        this.navArrowsConstructor('GameScene1', 'GameScene4', 'GameScene2');
        
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