import { useState } from 'react';

export default function useSettings(){
const [settings,setSettings]=useState({});
return{settings,setSettings};
}