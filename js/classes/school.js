class School{

    //constructor is called when you create a new instance of the class. It sets property values for each instance
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    //The method should first check if the input (newNumberOfStudents) is a number.
    set numberOfStudents(value){
        if(typeof value === NaN){
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
        else{
            this._numberOfStudents = value;
        }
    }

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    //create a static method
    static pickSubstituteTeacher(substituteTeachers){

        //get a random integer between 0 and one less than the length of the substituteTeachers array
        const randInt = Math.floor(Math.random()* substituteTeachers.length);

        //return the i'th teacher from the list
        return substituteTeachers[randInt];

    }
}

//subclass inherits all of parents getters, setters and methods. You cal also use super keyword to set properties in the parent class
//PrimarySchool class only has one additional property, pickupPolicy
class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){

        //!!!!!!!Super keyword is used in subclasses to call a parent constructor. !!!!!
        //Pass it any arguments that the parent constructor() uses. Since this is the PrimarySchool class, pass 'primary' as the argument for the level parameter in the parent constructor.
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam){
        super(name, 'high', numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam(){
        return this._sportsTeam;
    }
}

//create an instance of primary school
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

//cannot access static method from an instance of the class, need to call it on School - where the static method is defined
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool ('Al E. Smith',415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//Get the value saved to the sportsTeams property in alSmith.
console.log(alSmith.sportsTeam);