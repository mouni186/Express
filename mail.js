// const { response } = require('express');
// const express = require('express');
// const cors = require('cors');
// const nodeMailer = require('nodemailer');
// const app = express();
// app.get('/sendMail',(req,res) =>
// {
//     let msg = req.query.mail;
//     const transporter = nodeMailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         auth: {
//             user: 'anishbalasachin13@gmail.com',
//             pass: 'jipsxicjskholjay'
//         },
//     })
//     transporter.sendMail({
//         from: `"Anish" <anishbalasachin13@gmail.com>`, // host admin
//         to: 'jeyajeny1227@gmail.com',  // to admin
//         subject: "New Service Booked",
//         text: msg  //msg value
 
//     }).then(console.log("Mail Sent"))
    


    
// })
// app.get("/JSONresponse",(req,res) =>
// {
// let name = req.query.name;
// let rollno = req.query.rollno;
// let mobileno = req.query.mobileno;
// console.log(name,rollno,mobileno);
// // let ans = "name:" + name + "rollno:" + rollno + "mobileno:" + mobileno;

// let arr = [1,2,3,4];       
// res.send(data);

// })
// let port = 5000;
// app.listen(port, () => {
// console.log('Port Running...');

// })
let sum = 0;
let arr = [1,2,3,4];
 for(let i=0;i<arr.length;i++)
sum = sum+arr[i];
console.log(sum);
