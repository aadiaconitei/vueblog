"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findOne = exports.findAll = void 0;
const db_1 = require("../db");
// Get all posts
const findAll = (callback) => {
    const queryString = `SELECT * FROM posts`;
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const posts = [];
        rows.forEach((row) => {
            const post = {
                id: row.id,
                title: row.title,
                content: row.content,
                categoryId: row.categoryId,
                date: row.date,
            };
            posts.push(post);
        });
        callback(null, posts);
    });
};
exports.findAll = findAll;
// Get one user
const findOne = (postId, callback) => {
    const queryString = `SELECT * FROM posts AS p INNER JOIN categories AS c ON p.categoryId = c.id WHERE p.id=?`;
    db_1.db.query(queryString, postId, (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        const post = {
            id: row.id,
            title: row.title,
            content: row.content,
            categoryId: row.categoryId,
            categoryName: row.name,
            date: row.date,
        };
        callback(null, post);
    });
};
exports.findOne = findOne;
// create user
const create = (post, callback) => {
    const queryString = "INSERT INTO posts (title, content, categoryId) VALUES (?, ?, ?)";
    db_1.db.query(queryString, [post.title, post.content, post.categoryId], (err, result) => {
        if (err) {
            callback(err);
        }
        const insertId = result.insertId;
        callback(null, insertId);
    });
};
exports.create = create;
