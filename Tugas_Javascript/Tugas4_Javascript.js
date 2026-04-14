class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
    infoSewa() {
        return `Pelanggan: ${this.nama}, Nomor Telepon: ${this.nomorTelepon}, Kendaraan Disewa: ${this.kendaraanDisewa}`;
    }   
}

class manajemenTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }
    catatTransaksi(nama, nomorTelepon, kendaraanDisewa) {
        const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
        this.daftarPelanggan.push(pelangganBaru);
        console.log(`Transaksi Berhasil: ${nama} baru saja menyewa kendaraan`);
    }

    tampilkanPenyewa() {
        console.log("=== Daftar Pelanggan yang sedang Menyewa ===");
        if (this.daftarPelanggan.length === 0) {
            console.log("Belum ada pelanggan yang menyewa.");
            return;
        }   
        this.daftarPelanggan.forEach((pelanggan, index) => {
            console.log(`${index + 1}. ${pelanggan.infoSewa()}`);
        })
    }
}
const sistemSewa = new manajemenTransportasi();

sistemSewa.catatTransaksi("Bimo", "08123456789", "Honda PCX");
sistemSewa.catatTransaksi("Ainun", "08129876543", "Honda Supra");

sistemSewa.tampilkanPenyewa();