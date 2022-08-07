import axios from 'axios'



const getPlanes = async () => {
  // -> GET http://localhost:8000/api/planes/
  const planes = await axios.get('/api/planes');

  return planes.data
}

const getPlane = async (id) => {
  // -> GET http://localhost:8000/api/plane/
  const plane = await axios.get(`/api/planes/${id}`);

  return plane.data;
};

const planesService = {
  getPlanes,
  getPlane,
};

export default planesService