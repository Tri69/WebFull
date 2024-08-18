import axios from "axios";
import React, {useState} from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleLogin = async (e) => {
        e.preventDefault();
        
        const res = await axios.post("http://localhost:3002/login", {email, password});
        try{
            alert(res.data.messege)
        }catch{
            console.log(err)
        }
    }
    return(
        <>
            <form>
		        <div class="mb-3">
                    <label for="exampleInputUsername" class="form-label">Username</label>
                     <input type="email" value={email} class="form-control" id="exampleInputUsername" onChange={(e) => setEmail(e.target.value)}/>
                </div>
  
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" value={password} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setPassword(e.target.value)}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
            </form>
        </>
    )
}
export default Login;