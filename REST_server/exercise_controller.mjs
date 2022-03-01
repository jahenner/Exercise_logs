import * as exercise from "./exercise_model.mjs";
import express, { application } from 'express';
const app = express();

app.use(express.urlencoded({
    extended: true
}));

const PORT = 3000;

app.post("/exercises", (req, res) => {
    console.log(req.body);
    exercise.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then( exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Creation failed' });
        })
})

app.get("/exercises", (req, res) => {
    console.log("Sending all exercises");
    exercise.getExercise()
        .then( exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Find failed' });
        })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});