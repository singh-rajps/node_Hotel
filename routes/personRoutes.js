const express = require('express');
const router = express.Router();
const Person = require('../models/person')


router.post('/person', async (req, res) => {
    try {
        const data = req.body
        //create a new Person document using the mongodb models
        const newPerson = new Person(data);
        //save the new person to the database
        const response = await newPerson.save()
        console.log('data save');
        res.status(500).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' })
    }
})


router.get('/person', async (req, res) => {
    try {
        const data = await Person(data)
        console.log('data fetched');
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' })

    }
})

router.get('/person/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: "Invalid work type" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
            new: true,
            runValidators:true
        })
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data is updated');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server error'})
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const personId = req.params.id;
        //Assuming you have a person model
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data is deleted');
        res.status(200).json({message:'person Deleted successfully'})
    } catch (err) {
        console.log(err);
        res.status(500).json({error:"Intenal Server Error"})
    }
})


module.exports = router;