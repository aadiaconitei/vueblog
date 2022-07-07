# Back-End
```
1. cd backend/
2. npm init --yes    sau npm init –y  =>package.json
3. npm install express dotenv cors
4. npm i -D concurrently nodemon 
5. npm i -D typescript @types/express @types/node @type/cors
//npm install --dev typescript @types/express @types/node
6. npx tsc --init  => tsconfig.json

7. In fisierul tsconfig.json
"compilerOptions": { 
	"outDir": ”./dist" 
}
8. In fisierul .env 
PORT=3002
9. Facem fisierul: server.ts 
10. Modificam fisieul package.json
"scripts": { 
	"build": "npx tsc", 
	"start": "node dist/server.js", 
	"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/server.js\"" 
}
11. npm run dev
Server is running at https://localhost:3002
```
### Back-End+MySql
```
1. npm install  body-parser mysql2 bcryptjs express-session
2. npm install --save-dev  @types/body-parser @types/mysql @types/dotenv
3. In fisierul .env
PORT=3002
DB_HOST="localhost" 
DB_USER="username" 
DB_PWD="password" 
DB_NAME=”dbname"

4. db.ts
5. types/User.ts types/Post.ts types/Comment.ts types/Category.ts 
6. models/user.ts models/post.ts models/comment.ts models/category.ts
7. routes/userRouter.ts routes/postRouter.ts
8. Modificam fisierul server.ts
9. npm run dev
10. http://localhost:3002/users

11. npm i --save jsonwebtoken
```

### Criptam parola
- https://javascript.plainenglish.io/how-to-verify-hashed-passwords-in-nodejs-and-mysql-26fedcfee01f
- https://javascript.plainenglish.io/how-to-verify-hashed-passwords-in-nodejs-and-mysql-26fedcfee01f 
- https://codeshack.io/basic-login-system-nodejs-express-mysql/

# Front-end
```
1. npm i -g @vue/cli
2. vue --version
3. vue create frontend
4. cd frontend
5. npm run serve
```
### Instalam modulele necesare
```
6. npm install --save vue-router axios 
7. npm install --save bootstrap
8. npm install --save @popperjs/core
9. in src/main.js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
10. npm install --save @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core --force

11. npm install --save @vuelidate/validators @vuelidate/core vuex vee-validate yup

```
