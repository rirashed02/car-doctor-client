
const BookingRow = ({ booking, handleDelete,handleUpdate }) => {
    const { _id, price, service, date, img,status } = booking;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle bg-black text-white hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {status === 'confirm' ? <span className="text-bold text-success">Confirmed</span> : <button onClick={() => handleUpdate(_id)} className="text-error">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;