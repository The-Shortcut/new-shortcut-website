import React, { useEffect } from 'react';
import Post from './posts.jsx';

import TagManager from 'react-gtm-module';

const Blog = () => {
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageView',
        url: `${window.location.pathname}${window.location.search}`,
        page: 'Blog',
        path: '/blog',
      },
    });
  }, []);
  return (
    <div>
      <Post />
    </div>
  );
};

export default Blog;
