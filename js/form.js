function yanzheng() {
    var password = document.forms["myForm"]["password"].value;
    var dxzm = /[A-Z]/;

    if (password == "") {
      alert("请输入密码");
      return false;
    } else if (!dxzm.test(password)) {
      alert("密码必须包含至少一个大写字母");
      return false;
    }
  }
