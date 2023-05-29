// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Tests for isPhoneNumber
test('Valid phone number should return true', () => {
  expect(functions.isPhoneNumber('(925) 551-7880')).toBe(true);
});

test('Valid phone number should return true', () => {
  expect(functions.isPhoneNumber('408-564-1367')).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(functions.isPhoneNumber('(925)551-788')).toBe(false);
});

test('Invalid phone number should return false', () => {
  expect(functions.isPhoneNumber('911')).toBe(false);
});

// Tests for isEmail
test('Valid email should return true', () => {
  expect(functions.isEmail('test@example.com')).toBe(true);
});

test('Valid email should return true', () => {
  expect(functions.isEmail('hello123@gmail.com')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(functions.isEmail('invalid.email')).toBe(false);
});

test('Invalid email should return false', () => {
  expect(functions.isEmail('notanemail@')).toBe(false);
});

// Tests for isStrongPassword
test('Strong password should return true', () => {
  expect(functions.isStrongPassword('Password123')).toBe(true);
});

test('Strong password should return true', () => {
  expect(functions.isStrongPassword('Passw0rdflies')).toBe(true);
});

test('Weak password should return false', () => {
  expect(functions.isStrongPassword('die')).toBe(false);
});

test('Weak password should return false', () => {
  expect(functions.isStrongPassword('123456789')).toBe(false);
});

// Tests for isDate
test('Valid date should return true', () => {
  expect(functions.isDate('05/28/2023')).toBe(true);
});

test('Valid date should return true', () => {
  expect(functions.isDate('07/20/2003')).toBe(true);
});

test('Invalid date should return false', () => {
  expect(functions.isDate('1/1/2')).toBe(false);
});

test('Invalid date should return false', () => {
  expect(functions.isDate('30/30/30')).toBe(false);
});

// Tests for isHexColor
test('Valid hex color should return true', () => {
  expect(functions.isHexColor('#FF0000')).toBe(true);
});

test('Valid hex color should return true', () => {
  expect(functions.isHexColor('#00FF00')).toBe(true);
});

test('Invalid hex color should return false', () => {
  expect(functions.isHexColor('#ZZZZZZ')).toBe(false);
});

test('Invalid hex color should return false', () => {
  expect(functions.isHexColor('#pretty')).toBe(false);
});

