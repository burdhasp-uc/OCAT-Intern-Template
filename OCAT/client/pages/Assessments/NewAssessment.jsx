/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable sort-keys */
import React from 'react';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';
// import ReactDatePicker from "react-datepicker";

export const NewAssessment = () => {
  const { control, formState: { errors }, handleSubmit, register, watch } = useForm({
    defaultValues: {
      altercations: ``,
      hissesStrangers: ``,
      ownerAltercation: ``,
      playWellDogs: ``,
      previousContact: ``,
    },
  });
  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API
  const onSubmit = async (data) => {

    const quesAlter = parseInt(data.altercations);
    const quesCon = parseInt(data.previousContact);
    const quesOwn = parseInt(data.ownerAltercation);
    const quesWell = parseInt(data.playWellDogs);
    const quesHiss = parseInt(data.hissesStrangers);
    const createdAt = new Date();
    let score = ``;
    let riskLevel = ``;

    score = quesAlter + quesCon + quesOwn + quesWell + quesHiss;

    if (score <= 1) { riskLevel = `Low`; }
    else if (score > 1 && score < 4) { riskLevel = `Medium`; }
    else { riskLevel = `High`; }

    await AssessmentService.submit({ score, riskLevel, createdAt, data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cat Assessment Info</h1>

      <h2>Instrument</h2>

      <div className="form-group">
        <label htmlFor="Instrument">Cat Behavioral Instrument</label>
        <input
          type="text"
          className="form-control"
          name="instrument"
          {...register(`instrument`, { required: true })}
        />
        { errors.instrument && <small className="form-danger">Instrument is Required</small>}
      </div>

      <h2>Cat Details</h2>

      <div className="form-group">
        <label htmlFor="Catname">Cat Name: </label>
        <input
          type="text"
          className="form-control"
          name="name"
          {...register(`name`, { required: true })}
        />
        { errors.name && <small className="form-danger">Name is Required.</small>}
      </div>
      <div className="form-group">
        <label htmlFor='DOB'> Date of Birth: </label>
        <input
          type="date"
          id="start"
          name="trip-start"
          min="2000-01-01"
          max="2022-12-31"
          {...register(`date`, { required: true })} />
      </div>

      <div className="form-group">
        <label htmlFor="altercations">
          1. Physical altercations with other cats.
        </label>
        <select
          type="text"
          className="form-control"
          name="altercations"
          {...register(`altercations`, { required: true })}>
          <option value="0">0-3 altercations</option>
          <option value="1">3+ altercations</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="previousContact">
          2. Previous contact with Cat Judicial System.
        </label>
        <select
          type="text"
          className="form-control"
          name="previousContact"
          {...register(`previousContact`, { required: true })} >
          <option value="1">Yes</option>
          <option value="0">No</option>

        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ownerAltercation">
          3. Physical altercations with owner(scratching, biting, etc..)
        </label>
        <select
          type="text"
          className="form-control"
          name="ownerAltercation"
          {...register(`ownerAltercation`, { required: true })} >
          <option value="0">0-10 altercations</option>
          <option value="1">10+ altercations</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="playWellDogs">4. Plays well with dogs.</label>
        <select
          type="text"
          className="form-control"
          name="playWellDogs"
          {...register(`playWellDogs`, { required: true })}>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="hissesStrangers">5. Hisses at strangers.</label>
        <select
          type="text"
          className="form-control"
          name="hissesStrangers"
          {...register(`hissesStrangers`, { required: true })} >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
