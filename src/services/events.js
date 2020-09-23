import axios from 'axios'

let API_TOKEN = `${process.env.REACT_APP_EVENT_API_TOKEN}`

const getEvents = async() => {
    const response = await axios.get(`https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&token=${API_TOKEN}`)
    return response.data.events
}


export default {
    getEvents
}