import React from 'react';
import ReactDOM from 'react-dom/client';
import {Text} from '@phxjs/ui/Text/Text';

const root = ReactDOM.createRoot(document.body);
root.render(<App />);

export function App() {
  return (
    <>
      <h1>Phoenix ReactJS</h1>
      <marquee>nice</marquee>
      <a href="https://meetup.com/Phoenix-ReactJS" target="_blank">
        <Text content="Meetup" />
      </a>
    </>
  );
}