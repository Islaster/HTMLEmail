import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {

    const [content, setContent] = useState('');
    let defaultMessage = 'Your pictures from the event'

  const handleSubmit = async (event) => {
      event.preventDefault();
      if (content === '') {
          setContent(defaultMessage);
      }
    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        htmlContent: `<div>${content}</div>`
      });
      alert('Email sent successfully!');
    } catch (error) {
      alert('Failed to send email.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="HTML Content"></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
