import express from 'express';
const messagesRouter = express.Router();

messagesRouter.get('/', (req,res) => {
  return res.send('messages are here!');
});

messagesRouter.get('/:id', (req, res) => {
  return res.send('single message.');
});

messagesRouter.post('/', (req, res) => {
  return res.send('new messages');
});

export default messagesRouter