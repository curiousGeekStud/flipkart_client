import axios from 'axios';

// const URL = 'http://localhost:8000';
const URL = 'https://flipkart-server-delta.vercel.app:8000'

export const authenticateSignup = async(data) =>{
    try{
        // console.log(data)
        return await axios.post(`${URL}/signup`, data);
    } catch (error){
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async(data) =>{
    try{
        // console.log(data)
        return await axios.post(`${URL}/login`, data);
    } catch (error){
        console.log('Error while calling login api', error);
    }
}