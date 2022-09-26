
const apicall = async(url,method,data)=>{

const responce= await fetch(`http://localhost:8000${url}`,{
    method,
    headers:{
      "Content-type":"application/json"
    },
    body:data? JSON.stringify(data):undefined
  })
  return responce.json();
}
export default apicall