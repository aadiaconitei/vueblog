import { Post } from "./../types/Post";
import { Category } from "../types/Category";
import { db } from "../db";
import { OkPacket, RowDataPacket } from "mysql2";
// Get all posts
export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM posts`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err); 
    }
    const rows = <RowDataPacket[]>result;
    const posts: Post[] = [];
    rows.forEach((row) => {
      const post: Post = {
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
export const findAllCategories = (callback: Function) => {
  const queryString = `SELECT * FROM categories`;
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err); 
    }
    const rows = <RowDataPacket[]>result;
    const categories: Category[] = [];
    rows.forEach((row) => {
      const category: Category = {
        id: row.id,
        name: row.name
      };
      categories.push(category);
    });
    callback(null, categories);
  });
};
// Get one user
export const findOne = (postId: number, callback: Function) => {
  const queryString = `SELECT * FROM posts AS p INNER JOIN categories AS c ON p.categoryId = c.id WHERE p.id=?`;
  db.query(queryString, postId, (err, result) => {
    if (err) {
      callback(err);
    }

    const row = (<RowDataPacket>result)[0];
    const post: Post = {
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

<<<<<<< HEAD
// create user
export const create = (post: Post, callback: Function) => {
  const queryString =
    "INSERT INTO posts (title, content, categoryId) VALUES (?, ?, ?)";
   
    
  db.query(
    queryString,
    [post.title, post.content, post.categoryId],
    (err, result) => {
      if (err) {
        callback(err);
      }
        const insertId = (<OkPacket>result).insertId;
        callback(null, insertId);
      
    }
  );
=======
// create post
export const addPost = (post: Post, callback: Function) => {
  const queryString =
    "INSERT INTO posts (title, content, categoryId) VALUES (?, ?, ?)";
  console.log(post);
  
  try {
    let sqldeb = db.query(
      queryString,
      [post.title, post.content, post.categoryId],
      (err, result) => {
        if (err) {
          callback(err);
        }
        
        if((<OkPacket>result) !== undefined){
          const insertId = (<OkPacket>result).insertId;
          callback(null, insertId);
        }
        else{
          console.log('error insert');
          callback(null, 0);
        }
      }
    );
    console.log(sqldeb.sql);
  } catch (error) {
    callback(error);
  }
>>>>>>> c98de516b3a35434bfdef7d0e5f8cdac59b104a6
};