import express from 'express';

const port = 6060;

const app = express();

app.listen(port , () => {
    console.log(`server running on ${port}`);
});