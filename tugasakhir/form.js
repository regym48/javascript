console.log("nyambung")
function buat_login() {
    var a = document.getElementById("x");
    a.remove();
    
    var f = document.createElement("form");
        f.setAttribute('method',"post");

    var l = document.createElement("label");
        l.innerHTML = "Nama User";

    var i = document.createElement("input");
        i.setAttribute('type',"text");
        i.setAttribute('name',"nama");
        i.setAttribute('placeholder',"Nama User..");
    
    var l2 = document.createElement("label");
        l2.innerHTML = "Nomer Handphone";

    var i2 = document.createElement("input");
        i2.setAttribute('type',"tel");
        i2.setAttribute('name',"tlpn");
        i2.setAttribute('placeholder',"Nomer Handphone..");

    var l3 = document.createElement("label");
        l3.innerHTML = "Username";

    var i3 = document.createElement("input");
        i3.setAttribute('type',"text");
        i3.setAttribute('name',"username");
        i3.setAttribute('placeholder',"Username atau Email..");

    var l4 = document.createElement("label");
        l4.innerHTML = "Password";

    var i4 = document.createElement("input");
        i4.setAttribute('type',"password");
        i4.setAttribute('name',"password");
        i4.setAttribute('placeholder',"Password..");    

    var s = document.createElement("input"); 
        s.setAttribute('type',"submit");
        s.setAttribute('value',"Submit");
        s.setAttribute('class',"tombol_login");

        f.appendChild(l);
        f.appendChild(i);
        f.appendChild(l2);
        f.appendChild(i2);
        f.appendChild(l3);
        f.appendChild(i3);
        f.appendChild(l4);
        f.appendChild(i4);
        f.appendChild(s);

        document.getElementById("kotak_login").appendChild(f);
}