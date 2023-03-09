import { Router } from "express";

const URL=Router();

URL.route('/').get((req,res) => res.json('pepe'));

export default URL;