import React, { useState } from 'react';

import eventServices from '../services/EventService'

import { Form, Button } from 'react-bootstrap';



const NewEvent = ({ getData }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const newEvent = {
            title: title,
            description: description,
            photo: photo,
            user: '64457d49c6a3b8ef0849ec14'
        }
        eventServices.postEvents(newEvent);

        setTitle('');
        setDescription('');
        setPhoto('');
        getData();
    }
    return (
        <div>
            <Form onSubmit={onSubmit} className='my-3'>

                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter title"
                        id='text'
                        name='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter description"
                        id='description'
                        name='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter a photo"
                        id='photo'
                        name='photo'
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)} />
                </Form.Group>



                <Button variant="dark" type="submit">
                    Save
                </Button>


            </Form>

        </div>
    )
}

export default NewEvent