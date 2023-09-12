import svg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Social from '../Shared/Social/Social';
const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left md:w-[460px] mr-10">
                        <img src={svg} alt="" className="sm:max-w-none" />
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 md:w-[500px] sm:w-full md:pt-16">
                        <div className="card-body">
                            <h1 className="text-4xl text-center font-bold mb-12">Sign Up</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control md:px-10">
                                    <label className="label ">
                                        <span className="label-text text-xl font-semibold">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control md:px-10">
                                    <label className="label ">
                                        <span className="label-text text-xl font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control md:mb-5 md:px-10">
                                    <label className="label ">
                                        <span className="label-text font-semibold text-xl">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 md:px-10">
                                    <input type="submit" value="Login" className="btn bg-[#FF3811] text-white text-lg font-bold hover:bg-[#FF3811]" />
                                    <p className="text-center mt-3 mb-4 font-semibold ">Or Sign Up With</p>
                                </div>
                                <Social></Social>
                                <label className="label text-center">
                                    <p>Already Have an Account? <Link to='/login' className="link link-hover text-[#FF3811]"> Login</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;