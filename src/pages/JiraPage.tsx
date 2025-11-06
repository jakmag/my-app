import { useState } from "react";

const JiraPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

     const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    const handleReset = () => {
        setFirstName('');
        setLastName('');
    }


    return (
        <form onSubmit={e => e.preventDefault()}>
            <input 
                type="text"
                placeholder="Add First Name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input 
                type="text"
                placeholder="Add Last Name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hello, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    )
}


export default JiraPage;