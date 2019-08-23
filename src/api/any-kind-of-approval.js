// import axios from 'axios';

// const URL_NAME = "https://my-api.com/any-kind-of-approval";

const mockData = [
  {
    "id": 1,
    "name": "Abc",
    "approved": null
  },
  {
    "id": 2,
    "name": "Def",
    "approved": null
  },
  {
    "id": 3,
    "name": "Ghi",
    "approved": null
  }
];

async function fetchRecords() {
  try {
    // const { data } = await axios.get(URL_NAME);
    // Simulate a slow request for the Loader to be visible.
    await new Promise(resolve => setTimeout(resolve, 1000));
    const data = mockData;
    return {
      dataArr: data,
      selectedIdx: data.length > 0 ? 0 : null
    };
  } catch (err) {
    alert("Error while loading records.");
    return Promise.reject(err);
  }
}

async function defineApproval(id, approved) {
  try {
    // await axios.put(`${URL_NAME}/:${id}`, { approved });
    mockData.find(e => e.id === id).approved = approved;
    alert(`Record successfully ${approved ? "approved" : "rejected"}`);
  } catch (err) {
    alert(`Error while ${approved ? "approving" : "rejecting"} record`);
    return Promise.reject(err);
  }
}

export default { fetchRecords, defineApproval };