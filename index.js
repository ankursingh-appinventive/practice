const express = require('express');
const routes = require('./routes/route')

// const {plus,minus,mul,div,mod,sqr} = require("./controllers/calc");

const app = express()
// const port = 5500
// app.use(express.json());
app.use(express.json());
app.use('/',routes);
app.use('/add',routes);
app.use('/sub',routes);
app.use('/mul',routes);
app.use('/div',routes);
app.use('/mod',routes);
app.use('/sqr',routes);
// require('./app');

const port = 5500;
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/add', (req, res) => {
//     let result = plus(req.body.x,req.body.y);
//     res.send(`${req.body.x} + ${req.body.y} = ${result}`)
//     // res.send('Hello World!')
// })

// app.post('/subs', (req, res) => {
//     let result = minus(req.body.x,req.body.y);
//     res.send(`${req.body.x} - ${req.body.y} = ${result}`)
//     // res.send('Hello World!')
// })

// app.post('/mult', (req, res) => {
//     let result = mul(req.body.x,req.body.y);
//     res.send(`${req.body.x} * ${req.body.y} = ${result}`)
//     // res.send('Hello World!')
// })

// app.post('/division', (req, res) => {
//     let result = div(req.body.x,req.body.y);
//     res.send(`${req.body.x} / ${req.body.y} = ${result}`)
//     // res.send('Hello World!')
// })

// app.post('/mod', (req, res) => {
//     let result = mod(req.body.x,req.body.y);
//     res.send(`${req.body.x} % ${req.body.y} = ${result}`)
//     // res.send('Hello World!')
// })

// app.post('/square', (req, res) => {
//     let result = sqr(req.body.x);
//     res.send(`Square of ${req.body.x} = ${result}`)
//     // res.send('Hello World!')
// })



app.listen(port, () => {
  console.log(`Calculator is listening on port ${port}`)
})