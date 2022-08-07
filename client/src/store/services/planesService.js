import axios from 'axios'



const getPlanes = async () => {
  // -> GET http://localhost:8000/api/planes/
  const planes = await axios.get('/api/planes');

  return planes.data
}

const planesService = {
	getPlanes
}

export default planesService