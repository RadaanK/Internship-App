import {} from 'dotenv/config';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

// Signup route to create a new user
export const signUp = async (req, res) => {
    try {
      // hash the password
      req.body.password = await bcrypt.hash(req.body.password, 10);
      // create a new user
      const user = await User.create(req.body);
      // send new user as response
      res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  }




// Login route to verify a user and get a token
export const Login = async (req, res) => {
  try {
    // check if the user exists
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (user) {
      //check if password matches
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        // sign token and send it in response
        const token = await jwt.sign({ username: user.username }, SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
}

