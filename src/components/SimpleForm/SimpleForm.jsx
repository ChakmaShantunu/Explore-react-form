import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='your name'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;