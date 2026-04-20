import { Link } from "react-router";
export default function ProductList() {
  return (
    <>
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
                Temukan buku-buku terfavorit pilihan kami. Koleksi ini mencakup
                berbagai genre yang telah menginspirasi ribuan orang. Miliki
                segera sebelum kehabisan!
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
                      Atomic Habits is the #1 New York Times bestseller that has
                      helped millions of readers to improve their lives.
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
                      Atomic Habits is the #1 New York Times bestseller that has
                      helped millions of readers to improve their lives.
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
                      Atomic Habits is the #1 New York Times bestseller that has
                      helped millions of readers to improve their lives.
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
                      Atomic Habits is the #1 New York Times bestseller that has
                      helped millions of readers to improve their lives.
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
                      Atomic Habits is the #1 New York Times bestseller that has
                      helped millions of readers to improve their lives.
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
                      Atomic Habits is the #1 New York Times bestseller that has
                      helped millions of readers to improve their lives.
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </main>
    </>
  );
}
