const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
// const formController = require('../controllers/formController');
require("dotenv").config();

const smtpEmail = process.env.EMAIL;
const smtpPass = process.env.PASSWORD;


// const smtpEmail = `anandeng187@gmail.com`;
// const smtpPass = `nopvgflkehbkzpam`;
// const smtpEmail = "";
// const smtpPass = "";


router.get("/health", (req, res) => {
  res.send({
    data: "I am superman"
  })
});


//save formData
// router.post('/submit', formController.submitForm);


// send mail
router.post("/register", (req, res) => {


  const formData = req.body.data;

  console.log('Received form data:', formData);
  try {


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPass
      }
    });


    const mailOptions = {
      from: `${formData.name} <${smtpEmail}>`,
      to: "info@aplapollo.com,shikhasingh@aplapollo.com",
      // to: "shikhasingh@aplapollo.com",
      subject: "New user Query",
      html: `<h4>Enquiry Type: ${formData.profession}</h4>
                   <h4>Name: ${formData.name}</h4>
                   <h4>Email Id: ${formData.email}</h4>
                   <h4>Mobile No.: ${formData.number}</h4>
                   <h4>City: ${formData.city}</h4>
                   <h4>Query: ${formData.message}</h4>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });

    const mailOptions2 = {
      from: `${formData.name} <${smtpEmail}>`,
      to: formData.email,
      subject: "Thanks for contacting APL Apollo Tubes",
      html: `<p>Hi ${formData.name}, </p>

            <p>Thanks for reaching out to APL Apollo Tubes. Our team will connect with you shortly. </p>
            
            <p>Have a nice day!</p>`
    };


    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });


    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log("Error" + error)
    //     } else {
    //         console.log("Email sent:" + info.response);
    //         res.status(201).json({ status: 201, info })
    //     }
    // })

    // transporter.sendMail([mailOptions, mailOptions2], (error, info) => {
    //     if (error) {
    //       console.log("Error: " + error);
    //     } else {
    //       console.log("Email sent: " + info.response);
    //       res.status(201).json({ status: 201, info });
    //     }
    //   });



  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error })
  }
});



// ----------------------------------------------- Conatact mail
router.post("/contact", (req, res) => {

  const formData = req.body.data;

  console.log('Received form data:', formData);
  try {


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPass
      }
    });


    const mailOptions = {
      from: `${formData.name} <${smtpEmail}>`,
      to: "info@aplapollo.com,shikhasingh@aplapollo.com",

      subject: "New user Query",
      html: `<h4>Name: ${formData.name}</h4>
                 <h4>Email Id: ${formData.email}</h4>
                 <h4>Mobile No.: ${formData.number}</h4>
                 <h4>City: ${formData.city}</h4>
                 <h4>Profession: ${formData.profession}</h4>
                 <h4>Message: ${formData.message}</h4>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });



    const mailOptions2 = {
      from: `${formData.name} <${smtpEmail}>`,
      to: formData.email,
      subject: "Thanks for contacting APL Apollo Tubes",
      html: `<p>Hi ${formData.name}, </p>

            <p>Thanks for reaching out to APL Apollo Tubes. Our team will connect with you shortly. </p>
            
            <p>Have a nice day!</p>`
    };


    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });



  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error })
  }
});


// ----------------------------------------------- Dealer mail
router.post("/dealer", (req, res) => {

  const formData = req.body.data;

  console.log('Received form data:', formData);
  try {


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPass
      }
    });


    const mailOptions = {
      from: `${formData.name} <${smtpEmail}>`,
      to: "info@aplapollo.com,shikhasingh@aplapollo.com",

      subject: "New user Query",
      html: `<h4>Name: ${formData.name}</h4>
                 <h4>Email Id: ${formData.email}</h4>
                 <h4>Mobile No.: ${formData.number}</h4>
                 <h4>City: ${formData.city}</h4>
                 <h4>Experience: ${formData.experience}</h4>
                 <h4>Turnover: ${formData.turnover}</h4>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });

    const mailOptions2 = {
      from: `${formData.name} <${smtpEmail}>`,
      to: formData.email,
      subject: "Thanks for contacting APL Apollo Tubes",
      html: `<p>Hi ${formData.name}, </p>

            <p>Thanks for reaching out to APL Apollo Tubes. Our team will connect with you shortly. </p>
            
            <p>Have a nice day!</p>`
    };


    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });


  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error })
  }
});


// ----------------------------------------------- Subscribe mail
router.post("/subscribe", (req, res) => {
  const formData = req.body.data;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpEmail,
        pass: smtpPass
      }
    });

    const mailOptions = {
      from: `<${smtpEmail}>`,
      to: "info@aplapollo.com,shikhasingh@aplapollo.com",

      subject: "New Subscribe",
      html: `<h4>Subscribe Email Id: ${formData.email}</h4>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });

    const mailOptions2 = {
      from: `<${smtpEmail}>`,
      to: formData.email,
      subject: "Thanks for contacting APL Apollo Tubes",
      html: `<p>Thanks for reaching out to APL Apollo Tubes. Our team will connect with you shortly. </p>
          <p>Have a nice day!</p>`
    };

    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });

  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error })
  }
});


module.exports = router;