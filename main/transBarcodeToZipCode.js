'use strict';

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

module.exports = {
    parityBit: parityBit,
    buildSplitedBarcodes: buildSplitedBarcodes,
    buildCheckDigits: buildCheckDigits
};