function formatNumber(number) {
  return number.toLocaleString("vi-VN")
}

function newElement() {
  var inputValue = document.getElementById("myInput").value
  if (inputValue === "") {
    alert("Nhập số tiền bất kỳ")
    return
  }

  // Định dạng số tiền với dấu chấm
  var formattedNumber = formatNumber(Number(inputValue))

  // Chuyển đổi số tiền sang dạng chữ
  var moneyInWords = readNumber(Number(inputValue))

  // Thêm hàng mới vào bảng
  var table = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0]
  var newRow = table.insertRow()

  // Thêm cột số tiền
  var cell1 = newRow.insertCell(0)
  cell1.innerHTML = formattedNumber

  // Thêm cột số tiền bằng chữ
  var cell2 = newRow.insertCell(1)
  cell2.innerHTML = moneyInWords

  // Thêm cột nút xóa
  var cell3 = newRow.insertCell(2)
  var btn = document.createElement("button")
  btn.innerHTML = "Xóa"
  btn.className = "delete-btn"
  btn.onclick = function () {
    var row = this.parentElement.parentElement
    row.remove()
  }
  cell3.appendChild(btn)

  // Xóa giá trị trong ô input sau khi thêm
  document.getElementById("myInput").value = ""
}
