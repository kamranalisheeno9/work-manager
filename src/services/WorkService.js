import { httpAxios } from "@/helper/httpHelper";

export async function addWork(work) {
  // Sending data from client to api to process the client's data through axios.
  
  const result = await httpAxios
  .post("/api/works", work)
  .then((response) => response.data);
  return result;
}
export async function getParticularUserWorks(userId) {
  const result = await httpAxios
    .get(`/api/users/${userId}/works`)
    .then((response) => response.data);
  return result;
}
export async function deleteWork(workId) {
  const result = await httpAxios
    .delete(`/api/works/${workId}`)
    .then((response) => response.data);
  return result;
}
