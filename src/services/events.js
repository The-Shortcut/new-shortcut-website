import axios from 'axios';

let API_TOKEN = process.env.REACT_APP_EVENT_API_TOKEN;

const formatDate = (date, time) => {
  let dateArr = date.split(/\D/);
  let result = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}T${time}`;
  return result;
};

const getEvents = async () => {
  const eventsResponse = await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&token=${API_TOKEN}`
  );
  const draftsResponse = await axios.get(
    `https://www.eventbriteapi.com/v3/organizations/171778300477/events/?order_by=start_desc&status=draft&token=${API_TOKEN}`
  );
  const response = eventsResponse.data.events.filter(
    (event) => !draftsResponse.data.events.find(({ id }) => event.id === id)
  );
  const eventsByCMS = await axios.get('https://theshortcut.org/wp-json/wp/v2/events/?per_page=100');
  let data = eventsByCMS.data.map((data) => data.acf);
  let modifiedData = [];
  data.forEach((item) => {
    let dataObj = {
      name: { text: item.title },
      start: { local: formatDate(item.date_start, item.time_start) },
      end: { local: formatDate(item.date_end, item.time_end) },
      summary: item.description,
      logo: { original: { url: item.image.url } },
      venue: item.venue,
      url: item.url,
      status: item.status,
      online_event: item.online_event,
    };
    return modifiedData.push(dataObj);
  });
  console.log(response.concat(modifiedData).reverse());
  return [...modifiedData, ...response];
};

export default {
  getEvents,
};
