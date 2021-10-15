import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="p-5 ms-auto me-auto">
            <h2 className="text-center me-5 w-75">Shipping Information</h2>
                <form  className="ps-5 ms-5" onSubmit={handleSubmit(onSubmit)}>
                
                <input className="w-75" placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                <br /> <br />
                
                
                <input className="w-75" placeholder="E-mail Address" defaultValue={user.email} {...register("email", { required: true })} />
                <br /> <br />
                
                
                <input className="w-75" placeholder="Address" defaultValue="" {...register("address")} /> <br /> <br />
                
                <input className="w-75" placeholder="City" defaultValue="" {...register("city")} /> <br /> <br />
                
                <input className="w-75" placeholder="Mobile" defaultValue="" {...register("mobile")} /> <br /> <br />
                

                {errors.email && <span className="text-danger fw-bold text-center">This field is required</span>}
                <br />
                <input  className="bg-warning fw-bold p-2 rounded-pill w-75" type="submit" />
                </form>
        </div>
    );
};

export default Shipping;