export const intToString = (value) => {
  let suffixes = ["", "k", "m", "b","t"];
  let suffixNum = Math.floor((""+value).length/3);
  let shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
  if (value < 1000) {
    shortValue = value
    suffixNum = 0
  }
  return shortValue+suffixes[suffixNum];
}