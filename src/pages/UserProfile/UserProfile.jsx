import useTitle from "../../utils/useTitle";
import { getItemsFromLocalStr } from "../../utils/utils";

const UserProfile = () => {
    useTitle("User Profile");
    const addedCartProduct = getItemsFromLocalStr();
    const totalProduct = addedCartProduct.length;

    return (
        <div>
            {/* sub-Banner */}
            <div className="hero bg-themeBG pb-32 mb-12">
                <div className="hero-content w-1/2 text-center text-white">
                    <div className="">
                        <h1 className="text-2xl font-bold">User profile</h1>
                        <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                         
                    </div>
                </div>
            </div>
            {/* user profile */}

        <div role="tablist" className="tabs tabs-bordered">
        <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="User Information" />
        <div role="tabpanel" className="tab-content p-10">
            {/* tab 1 content */}
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">User profile</h2>
            <p>User: Md: Nurun Nabi</p>
            <p>Country: Bangladesh</p>
            <p>Active Since: 5 years</p>
        </div>
       </div>
        </div>

        <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Purchase History"
            defaultChecked />
        <div role="tabpanel" className="tab-content p-10">
        {/* purchase history */}
        <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Total Purchase</h2>
            <p>User: Md: Nurun Nabi</p>
            <p>Country: Bangladesh</p>
            <p className="text-xl font-bold">Total <span className="text-themeText text-3xl">{totalProduct}</span>  number of Products are purchased </p>
        </div>
       </div>
         
         </div>
        </div>
        </div>
    );
};

export default UserProfile;