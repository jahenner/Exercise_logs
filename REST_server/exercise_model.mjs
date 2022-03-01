import mongoose from 'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/exercises_db',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const exerciseSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true},
});

const Exercise = mongoose.model("exercises", exerciseSchema);

const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    return exercise.save();
};

const getExercise = async () => {
    const query = Exercise.find({})
        .select('')
        .limit(0);
    return query.exec();
}

const updateExercise = async (_id, updates) => {
    const result = await Exercise.findOneAndUpdate({_id: _id}, 
        updates,
        { new: true} )
    if (result === null) {
        throw Error("id not found")
    }
    return result;
}

const deleteExercise = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    if (result.deletedCount === 0) {
        throw Error("id not found")
    }
    return result.deletedCount;
}

export {createExercise, getExercise, updateExercise, deleteExercise}