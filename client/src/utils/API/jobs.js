import axios from "axios";

export default {
  newJob: function (Jobs) {
    return axios.post("/jobs/post", Jobs);
  },
  findAll: function (Jobs) {
    return axios.get("/api/jobs/:email");
  },
};
