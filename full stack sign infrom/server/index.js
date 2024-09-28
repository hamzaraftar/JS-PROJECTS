import express from "express"
import cors from 'cors'
import pg from "pg"
const app = express();
const port = 5000;

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"auth",
    password:"12345",
    port:5432,
});
db.connect();

//middleware
app.use(cors())
app.use(express.json());



//ROUTES


app.post("/user_auth",async (req,res)=>{
    try {
        const {name,fathername,email,password} = req.body;
        const auth = await db.query("INSERT INTO user_info (name,fathername,email,password) VALUES($1, $2 , $3 , $4) RETURNING *",[name,fathername,email,password])
        res.json(auth.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})
