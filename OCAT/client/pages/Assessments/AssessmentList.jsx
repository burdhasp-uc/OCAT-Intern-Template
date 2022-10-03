/* eslint-disable no-console */
import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export function Table({ columns, data }) {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}
      className="table table-striped table-hover text-center fs-5 table-bordered border-dark col-12">
      <thead>
        {headerGroups.map(headerGroup =>
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column =>
              <th {...column.getHeaderProps()}
                className="bg-secondary text-white fs-4"
              >{column.render(`Header`)}</th>)}
          </tr>)}
      </thead>
      <tbody{...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) =>
                <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, [ ]);

  const columns = useMemo(
    () => [
      {
        Header: `Assessment Data`,
        columns: [
          {
            Header: `ID`,
            accessor: `id`,
          }, {
            Header: `Score`,
            accessor: `score`,
          }, {
            Header: `Risk Level`,
            accessor: `risk_level`,
          }, {
            Header: `Name`,
            accessor: `cat_name`,
          }, {
            Header: `Date of Birth`,
            accessor: `cat_date_of_birth`,
          }, {
            Header: `Created at`,
            accessor: `created_at`,
          },
        ],
      },
    ],
  );

  return (

    <div className='Table'>
      <h1><center>Cat Assessment Table</center></h1>
      <Table columns={columns} data={assessments} />
    </div>

  );
};

export default AssessmentList;
