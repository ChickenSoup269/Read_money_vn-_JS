// darkmode - lightmode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode")
}
// }
const unitTest = [
  "",
  "một",
  "hai",
  "ba",
  "bốn",
  "năm",
  "sáu",
  "bảy",
  "tám",
  "chín",
]

const scaleTexts = ["", "nghìn", "triệu", "tỷ", "nghìn tỷ", "triệu tỷ", "tỷ tỷ"]

function readThreeDigits(number, hasScale = false) {
  const hundreds = Math.floor(number / 100)
  const remainder = number % 100
  const tens = Math.floor(remainder / 10)
  const units = remainder % 10

  // console.log({ number, hundreds, remainder, tens, units })

  let result = ""
  //
  if (hundreds > 0) {
    result += unitTest[hundreds] + " trăm "
  } else if (hasScale && (tens > 0 || units > 0)) {
    result += "không trăm"
  }

  //
  if (tens > 1) {
    result += unitTest[tens] + " mươi "
  } else if (tens === 1) {
    result += " mười "
  } else if (hasScale && units > 0) {
    result += " lẻ "
  }

  //
  if (tens > 1 && units === 1) {
    result += " mốt "
  } else if (tens > 0 && units === 5) {
    result += " lăm "
  } else if (units > 0) {
    result += unitTest[units]
  }

  return result.trim()
}

function readNumber(number) {
  let result = ""
  let index = 0
  let absNumber = Math.abs(number)
  const lastIndex = Math.floor(String(absNumber).length / 3)

  if (!absNumber) return "không đồng"

  do {
    const hasScale = index !== lastIndex
    const threeDigits = readThreeDigits(absNumber % 1000, hasScale)

    if (threeDigits) {
      result = `${threeDigits} ${scaleTexts[index]} ${result}`
    }

    absNumber = Math.floor(absNumber / 1000)
    index++
  } while (absNumber > 0)

  result = (number < 0 ? "âm " : "") + result.trim() + " đồng"

  return result[0].toUpperCase() + result.slice(1)
}

// Hàm lấy số tiền từ input và hiển thị

// console.log(readNumber(1234567))
// console.log(readNumber(-1001))
// console.log(readNumber(10000000000))
// console.log(readNumber(123))
