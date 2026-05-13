import { useState } from "react";


const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, "submitted");
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setError('Password must be 6 characters');
        } else {
            setError('')
        }
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={handleEmailChange} defaultValue={email} name="email" id="" placeholder="Email" required /><br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" id="" placeholder="Password" required /><br />
                <input type="submit" value="Submit" />
            </form>

            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;