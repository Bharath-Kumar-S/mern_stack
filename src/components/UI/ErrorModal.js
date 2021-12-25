import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css"

const ErrorModal = (props) => {
    let {title, contents} = props.error;
  return (
    <div>
      <div className={styles.backdrop} onClick={props.handler}>
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
      </div>
    </div>
  );
};

export default ErrorModal;
