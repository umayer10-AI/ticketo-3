require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000 || process.env.PORT
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json())

const uri = process.env.NEXT

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const run = async () => {
    try {
        // await client.connect();

        const db = client.db('ticketoAuth')
        const userCollection = db.collection('allData')
        const organizaionCollection = db.collection('organizaion')
        const eventsCollection = db.collection('events')
        const bookingCollection = db.collection('booking')
        const paymentsCollection = db.collection('payments')

        app.get('/user', async (req,res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        app.post('/api/organizaion', async (req,res) => {
          const m = req.body
          const newData = {
            ...m,
            createdAt: new Date(),
            status: 'active'
          }
          const result = await organizaionCollection.insertOne(newData)
          res.send(result)
        })

        app.get('/api/organizaion', async (req,res) => {
            const result = await organizaionCollection.find().toArray()
            res.send(result)
        })

        app.get('/api/organizaion/:email', async(req,res) => {
          const {email} = req.params
          const query = {
            email,
          }
          const result = await organizaionCollection.findOne(query)
          res.json({org:result})
        })

        app.patch('/api/organizaion/:id', async(req,res) => {
          const {id} = req.params
          const filter = {
            _id: new ObjectId(id)
          }
          const m = req.body
          const update = {
            $set: {
              ...m,
              createdAt: new Date(),
              status: 'active'
            }
          }
          const result = await organizaionCollection.updateOne(filter,update)
          res.send(result)
        })

        app.post('/api/event', async (req,res) => {
          const m = req.body
          const newData = {
            ...m,
            createdAt: new Date(),
            status: 'pending'
          }
          const result = await eventsCollection.insertOne(newData)
          res.send(result)
        })

        app.get('/api/event/:email', async(req,res) => {
          const {email} = req.params
          const query = {
            organizationEmail: email,
          }
          const result = await eventsCollection.find(query).toArray()
          res.json(result || {})
          // console.log(result)
        })

        app.patch('/api/event/:id', async(req,res) => {
          const {id} = req.params
          const query = {
            _id: new ObjectId(id)
          }
          const m = req.body
          const update = {
            $set: m
          }
          const result = await eventsCollection.updateOne(query,update)
          res.send(result)
        })

        app.delete('/api/event/:id', async(req,res) => {
          const {id} = req.params
          const filter = {
            _id: new ObjectId(id)
          }
          const result = await eventsCollection.deleteOne(filter)
          res.send(result)
          console.log(result)
        })

        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})