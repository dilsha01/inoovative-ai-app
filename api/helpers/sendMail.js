import nodemailer from "nodemailer";
import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config();

const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const { G_CLIENT_ID, G_CLIENT_SECRET, G_REFRESH_TOKEN, ADMIN_EMAIL } = process.env;

const oauth2client = new OAuth2Client(
  G_CLIENT_ID,
  G_CLIENT_SECRET,
  G_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

const sendEmailRegister = (to, username, url) => {
  oauth2client.setCredentials({
    refresh_token: G_REFRESH_TOKEN,
  });

  const accessToken = oauth2client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: ADMIN_EMAIL,
      clientId: G_CLIENT_ID,
      clientSecret: G_CLIENT_SECRET,
      refreshToken: G_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: ADMIN_EMAIL,
    to,
    subject: "ACTIVATE YOUR ACCOUNT",
    html: `
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <title>Passioncorners | Account Activation</title>
        <style>
          body {
            background-color: #333333;
            height: 100vh;
            font-family: "Roboto", sans-serif;
            color: #fff;
            position: relative;
            text-align: center;
          }
          .container {
            max-width: 700px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
          .wrapper {
            padding: 0 15px;
          }
          .card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
          span {
            color: #ffc107;
          }
          button {
            padding: 1em 6em;
            border-radius: 5px;
            border: 0;
            background-color: hsl(45, 100%, 51%);
            transition: all 0.3s ease-in;
            cursor: pointer;
          }
          button:hover {
            background-color: hsl(45, 70%, 51%);
            transition: all 0.3s ease-in;
          }
          .spacing {
            margin-top: 5rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="wrapper">
            <div class="card">
              <h1 style="color: black"><span>Welcome, ${username}!</span> And thank you for registering TechTro AI Solutions!</h1>
              <p style="color: black">Please validate your email by clicking the button below 🙂</p>
              <a href=${url}><button>Activate Your Account</button></a>
              <p class="spacing" style="color: black">
                If the button above does not work, please navigate to the link provided below 👇🏻
              </p>
              <div>${url}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
    `,
  };

  // Return a Promise to handle asynchronous operations
  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        reject(err);
      } else {
        console.log('Email sent:', info);
        resolve(info);
      }
    });
  });
};

const sendEmailReset = (to, username, url) => {
  oauth2client.setCredentials({
    refresh_token: G_REFRESH_TOKEN,
  });

  const accessToken = oauth2client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: ADMIN_EMAIL,
      clientId: G_CLIENT_ID,
      clientSecret: G_CLIENT_SECRET,
      refreshToken: G_REFRESH_TOKEN,
      accessToken,
    },
  });

  const text = "Reset Your Password"; // Define the text variable here

  const mailOptions = {
    from: ADMIN_EMAIL,
    to,
    subject: "RESET YOUR PASSWORD",
    html: `
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
        <title>Passioncorners | Account Activation</title>
        <style>
          body {
            background-color: #333333;
            height: 100vh;
            font-family: "Roboto", sans-serif;
            color: #fff;
            position: relative;
            text-align: center;
          }
          .container {
            max-width: 700px;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
          .wrapper {
            padding: 0 15px;
          }
          .card {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
          }
          span {
            color: #ffc107;
          }
          button {
            padding: 1em 6em;
            border-radius: 5px;
            border: 0;
            background-color: hsl(45, 100%, 51%);
            transition: all 0.3s ease-in;
            cursor: pointer;
          }
          button:hover {
            background-color: hsl(45, 70%, 51%);
            transition: all 0.3s ease-in;
          }
          .spacing {
            margin-top: 5rem;
          }
        </style>
      </head>
      <body>
  <div class="container">
    <div class="wrapper">
      <div class="card">
        <h1><span>Hey</span> ${username}</h1>
        <p style="color: #000;">Please click the button below to reset your password. 🙂</p>
        <a href="${url}">
          <button>${text}</button>
        </a>
        <p class="spacing" style="color: #000;">
          If the button above does not work, please navigate to the link provided below 👇🏻
        </p>
        <div>${url}</div>
      </div>
    </div>
  </div>
</body>

      </html>
    `,
  };

  // Return a Promise to handle asynchronous operations
  return new Promise((resolve, reject) => {
    smtpTransport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
        reject(err);
      } else {
        console.log('Email sent:', info);
        resolve(info);
      }
    });
  });
};

export { sendEmailRegister, sendEmailReset };
