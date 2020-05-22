let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function () {
  let username = document.getElementById("txtUsername").value;
  let password = document.getElementById("txtPass").value;

  let name = "Bui Phan Tho";
  let pass = "123";

  if (username === name && password === pass) {
    //thanh cong
  } else {
    //that bai
  }
});
