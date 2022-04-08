const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onmouseover = alertMessage

document.onkeydown = function (e) {
  console.log(e.key)
}
