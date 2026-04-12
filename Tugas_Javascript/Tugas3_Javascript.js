const produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
]

const tambahProduk = (nama, harga, stok) => {
    const idBaru = produkToko.length > 0 ? produkToko.at(-1).id + 1 : 1;
    
    const produkBaru = { id: idBaru, nama, harga, stok };

    produkToko.push(produkBaru);
    console.log("Produk berhasil ditambahkan:", produkBaru);
}

const hapusProduk = (id) => {
    const index = produkToko.findIndex(produk => produk.id === id);
    
    if (index !== -1) {
        const produkHapus = produkToko.splice(index, 1);
        console.log("Produk berhasil dihapus:", produkHapus[0]);
    } else {
        console.log("Produk dengan ID", id, "tidak ditemukan!");
    }
}

const tampilkanProduk = () => {
    console.log("=== Daftar Produk ===");
    
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`);
    });
}

tampilkanProduk();

tambahProduk("Headset", 500000, 8);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();