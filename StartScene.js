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
        this.load.audio('common', 'soundFile/決定ボタンを押す34.mp3');
        this.load.audio('unlock', 'soundFile/turning_a_lock2.mp3');
        this.load.audio('locked', 'soundFile/microwave.mp3');
        this.load.plugin('rexdragplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexdragplugin.min.js', true);
        this.load.plugin('rexsoundfadeplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsoundfadeplugin.min.js', true);
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


