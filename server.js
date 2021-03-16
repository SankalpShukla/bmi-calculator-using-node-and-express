const express=require("express")
const bodyParser=require("body-parser")
const { response } = require("express")

const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/bmicalculator",function(request,response){
    response.sendFile(__dirname + "/bmicalculator.html")
})

app.post("/bmicalculator",function(request,response){
    
    var w=Number(request.body.w)
    var h=(request.body.h)
    var bmi=w/(h*h);

    response.send("Calculated BMI is: "+bmi)
})

app.listen(3000,function(){
    console.log("Server is at running at port 3000")
})