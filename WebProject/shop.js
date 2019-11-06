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
var localAdd = JSON.parse(localStorage.getItem('sessionadd'));
var arr = new Array();
var arrUser = new Array();
var idLogin = 0;
function login1() {
    // console.log(dataTouris.login);
    var kt = false;
    var nameLogin;
    if (localName != null) {
        arrUser = localName;
    }
    console.log(arrUser);
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
            document.getElementById("cart").style.display = 'none';
            list();
            nameLogin = 'manger :' + dataTouris.login[i].user;
            alert("ban da dang nhap vao manager!");
            break;
        }
    }
    if (kt == true) {
        alert("ban da dang nhap thanh cong");
        document.getElementById("userlogin").innerHTML = nameLogin;
    } else {
        alert("ban da dang nhap that bai");
    }
}
function regist() {
    var name = document.getElementById("orangeForm-name").value;
    var emai = document.getElementById("orangeForm-email").value;
    var pass = document.getElementById("orangeForm-pass").value;
    var repass = document.getElementById("orangeForm-repass").value;
    if (localName != null) {
        arrUser = localName;
    }
    if(checkoutName(name)==true){
        alert("tai khoan da ton tai");
    }else{
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
}
function checkoutName(name){
    for(var i=0;i<arrUser.length;i++){
        if(arrUser[i].name==name){
            return true;
            break;
        }
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
    document.getElementById('tbl').innerHTML = "";
    tbl1();
    var a = document.getElementById('cont');
    var b = document.getElementById('cart');
    a.style.display = 'none';
    b.style.display = 'block';
    var tbl = document.getElementById("tbl");
    if (localCartN != null) {
        arr = localCartN;
    }
    if (arr.length == 0) {
        document.getElementById('tbl').innerHTML = "";
        tbl1();
        arr = localCartN;
    }else{
        console.log(arr.length);
        console.log(arr);
        for (var i = 0; i < arr.length; i++) {

            if (arr[i] != null && arr[i].iduser == idLogin) {

                var row = tbl.insertRow();
                var cellid = row.insertCell();
                var cellname = row.insertCell();
                var cellimg = row.insertCell();
                var cellprice = row.insertCell();
                var cellquantity = row.insertCell();
                var celldelete = row.insertCell();
                cellid.innerHTML = i + 1;
                cellname.innerHTML = arr[i].name;
                cellimg.innerHTML = '<div><img src="' + arr[i].img + '" style="width: 80px; height: 80px;"></div>';
                cellprice.innerHTML = arr[i].price;
                cellquantity.innerHTML = arr[i].quantity;
                celldelete.innerHTML = '<button onclick="deleteTable(' + i + ')" class="btn btn-danger">Xoa</button>';
            }
        }
        if (arr != null) {
            sum(localCartN);
            total(localCartN);
        }
    }
}
function add(j) {
    var ktlog = true;
    if (idLogin == 0) {
        ktlog = false;
        alert('ban chua dang nhap nen chua them duoc');
    }
    var kt = -1;
    console.log(ktlog);
    if (localCartN != null) {
        arr = localCartN;
    }
    // console.log(localCartN.length);
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name == dataTouris.location[j].name && arr[i].id == idLogin) {
            console.log(arr[i]);
            console.log(dataTouris.location[j].name);
            arr[i].quantity = arr[i].quantity + 1;
            // localCartN[i].quantity = localCartN[i].quantity + 1;
            localStorage.setItem('sessionN', JSON.stringify(arr));
            kt = 1;
            break;
        }
    }
    if (kt == -1 & ktlog == true) {
        for (var i = 0; i < dataTouris.location.length; i++) {
            if (i == j) {
                var temp = {
                    name: dataTouris.location[j].name,
                    price: dataTouris.location[j].price,
                    img: dataTouris.location[j].img,
                    adrr: dataTouris.location[j].adrr,
                    quantity: 1,
                    iduser: idLogin
                };
                arr.push(temp);
                localStorage.setItem('sessionN', JSON.stringify(arr));
                console.log(arr);
            }
        }
    }
    if (arr != null) {
        sum(localCartN);
        total(localCartN);
        return localCartN;
    }
}
function backHome() {
    var a = document.getElementById('cont');
    var b = document.getElementById('detai');
    var c = document.getElementById('cart');
    var d = document.getElementById('manager');
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
    d.style.display = 'none';
}
function Detail(j) {
    if (j == 7) {
        var a = document.getElementById('cont');
        var b = document.getElementById('detai');
        a.style.display = 'none';
        b.style.display = 'block';
    }
}
function deleteTable(index) {
    if (localCartN != null) {
        arr = localCartN;
    }
    if(arr[index].quantity>1){
        arr[index].quantity=arr[index].quantity-1;
    }else{
        console.log(index);
        arr.splice(index, 1);
        console.log(arr);
    }
    tbl1();

    localStorage.setItem('sessionN', JSON.stringify(arr));
    cart();
}
// function deleteTable(index) {
//     if (localCartN != null) {
//         arr = localCartN;
//     }
//     console.log(index);
//     arr.splice(index, 1);
//     console.log(arr);
//     tbl1();

