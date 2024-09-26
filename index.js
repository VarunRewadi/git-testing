import express from "express";
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
    
// const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const day = new Date().getDay()

let type = "a weekday";
let advice = "it's time to work hard"

if (day===0 || day===6) {
    type = "the weekend";
    advice = "it's time to have some fun"
}

app.get("/", (req,res) =>{
    res.render("index.ejs", {type, advice})
    console.log(day);
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});