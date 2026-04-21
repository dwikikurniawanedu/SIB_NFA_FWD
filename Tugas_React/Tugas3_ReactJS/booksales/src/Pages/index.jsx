import BooksPage from "../components/Books";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BooksPage />
      <Footer />
    </>
  );
}