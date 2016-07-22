'use strict';

const main = require('../main/transZipCodeToBarcode');
const loadBarcodes = require('./fixtures');

describe('post', () => {
    let zipCode;
    let zipCodes;
    let checkDigits;
    
    beforeEach(() => {
        zipCode = '45056-1234';
        zipCodes = ['4','5','0','5','6','1','2','3','4'];
        checkDigits = [4,5,0,5,6,1,2,3,4,0];
    });
    
   describe('partiyBit', () => {
       let rightZipCode;
       let wrongZipCode;
       let wrongZipCodeTwo;

       beforeEach(() => {
           rightZipCode = '45056-1234';
           wrongZipCode = '4567';
           wrongZipCodeTwo = '4505a-1234'
       });
       
       it('when zipCode is right', () => {
          expect(main.partiyBit(rightZipCode)).toEqual(true);
       });
       
       it('when zipCode is wrong', () => {
           expect(main.partiyBit(wrongZipCode)).toEqual(false);

           expect(main.partiyBit(wrongZipCodeTwo)).toEqual(false);
       });
   });
    
    it('formatZipCode', () => {
        const expectZipCodes = ['4','5','0','5','6','1','2','3','4'];
        
        expect(main.formatZipCode(zipCode)).toEqual(expectZipCodes);
    });

    it('buildCheckDigits', () => {
        const expectCheckDigits = [4,5,0,5,6,1,2,3,4,0];

        expect(main.buildCheckDigits(zipCodes)).toEqual(expectCheckDigits);
    });
    
    it('buildBarcode', () => {
        const expectBarcode = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        
        expect(main.buildBarcode(checkDigits, loadBarcodes)).toEqual(expectBarcode);
    });
});
