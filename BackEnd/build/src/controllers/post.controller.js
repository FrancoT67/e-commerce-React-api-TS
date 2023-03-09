"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = void 0;
function posts(_req, res) {
    return res.json({
        user: 'username',
        lastname: 'lastname',
        date: 12,
    });
}
exports.posts = posts;
