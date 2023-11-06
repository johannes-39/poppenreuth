const express = require('express')
const { getDb, connectToDb } = require('./database')
const { ObjectId } = require('mongodb')
const cors = require("cors");

// init app & middleware
const app = express()
app.use(express.json())

// db connection
let db

app.use(cors());

connectToDb((err) => {
    if(!err){
        app.listen('4000', () => {
            console.log('app listening on port 4000')
        })
        db = getDb()
    }
})

// routes
app.get('/logins', (req, res) => {
    let books = []

    db.collection('logins')
        .find()
        .sort({email: 1})
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})


app.get('/news', (req, res) => {
    let books = []

    db.collection('news')
        .find()
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})


app.get('/logins/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {

        db.collection('logins')
            .findOne({_id: new ObjectId(req.params.id)})
            .then(doc => {
                res.status(200).json(doc)
            })
            .catch(err => {
                res.status(500).json({error: 'Could not fetch the document'})
            })

    } else {
        res.status(500).json({error: 'Could not fetch the document'})
    }

})

app.get('/postcomments', (req, res) => {
    let books = []

    db.collection('postcomments')
        .find()
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        })
})

app.get('/postcomments/:id', (req, res) => {


    db.collection('postcomments')
        .findOne({postid: postid})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not fetch the document'})
        })



})

app.post('/news', (req, res) => {
    const book = req.body

    db.collection('news')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new document'})
        })
})

app.post('/postcomments', (req, res) => {
    const book = req.body

    db.collection('postcomments')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create new document'})
        })
})
