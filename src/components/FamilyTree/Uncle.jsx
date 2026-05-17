import Cousin from "./Cousin";


const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name="Priyo"></Cousin>
                <Cousin name="Rintu"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;