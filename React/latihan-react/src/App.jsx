import "./App.css";

/**
 * Membuat component Header
 * Component Header menampilkan navigasi
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Content
 * Component Content menampung konten utama
 */
function Content() {
  return <h1>Content</h1>;
}

/**
 * Membuat component Footer
 * COmponent Footer menampilkan informasi footer
 */

function Footer() {
  return (
    <footer>
      <h2>NF Academy</h2>
      <p>Created by React JS</p>
    </footer>
  );
}

function Hello() {
  const nama = "Fikri";
  return (
    <>
      <h2>Hello React</h2>
      <p>Saya {nama} - Seorang Frontend Developer </p>
    </>
  );
}

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Profile(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Content />
      <Hello />
      <Greeting name="Fikri" />
      <Profile name="Yandi" age={25} country="Indonesia" />
      <Footer />
    </>
  );
}

export default App
