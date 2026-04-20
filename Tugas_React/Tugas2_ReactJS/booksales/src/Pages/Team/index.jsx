import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Team() {
  return (
    <>
      <Header />

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
          <p>Owner antarbook, seorang frontend developer.</p>{" "}
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
          <p>Tim penyeleksi buku best seller.</p>{" "}
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
          <h2 className="fw-normal">Yatno</h2> <p>Customer service.</p>{" "}
        </div>{" "}
      </div>

      <Footer />
    </>
  );
}