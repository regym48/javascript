function regex() {
    let data = "Belajar menimba ilmu programming bersama Niomic";
    let x = new RegExp('bersama')
    console.log(x.exec(data))
   }
regex()