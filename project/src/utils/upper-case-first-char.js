const ucFirstChar = (line) => {
  if (!line) {
    return line;
  }

  return line[0].toUpperCase() + line.slice(1);
};

export default ucFirstChar;
