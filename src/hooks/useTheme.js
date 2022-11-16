import { useEffect, useState } from "react";


export default function useTheme(){

    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    useEffect(() => {
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {

            if(e.matches) {

                setTheme('dark');
            }
            else {
    
                setTheme('light');
            }
        }); 

    }, []);

    return [theme];
}