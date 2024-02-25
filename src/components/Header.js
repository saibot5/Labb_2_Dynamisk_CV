import { Elite } from "./EasterEggs";


export default function Header() {
   
//  //TODO find why event runs twice (strictmode?)
//  const sequence =[49,49,51,51,51,51,55,55]
//  let current = 0;
//     useEffect(()=>{
//         function handelKeyPress(e){
//             if (e.keyCode == sequence[current]){
//                current++;
//             }
//             else{
//                 console.log("FEL!")
//                 current = 0;
//             }

//             if(current === 7){
//                 //TODO change to popup modal
//                 console.log("ELITE!")
//             }
//         }

//         document.addEventListener('keyup',handelKeyPress)
//     } )


    return (
        <header>
            <a href="#main" className="skip">Till innehåll</a>
            <h1>Hem</h1>

        </header>      
    );
}