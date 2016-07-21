'use strict';

const main = require('../main/transBarcodeToZipCode');
const loadBarcodes = require('./fixtures');

describe('post', () => {
    let barcode;
    let splitedBarcodes;
    beforeEach(() => {
        barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|' ;
        splitedBarcodes = [':|::|',':|:|:','||:::',':|:|:',':||::',':::||','::|:|','::||:',':|::|','||:::']

    });

   describe('parityBit', () => {
       let rightBarcode;
       let falseBarcode;
       
       beforeEach(() => {
           rightBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|' ;
           falseBarcode = ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::';
       });
       it('when barcode is right reutrn true', () => {
          expect(main.parityBit(rightBarcode)).toEqual(true);
      });

       it('when barcode is false reutrn false', () => {
           expect(main.parityBit(falseBarcode)).toEqual(false);
       });
   });
    
    it('buildSplitedBarcodes', () => {
        const expectSplitedBarcodes = [':|::|',':|:|:','||:::',':|:|:',':||::',':::||','::|:|','::||:',':|::|','||:::']

       expect(main.buildSplitedBarcodes(barcode)).toEqual(expectSplitedBarcodes);
    });
    
    it('buildCheckDigits', () => {
       const expectCheckDigits =  [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];

        expect(main.buildCheckDigits(splitedBarcodes, loadBarcodes)).toEqual(expectCheckDigits);
    });

});
