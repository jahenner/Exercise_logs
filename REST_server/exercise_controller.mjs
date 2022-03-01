import * as exercise from "./exercise_model.mjs";
import express, { application } from 'express';
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});