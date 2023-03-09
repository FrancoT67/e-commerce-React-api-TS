import { Router } from "express";

const URL=Router();

URL.route('/').get((_req,res) => res.json('pepe'));

export default URL;