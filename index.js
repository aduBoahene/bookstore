const express = require('express');
const app=express();
const PORT = 8000 || process.env.PORT;
const db = require('./config/db.config')

const cors = require("cors");
app.use(cors());


const Formidable = require('formidable');
const cloudinary = require('cloudinary').v2


cloudinary.config({
    cloud_name : "okete",
    api_key: "131522379517577",
    api_secret: "Tg5gEWCCTKGPYFAAjIDoyVmQdFw"
})

app.post("/register", (request,response)=>{

    const form = new Formidable.IncomingForm();
    form.parse(request, async (error, fields, files) => {
        
        const { firstname, lastname, email, phone, password } = fields;
        const { profile_picture } = files;

        console.log("files", files);




        cloudinary.uploader.upload(profile_picture.path, {folder: '/Users/Profile_Pictures'}, async (error,res)=>{
            if(error){
                return console.log("cloud error",error)
            }

            const profile_image_url = res.secure_url;
             const user = await db.query("Insert into users (acceslevel_id,firstname,email,password,lastname,phone_number,profile_picture,created_on,last_login) values($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *",
                ["2",firstname,email,password,lastname,phone,profile_image_url,'2021-02-02','2021-02-02']);
        
             console.log(user)
                response.status(201).json({
                    data: user.rows[0]
            });
          
        });


    })
})




app.get("/f",async (req,res)=>{
    try{
        const result =await db.query("Select * from users");
       
    res.status(200).json({
        data: result.rows
    })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
})

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"helllo"
    })
})





app.listen(PORT,()=>{
    console.log(`Apps firing on port ${PORT}`)
})