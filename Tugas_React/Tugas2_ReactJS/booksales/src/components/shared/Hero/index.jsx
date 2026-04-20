import { Link } from "react-router";
export default function Hero() {
  return (
    <>
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
              An easy & proven way to build good habits & break bad ones. Atomic
              Habits is the #1 New York Times bestseller that has helped
              millions of readers to improve their lives. In this book, James
              Clear reveals practical strategies that will teach you exactly how
              to form good habits, break bad ones, and master the tiny behaviors
              that lead to remarkable results.
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
    </>
  );
}
