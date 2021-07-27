import { useRef, useState } from "react"
import Card from "../UI/Card.Ui";
import classes from "../Users/AddUser.module.css"
import Button from "../UI/Button.Ui";
import ErrorModal from "../UI/ErrorModal.Ui";
import Wrapper from "../../Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const userHandler = (event) => {
        event.preventDefault();
        const userUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (userUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please Enter valid name and age(non-empty).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please Enter age between greater than 1.'
            });
            return;
        }
        props.onAddUser(userUserName, enteredUserAge);
        
        //That create empty box after take input but use only in this project.
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        
        //setUserName('');
        //setEnteredAge('');
    }

    // const onNameChange = (event) => {
    //     setUserName(event.target.value);
    // }

    // const onAgeChange = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onOkError={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={userHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/>
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="number"  ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;