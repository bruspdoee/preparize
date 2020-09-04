import React from "react";
import MaterialTable from "material-table";
import { jobs as JobsAPI } from "../../utils/API/";

export default class newJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.user.email,
      company: "",
      jobTitle: "",
      status: "",
      notes: "",
      // currentJobSearch: [],
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
        // {
        //   company: "Google",
        //   jobTitle: "Software Engineer",
        //   location: "New York, NY",
        //   status: 3,
        //   notes: "1st I/V went really well, awaiting next steps",
        // },
        // {
        //   company: "YouTube",
        //   jobTitle: "Junior Software Engineer",
        //   location: "New York, NY",
        //   status: 1,
        // },
      ],
    };
  }

  componentWillMount() {
    console.log(this.state.email);
    JobsAPI.findAll()
      .then((res) => {
        console.log(res);

        this.setState({
          data: res.data.map((job) => {
            return {
              email: job.email,
              company: job.company,
              jobTitle: job.jobTitle,
              status: job.status,
              notes: job.notes,
            };
          }),
        });

        console.log(this.state.data);
      })
      .catch((e) => console.log(e));
  }

  // handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(event.target);
  //   console.log(event.target.value);
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   jobs
  //     .newJob({
  //       email: this.state.email,
  //       company: this.state.company,
  //       jobTitle: this.state.jobTitle,
  //       status: this.state.status,
  //       notes: this.state.notes,
  //     })
  //     .then((res) => {
  //       this.props.history.push("/home");
  //     })
  //     .catch((e) => console.log(e));
  // };

  render() {
    // console.log(this.state.jobs);
    // console.log(this.state.user.email);

    return (
      <MaterialTable
        // onChange={this.handleInputChange}
        title={this.state.email + "'s Job Board"}
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(
                () => {
                  resolve();
                  // this.setState((prevState) => {
                  //   const data = [...prevState.data];
                  //   data.push(newData);
                  //   return { ...prevState, data };
                  // });
                }
                // JobsAPI.newJob(newData),
                // 600
              );
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                // if (oldData) {
                //   setState((prevState) => {
                //     const data = [...prevState.data];
                //     data[data.indexOf(oldData)] = newData;
                //     return { ...prevState, data };
                //   });
                // }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                // setState((prevState) => {
                //   const data = [...prevState.data];
                //   data.splice(data.indexOf(oldData), 1);
                //   return { ...prevState, data };
                // });
              }, 600);
            }),
        }}
      />
    );
  }
}
