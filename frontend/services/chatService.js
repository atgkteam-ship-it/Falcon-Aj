export const createNewChat=async()=>{
try{return{success:true}}catch(error){return{success:false}}
}

export const deleteChat=async(id)=>{
try{return true}catch(error){return false}
}