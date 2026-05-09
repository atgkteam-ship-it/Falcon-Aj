import { useState } from 'react';
export default function useTheme(){
const [darkMode,setDarkMode]=useState(true);
return{darkMode,setDarkMode};
}