import express, { Response } from 'express';
import jwt from 'jsonwebtoken';
import { Sequelize, Model, DataTypes } from 'sequelize';
import { Request } from 'express';
// import bcrypt from "bcrypt"
const app = express();
const sequelize = new Sequelize('insta', 'postgres', '      ', {
    host: 'localhost',
    dialect: 'postgres'
  });
class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}


(async function (){
    // console.log("hieee123");
    
    try {
    // console.log("hieee123");

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()


User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

User.sync({ force: true });
console.log("The table for the User model was just (re)created!");

app.use(express.json());

app.post('/signup', async (req:Request, res:Response) => {
  
  const { username, password } = req.body;
  const user = await User.create({ username, password }); 
  const userId = user.id;
  
  const token = jwt.sign({ userId }, 'secret');

  res.send("sign up successful");
});

app.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    // const result = await sequelize.query("SELECT * FROM users");
    // console.log("---------------------->>>>>>", result);
    
    const user:any = await User.findOne({ where: { username:username,password: password }, raw:true });
    console.log("=======================>\n\n",user);
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    // const isPasswordValid = await bcrypt.compare(password, user.password);
  
    // if (!isPasswordValid) {
    //   return res.status(401).send('Invalid password');
    // }
  
    // const token = jwt.sign({ userId: user.id }, 'secret');............................
    const resu = {
      "response": "Login Successful!!!"
    }
    res.send({ resu });
  });


app.listen(3000, () => {
  console.log('Server started on port 3000');
});





















// // const express = require('express')
// // const app = express()
// // const dotenv = require('dotenv')
// // const { Sequelize } = require('sequelize');
// // // require('./models/index')
// // // const bodyParser = require('body-parser');
// // // app.use(bodyParser.json());
// // // const port = process.dotenv.PORT;
// // const port = 6000;
// // app.use(express.json());

// // const sequelize = new Sequelize('insta', 'postgres', '      ', {
// //     host: 'localhost',
// //     dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// //   });

// //   try {
// //     sequelize.authenticate();
// //     console.log('Connection has been established successfully.');
// //   } catch (error) {
// //     console.error('Unable to connect to the database:', error);
// //   }

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })

// import express, { Response } from 'express';
// import jwt from 'jsonwebtoken';
// import { Sequelize, Model, DataTypes } from 'sequelize';
// import { Request } from 'express';
// // import bcrypt from "bcrypt"
// const app = express();
// // app.use(express.json());
// const sequelize = new Sequelize('insta', 'postgres', '      ', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });
// class User extends Model {
//   public id!: number;
//   public username!: string;
//   public password!: string;
// }


// (async function (){
//     // console.log("hieee123");
    
//     try {
//     // console.log("hieee123");

//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })()


// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     tableName: 'users',
//   }
// );

// User.sync({ force: true });
// console.log("The table for the User model was just (re)created!");

// app.use(express.json());

// app.post('/signup', async (req:Request, res:Response) => {
  
//   const { username, password } = req.body;
//   const user = await User.create({ username, password }); 
//   const userId = user.id;
  
//   const token = jwt.sign({ userId }, 'secret');

//   res.send("sign up successful");
// });

// app.post('/login', async (req: Request, res: Response) => {
//     const { username, password } = req.body;
//     const result = await sequelize.query("SELECT * FROM users");
//     console.log("---------------------->>>>>>", result);
    
//     const user:any = await User.findAll({ where: { username:username,password: password }, raw:true });
//     console.log("=======================>\n\n",user);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
  
//     // const isPasswordValid = await bcrypt.compare(password, user.password);
  
//     // if (!isPasswordValid) {
//     //   return res.status(401).send('Invalid password');
//     // }
  
//     const token = jwt.sign({ userId: user.id }, 'secret');
//     res.send({ token });
//   });


// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


