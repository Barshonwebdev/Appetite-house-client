import React from 'react';
import { useForm} from "react-hook-form";
import axios from 'axios';
import useFirebase from '../../hooks/useFirebase';

const Reviewpost = () => {
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const {user}= useFirebase();
    const onSubmit = data =>{ 
        data.email=user.email;
        data.Name=user.displayName;
        
        axios.post('https://fathomless-reaches-77675.herokuapp.com/reviewpost',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Review Posted successfully');
                reset();
            }
            console.log(res);
            console.log(data);
        })
      };
    return (
        <div>
            
            <h1 className="text-success mt-3">Post a review regarding our service!</h1>
            <br/>
            <h4 className="text-primary">Username: {user.displayName}</h4>
                <h4 className="text-primary">Email: {user.email}</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                               
                                
                                
                                <p className="mt-5">Write a review!</p>
                                <textarea  className="form-box"  {...register("reviewpost", { required: true })} />
                                
                                
                                <br/>
                                <input type="submit" className="btn-success" value="Post Review" />
                    </form>
                
        </div>
    );
};

export default Reviewpost;