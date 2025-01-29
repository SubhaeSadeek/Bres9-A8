import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
    return (
       <div className="h-[60rem] relative">
         <div className=" pt-16 h-[35rem] bg-themeBG ">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className=" text-2xl lg:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 lg:px-16">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="bg-white text-themeText text-xl font-bold rounded-badge px-3 md:px-12 py-3 hover:bg-themeBG hover:text-white border-2 border-white">Shop Now</button>
          </div>
        </div>
      </div>
      <div className=" lg:h-[50%] w-[80%] md:mx-auto p-2 md:p-6 border-white border-2 rounded-[2rem] absolute top-[24rem] md:top-[21rem] right-9 md:right-[7rem]">
            <img className="h-full  w-full rounded-[2rem]" src={bannerImg} alt="" />
      </div> 
    </div>
    );
};

export default Banner;