// @flow

import {
  string_of_bool,
  bool_of_string,
  string_of_float,
  float_of_string
} from "./src/index.js";

declare var test: any;
declare var expect: any;

test("string_of_bool", () => {
  expect(string_of_bool(true)).toEqual("true");
  expect(string_of_bool(false)).toEqual("false");
});

test("bool_of_string", () => {
  expect(bool_of_string("true")).toEqual(true);
  expect(bool_of_string("false")).toEqual(false);
});

test('raise an exception if the string is not "true" or "false".', () => {
  expect(() => {
    bool_of_string("invalid_value");
  }).toThrowError(/Invalid_argument "bool_of_string"/);
});

test("string_of_float", () => {
  expect(string_of_float(10)).toEqual("10");
  expect(string_of_float(10.5)).toEqual("10.5");
});

test("float_of_string", () => {
  expect(float_of_string("10")).toEqual(10);
  expect(float_of_string("10.5")).toEqual(10.5);
});

test("raise an exception if the string if invalid number", () => {
  expect(() => {
    float_of_string("invalid");
  }).toThrowError(/Failure "float_of_string"/);
  expect(() => {
    float_of_string("10.0.0");
  }).toThrowError(/Failure "float_of_string"/);
  expect(() => {
    float_of_string("");
  }).toThrowError(/Failure "float_of_string"/);
});
