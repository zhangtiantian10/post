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

function buildCheckDigits(zipCodes) {
    let checkDigits = zipCodes.map(zipCode => parseInt(zipCode));
    const sum = checkDigits.reduce((a,b) => a + b);
    let checkDigit;
    if (sum % 10 != 0) {
        checkDigit = 10 - sum % 10;
    } else {
        checkDigit = 0;
    }

    checkDigits.push(checkDigit);
    
    return checkDigits;
}

module.exports = {
    partiyBit: partiyBit,
    formatZipCode: formatZipCode,
    buildCheckDigits:buildCheckDigits
};
