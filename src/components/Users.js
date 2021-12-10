import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Users() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  const auth = getAuth();

  const submit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {!currentUser ? (
        <div>
          <Button
            className="m-4 px-2 btn-dark"
            variant="primary"
            onClick={handleShow}
          >
            Log In / Sign Up
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Log In / Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <label htmlFor="email"> Correo Electronico </label>
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" id="password">
                  {" "}
                  Contraseña{" "}
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={submit}>Iniciar Sesion</button>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
          </Modal>{" "}
        </div>
      ) : (
        <div>{currentUser.email}</div>
      )}
    </>
  );
}

export default Users;
