import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Checkout = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)
    const { _id, title, price, img } = service;
    const handleBookservice = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            custoMername: name, email, date, img, service: _id, serviceName: title, price: price
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    alert('Service Book Succes')
                }
            })
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-semibold py-4 ">The Servics Name: <b>{title}</b> </h1>
            <div>
                <form onSubmit={handleBookservice}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" required defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email </span>
                            </label>

                            <input type="email" readOnly defaultValue={user?.email} placeholder="Email" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" required placeholder="Date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} name="amount" readOnly placeholder="amount" className="input input-bordered" />

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Confrem Order" />
                        </div>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Checkout;