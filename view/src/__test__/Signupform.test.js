
import Signupform, { emailValidation, nameValidation, passwordValidation } from '../Component/Signupform';


describe('signup validation', () => {
    test('frist testcase', () => {
        expect(emailValidation('abc@gmail.com')).toBe(true);
    });
    test('second testcase', () => {
        expect(emailValidation('abcgmail.com')).toBe(false);
    });
    test('third testcase', () => {
        expect(emailValidation('abc@.google.com')).toBe(false);
    });
    test('fourth testcase', () => {
        expect(nameValidation('')).toBe(false);
    });
    test('fifth testcase', () => {
        expect(nameValidation('adam')).toBe(true);
    });
    test('sixth testcase', () => {
        expect(passwordValidation('12345', '12345')).toBe(true);
    });
    test('seventh testcase', () => {
        expect(passwordValidation('12345', '1234')).toBe(false);
    });


})

