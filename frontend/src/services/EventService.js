//su axios biblioteka kreiptis į savo suskurtą API
import axios from 'axios';

const API_URL = '/api/events';

//get events
const getEvents = async() => {

    try {
        const response = await axios.get(API_URL);
        //console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

//post events
const postEvents = async(event) => {
    try {
        const response = await axios.post(API_URL, event);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const eventsService = {
    getEvents,
    postEvents,
}

export default eventsService