import React, { useState, useEffect } from "react";
import eventsService from "../services/EventService";
import NewEvent from './NewEventForm';

import { Table, Container, Row, Col, Card } from 'react-bootstrap';




const Events = () => {
    const [events, setEvents] = useState([]);

    const getData = () => {
        eventsService.getEvents().then(res => {
            setEvents([...res.data])
        })
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(events)

    return (

        <Container>
            <Row>
    
                    <NewEvent getData={getData} />
                    <h1 className="text-center my-3">Events</h1>



                    {events.map((event, index) => (
                        <Card style={{ width: '18rem' }} key={index}>
                            <Card.Img variant="top" src={event.photo} />
                            <Card.Body>
                                <Card.Title>{event.title}</Card.Title>
                                <Card.Text>{event.description}</Card.Text>

                            </Card.Body>
                        </Card>))}

            </Row>

        </Container>



    )
}

export default Events

