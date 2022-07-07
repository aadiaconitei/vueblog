import { sign, SignOptions } from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

/**
 * generates JWT used for local testing
 */
export function generateToken() {
  // information to be encoded in the JWT
  const payload = {
    name: 'VueBlog',
    accessTypes: [
      'getPosts',
      'addPost',
      'updatePost',
      'deletePost'
    ]
  };
  
  const signInOptions: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '1h'
  };

  // generate JWT
  const key:any=process.env.SECRET_KEY;
  return sign(payload, key, signInOptions);
};