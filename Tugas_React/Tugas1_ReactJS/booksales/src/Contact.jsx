import { Link } from "react-router-dom";

export default function Contact() {
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


        {/* Contact Information */}
        <div className="container px-4 py-2" id="hanging-icons">
          {" "}
          <h2 className="pb-2 border-bottom">Contact Us</h2>{" "}
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            {" "}
            <div className="col d-flex align-items-start">
              {" "}
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {" "}
                <i className="fa-brands fa-whatsapp text-success"></i>  
              </div>{" "}
              <div>
                {" "}
                <h3 className="fs-2 text-body-emphasis">WhatsApp</h3>{" "}
                <p>
                  +62 812-3456-7890
                </p>{" "}
                <Link to="/" className="btn btn-primary">
                  Chat WhatsApp
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col d-flex align-items-start">
              {" "}
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {" "}
                <i className="fa-solid fa-envelope text-primary"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="fs-2 text-body-emphasis">Email</h3>{" "}
                <p>
                  contact@antarbook.com
                </p>{" "}
                <Link to="/" className="btn btn-primary">
                  Kirim Email
                </Link>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col d-flex align-items-start">
              {" "}
              <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                {" "}
                <i className="fa-solid fa-location-dot text-danger"></i>
              </div>{" "}
              <div>
                {" "}
                <h3 className="fs-2 text-body-emphasis">Lokasi</h3>{" "}
                <p>
                  Jl. Raya Bogor No. 123, Jakarta
                </p>{" "}
                <Link to="/" className="btn btn-primary">
                  Lihat Google Maps
                </Link>{" "}
              </div>{" "}
            </div>{" "}
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
