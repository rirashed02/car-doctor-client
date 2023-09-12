import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen md:p-0 sm:px-3">
            <div className="hero-content sm:p-0 flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className=" w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-10 border-8 border-[#FFF] top-1/2 max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h2 className='text-[#FF3811] text-2xl font-bold'>About Us</h2>
                    <h1 className="lg:text-5xl font-bold sm:text-1xl md:w-[370px] ">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /><br />There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;