import { useState } from "react";
import axios from 'axios';

const Register =()=> {

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/car_borrow_app_api/', inputs).then(function(response){
            console.log(response.data);
        })
        console.log(inputs);
    }

    return(
        <div className="main-box">
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10" className="row">
                    <tbody>

                        <tr>
                            <th>
                                <label>Login: </label>
                            </th>
                            <td>
                                <input type="text" name="login" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Password: </label>
                            </th>
                            <td>
                                <input type="text" name="password" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td> 
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Register;