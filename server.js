import express from 'express';
import sum from './sum.js'
const app= express();
const PORT= 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get("/home", (req, res)=>{
    res.json({message:"Welcome To the Home Page "});
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})
app.get("/sum/:a/:b", async(req, res)=>{
    const {a, b}= req.params;
    const result= sum(Number(a), Number(b));
    res.json({sum:result});
})