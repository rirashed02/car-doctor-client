import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';

const BookService = () => {
    const service = useLoaderData()
    const { price, title, img, } = service;
    const { user } = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const price = form.price.value;
        const booking = {
            customer: name,
            email,
            date,
            img,
            price,
            service: title
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {  
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('service book successfully')
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl mb-6">Book Service: {title}</h2>
            <form onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='price' defaultValue={'$' + price} placeholder='Price' className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Order Confirm" className="btn btn-primary btn-block" />
                </div>
            </form>
        </div>
    );
};

export default BookService;