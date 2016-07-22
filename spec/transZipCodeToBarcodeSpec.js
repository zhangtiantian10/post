'use strict';

const main = require('../main/transZipCodeToBarcode');

describe('post', () => {
    let zipCode;
    
    beforeEach(() => {
        zipCode = '45056-1234';
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
});
