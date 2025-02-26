import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



