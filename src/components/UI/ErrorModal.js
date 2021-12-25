import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  let { title, contents } = props.error;

  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} />;
  };

  const Modal = (props) => {
    return (
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{contents}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.handler}>Close</Button>
        </footer>
      </Card>
    );
  };

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.handler} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(<Modal handler={props.handler}/>, document.getElementById("model"))}
    </React.Fragment>
  );
};

export default ErrorModal;
