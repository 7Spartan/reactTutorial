import React from 'react';

function UpdateTable({listItems}) {
  const theadData = (Object.keys(listItems[0]));
  return (
    <table>
      <thead>
        <tr>
          {
            theadData.map(heading => {
              return <th key={heading}>{heading}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          listItems.map((row, index) => {
            return <tr key={index}>
              {theadData.map((key,index) => {
                return <td key={row['id']}>{JSON.stringify(row[key])}</td>
              })}
            </tr>;
          })
        }
      </tbody>
    </table>
  );
}

export default UpdateTable