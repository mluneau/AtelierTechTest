const countryList = require('../data/countryList')

class Country {
    constructor(country) {
        this.code = country.code;
        this.name = this.getCountryName(country.code);
        this.flag = country.picture;
    }

    getCountryName(code) {
        return countryList[code];
    }
}

module.exports = Country;
