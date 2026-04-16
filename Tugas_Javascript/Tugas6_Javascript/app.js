// app.js
import { index, store, store2 } from "./modules/controller.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("form-user");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = {
      nama: document.getElementById("nama").value,
      umur: document.getElementById("umur").value,
      alamat: document.getElementById("alamat").value,
      email: document.getElementById("email").value
    };

    store(user);

    form.reset();
  });

  document.getElementById("btnTambah").addEventListener("click", (e) => {
    e.preventDefault();
    store2();
  });

  document.getElementById("btnTampil").addEventListener("click", index);
});