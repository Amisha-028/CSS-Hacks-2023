import { Configuration,OpenAIApi } from "openai";
import express from 'express';
const app=express();
const port= 5000;
let data='';
const openai= new OpenAIApi(new Configuration({
    apiKey:"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"
}))
// openai.createChatCompletion({
//     model:"gpt-3.5-turbo",
//     messages:[{role:"user",content:'convert this code in python "cout<<lol<<endl;" '}]
// }).then((res)=>{
//     console.log(res.data.choices[0]);
//     data=res.data.choices[0];
// })
app.get("/",(req,res)=>{
    res.send("hello");
});
app.post("/",(req,res)=>{
    const prompt=req.body.prompt;
    if(!prompt){
        return res.status(400).send("Please provide prompt");
    }
    try{
        openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:prompt}]
        }).then((result)=>{
            console.log(result.data.choices[0]);
            // data=result.data.choices[0];
            res.send(result.data.choices[0]);
        })
    }catch(err){
        res.status(500).send("Error generating result");
    }
    // res.send(data);
});
app.listen(port,()=>{
    console.log("App listening on 5000");
})