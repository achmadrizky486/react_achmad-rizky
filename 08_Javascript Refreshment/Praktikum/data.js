var a = 5;
let b = "Kampus Merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya" +
        nama +
        "nomor urut" +
        a +
        "sekarang sedang mengikuti" +
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " " + "terdaftar sebagai kegiatan kampus merdeka");
}
a = b;
nama = b;
console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);