'use strict';

const main = require('../main/transZipCodeToBarcode');

describe('post', () => {
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
});
