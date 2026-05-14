

const ProductForm = () => {


    const handleProductSubmit = e => {
        e.preventDefault();
        console.log('submitted');
    }

    
    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Name' /><br />
                <input type="text" name='price' placeholder='Product Price' /><br />
                <input type="text" name='quantity' placeholder='Product Quantity' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;