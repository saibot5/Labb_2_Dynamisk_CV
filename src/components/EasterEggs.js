import { useEffect} from "react";

export function changeBackgroundColor()
{
    const myColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = myColor;
}

export function Elite({modal})
{

    
//  TODO find why event runs twice (strictmode?)
 const sequence =[49,51,51,55]
 let current = 0;

    useEffect(()=>{
        function handelKeyPress(e){
            console.log(e.keyCode)
            if (e.keyCode == sequence[current]){
               current++;
            }
            else{
                console.log("FEL!")
                current = 0;
            }

            if(current === 4){
                //TODO change to popup modal
                console.log("ELITE!")
                modal(true);
            }
        }
       
        document.addEventListener('keyup',handelKeyPress)
        return () => {
            document.removeEventListener('keyup', handelKeyPress)
        }
       
    } )
}
