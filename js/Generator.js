class Generator {
    constructor(maxNumber) {
        this.maxNumber = maxNumber;
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    getHeight(number) {
        let topBar = document.getElementById('bar');
        let bottomContainer = document.getElementById('button-container');
    
        let positionBar = topBar.getBoundingClientRect();
        let positionContainer = bottomContainer.getBoundingClientRect();
    
        let total = positionContainer.top - positionBar.bottom;
    
        return number * total / this.maxNumber;
    }
    
    generate() {
        let totalNumber = Math.floor(screen.width / 14);
        let array = [];
        
        let positionX = 0;
        
        for (let i = 0; i < totalNumber; i++) {
            let rndNumber = this.getRandomNumber(0, this.maxNumber);
            let height = this.getHeight(rndNumber);
            array.push(new Line(positionX, rndNumber, height, 'l-' + i));
            positionX += 14;
        }

        return array;
    }
}