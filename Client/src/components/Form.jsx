import { useState } from "react";
import validation from "./Validation/validation";

const Form = ({login}) => {
    const [errors, setErrors] = useState ({})
    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData ({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation ({
            ...userData,
            [event.target.name]: event.target.value
        }))
       
    }  

        const handleSubmit = (event) => {
            event.prevenDefault ();
            login(userData);
        }
    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p>{errors.email}</p>}
            <hr />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p>{errors.password}</p>}

            <button>Submit</button>
        </form>
    
    )
    

}


export default Form;
