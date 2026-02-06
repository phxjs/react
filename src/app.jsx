import React from 'react';
import ReactDOM from 'react-dom/client';
import { Text } from '@phxjs/ui/Text/Text';
import { useOnlineStatus, useTime, useToggle } from './hooks';

const root = ReactDOM.createRoot(document.body);
root.render(<App />);

export function App() {
  const date = useTime();
  const isOnline = useOnlineStatus();
  const { value: isDateTextLong, toggle: toggleDateText } = useToggle();

  return (
    <>
      <header style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          {isOnline ? <div>online</div> : <div>offline</div>}
        </div>

        <button onClick={toggleDateText}>
          {isDateTextLong
            ? date.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })
            : date.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: '2-digit'
              })}
        </button>

        <div style={{ padding: '0 10px' }} aria-hidden>
          |
        </div>

        <div>{date.toLocaleTimeString()}</div>
      </header>

      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          style={{ maxWidth: '900px', width: '100%' }}
          src="assets/phoenix-reactjs-logo.png"
          alt="Phoenix ReactJS"
        />
      </h1>

      <p>
        <a href="https://meetup.com/Phoenix-ReactJS" target="_blank">
          <Text content="Meetup" />
        </a>
      </p>

      <footer>
        <marquee
          behavior="alternate"
          direction="down"
          width="1"
          height="1"
          style={{
            background: '#fff5f5',
            marginTop: '100vh',
            width: '100%',
            height: '25vh'
          }}
        >
          <marquee behavior="alternate">
            <a href="https://phx.js.org">
              <img
                width="200"
                src="https://github.com/phxjs/.github/raw/main/profile/logo.svg"
                alt="Phoenix JavaScript"
              />
            </a>
          </marquee>
        </marquee>
      </footer>
    </>
  );
}
