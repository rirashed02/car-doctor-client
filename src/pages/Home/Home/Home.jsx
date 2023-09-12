import About from "../About/About";
import Banner from "../Banner/Banner";
import OurTeam from "../OurTeam/OurTeam";
import Service from "../Service/Service";
import Products from "../products/Products";
import Contact from "../websiteContact/Contact";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <Products></Products>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;