import React from 'react';
import { useForm } from "react-hook-form";
const AddPackage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:1/2 md:w-1/3 mx-auto my-5'>
            <input className='border-2 border-black py-2 px-2' placeholder='Img Url' {...register("Img")} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Name' {...register("Name", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Description' {...register("Description", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Price' {...register("Price", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Offer-Price' {...register("OfferPrice", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Offer-Price' {...register("Time", { required: true })} /> <br />
            {errors.exampleRequired && <span className='text-red-400'>This field is required</span>}
            <input type="submit" className='py-2 border border-yellow-400 bg-yellow-400 hover:bg-white' />
        </form>
    );
};

export default AddPackage;