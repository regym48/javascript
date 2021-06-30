//materi variabel object
function xyz() {
    const x = {
        nama: "Galaxy Eyes Photon Dragon",
        atk: 3000,
        tipe: "Monster"
    }
    console.log(x)
    for (let i in x) {
        console.log(x[i])
    }
}
xyz()