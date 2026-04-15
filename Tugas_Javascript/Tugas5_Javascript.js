// **Data Produk (minimal 5)**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Mouse", harga: 200000 },
  { id: 5, nama: "Keyboard", harga: 300000 }
];

const eventHandler = {
  klikTampil: () => tampilkanProduk(),
};

// **Menambahkan Produk (Spread Operator)**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };

  produkList = [...produkList, produkBaru];

  console.log("Produk berhasil ditambahkan!");
}

function hapusProduk(id) {
  // filter produk selain id yang dihapus
  produkList = produkList.filter(produk => produk.id !== id);

  console.log("Produk berhasil dihapus!");
}

function tampilkanProduk() {
  console.log("=== Daftar Produk ===");

  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}`);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnTampil");

  if (btn) {
    btn.addEventListener("click", eventHandler.klikTampil);
  }
});

tampilkanProduk();

tambahProduk(6, "Headset", 400000);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();