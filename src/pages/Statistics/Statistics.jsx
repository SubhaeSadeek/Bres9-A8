import { useLoaderData } from "react-router-dom";
import useTitle from "../../utils/useTitle";


const Statistics = () => {
    useTitle("Statistics")
    const allProductsData = useLoaderData();
    console.log(allProductsData);
    return (
        <div className="grid place-items-center h-96">
            <h1 className="text-5xl">I am statistics</h1>            
        </div>
    );
};

export default Statistics;