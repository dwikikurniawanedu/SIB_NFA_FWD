// **Data Produk (minimal 5)**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Mouse", harga: 200000 },
  { id: 5, nama: "Keyboard", harga: 300000 }
];

// **Event Handler (contoh sederhana)**
const eventHandler = {
  klikTampil: () => tampilkanProduk(),
};

// **Menambahkan Produk (Spread Operator)**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };

  // spread: menambahkan tanpa merusak data lama
  produkList = [...produkList, produkBaru];

  console.log("Produk berhasil ditambahkan!");
}

// **Menghapus Produk (Rest Parameter + filter)**
function hapusProduk(id) {
  // filter produk selain id yang dihapus
  produkList = produkList.filter(produk => produk.id !== id);

  console.log("Produk berhasil dihapus!");
}

// **Menampilkan Produk (Destructuring)**
function tampilkanProduk() {
  console.log("=== Daftar Produk ===");

  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
  });
}

// ===============================
// **EVENT LISTENER (Simulasi DOM)**
// ===============================

// contoh jika di HTML ada button dengan id "btnTampil"
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnTampil");

  if (btn) {
    btn.addEventListener("click", eventHandler.klikTampil);
  }
});

// ===============================
// **TEST MANUAL (WAJIB ADA)**
// ===============================

// tampil awal
tampilkanProduk();

// tambah produk
tambahProduk(6, "Headset", 400000);
tampilkanProduk();

// hapus produk
hapusProduk(2);
tampilkanProduk();