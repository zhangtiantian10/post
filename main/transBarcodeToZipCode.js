'use strict';

function printZipCode(barcode, numBarcodes) {
    if (!parityBit(barcode)) {
        return 'This barcode is wrong';
    }

    const splitedBarcodes = buildSplitedBarcodes(barcode);
    const checkDigits = buildCheckDigits(splitedBarcodes, numBarcodes);

    return buildZipCode(checkDigits);
}

function parityBit(barcode) {
    return (barcode.length - 2) % 5 === 0;
}

function buildSplitedBarcodes(barcode) {
    const splited = barcode.slice(1, -1).split('');
    const splitedBarcodes = [];
    let i = 0;
    const reduced = splited.reduce((a, b) => {
        if (i % 5 === 0 && i != 0) {
            splitedBarcodes.push(a);
            a = '';
        }
        i++;

        return a + b;
    }, '');

    splitedBarcodes.push(reduced);

    return splitedBarcodes;
}

function buildCheckDigits(splitedBarcodes, numBarcodes) {

    return splitedBarcodes.map(splitedBarcode => numBarcodes.find(numBarcode => numBarcode.code === splitedBarcode).num);
}

function buildZipCode(checkDigits) {
    if (!judeCheckDigit(checkDigits)) {
        return 'This barcode is wrong';
    }

    const zipCode = checkDigits.reduce((a, b) => {
        return a + b.toString()
    }, '');

    return `${zipCode.slice(0, 5)}-${zipCode.slice(5,-1)}`;
}

function judeCheckDigit(checkDigits) {
    const sum = checkDigits.reduce((prv, next) => prv + next);

    return sum % 10 === 0;
}

module.exports = {
    parityBit: parityBit,
    buildSplitedBarcodes: buildSplitedBarcodes,
    buildCheckDigits: buildCheckDigits,
    buildZipCode: buildZipCode,
    printZipCode: printZipCode
};
