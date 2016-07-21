'use strict';

const main = require('../main/transBarcodeToZipCode');

describe('post', () => {
    let barcode;
    beforeEach(() => {
       barcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|' ;
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
});
