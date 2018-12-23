// @flow

// Inspired by https://reasonml.github.io/api/Pervasives.html#6_Stringconversionfunctions

export const string_of_bool = (value: boolean): string => {
  if (value) {
    return "true";
  } else {
    return "false";
  }
};

export const bool_of_string = (value: string): boolean => {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  throw Error('Invalid_argument "bool_of_string"');
};

export const string_of_float = (value: number): string => {
  return String(value);
};

export const float_of_string = (value: string): number => {
  const number = Number(value);
  if (Number.isNaN(number) || value.length === 0) {
    throw Error('Failure "float_of_string"');
  }
  return number;
};
