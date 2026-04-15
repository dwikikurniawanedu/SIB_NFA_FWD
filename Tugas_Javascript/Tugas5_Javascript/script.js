// **Data Produk**
let produkList = [
  {id: 1, nama: "Laptop", harga: 12000000},
  {id: 2, nama: "Smartphone", harga: 5000000},
  {id: 3, nama: "Mouse", harga: 200000},
  {id: 4, nama: "Keyboard", harga: 300000},
  {id: 5, nama: "Monitor", harga: 2500000}
];

// Event Handler
document.getElementById("btnTambah").addEventListener("click", () => {
  tambahProduk(6, "Tablet", 7000000);
});

document.getElementById("btnHapus").addEventListener("click", () => {
  hapusProduk(5);
});

document.getElementById("btnTampil").addEventListener("click", tampilkanProduk);

// Spread Operator
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, {id, nama, harga}];
}

// Rest
function hapusProduk(id) {
  produkList = produkList.filter(produk => produk.id !== id);
}

// Destructuring
function tampilkanProduk() {
  produkList.forEach(({id, nama, harga}) => {
    console.log(`${id} - ${nama} - Rp${harga}`);
  });
}