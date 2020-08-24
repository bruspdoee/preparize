import React, { Component } from "react";
import MaterialTable from "material-table";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      jobTitle: "",
      notes: "",
      columns: [
        { title: "Company", field: "company" },
        { title: "Job Title", field: "jobTitle" },
        { title: "Location", field: "location" },
        { title: "Notes", field: "notes" },
      ],
      data: [
        {
          company: "Amazon",
          jobTitle: "Full Stack Web Developer",
          location: "San Francisco, CA",
          notes: "asked about data algorithms in 2nd i/v",
        },
        {
          company: "Rockstar",
          jobTitle: "Junior Software Developer",
          location: "Los Angeles, CA",
          notes: "good interview, not able to relocate",
        },
      ],
    };
  }

  render() {
    return (
      <MaterialTable
        title={"History Board"}
        columns={this.state.columns}
        data={this.state.data}
      />
    );
  }
}
