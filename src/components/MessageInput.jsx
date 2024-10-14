

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import { sendMessage } from '../redux/chatSlice';

const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.chat.user);

  const handleSendMessage = () => {
    if (text.trim() === '') return;

    dispatch(
      sendMessage({
        id: Date.now(),
        text,
        user,
        timestamp: new Date().toLocaleTimeString(),
      })
    );
    setText('');
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Type your message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
