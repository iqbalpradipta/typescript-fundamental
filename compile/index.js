"use strict";
let namaSaya = "iqbal pradipta";
let userName = 123;
let isReal = true;
// console.log({ namaSaya });
// console.log({ userName });
// console.log({ isReal });
//array
let mobil;
mobil = ["BMW i3", "Agera One", "Mitshubishi Lancer Evo"];
// console.log({ mobil });
// array tupletype array
let buah;
buah = ["mangga", "anggur"];
let temanKita;
temanKita = {
    nama: "Agus",
    umur: 25,
    isAlive: true,
};
// console.log({ temanKita });
// Function
// versi pertama function
function create() {
    let nomorRandom = Math.floor(Math.random() * 11);
    return nomorRandom;
}
// console.log(create())
// versi kedua function
const create2 = () => "Hello World";
// versi ketiga dengan keluaran void
function create3() {
    console.log(3 * 2);
}
// create3()
// Function with parameters
function pertambahan(x, y) {
    return `Hasil dari ${x} X ${y} = ${x * y}`;
}
let genderOrang;
genderOrang = false;
const pc = {
    processor: "AMD Ryzen 5 4800K",
    motherboard: "MSI B450M-PRO MAX",
    ram: 2,
    storage: "SSD Apacer 126 gb",
    psu: "Cooler MAster 450W",
    ups: true,
};
function ayoRakitPC(rakitPC) {
    console.log(`PC anda dengan spesifikasi: 
    ${rakitPC.processor},
    ${rakitPC.motherboard},
    RAM ${rakitPC.ram}GB,
    ${rakitPC.storage},
    ${rakitPC.psu},
    apakah anda ingin menggunakan property tambahan? ${rakitPC.ups}
    PC Telah selesai dirakit
    `);
}
ayoRakitPC(pc);
