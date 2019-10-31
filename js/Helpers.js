//Returns String with replacing 'Spaces'
const escapeSpaces = str => {
  return (
    !!str &&
    str
      .toString()
      .split(" ")
      .join("*--")
  );
};

//Returns Strings with spaces previously escaped
const unEscapeSpaces = str => {
  return (
    !!str &&
    str
      .toString()
      .split("*--")
      .join(" ")
  );
};

export { escapeSpaces, unEscapeSpaces };
