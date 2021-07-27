import Card from "./Card.Ui";
import Button from "./Button.Ui";
import classes from "./Error.Module.css"
import React from "react";

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.onOkError}>
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={classes.actions}>
                        <Button onClick={props.onOkError}>Ok</Button>
                    </footer>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default ErrorModal;