import API from '../apis/endpoints';
import axios from 'axios';


const getQuestions = async ()=>{
    let response = "";
    try{
        response = await axios.get(API.endpoints.easyMultiple);
    }catch(e){
        console.log(e);
        // response = e;
    }
    return response
}

const apicalls = {
    getQuestions
}

export default apicalls;

