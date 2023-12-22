let namaSaya: String = "iqbal pradipta";
let userName: number = 123;
let isReal: boolean = true;

// console.log({ namaSaya });
// console.log({ userName });
// console.log({ isReal });

//array
let mobil: string[];
mobil = ["BMW i3", "Agera One", "Mitshubishi Lancer Evo"];
// console.log({ mobil });

// array tupletype array
let buah: [string, string];
buah = ["mangga", "anggur"];
// console.log({ buah });

//tipe data custom
type Teman = {
  nama: string;
  umur: number;
  isAlive: boolean;
};
let temanKita: Teman;

temanKita = {
  nama: "Agus",
  umur: 25,
  isAlive: true,
};
// console.log({ temanKita });

// Function
// versi pertama function
function create(): number {
  let nomorRandom: number = Math.floor(Math.random() * 11);
  return nomorRandom;
}
// console.log(create())

// versi kedua function
const create2 = (): string => "Hello World";

// versi ketiga dengan keluaran void
function create3(): void {
  console.log(3 * 2);
}
// create3()

// Function with parameters
function pertambahan(x: number, y: number): string {
  return `Hasil dari ${x} X ${y} = ${x * y}`;
}
// let result = pertambahan(12,3)
// console.log(result)

// Tipe Union
type Pria = string;
type Wanita = boolean;
type Gender = Pria | Wanita;

let genderOrang: Gender;

genderOrang = false;
// console.log(genderOrang)

// Interface and type

type Size = 2 | 4 | 8 | 16;
type Tipe = "DDR2" | "DDR3" | "DDR4"  

type RAM = Size | Tipe //ini bisa menggunakan & (Menggabungkan) dan | (memisahkan)

interface IrakitPC {
  processor: string;
  motherboard: string;
  ram: RAM;
  storage: string;
  psu: string;
}

interface SetPCGaming extends IrakitPC {
  overclock: boolean;
}

interface SetPCKantor extends IrakitPC {
  ups: boolean;
}

const pc: SetPCKantor = {
  processor: "AMD Ryzen 5 4800K",
  motherboard: "MSI B450M-PRO MAX",
  ram: 2,
  storage: "SSD Apacer 126 gb",
  psu: "Cooler MAster 450W",
  ups: true,
};

function ayoRakitPC(rakitPC: SetPCKantor): void {
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
