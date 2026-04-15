// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Monitor", harga: 3000000 },
  { id: 4, nama: "Keyboard", harga: 500000 },
  { id: 5, nama: "Mouse", harga: 250000 }
];

// nama fungsi bebas
const eventHandler = {
  onTambah: (id, nama, harga) => tambahProduk(id, nama, harga),
  onHapus: (id) => hapusProduk(id),
  onTampil: () => tampilkanProduk()
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };

  // spread operator
  produkList = [...produkList, produkBaru];

  console.log("Produk berhasil ditambahkan");
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
  // rest parameter
  const [...data] = produkList;

  produkList = data.filter(produk => produk.id !== id);

  console.log("Produk berhasil dihapus");
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("Daftar Produk:");

  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: ${harga}`);
  });

  console.log("----------------------");
}

tampilkanProduk();

tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();