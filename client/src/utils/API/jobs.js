import axios from "axios";

export default {
  newJob: function (jobs) {
    return axios.post("/jobs/post", jobs);
  },
  findAll: function (jobs) {
    return axios.get("/api/jobs/findAll/" + jobs);
  },
};
