class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }
    //create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property. We use a getter, so no need to write with _
    toggleCheckOutStatus() {
        if (this.isCheckedOut === true) {
            this.isCheckedOut = false;
        } else {
            this.isCheckedOut = true;
        }
    }

    //create a method named getAverageRating. Return the average value of the ratings array. Use the reduce method to find the sum of the ratings array. Divide this sum by the length of the ratings array, and return the result.
    //currentSum = accumulator (starts at 0), the sum is saved to ratings array
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingsSum / this.ratings.length; //return average
    }

    //using a setter would overwrite the whole array, we just want to add one value to the end of the array
    addRating(rating) {
        this.ratings.push(rating);
    }
}

//Book class that extends Media
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;

    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

//Movie class that extends Media
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

//Create a Book instance with the following properties
let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);

historyOfEverything.addRating(5);

historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();

console.log(historyOfEverything.getAverageRating());


//Create a Movie instance with the following properties

let speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

speed.getAverageRating();
console.log(speed.getAverageRating());