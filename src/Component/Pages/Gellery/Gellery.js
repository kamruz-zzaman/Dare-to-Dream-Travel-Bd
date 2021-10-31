import React from 'react';

const Gellery = () => {
    return (
        <><div className='text-gray-600 mt-10 text-center'>
            <span className=' text-2xl   font-bold border-b-2 border-yellow-500'>Gellery</span>
        </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/b6FsqyB/images.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/26Qn2z2/licensed-image-1.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/WnSFQmH/licensed-image-2.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.ibb.co/FqqMdD0/licensed-image-3.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/KjqRkVn/licensed-image-4.jpg" />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.ibb.co/dpbM3RZ/licensed-image.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gellery;