var dataTouris = {
    login: [
        { user: 'anh', password: '1234', email: 'anh@gmail.com' },
        { user: '123', password: '1234', email: 'anh@gmail.com' },
        { user: 'anh1', password: '1234', email: 'anh@gmail.com' },
        { user: 'anh2', password: '1234', email: 'anh@gmail.com' },
        { user: 'anh3', password: '1234', email: 'anh@gmail.com' },
        { user: 'anh4', password: '1234', email: 'anh@gmail.com' },
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

localStorage.setItem('session', JSON.stringify(dataTouris.location));


var localCart = JSON.parse(localStorage.getItem('session'));
var localName = JSON.parse(localStorage.getItem('sessionNa'));
var localCartN = JSON.parse(localStorage.getItem('sessionN'));

var arr = new Array();
var arrUser = new Array();
var idLogin = 0;

function login1() {
    // console.log(dataTouris.login);
    var kt = false;
    var nameLogin;
    if (localName != null) {
        arrUser = localName;
        var name = document.getElementById("defaultForm-email").value;
        var pass = document.getElementById("defaultForm-pass").value;

        for (var i = 0; i < arrUser.length; i++) {
            if (arrUser[i].name == name && arrUser[i].pass == pass) {
                console.log(arrUser[i].id);
                kt = true;
                nameLogin = 'customer :' + arrUser[i].name;
                idLogin = arrUser[i].id;
                break;

            }
        }
        for (var i = 0; i < dataTouris.login.length; i++) {
            if (dataTouris.login[i].user == name && dataTouris.login[i].password == pass) {
                kt = true;
                document.getElementById("manager").style.display = 'block';
                document.getElementById("cont").style.display = 'none';
                nameLogin = 'manger :' + dataTouris.login[i].user;
                alert("ban da dang nhap vao manager!");
                break;

            }
        }

    }
    if (kt == true) {
        alert("ban da dang nhap thanh cong");
        document.getElementById("userlogin").innerHTML = nameLogin;
    } else {
        alert("ban da dang nhap that bai");
    }
}

function retu(id) {
    return id;
}

function regist() {
    var name = document.getElementById("orangeForm-name").value;
    var emai = document.getElementById("orangeForm-email").value;
    var pass = document.getElementById("orangeForm-pass").value;
    var repass = document.getElementById("orangeForm-repass").value;
    if (localName != null) {
        arrUser = localName;
    }
    if (pass == repass) {
        if (dataTouris.login < localName) {
            dataTouris.login = localName;
        }
        //else localName lon datatourist
        // else {
        //     dataTouris.login = localName;
        // }
        var count = arrUser.length + 1;
        console.log(arrUser);
        arrUser.push({ id: count, name: name, pass: pass, emai: emai });
        localStorage.setItem('sessionNa', JSON.stringify(arrUser));
        console.log(name);
        console.log(emai);
    }

}

function tbl1() {
    var demo = '<table id="tbl" class="table table-borderless">';
    demo += '<tr>';
    demo += '<th>ID</th>';
    demo += '<th>Name addrees</th>';
    demo += '<th>Image</th>';
    demo += '<th>Price Product</th>';
    demo += '<th>Quantity</th>';
    demo += '<th>Delete</th>';
    demo += '</tr>';
    demo += '</table>';
    document.getElementById('tbl').innerHTML = demo;
}


function cart() {
    var a = document.getElementById('cont');
    var b = document.getElementById('cart');
    a.style.display = 'none';
    b.style.display = 'block';
    var tbl = document.getElementById("tbl");
    if (localCartN != null) {
        tbl1();
    }
    if (arr.length == 0) {
        document.getElementById('tbl').innerHTML = "";
        tbl1();
        arr = localCartN;
    }
    for (var i = 0; i < localCartN.length; i++) {
        if (localCartN[i] != null && localCartN[i].id == idLogin) {
            var row = tbl.insertRow();
            var cellid = row.insertCell();
            var cellname = row.insertCell();
            var cellimg = row.insertCell();
            var cellprice = row.insertCell();
            var cellquantity = row.insertCell();
            var celldelete = row.insertCell();
            cellid.innerHTML = i + 1;
            cellname.innerHTML = localCartN[i].name;
            cellimg.innerHTML = '<div><img src="' + localCartN[i].img + '" style="width: 80px; height: 80px;"></div>';
            cellprice.innerHTML = localCartN[i].price;
            cellquantity.innerHTML = localCartN[i].quantity;
            celldelete.innerHTML = '<button onclick="deleteTable(' + i + ')" class="btn btn-danger">Xoa</button>';
        }
    }
    sum(localCartN);
    total(localCartN);
}

function add(j) {
    var ktlog = true;
    if (idLogin == 0) {
        ktlog = false;
        alert('ban chua dang nhap nen chua them duoc');
    }
    var kt = -1;
    if (localCartN != null && ktlog == true) {
        arr = localCartN;
        console.log(localCartN.length);
        for (var i = 0; i < localCartN.length; i++) {

            if (localCartN[i].name == dataTouris.location[j].name && localCartN[i].id == idLogin) {
                console.log(arr[i]);
                console.log(dataTouris.location[j].name);
                var quan;
                arr[i].quantity = arr[i].quantity + 1;
                // localCartN[i].quantity = localCartN[i].quantity + 1;
                localStorage.setItem('sessionN', JSON.stringify(arr));
                kt = 1;
            }
        }

    }
    if (kt == -1 & ktlog == true) {
        for (var i = 0; i < dataTouris.location.length; i++) {
            if (i == j) {
                console.log(idLogin);
                arr.push({ name: dataTouris.location[j].name, price: dataTouris.location[j].price, img: dataTouris.location[j].img, adrr: dataTouris.location[j].adrr, quantity: 1, id: idLogin });
                localStorage.setItem('sessionN', JSON.stringify(arr));
                console.log(arr);
            }
        }
    }
    sum(localCartN);
    total(localCartN);
    return localCartN;
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

var position = 0;

function deleteTable(index) {
    arr = localCartN;
    console.log(index);
    arr.splice(index, 1);
    console.log(arr);
    tbl1();

    localStorage.setItem('sessionN', JSON.stringify(arr));
    cart();
}

// sum in
function sum(localCartN) {
    var s = 0;
    for (i = 0; i < localCartN.length; i++) {
        s = s + localCartN[i].quantity * localCartN[i].price;
    }
    document.getElementById("sumCart").innerHTML = s + '$';
    return s;
}

function total(localCartN) {
    var tota = sum(localCartN) * 0.5;
    document.getElementById("totalcar").innerHTML = tota + '$';
}

function inCart() {
    alert('ban da thanh toan');
}

// function list() {
//     var tbl = document.getElementById("listData");
//     if (localCartN != null) {
//         tbl1();
//     }
//     if (arr.length == 0) {
//         document.getElementById('tbl').innerHTML = "";
//         tbl1();
//         arr = localCartN;
//     }
//     for (var i = 0; i < localCartN.length; i++) {
//         if (localCartN[i] != null) {
//             var row = tbl.insertRow();
//             var cellid = row.insertCell();
//             var cellname = row.insertCell();
//             var cellimg = row.insertCell();
//             var cellprice = row.insertCell();
//             var cellquantity = row.insertCell();
//             var celldelete = row.insertCell();
//             cellid.innerHTML = i + 1;
//             cellname.innerHTML = localCartN[i].name;
//             cellimg.innerHTML = '<div><img src="' + localCartN[i].img + '" style="width: 80px; height: 80px;"></div>';
//             cellprice.innerHTML = localCartN[i].price;
//             cellquantity.innerHTML = localCartN[i].quantity;
//             celldelete.innerHTML = '<button onclick="deleteTable(' + i + ')" class="btn btn-danger">Xoa</button>';
//         }
//     }
// }