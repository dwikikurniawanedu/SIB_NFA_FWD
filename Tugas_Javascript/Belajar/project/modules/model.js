export class ProdukModel {
    constructor() {
        this.produkList = [];
    }
    tambahProduk(namaProduk) {
        this.produkList.push(namaProduk);
    }

    hapusProduk(namaProduk) {
        this.produkList = this.produkList.filter(produk => produk !== namaProduk);
    }

    getProdukList() {
        return this.produkList;
    }
}