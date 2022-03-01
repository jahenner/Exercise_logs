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

app.put("/exercises/:_id", (req, res) => {
    const exerciseId = req.params._id;
    console.log(`Updating ${exerciseId} \nwith: ${req.body}`);
    exercise.updateExercise(exerciseId, req.body)
        .then(updatedExercise => {
            console.log(updatedExercise);
            res.status(200).json(updatedExercise);
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ Error: 'Update failed' });
        });
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)

});