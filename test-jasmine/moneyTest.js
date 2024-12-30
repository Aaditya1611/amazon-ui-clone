import { formatCurrency } from "../script/utils/money.js";

describe('test suite: format currency' , () => {
    it('converts cents into dollars' , () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00')
    });
    it('rounds upto nearest highest number', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01')
    });
    it('rounds upto nearest lowest number', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00')
    });
})