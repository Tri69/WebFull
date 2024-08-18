const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = 3002;

app.use(cors())
const con = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'akun',
})

app.get("/db/:id", (req, res) => {
	const id = req.params.id;
	const q = `SELECT * FROM dbakun WHERE id = ${id}`;
	con.query(q, (err, result) => {
	res.json(result)
	})
})
app.post("/register", (req, res) =>  {
	const {username, email, password, konpassword} = req.body;
	const insertsd = "INSERT INTO dbakun (username, email, password, konpassword) VALUES (?, ?, ?, ?)";
	con.query(insertsd, [username, email, password, konpassword], (err, result)=> {
		if(err) return res.status(500).send("error ");
		if(result) {
			res.send("Regiter Behasil");			
		}
	})
})

app.post("/login", (req, res)=> {
	const {email, password} = req.body;
	const login = "SELECT * FROM dbakun WHERE email = ? AND password = ?";
	con.query(login, [email, password], (err, result) => {
		if(err) return res.status(500).send("No credentials");
		if(result.length > 0) {
			res.send("Login Berhasil");
		}
	})
})
app.listen(PORT, () => {
	console.log(`Server is running ${PORT}`);
})