import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStarHalf, faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";


const Ratings = ({rating}) => {
    const ratings = {
        size: 25,
        value: rating,
        isHalf: true,
        emptyIcon: <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>,
        halfIcon: <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>,
        filledIcon: <FontAwesomeIcon icon={starSolid}></FontAwesomeIcon>,
        edit: false
    }

    return (
        <div>
            <ReactStars {...ratings}></ReactStars>
        </div>
    );
};

export default Ratings;