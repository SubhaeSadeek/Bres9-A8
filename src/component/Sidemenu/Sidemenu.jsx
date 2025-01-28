import { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";

const Sidemenu = ({handleCategory}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("/category.json")
        .then((res) => res.json())
        .then((data) => setData(data))
        
    }, [])
    return (
        <div className="flex flex-col gap-3 justify-center bg-themeBG/10 rounded-lg p-4">
            
            <button onClick={()=> handleCategory("all")} className="bg-themeBG text-white rounded-badge p-3 hover:bg-transparent hover:text-themeText border border-themeBorder">All</button> 

            {
                data.map((category) => <Buttons key={category.id} category={category.category} handleCategory={handleCategory}></Buttons> )
            }
        </div>
    );
};

export default Sidemenu;