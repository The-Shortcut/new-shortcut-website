import React from 'react';
import defaultImage from '../../assets/photos/defaultImage.png';
import moment from 'moment';

// Styles
import css from './styles.module.scss';

// Children
import Venue from '../../components/functional/Venue';

const Event = ({ event }) => {
  const start = event.start.local;
  const end = event.end.local;
  const title = event.name.text;
  const summary = event.summary;
  const online = event.online_event;
  const venue = event.venue_id;
  const link = event.url;
  const img = event.logo;
  const status = event.status;
  const venueCMS = event.venue;
  const isVideo = event.isVideo;

  // date
  const formatDate = (e) => {
    const date = new Date(e);
    const eventDate = date.getDate();
    return eventDate;
  };

  // year
  const formatYear = (e) => {
    const date = new Date(e);
    const eventYear = date.getFullYear();
    return eventYear;
  };

  // time
  const formatTime = (e) => {
    const date = new Date(e);
    const eventTime = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return eventTime;
  };

  // day
  const formatDay = (e) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(e);
    const eventDay = days[date.getDay()].substring(0, 3);
    return eventDay;
  };

  // month
  const formatMonth = (e) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(e);
    const eventMonth = months[date.getMonth()];
    return eventMonth;
  };

  // month
  const formatText = (e) => {
    const eventText = e;
    return eventText;
  };

  const setStatus = (status) => {
    if (status.includes('Video')) {
      return 'WATCH NOW';
    } else if (status.includes('completed') || status.includes('canceled')) {
      return 'LEARN MORE +';
    } else if (status.includes('Audio')) {
      return 'LISTEN NOW ';
    } else {
      return 'REGISTER';
    }
  };

  return (
    <div className={css.event}>
      {moment(end.substring(0, 10)).isSame(start.substring(0, 10)) ? (
        <aside className={css.single}>
          <p>{formatDay(start)}</p>
          <p>{formatDate(start)}</p>
          <p>{formatMonth(start)}</p>
          <div>
            <img
              src={img ? img.original.url : defaultImage}
              alt=''
              style={{
                maxHeight: '244px',
                maxWidth: '433px',
                minHeight: '243px',
                minWidth: '432px',
              }}
            />
          </div>
        </aside>
      ) : (
        <aside className={css.continuous}>
          {isVideo ? (
            <div>
              <p>always available</p>
              <div>
                <img
                  style={{ maxHeight: '244px', maxWidth: '433px' }}
                  src={img ? img.original.url : defaultImage}
                  alt='programme-logo'
                />
              </div>
            </div>
          ) : (
            <div>
              <p>{formatDate(start)}</p>
              <p>{formatMonth(start)}</p>
              <p> - </p>
              <p>{formatDate(end)}</p>
              <p>{formatMonth(end)}</p>
              <div>
                <img
                  style={{ maxHeight: '244px', maxWidth: '433px' }}
                  src={img ? img.original.url : defaultImage}
                  alt='programme-logo'
                />
              </div>
            </div>
          )}
        </aside>
      )}
      <div>
        {isVideo ? (
          <p> always available</p>
        ) : (
          <p className={css.date}>
            <span>
              {formatMonth(start)}, {formatDate(start)}, {formatYear(start)}
            </span>
            {moment(end.substring(0, 10)).isSame(start.substring(0, 10)) ? null : (
              <span>
                {' '}
                - {formatMonth(end)}, {formatDate(end)}, {formatYear(start)}
              </span>
            )}
            <span>
              {' '}
              @{formatTime(start)} - {formatTime(end)}
            </span>{' '}
          </p>
        )}
        <p className={css.title}>{title}</p>
        <p className={css.status}>{status}</p>
        <p className={css.summary}>{formatText(summary)}</p>
        {venueCMS ? (
          <p className={css.online}>{venueCMS}</p>
        ) : venue ? (
          <Venue id={venue} />
        ) : (
          <p className={css.online}>{online ? 'Online' : null}</p>
        )}
        <a href={link} target='_blank' rel='noopener noreferrer'>
          {setStatus(status)}
        </a>
      </div>
    </div>
  );
};

export default Event;
