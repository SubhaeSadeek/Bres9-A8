import bannerImg from "../../assets/banner.jpg";

const ImageBanner = () => {
    return (
        <div className="absolute top-64">
            <div className=" w-3/4 h-3/4 mx-auto p-6 border-white border-2 rounded-[2rem] ">
            <img className=" rounded-[2rem]" src={bannerImg} alt="" />
            </div>            
        </div>
    );
};

export default ImageBanner;