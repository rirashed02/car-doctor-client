import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="p-8">
                <h2 className="card-title font-bold text-2xl mb-2">{title}</h2>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className="font-bold text-xl text-[#FF3811]">Price: ${price}</p>
                    </div>
                    <div className="card-actions">
                        <Link to={`/book/${_id}`}>
                            <button className="btn bg-white border-none">
                                <FaArrowRight className='text-[#FF3811]'></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;