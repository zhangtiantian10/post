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

function formatZipCode(zipCode) {
    const splitedZipCodes = zipCode.split('-');
    const newZipCode = splitedZipCodes.reduce((prv, next) => {
        return prv + next;
    },'');

    return newZipCode.split('');
}

module.exports = {
    partiyBit: partiyBit,
    formatZipCode: formatZipCode
};
