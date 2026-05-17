import Cousin from "./Cousin";



const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name='Ranjana'></Cousin>
                <Cousin name='Jojo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;