import { useState } from "react";
import styles from "../styles/books.module.css";
import books from "../Utils/books";

const Books = () => {
  const [bookList, setBookList] = useState(books);

  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "New Book",
      author: "Unknown Author",
      year: 2024,
      description: "This is a newly added book.",
      image: `https://picsum.photos/200?random=${bookList.length + 1}`,
    };

    setBookList([...bookList, newBook]);

    alert("Buku berhasil ditambahkan!");
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Daftar Buku</h2>

      <div className={styles.cardContainer}>
        {bookList.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>

            <p className={styles.author}>{book.author}</p>
            <p className={styles.year}>{book.year}</p>
            <p className={styles.desc}>{book.description}</p>
          </div>
        ))}
      </div>

      <button className={styles.button} onClick={handleAddBook}>
        Tambah Buku
      </button>
    </section>
  );
};

export default Books;
