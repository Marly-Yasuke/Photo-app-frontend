import { useState } from "react";
import Signup from "../components/Signup/Signup";

function LogIn() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };
  return (
    <>
      <form>
        <h3>Log In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">Don't have an account?</p>
        <div>
          <button className="signup-button" onClick={handleShowModal}>
            Create New Account
          </button>
        </div>
      </form>
      {showModal && <Signup setShowModal={setShowModal} />}
    </>
  );
}

export default LogIn;
