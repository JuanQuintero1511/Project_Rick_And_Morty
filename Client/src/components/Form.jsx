import { useState }     from    "react";
import validation       from    "./Validation/validation";
import styled           from    './Form.module.scss';

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
        
        <form onSubmit={handleSubmit} className={styled.form}  >
    
            <div className={styled.user}> 
            <label htmlFor  =   "email">  Email  </label>
            <input type     =   "email" name   =  "email" value  =  {userData.email} onChange  =  {handleChange} className  =  {styled.email}/>
            {errors.email && <p>{errors.email}</p>}
            </div>
            <hr />
            <div className={styled.user}>
            <label htmlFor  =   "password"> Password  </label>
            <input type     =   "password" name  =  "password" value  =  {userData.password} onChange  =  {handleChange} />
            {errors.password && <p>{errors.password}</p>}
            </div>

            <button className   =   {styled.btn}>  Submit  </button>
    
        </form>
    
    )
    

}


export default Form;
