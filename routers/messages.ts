import express from 'express';
import {Messages} from '../types';
const messagesRouter = express.Router();

const messages: Messages[] = [];
messagesRouter.get('/', (req,res) => {
  return res.json(messages);
});

messagesRouter.get('/:id', (req, res) => {
  return res.send('single message.');
});

messagesRouter.post('/', (req, res) => {
  messages.push({
    message: req.body.message,
    datetime: req.body.message
  })
  return res.send('message with datetime')
});

export default messagesRouter