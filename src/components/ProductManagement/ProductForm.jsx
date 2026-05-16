import { useState } from "react";


const ProductForm = ({ handleAddProduct }) => {


    const [error, setError] = useState('')

    const handleProductSubmit = e => {
        e.preventDefault();



        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quantity, 'submitted');

        if (name.length === 0) {
            setError('Please Provide a Product name');
            return;
        } else if (price.length === 0) {
            setError('Please provide a product price');
            return;
        } else if (price < 0) {
            setError('Price can not be negative');
            return;
        } else if (quantity.length === 0) {
            setError('Please provide a product quantity');
            return;
        } else {
            setError('')
        }

        const newProduct = {
            name: name,
            price: price,
            quantity: quantity
        }

        // console.log(newProduct);
        handleAddProduct(newProduct);
        e.target.reset()
    }


    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' /><br />
                <input type="text" name='price' placeholder='Product Price' /><br />
                <input type="text" name='quantity' placeholder='Product Quantity' /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;