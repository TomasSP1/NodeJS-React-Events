const expressAsyncHandler = require("express-async-handler");
const Event = require('../models/Event');

// @desc Get Events
// @route GET /api/events
// @access PUBLIC
const getEvents = expressAsyncHandler( async (req, res) => {
    const events = await Event.find({user: '64457d49c6a3b8ef0849ec14'})
    res.status(200).json(events)
})


// @desc Set Events
// @route SET /api/events
// @access PUBLIC
const setEvents = expressAsyncHandler( async (req, res) => {

    if (!req.body.title) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    const event = await Event.create({
        title: req.body.title,
        description: req.body.description,
        photo: req.body.photo,
        user: req.body.user
    })
    res.status(200).json(event)
})

module.exports = { getEvents, setEvents}