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

    describe('buildZipCode', () => {
        let rightCheckDigits;
        let falseCheckDigits;

        beforeEach(() => {
            rightCheckDigits = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];
            falseCheckDigits = [4, 5, 0, 5, 6, 1, 2, 3, 4, 2];
        });


        it('checkDigit is true', () => {
           const expectZipCode = '45056-1234';
            
            expect(main.buildZipCode(rightCheckDigits)).toEqual(expectZipCode);
        });

        it('checkDigit is false', () => {
            expect(main.buildZipCode(falseCheckDigits)).toEqual('This barcode is wrong');
        });
    })
    
    describe('printZipCode', () => {
        let wrongBarcode;
        let rightBarcode;
        
        beforeEach(() => {
           wrongBarcode = ':|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::';
           rightBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|' 
        });
        
       it('when barcode is wrong', () => {
          expect(main.printZipCode(wrongBarcode)).toEqual('This barcode is wrong') ;
       });
        
        it('when barcode is right', () => {
           const expectZipCode = '45056-1234';
           
           expect(main.printZipCode(rightBarcode, loadBarcodes)).toEqual(expectZipCode);
        });
    });
    
});
