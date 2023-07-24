import express from 'express'
import mongoose from 'mongoose'

import userRoute from './routers/userRoute'
import { postRouter } from './routers/postRoue'

const app = express()
app.use(express.json())
const PORT = 3001

mongoose.connect('mongodb://localhost:27017/instagram')
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Databaase connection established!')
})

app.use('/api',userRoute)
app.use('/user/post',postRouter)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})