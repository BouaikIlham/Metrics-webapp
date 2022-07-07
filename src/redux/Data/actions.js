import Axios from 'axios';

const FETCHDATA = 'FETCHDATA';
const link = 'https://api.covid19api.com/summary';


const fetchData = (data) => ({
    type: FETCHDATA,
    payload: data,
});

export const fetchDataApi = () => async (dispatch) => {
    const data = await Axios.get(link);
    dispatch(fetchData(data));
};
