import React from 'react';

const Stories = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => (
        <li key={story.objectID}>
          <a href={story.url} target="_blank" rel="noopener noreferrer">
            {story.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Stories;
