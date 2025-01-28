
const Buttons = ({category, handleCategory}) => {
    return (
        
            <button onClick={()=> handleCategory(category) } className="bg-themeBG text-white rounded-badge p-3 hover:bg-transparent hover:text-themeText border border-themeBorder">{category}</button>         
    
    );
};

export default Buttons;