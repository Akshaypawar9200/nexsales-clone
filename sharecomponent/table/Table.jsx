"use client";
import { useState } from "react";

const Table = ({ data }) => {
  const [headings, setHeadings] = useState([]);

  if (data.length > 0 && headings.length === 0) {
    const firstRow = data[0];
    const keys = Object.keys(firstRow);
    setHeadings(keys);
  }

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full shadow-lg text-center">
        <thead>
          <tr className="bg-tableHead  ">
            {headings.map((heading, index) => (
              <th key={index} className="text-tableHeading px-4 py-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-[1px] font-medium text-tableData text-sm "
            >
              {headings.map((heading, index) => (
                <td key={index} className="px-4 py-2">
                  {row[heading]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
