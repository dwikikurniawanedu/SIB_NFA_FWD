// modules/controller.js
import users from "./data.js";

// Tampilkan Data (pakai map)
const index = () => {
  const list = document.getElementById("list-data");

  list.innerHTML = users.map((user, i) => `
    <li>
      ${user.nama} - ${user.umur} - ${user.alamat} - ${user.email}
      <button onclick="hapusData(${i})">Hapus</button>
    </li>
  `).join("");
};

// Tambah Data Manual (dari input)
const store = (user) => {
  users.push(user);
  index();
};

// Tambah 2 Data (sesuai soal)
const store2 = () => {
  users.push(
    { nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@mail.com" },
    { nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@mail.com" }
  );
  index();
};

// Hapus Data
const destroy = (indexUser) => {
  users.splice(indexUser, 1);
  index();
};

// supaya bisa dipanggil dari HTML
window.hapusData = destroy;

export { index, store, store2 };