export const isUserMessage=(role)=>role==='user';

export const createMessage=(text,role='user')=>({
text,
role,
id:Date.now().toString()
});