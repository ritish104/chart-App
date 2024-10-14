

import React, { useEffect, startTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { receiveMessage } from '../redux/chatSlice';

const ChatWindow = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      startTransition(() => {
        dispatch(
          receiveMessage({
            id: Date.now(),
            text: 'Hello! This is a simulated reply.',
            user: { id: '2', name: 'Ritish' },
            timestamp: new Date().toLocaleTimeString(),
          })
        );
      });
    }, 5000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <Paper
      sx={{ padding: 2, maxWidth: '600px', margin: 'auto', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="h5" gutterBottom>
        Chat
      </Typography>
      <MessageList messages={messages} />
      <MessageInput />
    </Paper>
  );
};

export default ChatWindow;
