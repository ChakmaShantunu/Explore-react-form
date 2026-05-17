import Grandpa from "./Grandpa";
import "./FamilyTree.css"


const FamilyTree = () => {

    const asset = 'Grandpa';
    
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <Grandpa></Grandpa>
        </div>
    );
};

export default FamilyTree;