//     localStorage.setItem('sessionN', JSON.stringify(arr));
//     cart();
// }
// sum in
function sum(localCartN) {
    var s = 0;
    if (localCartN != null) {
        arr = localCartN;
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id = idLogin) {
            s = s + arr[i].quantity * arr[i].price;
        }
    }
    document.getElementById("sumCart").innerHTML = s + '$';
    return s;
}
function total(localCartN) {
    var tota = sum(localCartN) * 0.95;
    document.getElementById("totalcar").innerHTML = tota + '$';
}
function inCart() {
    alert('ban da thanh toan');
}
function tbl2() {
    var demo = '<table id="listData" class="table table-borderless">';
    demo += '<tr>';
    demo += '<th>Id</th>';
    demo += '<th>Name addrees</th>';
    demo += '<th>Price Product</th>';
    demo += '<th>Image</th>';
    demo += '<th>Quantity</th>';
    demo += '<th>Delete</th>';
    demo += '</tr>';
    demo += '</table>';
    document.getElementById('listData').innerHTML = demo;
}
function list() {
    var tbl = document.getElementById("listData");
    document.getElementById('listData').innerHTML = "";
    tbl2();
    console.log(dataTouris.location);
    for (var i = 0; i < dataTouris.location.length; i++) {
        var row = tbl.insertRow();
        var cellid = row.insertCell();
        var cellname = row.insertCell();
        var cellprice = row.insertCell();
        var cellimg = row.insertCell();
        var cellAddrees = row.insertCell();
        var celldelete = row.insertCell();
        cellid.innerHTML = i + 1;
        cellname.innerHTML = dataTouris.location[i].name;
        cellimg.innerHTML = '<div><img src="' + dataTouris.location[i].img + '" style="width: 80px; height: 80px;"></div>';
        cellprice.innerHTML = dataTouris.location[i].price;
        cellAddrees.innerHTML = dataTouris.location[i].adrr;
        celldelete.innerHTML = '<button onclick="deleteTable(' + i + ')" class="btn btn-danger">Xoa</button>';
    }
}
function addProduct() {
    console.log(1);
    var nameadd = document.getElementById("nameadd").value;
    var priceadd = document.getElementById("priceadd").value;
    var addressadd = document.getElementById("adreadd").value;
    var imgadd = document.getElementById("imgadd").value;
    if (localAdd != null) {
        dataTouris.location = localAdd;
    }
    var temp = { name: nameadd, price: priceadd, img: imgadd, adrr: addressadd };
    console.log(temp);
    dataTouris.location.push(temp);
    localStorage.setItem('sessionadd', JSON.stringify(dataTouris.location));
    list();
}
function tbl3() {
    var demo = '<table id="listDataCart" class="table table-borderless">';
    demo += '<tr>';
    demo += '<th>Id</th>';
    demo += '<th>Name addrees</th>';
    demo += '<th>Name Customer</th>';
    demo += '<th>Image</th>';
    demo += '<th>Price Product</th>';
    demo += '<th>Quantity</th>';
    demo += '<th>Delete</th>';
    demo += '</tr>';
    demo += '</table>';
    document.getElementById('listDataCart').innerHTML = demo;
}
function cartPro() {
    var tbl = document.getElementById("listDataCart");
    document.getElementById('listDataCart').innerHTML = "";
    tbl3();
    if (localCartN != null) {        
        tbl1();        
        arr = localCartN;        // localCartN = arr;    
    }    
    if (arr.length == 0) {        
        document.getElementById('listDataCart').innerHTML = "";        
        tbl1();        
        arr = localCartN;    
    }
    console.log(arr);       
    for (var i = 0; i < arr.length; i++) {  
    console.log(arr[i].iduser);    
        if (arr[i] != null) {            
            var row = tbl.insertRow();            
            var cellid = row.insertCell();            
            var cellname = row.insertCell(); 
            var cellcus = row.insertCell();            
            var cellimg = row.insertCell();            
            var cellprice = row.insertCell();            
            var cellquantity = row.insertCell();            
            var celldelete = row.insertCell();            
            cellid.innerHTML = i + 1;
            cellname.innerHTML = arr[i].name; 
            cellcus.innerHTML=nameCustomer(arr[i].iduser);
            cellimg.innerHTML = '<div><img src="' + arr[i].img + '" style="width: 80px; height: 80px;"></div>'; 
            cellprice.innerHTML = arr[i].price;
            cellquantity.innerHTML = arr[i].quantity; 
            celldelete.innerHTML = '<button onclick="deleteTable(' + i + ')" class="btn btn-danger">Xoa</button>';        
        }    
    }
}
function nameCustomer(j){
    console.log(i);
    if(localName!=null){
        arrUser=localName;
    }
    console.log(arrUser);
    for(var i=0;i<arrUser.length;i++){
        if(arrUser[i].id==j){
            console.log(arrUser[i].name);
            return arrUser[i].name; 
            break;
        }
    }
}
function addPro() {
    document.getElementById("list1").style.display = 'none';
    document.getElementById("addP").style.display = 'block';
    document.getElementById("listCart1").style.display = 'none';
    document.getElementById("search").style.display = 'none';
}
function listProduct() {
    document.getElementById("list1").style.display = 'block';
    document.getElementById("addP").style.display = 'none';
    document.getElementById("listCart1").style.display = 'none';
    document.getElementById("search").style.display = 'none';
}
function listCart() {
    cartPro();
    document.getElementById("list1").style.display = 'none';
    document.getElementById("addP").style.display = 'none';
    document.getElementById("listCart1").style.display = 'block';
    document.getElementById("search").style.display = 'none';
}
function searchCart(){
    document.getElementById("list1").style.display = 'none';
    document.getElementById("addP").style.display = 'none';
    document.getElementById("listCart1").style.display = 'none';
    document.getElementById("search").style.display = 'block';
}
// function sear(){
//     var name=document.getElementById("isearch").value;
//     for(var i=0;i<arr.length;i++){
//         arr
//     }
// }
function tbl4() {
    var demo = '<table id="listDataCartSea" class="table table-borderless">';
    demo += '<tr>';
    demo += '<th>Id</th>';
    demo += '<th>Name addrees</th>';
    demo += '<th>Name Customer</th>';
    demo += '<th>Image</th>';
    demo += '<th>Price Product</th>';
    demo += '<th>Quantity</th>';
    demo += '<th>Delete</th>';
    demo += '</tr>';
    demo += '</table>';
    document.getElementById('listDataCartSea').innerHTML = demo;
}
function sear() {
    var kt=false;
    var name=document.getElementById("isearch").value;
    var tbl = document.getElementById("listDataCartSea");
    document.getElementById('listDataCartSea').innerHTML = "";
    tbl4();
    if (localCartN != null) {        
        tbl1();        
        arr = localCartN;        // localCartN = arr;    
    }    
    if (arr.length == 0) {        
        document.getElementById('listDataCartSea').innerHTML = "";        
        tbl1();        
        arr = localCartN;    
    }
    console.log(arr);       
    for (var i = 0; i < arr.length; i++) {  
    console.log(arr[i].iduser);    
        if (arr[i] != null&&arr[i].name==name) {            
            var row = tbl.insertRow();            
            var cellid = row.insertCell();            
            var cellname = row.insertCell(); 
            var cellcus = row.insertCell();            
            var cellimg = row.insertCell();            
            var cellprice = row.insertCell();            
            var cellquantity = row.insertCell();            
            var celldelete = row.insertCell();            
            cellid.innerHTML = i + 1;
            cellname.innerHTML = arr[i].name; 
            cellcus.innerHTML=nameCustomer(arr[i].iduser);
            cellimg.innerHTML = '<div><img src="' + arr[i].img + '" style="width: 80px; height: 80px;"></div>'; 
            cellprice.innerHTML = arr[i].price;
            cellquantity.innerHTML = arr[i].quantity;             
            celldelete.innerHTML = '<button onclick="Update(' + i + ')" data-toggle="modal" data-target="#modalLoginForm">Edit</button>';
            kt=true;
        }    
    }
    if(kt==false){
        alert("khong co phan tu nao");
    }
}
function Update(index){
    console.log(1);
    var name=document.getElementById("formNameEdit").value;
    var quantity=document.getElementById("formPositionEdit").value;
    if(name!=null||quantity!=null){

    }
}
 




