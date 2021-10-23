require('dotenv/config');
const BullBoard = require('bull-board');
const { BullAdapter } = require('bull-board/bullAdapter');
const express = require('express');
const cors = require('./middlewares/cors');
const routes = require('./routes');

const Queue = require('./App/Libs/Queue');

const app = express();

const bullBoard = BullBoard.createBullBoard([
  new BullAdapter(Queue),
]);

app.use('/admin/queues/board', bullBoard.router);

app.use(express.json());
app.use(cors);
app.use(routes);

const port = process.env.PORT || 3001;
app.listen(3001, () => console.log(`> Started Server on http://localhost:${port}`));
