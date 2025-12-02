require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
    "name":"shreya",
    "class":"12th",
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send("Shreyaa0807")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2> HELLO </h2>")
})
app.get("/github" , (req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})