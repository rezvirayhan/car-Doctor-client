
const BookingRow = ({ handleBookingConfrem, booking, handleDeleted }) => {
    const { _id, custoMername, email, date, img, service, status, serviceName, price } = booking;



    return (
        <tr>
            <th>
                <button onClick={() => handleDeleted(_id)} className="btn btn-circle btn-outline btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {img &&
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{custoMername}</div>
                        <div className="text-sm opacity-100">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {

                    status === "Confrim" ? <button className="btn btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Confirm Done
                    </button> :
                        <button onClick={() => handleBookingConfrem(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;