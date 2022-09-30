/* eslint-disable no-console */
import React, { Component, useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);
  console.log(`This is the front end:`, assessments);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, [ ]);

  // const columns = useMemo(() => tableColumn, [ ]);
  // const data = assessments;

  // const {
  //   getTableBodyProps,
  //   getTableProps,
  //   headerGroups,
  //   prepareRow,
  //   rows,
  // } = useTable({
  //   columns,
  //   data,
  // });

  // const tableColumn = [
  //   {
  //     Header: `ID`,
  //     accessor: `id`,
  //   }, {
  //     Header: `Score`,
  //     accessor: `score`,
  //   }, {
  //     Header: `Risk Level`,
  //     accessor: `riskLevel`,
  //   }, {
  //     Header: `Name`,
  //     accessor: `cat_name`,
  //   }, {
  //     Header: `Date of Birth`,
  //     accessor: `cat_date_of_birth`,
  //   }, {
  //     Header: `Created at`,
  //     accessor: `createdAt`,
  //   },
  // ];

  return (

    <div className="list-group">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Cat Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Score</th>
            <th scope="col">Risk Level</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {assessments && assessments.map(assessment =>
            <tr key={assessment.id}>
              <td>{assessment.cat_name}</td>
              <td>{assessment.cat_date_of_birth}</td>
              <td>{assessment.score}</td>
              <td>{assessment.risk_level}</td>
              <td>{assessment.created_at}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>

  // <>
  //   <table
  //     {...getTableProps()}
  //     className="table table-striped table-hover text-center table-bordered border-dark col-12"
  //   >
  //     <thead>
  //       {headerGroups.map((head) =>
  //         <>
  //           <tr {...head.getHeaderGroupProps()}>
  //             {head.headers.map((col) =>
  //               <>
  //                 <th
  //                   {...col.getHeaderProps()}
  //                   className="bg-secondary text-blue"
  //                 >
  //                   {col.render(`Header`)}
  //                 </th>
  //               </>)}
  //           </tr>
  //         </>)}
  //     </thead>
  //     <tbody {...getTableBodyProps()}>
  //       {rows.map((row) => {
  //         prepareRow(row);
  //         return (
  //           <>
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map((cell) =>
  //                 <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
  //             </tr>
  //           </>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // </>
  );
};

export default AssessmentList;
