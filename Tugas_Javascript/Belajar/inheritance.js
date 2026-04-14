class vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.brand} ${this.model}, Tahun : (${this.year})`;
    }
}    

class car extends vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }
    getCarInfo() {
        return `${this.getInfo()} - Jumlah Pintu: ${this.doors}`;
    }
}

class motorcycle extends vehicle {
    constructor(brand, model, year, type) {
        super(brand, model, year);
        this.type = type;
    }
    getMotorcycleInfo() {
        return `${this.getInfo()} - Jenis: ${this.type}`;
    }
}

let myCar = new car("Toyota", "Corolla", 2020, 4);
let myMotorcycle = new motorcycle("Honda", "CBR500R", 2019, "Sport");

console.log(myCar.getCarInfo());
console.log(myMotorcycle.getMotorcycleInfo());