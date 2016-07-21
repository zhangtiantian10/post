'use strict';

function printZipCode(barcode, numBarcodes) {
    if(!parityBit(barcode)) {
        return 'This barcode is wrong';
    }

    const splitedBarcodes = buildSplitedBarcodes(barcode);
    const checkDigits = buildCheckDigits(splitedBarcodes, numBarcodes);

    return buildZipCode(checkDigits);
}

function parityBit(barcode) {
    if((barcode.length - 2) % 5 === 0) {
        return true;
    }

    return false;
}

function buildSplitedBarcodes(barcode) {
    const splited = barcode.split('');
    let element = '';
    const splitedBarcodes = [];

    for(let i = 1 ; i < splited.length - 1 ; i++) {
        element += splited[i];

        if(i % 5 === 0) {
            splitedBarcodes.push(element);
            element = '';
        }
    }

    return splitedBarcodes;
}

function buildCheckDigits(splitedBarcodes, numBarcodes) {
    const checkDigits = [];
    for(const splitedBarcode of splitedBarcodes) {
        const numBarcode = numBarcodes.find(numBarcode => numBarcode.code === splitedBarcode);

        if(numBarcode) {
            checkDigits.push(numBarcode.num);
        }
    }

    return checkDigits;
}

function buildZipCode(checkDigits) {
    if(!judeCheckDigit(checkDigits)) {
        return 'This barcode is wrong';
    }

    if(checkDigits.length != 6){
        let prv = checkDigits[5];
        let next;
        for(let i = 6; i < checkDigits.length ; i++) {
            next = checkDigits[i];
            checkDigits[i] = prv;
            prv = next;
        }

        checkDigits[5] = '-';
    }

    return checkDigits.reduce((prv, next) => {return prv + next.toString()}, '');
}

function judeCheckDigit(checkDigits) {
    const sum = checkDigits.reduce((prv, next) => prv + next);

    if(sum % 10 === 0) {
        return true;
    }

    return false;
}

module.exports = {
    parityBit: parityBit,
    buildSplitedBarcodes: buildSplitedBarcodes,
    buildCheckDigits: buildCheckDigits,
    buildZipCode: buildZipCode,
    printZipCode: printZipCode
};