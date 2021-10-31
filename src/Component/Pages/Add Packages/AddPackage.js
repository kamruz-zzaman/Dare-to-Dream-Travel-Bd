import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
const AddPackage = () => {
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://dark-tomb-38660.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.ok) {
                    alert('package added successfully')
                    history.push('/package')
                }
            })
        reset();
    }
    return (
        <div>
            <p className='text-center text-2xl font-bold mt-5'>Add your Tour Package</p>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  lg:w-96 my-5'>
                    <input type="url" className='border-black focus:ring-2 focus:ring-yellow-400 focus:border-transparent border-2 rounded-md  py-2 px-2' placeholder='Img Url' {...register("Img")} /> <br />
                    <input className=' border-black py-2 px-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent border-2 rounded-md' placeholder='Name' {...register("Name", { required: true })} /> <br />
                    <textarea className=' border-black py-2 px-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent border-2 rounded-md' placeholder='Description' {...register("Description", { required: true })} /> <br />
                    <input type="number" className=' border-black py-2 px-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent border-2 rounded-md' placeholder='Price' {...register("Price", { required: true })} /> <br />
                    <input type="number" className=' border-black py-2 px-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent border-2 rounded-md' placeholder='Offer-Price' {...register("OfferPrice", { required: true })} /> <br />
                    <input className=' border-black py-2 px-2 focus:ring-2 focus:ring-yellow-400 focus:border-transparent border-2 rounded-md' placeholder='Duration' {...register("Time", { required: true })} /> <br />
                    {errors.Img && <span className='text-red-400'>Img is required</span>}
                    {errors.Name && <span className='text-red-400'>Name required</span>}
                    {errors.Description && <span className='text-red-400'>Description required</span>}
                    {errors.Price && <span className='text-red-400'>Price is required</span>}
                    {errors.OfferPrice && <span className='text-red-400'>Offer-Price required</span>}
                    {errors.Time && <span className='text-red-400'>Duration is required</span>}
                    <input type="submit" className='py-2 border border-yellow-400 bg-yellow-400 active:bg-white' />
                </form>
            </div>
        </div>
    );
};

export default AddPackage;