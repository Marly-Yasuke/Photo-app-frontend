import React, { useEffect, useRef } from "react";
import "./Signup.css";
const Signup = ({ setShowModal }) => {
  const modal = useRef();

  useEffect(() => {
    modal.current.showModal();
    return () => setShowModal((prev) => !prev);
  }, []);
  return (
    <dialog ref={modal} className="Signup">
      <h2>Create an account bro!</h2>
      <form action="">
        <input type="text" placeholder="name" /> <br></br>
        <input type="email" placeholder="email" /> <br></br>
        <input type="password" placeholder="password" /> <br></br>
        <input type="text" placeholder="role" /> <br></br>
        <button>Register</button>
      </form>
    </dialog>
  );
};

export default Signup;
