
const apicall = async(url,method,data,localhost)=>{

const responce= await fetch(`http://localhost:5200${url}`,{
    method,
    headers:{
      "Content-type":"application/json"
    },
    body:data? JSON.stringify(data):undefined
  })
  return responce.json();
}
export default apicall