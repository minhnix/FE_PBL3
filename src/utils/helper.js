export function formatCostNumber(val) {
  if (val === undefined || val === null) return null;
  if (isNaN(val)) return val;
  // remove sign if negative
  var sign = 1;
  if (val < 0) {
    sign = -1;
    val = -val;
  }

  // trim the number decimal point if it exists
  let num = val.toString().includes(".")
    ? val.toString().split(".")[0]
    : val.toString();

  while (/(\d+)(\d{3})/.test(num.toString())) {
    // insert comma to 4th last position to the match number
    num = num.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
  }

  // add number after decimal point
  if (val.toString().includes(".")) {
    num = num + "." + val.toString().split(".")[1];
  }

  // return result with - sign if negative
  num = sign < 0 ? "-" + num : num;
  return num + " VNĐ";
}

export function formatDate(date) {
  if (date == null || date === undefined) return null;
  const time = date.substring(11, 16);
  const a = date.substring(0, 10);
  const result = time + " " + a.split("-").reverse().join("/");
  return result;
}
