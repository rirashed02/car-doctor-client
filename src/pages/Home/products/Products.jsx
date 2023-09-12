import image1 from '../../../assets/images/products/1.png'
import image2 from '../../../assets/images/products/2.png'
import image3 from '../../../assets/images/products/3.png'
import image4 from '../../../assets/images/products/4.png'
import image5 from '../../../assets/images/products/5.png'
import image6 from '../../../assets/images/products/6.png'

const Products = () => {
    return (
        <div className='mb-12'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src={image1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Car Engine Plug</h2>
                        <p className='text-[#FF3811]'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src={image2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Car Engine Plug</h2>
                        <p className='text-[#FF3811]'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src={image3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Car Engine Plug</h2>
                        <p className='text-[#FF3811]'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src={image4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Car Engine Plug</h2>
                        <p className='text-[#FF3811]'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src={image5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Car Engine Plug</h2>
                        <p className='text-[#FF3811]'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl hover:cursor-pointer">
                    <figure className="px-10 pt-10">
                        <img src={image6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg">Car Engine Plug</h2>
                        <p className='text-[#FF3811]'>$20.00</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-10'>
                <button className='btn btn-outline btn-error'> More Products</button>
            </div>
        </div>
    );

};

export default Products;