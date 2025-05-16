import PropTypes from "prop-types";
import { Fragment } from "react";
import Modal from "./Modal";
import { useState } from "react";
import { exerciseDescriptions } from "../utils";

const WorkoutCard = ({trainingPlan, workoutIndex, type, dayNum, icon, savedWeights, handleSave, handleComplete}) => {
    
    const {warmup, workout} = trainingPlan || {};

    const [showExerciseDescription, setShowExerciseDescription ] = useState(null);
    const [weights, setWeights] = useState(savedWeights || {});

    const handleAddWeight = (title, weight) => {

        const newObj = {
            ...weights,

            //Overrides or creates an element with the key of title with the data of weight.
            [title]: weight
        }

        setWeights(newObj);
    }
    
    return (
        <div className="workout-container">
            {showExerciseDescription && 
                (<Modal showExerciseDescription = {showExerciseDescription} 
                handleCloseModal={() => {
                    setShowExerciseDescription(null)
                }}/>)}
            <div className="workout-card card">
                <div className="plan-card-header">
                    <p>Day {dayNum}</p>
                    {icon}
                </div>
                <div className="plan-card-header">
                    <h2><b>{type}</b></h2>
                </div>
            </div>

            <div className="workout-grid">

                <div className="exercise-name">
                    <h4>Warmup</h4>
                </div>

                <h6>Sets</h6>
                <h6>Reps</h6>

                <h6 className="weight-input">Max Weight</h6>

                {warmup.map((warmupExercise, warmupIndex) => {

                    return (
                        <Fragment key={warmupIndex}>
                            <div className="exercise-name">

                                <p>{warmupIndex + 1}. {warmupExercise.name}</p>

                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: warmupExercise.name,
                                        description: exerciseDescriptions[warmupExercise.name]
                                    })
                                }} className="help-icon">
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                            </div>
                            <p className="exercise-info">{warmupExercise.sets}</p>
                            <p className="exercise-info">{warmupExercise.reps}</p>
                            <input className="weight-input" placeholder="N/A" disabled />
                        </Fragment>
                    )
                })}
            </div>

            <div className="workout-grid">
                <div className="exercise-name">
                    <h4>Workout</h4>
                </div>
                <h6>Sets</h6>
                <h6>Reps</h6>
                <h6 className="weight-input">Max Weight</h6>
                {workout.map((workoutExercise, wIndex) => {
                    return (
                        <Fragment key={wIndex}>
                            <div className="exercise-name">
                                <p>{wIndex + 1}. {workoutExercise.name}</p>
                                <button onClick={() => {
                                    setShowExerciseDescription({
                                        name: workoutExercise.name,
                                        description: exerciseDescriptions[workoutExercise.name]
                                    })
                                }} className="help-icon">
                                    <i className="fa-regular fa-circle-question"></i>
                                </button>
                            </div>
                            <p className="exercise-info">{workoutExercise.sets}</p>
                            <p className="exercise-info">{workoutExercise.reps}</p>
                            <input value={weights[workoutExercise.name] || ''} onChange={(ev) => {
                                handleAddWeight(workoutExercise.name, ev.target.value)
                            }} className="weight-input" placeholder="14" />
                        </Fragment>
                    )
                })}
            </div>


                <div className="workout-buttons">
                    <button onClick={() => {
                        handleSave(workoutIndex, {weights})
                    }

                    }>Save & Exit</button>

                    <button onClick={() => {
                        handleComplete(workoutIndex, {weights})
                    }

                    } disabled={Object.keys(weights).length !== workout.length}
                    >Complete</button>
                </div>
        </div>
    )
}

WorkoutCard.propTypes = {
    trainingPlan: PropTypes.any,
    workoutIndex: PropTypes.number,
    type: PropTypes.string,
    dayNum: PropTypes.string,
    icon: PropTypes.element
};

export default WorkoutCard;