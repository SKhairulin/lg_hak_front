import React, { useState, useEffect } from 'react';
import './Notification.css';

export const Notification = ({ message, visible, duration, setVis }) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShow(true)
      const timer = setTimeout(() => {setShow(false);setVis(false)}, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  return (
    show && (
      <div className="notification">
        {message}
      </div>
    )
  );
};
