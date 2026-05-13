import useInputField from "../hooks/useInputField";


const HookForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted', name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name} /><br />
                <input type="email" onChange={emailOnChange} defaultValue={email} name="email" placeholder="email" /><br />
                <input type="password" name="password" onChange={passwordOnChange} defaultValue={password} id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;