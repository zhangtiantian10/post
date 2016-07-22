'use strict';

function partiyBit(zipCode) {

    const length = zipCode.length;
    if (length === 5 || length === 9 || length === 10) {
        for (let i = 0; i < length; i++) {
            if (isNaN(parseInt(zipCode.charAt(i))) && zipCode.charAt(i) != '-') {
                return false;
            }
        }
        return true;
    }

    return false;
}

function printBarcode(zipCode, numBarcodes) {
    if (!partiyBit(zipCode)) {
        return 'This zipCode is wrong!';
    }

    const zipCodes = formatZipCode(zipCode);
    const checkDigits = buildCheckDigits(zipCodes);

    return buildBarcode(checkDigits, numBarcodes);
}

function formatZipCode(zipCode) {
    const splitedZipCodes = zipCode.split('-');
    const newZipCode = splitedZipCodes.reduce((prv, next) => {
        return prv + next;
    }, '');

    return newZipCode.split('');
}

function calcCheckDigit(checkDigits) {
    const sum = checkDigits.reduce((a, b) => a + b);
    let checkDigit = 0;
    if (sum % 10 != 0) {
        checkDigit = 10 - sum % 10;
    }
    return checkDigit;
}
function buildCheckDigits(zipCodes) {
    let checkDigits = zipCodes.map(zipCode => parseInt(zipCode));
    var checkDigit = calcCheckDigit(checkDigits);

    checkDigits.push(checkDigit);

    return checkDigits;
}

function buildBarcode(checkDigits, numBarcodes) {
    return `|${checkDigits.reduce((a, b) => {
        const numBarcode = numBarcodes.find(numBarcode => numBarcode.num === b);
        if (numBarcode) {
            return a + numBarcode.code;
        }
    }, '')}|`;
}

module.exports = {
    partiyBit: partiyBit,
    formatZipCode: formatZipCode,
    buildCheckDigits: buildCheckDigits,
    buildBarcode: buildBarcode,
    printBarcode: printBarcode
};
