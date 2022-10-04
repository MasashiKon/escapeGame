class GameSceneDrawer4 extends Phaser.Scene {
    constructor() {
        super({key: 'GameSceneDrawer4'})
    }



    create() {
        this.add.image(0, 0, 'drawer4').setOrigin(0, 0);
        this.add.image(0, 0, 'iceLayer').setOrigin(0, 0);
        this.milkLayer = this.add.image(0, 0, 'milkLayer').setOrigin(0, 0);
        this.drawerClose = this.sound.add('drawerClose');
        this.drawer4LidSprite = this.add.sprite(0, 0, 'drawer4LidSpriteSheet').setOrigin(0, 0);

        if(!gameState.doneEvents.lid) {

            this.drawer4Lid = this.add.image(0, 0, 'drawer4Lid').setOrigin(0, 0);
            this.acid = this.sound.add('acid', {volume: .5})
            this.acid2 = this.sound.add('acid2', {volume: .5})
            //this.plugins.get('rexsoundfadeplugin').fadeOut(this, this.acid, 10);
            // this.tweens.add({
            //     targets:  this.acid,
            //     volume:   0.3,
            // });

            this.drawer4LidHitArea = this.add.graphics();
            const drawer4LidHitAreaPoints = [390, 200, 170]

            this.setHitArea(this.drawer4LidHitArea, drawer4LidHitAreaPoints, false, true, true);

            this.input.on('drop', function(p, ob, dropZone) {

                if (dropZone === this.drawer4LidHitArea && gameState.grabedItem.id === 'bottle') {

                    this.drawer4Lid.destroy();
                    this.drawer4LidHitArea.destroy();
                    this.itemDone('bottle');
                    gameState.doneEvents.lid = true;

                    this.drip= this.sound.add('drip');

                    this.drip.play();

                    const dripStop = setTimeout(() => {

                        this.drip.stop();

                        const startBurn = setTimeout(() => {

                            this.anims.create({
                                key: 'lidAction',
                                frames: this.anims.generateFrameNumbers('drawer4LidSpriteSheet', { start: 0, end: 4 }),
                                frameRate: 2,
                                repeat: 0
                            });
        
                            this.drawer4LidSprite.anims.play('lidAction', true);
                            this.acid.play();
                            this.acid2.play();
                            
                            const stopAcid = setTimeout(() => {
        
                                this.acid.stop();
                                this.acid2.stop();
        
                            }, 2500)
        
                            const destroyLid = setTimeout(() => {
        
                                this.drawer4LidSprite.destroy();
        
                                this.milkLayerHitArea = this.add.graphics();
                                const milkLayerHitAreaPoints = [370, 90, 420, 150, 420, 280, 330, 280, 330, 150];
                
                                this.setHitArea(this.milkLayerHitArea, milkLayerHitAreaPoints, false);
                
                                this.milkLayerHitArea.on('pointerdown', function() {
                                    this.getItem('milk');
                                    this.milkLayer.destroy();
                                    this.milkLayerHitArea.destroy();
                                }, this);      
        
                            }, 2500)



                        }, 1000)

                    }, 500)

                }

            }, this);

        } else {

            this.drawer4LidSprite.destroy();

            if (!gameState.items.milk.found) {

                this.milkLayerHitArea = this.add.graphics();
                const milkLayerHitAreaPoints = [370, 90, 420, 150, 420, 280, 330, 280, 330, 150];

                this.setHitArea(this.milkLayerHitArea, milkLayerHitAreaPoints, false);

                this.milkLayerHitArea.on('pointerdown', function() {
                    this.getItem('milk');
                    this.milkLayer.destroy();
                    this.milkLayerHitArea.destroy();
                }, this);          
            } else {
                this.milkLayer.destroy();
            }

        }

        this.navBelowArrowBConstructor('GameSceneDrawer2', 'GameScene2');
        this.itemBarConstructor();
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
                this.drawerClose.play();
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