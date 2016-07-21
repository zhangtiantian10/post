'use strict';

function parityBit(barcode) {
    if((barcode.length - 2) % 5 === 0 || barcode.length <= 52 || barcode.length >= 30) {
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

module.exports = {
    parityBit: parityBit,
    buildSplitedBarcodes: buildSplitedBarcodes
};