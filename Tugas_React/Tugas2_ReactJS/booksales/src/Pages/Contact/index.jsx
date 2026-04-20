import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Contact() {
  return (
    <>
      <Header />

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
              <p>+62 812-3456-7890</p>{" "}
              <a href="https://wa.me/6281234567890" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Chat WhatsApp
              </a>{" "}
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
              <p>contact@antarbook.com</p>{" "}
              <a href="mailto:contact@antarbook.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Kirim Email
              </a>{" "}
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
              <p>Jl. Raya Bogor No. 123, Jakarta</p>{" "}
              <a href="https://maps.google.com/?q=Jl.+Raya+Bogor+No.+123,+Jakarta" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Lihat Google Maps
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>

      <Footer />
    </>
  );
}
