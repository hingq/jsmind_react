import { useEffect, useState } from "react";
import "../assets/history.css";
import axios from "axios";
import { useTable } from "react-table";

function History() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getHistory();
  }, []); // Runs only once when the component mounts

  const getHistory = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/history?user=he");
      setList(res.data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  // Ensure that the data exists; if not, use an empty array
  const data =
    list.length > 0
      ? list
      : [
          { id: 1, name: "John Doe", time: 30 },
          { id: 2, name: "Jane Smith", time: 25 },
          { id: 3, name: "Bob Johnson", time: 35 },
        ];

  const columns = [
    {
      Header: "主题", // ✅ Fixed from "headers" to "Header"
      accessor: "id",
    },
    {
      Header: "诗歌", // ✅ Fixed from "headers" to "Header"
      accessor: "name",
    },
    {
      Header: "创建时间", // ✅ Fixed from "headers" to "Header"
      accessor: "time",
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="history">
      <h2>History</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps()} key={index}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.length > 0 ? (
            rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => (
                    <td {...cell.getCellProps()} key={index}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No history found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default History;
