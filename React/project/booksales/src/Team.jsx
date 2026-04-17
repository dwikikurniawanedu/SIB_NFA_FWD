import { Link } from "react-router-dom";

export default function Team() {
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
        

        {/* Judul */}
        <div className="col-lg-6 col-md-8 mx-auto text-center py-2 mb-4">
          <h1 className="fw-light">Our Creative Team</h1>
          <p className="lead text-body-secondary">
            Kenali orang-orang hebat di balik kurasi buku terbaik kami.
          </p>
        </div>


        {/* Team Members */}
        <div className="row text-center">
          {" "}
          <div className="col-lg-4">
            {" "}
            <img
              src="https://picsum.photos/id/237/200/300"
              className="rounded-circle shadow mb-3"
              width="140"
              height="140"
              alt="Team Member"
              style={{ objectFit: "cover" }}
            />
            <h2 className="fw-normal">Dwiki</h2>{" "}
            <p>
              Owner antarbook, seorang frontend developer.
            </p>{" "}
          </div>{" "}
          <div className="col-lg-4">
            {" "}
            <img
              src="https://picsum.photos/id/237/200/300"
              className="rounded-circle shadow mb-3"
              width="140"
              height="140"
              alt="Team Member"
              style={{ objectFit: "cover" }}
            />
            <h2 className="fw-normal">Indah</h2>{" "}
            <p>
              Tim penyeleksi buku best seller.
            </p>{" "}
          </div>{" "}
          <div className="col-lg-4">
            {" "}
            <img
              src="https://picsum.photos/id/237/200/300"
              className="rounded-circle shadow mb-3"
              width="140"
              height="140"
              alt="Team Member"
              style={{ objectFit: "cover" }}
            />
            <h2 className="fw-normal">Yatno</h2>{" "}
            <p>
              Customer service.
            </p>{" "}
          </div>{" "}
        </div>

        
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
