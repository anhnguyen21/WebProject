var data = {
    login: [
        { user: 'anh', password: '1234' },
        { user: 'anh1', password: '1234' },
        { user: 'anh2', password: '1234' },
        { user: 'anh3', password: '1234' },
        { user: 'anh4', password: '1234' },
        { user: 'anh5', password: '1234' },
    ]
}

function login1() {
    var name = document.getElementById("name").value;
    console.log(name);
    var pass = document.getElementById("password").value;
    for (var i = 0; i < data.login.length; i++) {
        if (data.login[i].user == name && data.login[i].password == pass) {
            alert("ban da dang nhap thanh cong");
        } else {
            alert("ban da dang nhap that bai");
        }
    }
}

function regist() {
    var name = document.getElementById("name").value;
    console.log(name);
    var pass = document.getElementById("password").value;
    var repass = document.getElementById("repassword").value;
    if (pass == repass) {
        data.login.push({ user: name, password: pass });
    }
    console.log(data.login);
}