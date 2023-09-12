import svg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Social from '../Shared/Social/Social';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
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
                            <h1 className="text-4xl text-center font-bold mb-12">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="form-control md:px-10">
                                    <label className="label ">
                                        <span className="label-text text-xl font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control md:mb-5 md:px-10">
                                    <label className="label ">
                                        <span className="label-text font-semibold text-xl">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6 md:px-10">
                                    <input type="submit" value="Login" className="btn bg-[#FF3811] text-white text-lg font-bold hover:bg-[#FF3811]" />
                                    <p className="text-center mt-3 mb-4 font-semibold ">Or Sign Up With</p>
                                </div>
                                <Social></Social>
                                <label className="label text-center">
                                    <p>New to Car doctor? <Link to='/register' className="link link-hover text-[#FF3811]"> Sign Up</Link></p>
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;