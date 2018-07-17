import API from '../apis/endpoints';
import axios from 'axios';


const getQuestions = async ()=>{
    let response = "";
    try{
        response = await axios.get(API.endpoints.easyMultiple);
        console.log(response);
    }catch(e){
        console.log(e);
        response = e;
    }
    return response.data
}

const apicalls = {
    getQuestions
}

export default apicalls;

