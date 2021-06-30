var x =[160,165,170,172,175,177,180,182,183,185];

function y() {
    for (let i = 0; i<x.length; i++) {
        console.log(angka[i])
    }
}
function z() {
    for (let i of x) {
        console.log(i)
    }
}
y()
console.log("-----------------------")
z()
//perulangan pada for biasa berjalan dengan menjumlahkan variabel i terus menerus sejumlah panjang data array lalu menampilkan array
//perulangan pada for of berjalan dengan mengisi variabel i dengan array sesuai isi panjang array itu sendiri
