import React from "react";
import MaterialTable from "material-table";

export default function UserJobTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Company", field: "company" },
      { title: "Job Title", field: "jobTitle" },
      { title: "Location", field: "location" },
      {
        title: "Status",
        field: "status",
        lookup: {
          1: "Applied to job",
          2: "1st Interview",
          3: "2nd Interview",
          4: "3rd Interview",
          5: "4th Interview",
          6: "Final Interview",
          7: "Offer",
          8: "Accepted",
          9: "Rejected",
        },
      },
      { title: "Notes", field: "notes" },
    ],
    data: [
      {
        company: "Google",
        jobTitle: "Software Engineer",
        location: "New York, NY",
        status: 3,
        notes: "1st I/V went really well, awaiting next steps",
      },
      {
        company: "YouTube",
        jobTitle: "Junior Software Engineer",
        location: "New York, NY",
        status: 1,
      },
    ],
  });

  return (
    <MaterialTable
      title={"Brus" + "'s Job Board"}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
