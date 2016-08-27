function PhilosoraptorThougths() {
    this.roars = require('./Roars');
    this.memes = require('./Memes');
};

/**
 * Returns either a roar or a meme.
 * 
 * @precondition none
 * @postcondition none
 * 
 * @return a roar or a meme
 */
PhilosoraptorThougths.prototype.getSurprise = function() {
    if (Math.random() <= 0.25) {
         return this.getRoar();
    }
    return this.getMeme();
};

/**
 * Returns a roar
 * 
 * @precondition none
 * @postcondition none
 * 
 * @return a roar
 */
PhilosoraptorThougths.prototype.getRoar = function() {
    return this.getRandomItem(this.roars);
};

/**
 * Returns a meme
 * 
 * @precondition none
 * @postcondition none
 * 
 * @return a meme
 */
PhilosoraptorThougths.prototype.getMeme = function() {
    return this.getRandomItem(this.memes);
};

/**
 * Returns a randomly selected element from a list
 * 
 * @precondition none
 * @postcondition none
 * 
 * @return one element from a list.
 */
PhilosoraptorThougths.prototype.getRandomItem = function(list) {
    return list[Math.floor(Math.random() * list.length)];
}

module.exports = PhilosoraptorThougths;
