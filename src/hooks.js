import React from 'react';

// https://react.dev/reference/rules/components-and-hooks-must-be-pure#components-and-hooks-must-be-idempotent
export function useTime(delay = 1000) {
  const [date, setDate] = React.useState(() => new Date());

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setDate(() => new Date());
    }, delay);

    return () => window.clearInterval(id);
  }, [delay]);

  return date;
}

// https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = React.useState(true);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export function useToggle(initialValue = true) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = () => setValue((value) => !value);

  return { value, toggle, setValue };
}
