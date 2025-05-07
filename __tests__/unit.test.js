// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2


test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number: 1b3-d5f-7h9j', () => {
  expect(isPhoneNumber('1b3-d5f-7h9j')).toBe(false);
});

test('valid email: test@example.com', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email: test@example.org', () => {
  expect(isEmail('test@example.org')).toBe(true);
});
test('invalid email: test@.org', () => {
  expect(isEmail('test@.org')).toBe(false);
});
test('invalid email: testexamplecom', () => {
  expect(isEmail('testexamplecom')).toBe(false);
});

test('strong password: Abcd1234', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});
test('strong password: A_123', () => {
  expect(isStrongPassword('A_123')).toBe(true);
});
test('weak password: abcd1234', () => {
  expect(isStrongPassword('1234abcd')).toBe(false);
});
test('weak password: A', () => {
  expect(isStrongPassword('A')).toBe(false);
});

test('valid date: 11/06/2024', () => {
  expect(isDate('11/06/2024')).toBe(true);
});
test('valid date: 5/6/2025', () => {
  expect(isDate('5/6/2025')).toBe(true);
});
test('invalid date: 2025/06/11', () => {
  expect(isDate('2025/06/11')).toBe(false);
});
test('invalid date: 06-05-2025', () => {
  expect(isDate('06-05-2025')).toBe(false);
});

test('valid hex color: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid hex color: #A1B2C3', () => {
  expect(isHexColor('#A1B2C3')).toBe(true);
});
test('invalid hex color: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});
test('invalid hex color: ABCDE#', () => {
  expect(isHexColor('ABCDE#')).toBe(false);
});

