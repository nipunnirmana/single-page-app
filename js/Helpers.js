const escapeSpaces = str =>
  str
    .toString()
    .split(" ")
    .join("*--");

const unEscapeSpaces = str =>
  str
    .toString()
    .split("*--")
    .join(" ");

export { escapeSpaces, unEscapeSpaces };
