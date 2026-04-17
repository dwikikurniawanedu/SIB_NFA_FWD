import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        {" "}
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          {" "}
          <div className="col-md-3 mb-2 mb-md-0">
            {" "}
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              {" "}
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: " rgb(116, 192, 252)" }}
              ></i>
              <span className="ms-2 fs-4 text-primary fw-bold">antarbook </span>
            </a>{" "}
          </div>{" "}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {" "}
            <li>
              <Link to="/" className="nav-link px-2">
                Home
              </Link>
            </li>{" "}
            <li>
              <Link to="/books" className="nav-link px-2">
                Book
              </Link>
            </li>{" "}
            <li>
              <Link to="/team" className="nav-link px-2">
                Team
              </Link>
            </li>{" "}
            <li>
              <Link to="/contact" className="nav-link px-2">
                Contact
              </Link>
            </li>{" "}
          </ul>{" "}
          <div className="col-md-3 text-end">
            {" "}
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>{" "}
            <button type="button" className="btn btn-primary">
              Register
            </button>{" "}
          </div>{" "}
        </header>{" "}


        {/* Hero */}
        <div className="container my-5">
          {" "}
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            {" "}
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              {" "}
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic Habits: An Easy & Proven Way to Build Good Habits & Break
                Bad Ones
              </h1>{" "}
              <p className="lead">
                An easy & proven way to build good habits & break bad ones.
                Atomic Habits is the #1 New York Times bestseller that has
                helped millions of readers to improve their lives. In this book,
                James Clear reveals practical strategies that will teach you
                exactly how to form good habits, break bad ones, and master the
                tiny behaviors that lead to remarkable results.
              </p>{" "}
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                {" "}
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Buy Now
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Detail
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              {" "}
              <img
                className="rounded-lg-3"
                src="./src/assets/Atomic_habits.jpg"
                alt=""
                width="410"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>


        {/* Products List */}
        <main>
          {" "}
          <section className="py-5 text-center container">
            {" "}
            <div className="row py-lg-5">
              {" "}
              <div className="col-lg-6 col-md-8 mx-auto">
                {" "}
                <h1 className="fw-light">Best Seller</h1>{" "}
                <p className="lead text-body-secondary">
                  Temukan buku-buku terfavorit pilihan kami. Koleksi ini
                  mencakup berbagai genre yang telah menginspirasi ribuan orang.
                  Miliki segera sebelum kehabisan!
                </p>{" "}
                <p>
                  {" "}
                  <Link to="/" className="btn btn-primary my-2 m-2">
                    Views
                  </Link>
                  <Link to="/" className="btn btn-secondary my-2">
                    Other Books
                  </Link>
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
          <div className="album py-5 bg-body-tertiary">
            {" "}
            <div className="container">
              {" "}
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {" "}
                <div className="col">
                  {" "}
                  <div className="card shadow-sm">
                    {" "}
                    <img
                      src="https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png"
                      className="shadow"
                      width="100%"
                      height="225"
                      alt="Team Member"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {" "}
                      <p className="card-text">
                        Atomic Habits is the #1 New York Times bestseller that
                        has helped millions of readers to improve their lives.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div className="card shadow-sm">
                    {" "}
                    <img
                      src="https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png"
                      className="shadow"
                      width="100%"
                      height="225"
                      alt="Team Member"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {" "}
                      <p className="card-text">
                        Atomic Habits is the #1 New York Times bestseller that
                        has helped millions of readers to improve their lives.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div className="card shadow-sm">
                    {" "}
                    <img
                      src="https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png"
                      className="shadow"
                      width="100%"
                      height="225"
                      alt="Team Member"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {" "}
                      <p className="card-text">
                        Atomic Habits is the #1 New York Times bestseller that
                        has helped millions of readers to improve their lives.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div className="card shadow-sm">
                    {" "}
                    <img
                      src="https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png"
                      className="shadow"
                      width="100%"
                      height="225"
                      alt="Team Member"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {" "}
                      <p className="card-text">
                        Atomic Habits is the #1 New York Times bestseller that
                        has helped millions of readers to improve their lives.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div className="card shadow-sm">
                    {" "}
                    <img
                      src="https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png"
                      className="shadow"
                      width="100%"
                      height="225"
                      alt="Team Member"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {" "}
                      <p className="card-text">
                        Atomic Habits is the #1 New York Times bestseller that
                        has helped millions of readers to improve their lives.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <div className="card shadow-sm">
                    {" "}
                    <img
                      src="https://assets.telkomsel.com/public/2024-10/buku%20atomic%20habits.png"
                      className="shadow"
                      width="100%"
                      height="225"
                      alt="Team Member"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body">
                      {" "}
                      <p className="card-text">
                        Atomic Habits is the #1 New York Times bestseller that
                        has helped millions of readers to improve their lives.
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </main>

        
        {/* Footer */}
        <div className="container">
          {" "}
          <footer className="py-3 my-4">
            {" "}
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              {" "}
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-body-secondary">
                  Home
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-body-secondary">
                  Book
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to="/team" className="nav-link px-2 text-body-secondary">
                  Team
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link px-2 text-body-secondary"
                >
                  Contact
                </Link>
              </li>{" "}
            </ul>{" "}
            <p className="text-center text-body-secondary">
              © 2025 NF Academy - Dwiki Kurniawan
            </p>{" "}
          </footer>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
