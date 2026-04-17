export default function Team() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Team</h2>

      <div className="row">
        <div className="col-md-4 text-center">
          <img src="https://picsum.photos/200" className="rounded-circle mb-2" />
          <h5>Dwiki</h5>
          <p>Frontend Developer</p>
        </div>

        <div className="col-md-4 text-center">
          <img src="https://picsum.photos/201" className="rounded-circle mb-2" />
          <h5>Budi</h5>
          <p>Backend Developer</p>
        </div>

        <div className="col-md-4 text-center">
          <img src="https://picsum.photos/202" className="rounded-circle mb-2" />
          <h5>Siti</h5>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}