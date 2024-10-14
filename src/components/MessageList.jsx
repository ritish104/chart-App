

import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const MessageList = ({ messages }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ overflowY: 'auto', flexGrow: 1, padding: 2, maxHeight: '60vh' }}>
      {messages.map((message) => (
        <Typography key={message.id} sx={{ marginBottom: '10px' }}>
          <strong>{message.user.name}</strong>: {message.text} <span>({message.timestamp})</span>
        </Typography>
      ))}
      <div ref={messageEndRef} />
    </Box>
  );
};

export default MessageList;
