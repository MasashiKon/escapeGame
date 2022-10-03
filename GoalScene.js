class GoalScene extends Phaser.Scene {
    constructor() {
        super({key: 'GoalScene'})
    }
    
    preload() {

        this.load.audio('applause', 'soundFile/スタジアムの歓声.mp3');

    }

    create() {

        if(!gameState.doneEvents.gameEnd) {
            const setDelay = setTimeout(() => {

                this.add.text(200, 300, "Congratulations!", { font: "50px Times New Roman", fill:"#000000"});
                
                clearTimeout(setDelay);

            }, 1000);

            gameState.doneEvents.gameEnd = true;

        } else {
               
            this.add.text(200, 300, "Congratulations!", { font: "50px Times New Roman", fill:"#000000"});
            

            // if(!gameState.doneEvents.applause) {
            //     if (!this.sound.locked) {
            //         this.applause = this.sound.add('applause');
            //         // already unlocked so play
            //         this.applause.play();
            //     }
            //     else {
            //         // wait for 'unlocked' to fire and then play
            //         this.sound.once(Phaser.Sound.Events.UNLOCKED, () => {
            //             this.applause.play();
            //         })
            //     }

                //gameState.doneEvents.applause = true;
                
            //}

            
        }
       
    }

}


