const Applications = require("../models/Applications")
const {validationResult } = require('express-validator');

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
            dateOfBirth: {
                year: req.body.dateOfBirth.year,
                month: req.body.dateOfBirth.month,
                day: req.body.dateOfBirth.day,
                birthYear: new Date(req.body.dateOfBirth.year, req.body.dateOfBirth.month - 1, req.body.dateOfBirth.day)
            },
            countryOrigin: req.body.countryOrigin,
            countryResidence: req.body.countryResidence,
            CityOfResidence: req.body.CityOfResidence

        })
        newApplications.save()

        res.status(200).json({
            message: "Applications has been created ",
            data: {newApplications}
        })

    }catch (err) {
        next(err)
    }
}