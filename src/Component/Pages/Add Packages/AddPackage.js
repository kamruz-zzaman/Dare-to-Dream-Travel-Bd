import { useForm } from "react-hook-form";
const AddPackage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.ok) {
                    alert('package added successfully')
                }
            })

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:1/2 md:w-1/3 mx-auto my-5'>
            <input className='border-2 border-black py-2 px-2' placeholder='Img Url' {...register("Img")} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Name' {...register("Name", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Description' {...register("Description", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Price' {...register("Price", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Offer-Price' {...register("OfferPrice", { required: true })} /> <br />
            <input className='border-2 border-black py-2 px-2' placeholder='Duration' {...register("Time", { required: true })} /> <br />
            {errors.Img && <span className='text-red-400'>Img is required</span>}
            {errors.Name && <span className='text-red-400'>Name required</span>}
            {errors.Description && <span className='text-red-400'>Description required</span>}
            {errors.Price && <span className='text-red-400'>Price is required</span>}
            {errors.OfferPrice && <span className='text-red-400'>Offer-Price required</span>}
            {errors.Time && <span className='text-red-400'>Duration is required</span>}
            <input type="submit" className='py-2 border border-yellow-400 bg-yellow-400 active:bg-white' />
        </form>
    );
};

export default AddPackage;