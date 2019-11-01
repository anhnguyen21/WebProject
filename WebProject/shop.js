var data = {
    login: [
        { user: 'anh', password: '1234' },
        { user: 'anh1', password: '1234' },
        { user: 'anh2', password: '1234' },
        { user: 'anh3', password: '1234' },
        { user: 'anh4', password: '1234' },
        { user: 'anh5', password: '1234' },
    ],
    location: [
        { name: 'New Zealand', price: 1.2 },
        { name: 'Goa', price: 1.5 },
        { name: 'France', price: 1.6 },
        { name: 'Canada', price: 200 },
        { name: 'Turkey', price: 1.5 },
        { name: 'Egypt', price: 1.2 },
        { name: 'Japan', price: 1.2 },
        { name: 'Braxil', price: 1.7 }
    ]
}

var dataTouris = {
    login: [
        { user: 'anh', password: '1234', address: 'quang tri', email: 'anh@gmail.com', brithday: '10-10-199' },
        { user: '123', password: '1234', address: 'quang tri', email: 'anh@gmail.com', brithday: '10-10-199' },
        { user: 'anh1', password: '1234', address: 'quang tri', email: 'anh@gmail.com', brithday: '10-10-199' },
        { user: 'anh2', password: '1234', address: 'quang tri', email: 'anh@gmail.com', brithday: '10-10-199' },
        { user: 'anh3', password: '1234', address: 'quang tri', email: 'anh@gmail.com', brithday: '10-10-199' },
        { user: 'anh4', password: '1234', address: 'quang tri', email: 'anh@gmail.com', brithday: '10-10-199' },
    ],
    location: [
        { name: 'New Zealand', price: 1.2, img: 'images/page2_img1.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'Goa', price: 1.5, img: 'images/page2_img2.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'France', price: 1.6, img: 'images/page2_img3.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'Canada', price: 200, img: 'images/page2_img4.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'Turkey', price: 1.5, img: 'images/page2_img5.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'Egypt', price: 1.2, img: 'images/page2_img6.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'Japan', price: 1.2, img: 'images/page2_img7.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' },
        { name: 'Braxil', price: 1.7, img: 'images/page2_img8.jpg', adrr: 'Copacabana Beach, Rio de Janeiro' }
    ]
}

var arr = [];

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


function cart() {
    var a = document.getElementById('cont');
    var b = document.getElementById('cart');
    a.style.display = 'none';
    b.style.display = 'block';
    var tbl = document.getElementById("tbl");
    var x = tbl.rows.length;
    if (arr.length == 0) {
        document.getElementById('tbl').innerHTML = "";
    }
    while (--x) {
        tbl.deleteRow(x);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            var row = tbl.insertRow();
            var cellid = row.insertCell();
            var cellname = row.insertCell();
            var cellimg = row.insertCell();
            var cellprice = row.insertCell();
            var cellday = row.insertCell();
            var celldelete = row.insertCell();
            cellid.innerHTML = i + 1;
            cellname.innerHTML = arr[i].name;
            cellimg.innerHTML = '<div src="' + arr[i].image + '" id="img"\></div>';
            cellprice.innerHTML = arr[i].price;
            cellday.innerHTML = arr[i].date;
            x -= 1;
            celldelete.innerHTML = '<button onclick="deleteTable(' + x + ')" class="btn btn-danger">Xoa</button>';
            console.log(arr[i].image);
        }
    }
}

function add(j) {
    for (var i = 0; i < data.location.length; i++) {
        if (i == j) {
            arr.push({ name: data.location[i].name, price: data.location[i].price });
        }
    }
    console.log(arr);
}

function backHome() {
    var a = document.getElementById('cont');
    var b = document.getElementById('detai');
    var c = document.getElementById('cart');
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
}

function Detail(j) {
    if (j == 7) {
        var a = document.getElementById('cont');
        var b = document.getElementById('detai');
        a.style.display = 'none';
        b.style.display = 'block';
    }
}

function login() {

}

var position = 0;

function next(i) {
    position = position + i;
    console.log(position);
    if (position == 0) {
        document.getElementByClassName('showImg1').src = 'images/page2_img8.jpg';
    }
    if (position == 1) {
        document.getElementsByClassName('showImg1').src = 'images/page2_img8.jpg';
    }
    if (position == 2) {
        document.getElementsByClassName('showImg1').src = 'images/page2_img6.jpg';
    }
    if (position == 3) {
        document.getElementsByClassName('showImg1').src = 'images/page2_img8.jpg';
    }

}

function deleteTable(index) {
    arr.splice(index, 1);
    console.log("1");
    cart();
}