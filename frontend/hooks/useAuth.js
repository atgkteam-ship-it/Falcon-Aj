import { useState } from 'react';

export default function useAuth(){
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(false);

return{user,setUser,loading,setLoading};
}