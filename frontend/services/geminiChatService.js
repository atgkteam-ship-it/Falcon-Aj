export const sendGeminiMessage=async(message)=>{
try{
return {
success:true,
reply:'Falcon AI response placeholder'
}
}catch(error){
return {
success:false,
reply:'Something went wrong'
}
}
}