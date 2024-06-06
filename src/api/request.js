// import axios from 'axios';

// axios.defaults.timeout = 60000;

// const handleRequest = async (axiosFn, url, data, isPrivate) => {
//   try {
//     const headers = isPrivate ? { 'X-User-Token': 'your_token_here' } : {};
//     const response = await axiosFn(url, data, { headers });
//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.error('Request failed:', error.message);
//     console.error('Error details:', error);
//     throw error; 
//   }
// };

// export const get = async (url, isPrivate) => {
//   console.log(`GET request to URL: ${url}`);
//   const x = handleRequest(axios.get, url, null, isPrivate);
//   console.log("=========",x)
//   return x;
// };

// export const post = async (url, body, isPrivate) => {
//   console.log(`POST request to URL: ${url}, Body:`, body);
//   return handleRequest(axios.post, url, body, isPrivate);
// };

// export const put = async (url, body, isPrivate) => {
//   console.log(`PUT request to URL: ${url}, Body:`, body);
//   return handleRequest(axios.put, url, body, isPrivate);
// };

// export const deleteRequest = async (url, isPrivate) => {
//   console.log(`DELETE request to URL: ${url}`);
//   return handleRequest(axios.delete, url, null, isPrivate);
// };




import axios from 'axios';

axios.defaults.timeout = 60000;

export const get = async (url, isPrivate) => {
  try {
    const result = await axios.get(url, isPrivate);
    console.log("🚀 ~ get ~ result.data:", result.data)
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export const post = async (url, body ,isPrivate) => {
  try {
    const result = await axios.post(url, body ,isPrivate);
    console.log("🚀 ~ post ~ result:", result.data)
    return result.data;
  } catch (err) {
    console.log(err);
  }
};


export const put = async (url, body, isPrivate) => {
    try
   { const result = await axios.put(url, body, isPrivate);}
   catch (err){
    console.error(err);
   }


}


export const deleteRequest = async (url, isPrivate) => {

    try{
        const result = await axios.delete(url, isPrivate);
        return result.data;
    }
    catch (err){
        console.error(err);
    }
}