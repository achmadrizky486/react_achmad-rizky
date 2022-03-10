var no = 5;
let b = "Kampus Merdeka";
let a = b;
const nama = "Budi";
// tugas b
let terdaftar = true;
// ------------
let lengkap_arr = [a, b, nama, terdaftar];

// tugas a
// console.log(lengkap_arr[2]);

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya" + " " +
        nama + " " +
        "nomor urut" + " " +
        no + " " +
        "sekarang sedang mengikuti" + " " +
        b + " " +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " " + "terdaftar sebagai kegiatan kampus merdeka");
}

console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

perkenalan();