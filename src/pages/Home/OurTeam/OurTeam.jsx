import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
const OurTeam = () => {
    return (
        <div className='mx-auto'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className="font-bold">Engine Expert</p>
                        <div className='flex'>
                            <FaFacebook className='text-[#395185] text-4xl mr-2'></FaFacebook>
                            <FaTwitter className='text-[#55ACEE] text-4xl mr-2'></FaTwitter>
                            <FaLinkedin className='txt-[#0A66C2] text-4xl mr-2'></FaLinkedin>
                            <FaInstagram className='text-orange-600 text-4xl mr-2'></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className="font-bold">Engine Expert</p>
                        <div className='flex'>
                            <FaFacebook className='text-[#395185] text-4xl mr-2'></FaFacebook>
                            <FaTwitter className='text-[#55ACEE] text-4xl mr-2'></FaTwitter>
                            <FaLinkedin className='txt-[#0A66C2] text-4xl mr-2'></FaLinkedin>
                            <FaInstagram className='text-orange-600 text-4xl mr-2'></FaInstagram>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        <p className="font-bold">Engine Expert</p>
                        <div className='flex'>
                            <FaFacebook className='text-[#395185] text-4xl mr-2'></FaFacebook>
                            <FaTwitter className='text-[#55ACEE] text-4xl mr-2'></FaTwitter>
                            <FaLinkedin className='txt-[#0A66C2] text-4xl mr-2'></FaLinkedin>
                            <FaInstagram className='text-orange-600 text-4xl mr-2'></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;