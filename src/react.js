import React, {useEffect, useState} from 'react';
function CustHook(Name){
    const [data,setData] = useState();
    const [arrayD,setArrData] = useState(Name);
     const insD=(e)=>{
         setData(e.target.value);
     }
     const submit=()=>{
         Name.push(data);
         setArrData([...arrData,data]);
         console.log(Name);
     }
     useEffect(()=>{
         console.log(Name);
     },[Name)
     return [insD,submit,data,arrayD]
}
export default CustHook;