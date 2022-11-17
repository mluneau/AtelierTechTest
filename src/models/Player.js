const Country = require('./Country');

class Player {
    constructor(player){
        // Constructor function to handle player objects
        this.id = player.id;
        this.firstname = player.firstname;
        this.lastname = player.lastname;
        this.shortname = player.shortname;
        this.sex = player.sex;
        this.country = new Country(player.country)
        this.picture = player.picture;
        this.rank = player.data.rank;
        this.points = player.data.points;
        this.age = player.data.age;
        this.height = player.data.height;
        this.weight = player.data.weight;
    }
}

module.exports = Player;
