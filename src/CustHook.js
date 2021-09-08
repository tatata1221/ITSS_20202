import CustHook from "./CustHook";
function App() {
    const Name = ["Huyen","Hoa","Hung","Long"];
    const [insD,submit,data,arrayD] = CustHook(Name)
  return (
    <div>
       <div>
           学生一覧：[Huyen,Hoa,Hung,Long]
       </div>
        <div>
            追加する名前を入力してください。
        </div>
        <input onChange={insD}/>
        <button onClick={()=>submit()}>
            確定
        </button>
        <div>
            追加する名前:{data}
        </div>
        <div>
            新しい一覧：{arrayD.map((i,key)=>{
            if(key ==0)
            {
                return(
                    <span>
                     [{i},
                 </span>
                )} else if(key == arrayD.length -1){
                return(
                    <span>
                     {i}]
                 </span>
                )
            } else{
                return(
                    <span>
                         {i},
                     </span>
                )
            }
        } )}
        </div>
    </div>
  );
}

export default App;