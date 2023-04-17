const URL = "https://643d792a6afd66da6af7de47.mockapi.io/todos";

const saveTask = (value) => {
  console.log("POST");

  // return fetch(URL, {
  //   method: "POST",
  //   body: JSON.stringify(value),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  return axios.post(URL, value);
};

const loadTasks = () => {
  console.log("GET");
  // return fetch(URL).then((data) => data.json());
  return axios.get(URL).then((res) => res.data);
};

const deleteTask = (id) => {
  console.log("DELETE");
  // fetch(`${URL}/${id}`, {
  //   method: "DELETE",
  // });
  axios.delete(`${URL}/${id}`);
};

const updateTask = (id, status) => {
  console.log("PUT");

  // fetch(`${URL}/${id}`, {
  //   method: "PUT",
  //   body: JSON.stringify({ isDone: status }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  axios.put(`${URL}/${id}`, { isDone: status });
};

export { saveTask, loadTasks, deleteTask, updateTask };
