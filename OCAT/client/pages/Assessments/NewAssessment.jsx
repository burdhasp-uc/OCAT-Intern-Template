/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AssessmentService } from '../../services/AssessmentService';

export const NewAssessment = () => {
  // eslint-disable-next-line no-unused-vars
  const { formState: { errors }, handleSubmit, register, watch } = useForm();

  // create a form that utilizes the "onSubmit" function to send data to OCAT/client/services/AssessmentService.js and
  // then onto the OCAT/server/routes/AssessmentAPI express API

  // USE THESE BELOW:
  const onSubmit = async (data) => {
    await AssessmentService.submit(data);
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>

      <h1>Cat Assessment Info</h1>
      <br />

      <h2>Risk Level = </h2>

      <h2>Instrument</h2> <br />

      <label htmlFor="instrument">Cat Behavioral Instrument: </label>
      <input type="text" placeholder="Feliway" {...register(`instrument`)} />
      <br /> <br />

      <h2>Cat Details</h2> <br />

      <label htmlFor="catname">Cat Name:  </label>
      <input type="text" placeholder="Bill" {...register(`catname`)} /> <br /> <br />
      {errors.catName && <p>Cat name is required.</p>}
      <label htmlFor="date">Cat Date of Birth: </label>
      <input type="date" id="start" name="trip-start" min="2000-01-01" max="2022-12-31" />
      <br /> <br /> <br />

      <h2>Questions & Responses</h2> <br />

      <label>1. Previous contact with the Cat Judicial System.</label> <br /> <br />

      <label>
        <input type="radio" name="radBtn" value="1" />
        Yes (Score = 1)
      </label>
      <br />
      <label>
        <input type="radio" name="radBtn" value="0" />
        No (Score = 0)
      </label>
      <br /> <br />

      <label>2. Physical altercations with other cats.</label> <br /> <br />

      <label>
        <input type="radio" name="radAlt" value="0" />
        0-3 altercations (Score = 0)
      </label>
      <br />
      <label>
        <input type="radio" name="radAlt" value="1" />
        3+ altercations (Score = 1)
      </label>
      <br /> <br />

      <label>3. Physical altercations with owner (scratching, biting, etc...).</label> <br /> <br />

      <label>
        <input type="radio" name="radAltM" value="0" />
        0-10 altercations (Score = 0)
      </label>
      <br />
      <label>
        <input type="radio" name="radAltM" value="1" />
        10+ altercations (score = 1)
      </label>
      <br /> <br />

      <label>4. Plays well with dogs.</label> <br /> <br />
      <label>
        <input type="radio" name="radBtnL" value="0" />
        Yes (Score = 0)
      </label>
      <br />
      <label>
        <input type="radio" name="radBtnL" value="1" />
        No (Score = 1)
      </label>
      <br /> <br />

      <label>5. Hisses at strangers.</label> <br /> <br />

      <label>
        <input type="radio" name="btnRadio" value="1" />
        Yes (Score = 1)
      </label>
      <br />
      <label>
        <input type="radio" name="btnRadio" value="0" />
        No (Score = 0)
      </label>
      <br /> <br />
      <input type="submit" />

    </form>
  );

  return <Form>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>;
};
