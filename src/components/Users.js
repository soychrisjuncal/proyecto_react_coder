import React, { useState, useContext } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./UserProvider";
import "../css/User.css";

function Users() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { submit, currentUser, logOut, signIn } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  return (
    <>
      {!currentUser ? (
        <>
          <div>
            <Button
              className="m-4 px-2 btn-dark"
              variant="primary"
              onClick={handleShow}
            >
              Sign Up
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
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
                  <button onClick={() => submit(email, password)}>
                    Registrarse
                  </button>
                </div>
              </Modal.Body>
            </Modal>{" "}
          </div>

          <div>
            <Button
              className="m-4 px-2 btn-dark"
              variant="primary"
              onClick={handleShow2}
            >
              Log In
            </Button>
            <Modal
              show={show2}
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
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
                  <button onClick={() => signIn(email, password)}>
                    iniciar Sesion
                  </button>
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
        </>
      ) : (
        <div className="login">
          <div>{currentUser.email}</div>
          <div>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              id="logout"
              onClick={() => logOut()}
            ></FontAwesomeIcon>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
