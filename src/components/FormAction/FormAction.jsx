

const FormAction = () => {


    const handleFormAction = (formdata) => {
        console.log(formdata.get('name'));
        console.log(formdata.get('email'));
    }

    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder='your name' /><br />
                <input type="text" name='email' placeholder='your email' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;