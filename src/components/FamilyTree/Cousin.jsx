import Friend from "./Friend";
import Special from "./Special";


const Cousin = ({ name }) => {
    return (
        <div>
            <h3>{name}</h3>
            <Special></Special>

            {
                name === 'Jojo' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;