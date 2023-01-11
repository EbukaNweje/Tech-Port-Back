const Applications = require("../models/Applications")
const {validationResult } = require('express-validator');
const transporter = require("../utils/email")

exports.CreateApplications = async (req, res, next)=>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const newApplications  = await new Applications({
            fullName: req.body.fullName,
            email: req.body.email,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber,
            // dateOfBirth: {
            //     year: req.body.dateOfBirth.year,
            //     month: req.body.dateOfBirth.month,
            //     day: req.body.dateOfBirth.day,
            //     birthYear: new Date(req.body.dateOfBirth.year, req.body.dateOfBirth.month - 1, req.body.dateOfBirth.day)
            // },
            countryOrigin: req.body.countryOrigin,
            countryResidence: req.body.countryResidence,
            CityOfResidence: req.body.CityOfResidence

        })
        newApplications.save()
        const mailOptions ={
            from: process.env.USER,
            to: newApplications.email,
            subject: "Successful Registration",
          html: `
            <div style="width:100%; height: 50%; display:flex; justify-content: center;">
            <img src="https://res.cloudinary.com/ebukanweje/image/upload/v1673283973/web_banner_qbodxw.jpg" alt="EmailImage" style="width:50%; height: 50%;"/>
            </div>
           <h4>Hi  ${newApplications.fullName}</h4>
           <p>Congratulations on your successful registration for the tech training course! We look forward to seeing you at the first session and helping you enhance your skills and knowledge in the tech industry. See you soon!</p>
       
            `,
        }
  
        transporter.sendMail(mailOptions,(err, info)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log("Email has been sent to your inbox", info.response);
            }
        })

        res.status(201).json({
            message: "Applications has been created ",
            data: {newApplications}
        })

    }catch (err) {
        next(err)
    }
}

exports.GetallAplications = async (req, res, next) => {
    try{
        const AllAplications = await Applications.find()
        res.status(200).json({
            message: "All Applications",
            alldata: AllAplications.length,
            data: {AllAplications}
        })
    }catch(err){
        next(err)
    }
}