import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData()
    const {  title } = service;
    return (
        <div>
            <h2 className="text-center text-3xl mb-6">Check Out: {title}</h2>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" placeholder="first Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Last name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="digit" placeholder="Your Phone No." className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="Email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Order Confirm" className="btn btn-primary btn-block" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;