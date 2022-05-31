
  const sampleArr=[
    {
        "id": 1,
        "properties": {
            "relation_id": 2996,
            "title": "BC",
            "child_count": 0,
            "parent_relation_id": ""
        }
    },{
        "id": 2,
        "properties": {
            "relation_id": 2992,
            "title": "BP",
            "child_count": 1,
            "parent_relation_id": ""
        }
    },
    {
        "id": 6,
        "properties": {
            "relation_id": 2011,
            "title": "FMC Management",
            "child_count": 1,
            "parent_relation_id": 2992
        }
    }, {
        "id": 7,
        "properties": {
            "relation_id": 2245,
            "title": "FMC Marketing",
            "child_count": 1,
            "parent_relation_id": 2011
        }
    },
    {
        "id": 10,
        "properties": {
            "relation_id": 2048,
            "title": "Generic Audit Forms",
            "child_count": 0,
            "parent_relation_id": 2245
        }
    }
]

//   useEffect(()=>{

//    let a=  recursion(5)

// console.log("firstaaa",a)
//   },[])

//   const recursion=(n)=>{
//       if(n===1){
//         return n
//       }

//     return n*recursion(n-1)
//   }

useEffect(()=>{

  const flatten=(obj)=>{
   return Object.keys(obj).reduce((acc,cur)=>{
      if(typeof obj[cur]==='object'){
        acc={...acc,...flatten(obj[cur])}
      }else{
        acc[cur]=obj[cur]
      }
      return acc
    },{})
  }
  const flatRelationalArr=sample.map(d=>flatten(d));

  const createRelationalTree=(arr,id="")=>{
return arr.filter((data=>data.parent_relation_id===id)).reduce((acc,cur)=> [...acc,{id:cur.relation_id,title:cur.title,children:createRelationalTree(arr,cur.relation_id)}]
,[])
  }
// const createRelationalTree=(arr,id="")=>{
//   return arr.filter((d)=>d.parent_relation_id===id).map(({relation_id,title})=>{
//     return {id:relation_id,title,children:createRelationalTree(arr,relation_id)}
//   })
// }
console.log(createRelationalTree(flatRelationalArr))
},[])

const parentRelationTree=(arr,id)=>{

return arr.reduce((prev,current)=>{ 
  let relationalData=prev&&prev?.find((d)=>d.id===current.properties.parent_relation_id)
  let relationalDataIdx=prev&&prev?.findIndex((d)=>d.id===current.properties.parent_relation_id)
  if(relationalData){
    prev.splice(relationalDataIdx,1)
    // prev=[...prev,]
   prev.push({...relationalData,children:current})
  }else{
    let construct={id:current.properties.relation_id,title:current.properties.title}
  prev=[...prev,{...current,...construct}]
  }
// if(prev[current.properties.relation_id]===current.properties.parent_relation_id){
//   prev[current.properties.relation_id].children=parentRelationTree(arr)
// }
return prev
},[])

}


useEffect(()=>{

  
},[])