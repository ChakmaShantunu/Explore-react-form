import { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";



const Aunt = () => {

    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name='Ranjana'></Cousin>
                <Cousin name='Jojo'></Cousin>

            </section>
            <button onClick={() => setMoney(money + 500)}>add 500 tk</button>
        </div>
    );
};

export default Aunt;