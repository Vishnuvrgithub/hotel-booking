const apicalls = async(url,method,data,localhost)=>{

    const responce= await fetch(` https://localhost:7021${url}`,{
        method,
        headers:{
          "Content-type":"application/json"
        },
        body:data? JSON.stringify(data):undefined
      })
      return responce.json();
    }
    export default apicalls