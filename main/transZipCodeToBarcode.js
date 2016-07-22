'use strict';

function partiyBit(zipCode) {
    if(zipCode.length === 5 || zipCode.length === 9 || zipCode.length === 10){
        for(let i = 0 ; i < zipCode.length ; i++) {
            if(isNaN(parseInt(zipCode.charAt(i))) && zipCode.charAt(i) != '-'){
                return false;
            }
        }
        return true;
    }

    return false;
}

module.exports = {
    partiyBit: partiyBit
};
