import React, {useState} from 'react';
import axios from 'axios';

const Register = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [konpassword, setKonpassword] = useState('');
	
	const HandleRegister = async (e) => {
		e.preventDefault();
		
		const res = await axios.post("http://localhost:3002/register", {username, email, password, konpassword})
		try{
			alert(res.data.pesan)
		}catch{
			console.log(err)
		}
	}
	
	return(
		<form>
		<div class="mb-3">
    <label for="exampleInputUsername" class="form-label">Username</label>
    <input type="text" value={username} class="form-control" id="exampleInputUsername" onChange={(e) => setUsername(e.target.value)}/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={password} class="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)}/>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" value={konpassword} class="form-control" id="exampleInputPassword1" onChange={(e) => setKonpassword(e.target.value)}/>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" onSubmit={HandleRegister}>Submit</button>
</form>
	)
}

export default Register;