import express from 'express'


const app = express();
const port = 8000;

app.use(express.json());
app.use('/messages');

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});