import axios from 'axios';

let API_TOKEN = process.env.REACT_APP_EVENT_API_TOKEN;

const formatDate = (date, time) => {
  /* if (date === '') {
    let currDate = new Date();
    let theDate = currDate.toLocaleDateString().split(/\D/);
    let theTime = currDate.toLocaleTimeString().split(' ');
    let month = theDate[0] < 10 ? 0 + theDate[0] : theDate[0];
    let day = theDate[1] < 10 ? 0 + theDate[1] : theDate[1];
    return `${theDate[2]}-${month}-${day}T${theTime[0]}`;
  } */
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
  response.forEach((event) =>
    event.status === 'live' ? Object.assign(event, { status: 'upcoming' }) : event.status
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
      isVideo: item.video,
    };
    return modifiedData.push(dataObj);
  });

  const allEvents = [...modifiedData, ...response].sort((a, b) => {
    let aa = new Date(a.start.local).getTime();
    let bb = new Date(b.start.local).getTime();
    aa = isNaN(aa) ? 0 : aa;
    bb = isNaN(bb) ? 0 : bb;
    if (aa < bb) {
      return 1;
    }
    if (bb < aa) {
      return -1;
    }
    return 0;
  });

  return allEvents;
};

export default {
  getEvents,
};
