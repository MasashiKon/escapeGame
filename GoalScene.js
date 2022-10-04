class GoalScene extends Phaser.Scene {
    constructor() {
        super({key: 'GoalScene'})
    }
    
    preload() {

        this.load.audio('applause', 'soundFile/waa.mp3');

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
            

             if(!gameState.doneEvents.applause) {

                this.applause = this.sound.add('applause');

                this.applause.play();

                gameState.doneEvents.applause = true;
                
            }

            
        }
       
    }

}


