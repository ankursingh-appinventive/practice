const express = require('express')
const app = express()
app.use(express.json())
const port = 3030

const router = require('./routes/chatroutes')


const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// const express = require('express')
// const app = express()


const options ={
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'One to One chat api ',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3030/'
            }
        ]
    },
    apis: ['./server.js']
}

const swaggerSpec = swaggerJSDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check if get method is working or not
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test get method
 */
app.get('/', router)


/**
 * @swagger
 *  components:
 *      schema:
 *          Chat:
 *              type: object
 *              properties:
 *                   messageID:
 *                      type: string
 *                   person1:
 *                      type: string
 *                   person2:
 *                      type: string
 *                   text:
 *                      type: string
 */


/**
 * @swagger
 * /chat/allmsg:
 *  get:
 *      summary: This api is used to get all messages
 *      description: This api is used to fetch all messages from postgres
 *      responses:
 *          200:
 *              description: This api is used fetch all messages from postgres using sequelize
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/Chat'
 */


/**
 * @swagger
 * /chat/{person1}:
 *  get:
 *      summary: This api is used to get all messages
 *      description: This api is used to fetch all messages from postgres
 *      parameters:
 *          - in: path
 *            name: person1
 *            
 *      responses:
 *          200:
 *              description: This api is used fetch all messages from postgres using sequelize
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/Chat'
 */

app.use('/chat',router)







app.listen(port, () => {
  console.log(`Chat app listening on port ${port}`)
})