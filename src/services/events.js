import axios from 'axios'

let API_TOKEN = `${process.env.REACT_APP_EVENT_API_TOKEN}`

const getEvents = async() => {
    const eventsResponse = await axios.get(`https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&token=${API_TOKEN}`)
    const draftsResponse = await axios.get(`https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&status=draft&token=${API_TOKEN}`)
    const response = eventsResponse.data.events.filter((event) => !draftsResponse.data.events.find(({ id }) => event.id === id))
    
    return response
}


export default {
    getEvents
}