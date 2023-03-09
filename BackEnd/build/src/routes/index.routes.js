"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const URL = (0, express_1.Router)();
URL.route('/').get((req, res) => res.json('pepe'));
exports.default = URL;
