import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Booking = (props) => {
    const history = useHistory()
    const { Name, Price } = props.data;
    const { user } = useAuth();
    const { register, handleSubmit, reset, setValue } = useForm();
    // make hook form respons
    const onSubmit = data => {
        fetch('https://dark-tomb-38660.herokuapp.com/booking', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.ok) {
                    alert('Your Booking Now on Pending')
                    history.push('/mybooking')
                }
            })
        reset();
    }
    return (
        <div className='mb-5'>
            <h2 className="text-4xl font-bold text-center my-4">
                Confirm Your Booking
            </h2>
            <div className='flex justify-center '>
                <form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black mx-5 w-96 p-10 rounded-md'>
                    <div>
                        <label className="text-xl font-bold mb-1">Package Name</label>
                        <div >
                            <input value={Name} type="text" id="p-name"{...register("Destination", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full"
                                placeholder="Package Name" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xl font-bold mb-1">Your-Name</label>
                        <div >
                            <input value={user.displayName} type="text" id="u-name"{...register("Name", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full"
                                placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="text-xl font-bold mb-1">Phone-Number</label>
                        <div>
                            <input type="tel" id="contact"{...register("PhoneNumber", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full"
                                placeholder="+880-" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="text-xl font-bold mb-1">E-mail</label>
                        <div>
                            <input value={user.email} type="e-mail" id="mail"{...register("Email")} className="border-2  px-8 py-1 rounded-xl w-full"
                                placeholder="Something@click.com" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="text-xl font-bold mb-1">No. of People</label>
                        <div>
                            <input type="number" id="no"{...register("NoOfPeople", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full"
                                placeholder="0" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xl font-bold mb-1">Tour Start Date</label>
                        <div>
                            <input type="date" id="date"{...register("TourStartDate", { required: true })} className="border-2  px-8 py-1 rounded-xl w-full" />
                        </div>
                    </div>
                    <div >
                        <label className="text-xl font-bold mb-1">
                            Tour Start Time
                        </label>
                        <div >
                            <input type="time" id="time"{...register("TourStartTime", { required: true })} className="border-2  px-10 py-1 rounded-xl w-full" />
                        </div>
                    </div>
                    <div >
                        <label className="text-xl font-bold mb-1">
                            Price
                        </label>
                        <div >
                            <input value={Price} id="time"{...register("Price", { required: true })} className="border-2  px-10 py-1 rounded-xl w-full" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className='py-2 px-3 rounded-lg border-2 border-yellow-400 mt-5 hover:bg-yellow-400 hover:text-white'>Confirm</button>
                    </div>
                    {/* set default data */}
                    {setValue("Status", "Pending")}
                </form>
            </div>
        </div>
    );
};

export default Booking;