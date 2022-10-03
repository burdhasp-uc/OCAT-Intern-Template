/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList(assessments));
    };
    fetchAssessments();
  }, [ assessments ]);

  const data = assessments;

  const columns = [{
    Header: `Instrument`,
    accessor: `instrument`,
  }, {
    Header: `Name`,
    accessor: `name`,
  }, {
    Header: `Date of Birth`,
    accessor: `DOB`,
  }, {
    Header: `Score`,
    accessor: `score`,
  }, {
    Header: `Risk Level`,
    accessor: `Risk Level`,
  }, {
    Header: `Created at`,
    accessor: `createdAt`,
  }];

  return (
    <div>
      <ReactTable />
      data={data}
    </div>
  );
};
