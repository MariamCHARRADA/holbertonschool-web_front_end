class studentHogwarts {
     privateScore = 0;
     name = null;

     // #: private method that can only be accessed within the class:
     // this protects the privateScore from unintended modifications
    #changeScoreBy = function (points) {
        this.privateScore += points;
    };

    // Public Methods:
    setName(newName) {
        this._name = newName;
    }
    rewardStudent() {
        this.#changeScoreBy(1);
    }
    penalizeStudent() {
        this.#changeScoreBy(-1);
    }
    getScore() {
        this.name = this._name;
        return this.name + ': ' + this.privateScore;
    }
}
const harry = new studentHogwarts();
harry.setName('harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
