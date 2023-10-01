import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const [bookings, setBookings] = useState([])


    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('Car-Doctor-Token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])
    const handleDeleted = id => {
        const porseed = confirm('Are You Sure Want To Delete')
        if (porseed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Succes');

                        const remaing = bookings.filter(booking => booking._id !== id)
                        setBookings(remaing)
                    }
                })
        }
    }
    const handleBookingConfrem = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ status: "Confirm" })
        })
            .then(res => res.json())
            .then(data => {
                //  console.log(data);
                if (data.modifiedCount > 0) {
                    //  UPDATE STATE 
                    const remaing = bookings.filter(booking => booking._id !== id)
                    const update = bookings.find(booking => booking._id === id)

                    update.status = "Confrim"
                    const newBooking = [update, ...remaing]
                    setBookings(newBooking)
                }
            })

    }

    return (
        <div>
            <div className="mt-4">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold text-orange-600">Bookings</h2>
                    <h3 className="text-5xl font-semibold">Your Bookings: {bookings.length} Services</h3>
                    <p className="font-medium">The majority have suffered alteration in some form, by injected humour, or randomised words. which don't look even slightly believable. </p>
                </div> </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">

                        <thead>
                            <tr>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}

                                <th><b>Deleted</b></th>
                                <th>Name-Email-Img</th>
                                <th>Services</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(booking => <BookingRow
                                    key={booking?._id}
                                    booking={booking}
                                    handleBookingConfrem={handleBookingConfrem}
                                    handleDeleted={handleDeleted}
                                ></BookingRow>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Bookings;