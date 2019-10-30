//Returns String with replacing 'Spaces'
const escapeSpaces = str =>
  str
    .toString()
    .split(" ")
    .join("*--");

//Returns Strings with spaces previously escaped
const unEscapeSpaces = str =>
  str
    .toString()
    .split("*--")
    .join(" ");

export { escapeSpaces, unEscapeSpaces };
