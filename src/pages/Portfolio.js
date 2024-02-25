import codeImage from "../images/codeimg.jpg";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
    const [isLoading, setIsLoading] = useState(false);
    const [repo, setRepo] = useState([]);


    useEffect(() => {
        setIsLoading(true);
        fetch('https://api.github.com/users/saibot5/repos')
            .then(response => response.json())
            .then(data => {
                setRepo(data);
                setIsLoading(false);
                console.log("fetch done")
            })
            .catch((error) => { console.log(error) })
    }, []);



    // async function loadJson(){
    //     try{
    //         const respons = await fetch('https://api.github.com/users/saibot5/repos')
    //         if(!respons){
    //             console.log('Error on Fetch')
    //         }

    //         const data = await respons.json();
    //         const stringformdata = JSON.stringify(data,null,2);
    //         const userHtml = data.map(repo =>)
    //     }
    // }

    return (




        <main id="main">
            <section>
                <h2>Portfolio</h2>
                {isLoading ? <p>Loading...</p> : null}
                <div id="flex-container">
                    {
                        repo.map(repo => (
                            <div className="project" key={repo.id}>
                                <h3>{repo.name}</h3>
                                <img src={codeImage} alt="bild på kod" />
                                <a href={'#' + repo.id} className="button">Mer info</a>
                            </div>
                        ))
                    }
                </div>

            </section>

            {
                repo.map(repo => (
                    <div className="popup" id={repo.id} key={repo.id}>
                        <div className="popup-inner">
                            <h4>{repo.name}</h4>
                            {repo.description === null ? <p>Ingen description att hämta från github</p> : <p> {repo.description}</p>}
                            <a href={repo.html_url} className="button">Github Länk</a>
                            <a href="#" className="button">stäng</a>
                        </div>
                    </div>
                ))
            }
            {/* <div class="popup" id="popup1">
            <div class="popup-inner">
                <h4>Mitt första program</h4>
                <p>första labben i utbildningen där vi testade "IF", att skriva ut ett namn som skrevs in och en loop
                    som skrev ut nummer mellan 0 upp till ett nummer i en variable</p>
                <a href="https://github.com/saibot5/Labb1-MyFirstProgram" class="button">Github Länk</a>
                <a href="#" class="button">stäng</a>
            </div>
        </div>
        <div class="popup" id="popup2">
            <div class="popup-inner">
                <h4>schackbräde</h4>
                <p>konsolapp där vi valde storlek på ett schackbräde och en ruta att ställa en shackpjäs som skrevs ut i
                    konsolen </p>
                <a href="https://github.com/saibot5/Labb2-ChessBoard" class="button">Github Länk</a>
                <a href="#" class="button">stäng</a>
            </div>
        </div>
        <div class="popup" id="popup3">
            <div class="popup-inner">
                <h4>Nummerspel</h4>
                <p>Ett gissa numret spel i konsolen med olika svårighetsgrader</p>
                <a href="https://github.com/saibot5/Labb3_NumbersGame" class="button">Github Länk</a>
                <a href="#" class="button">stäng</a>
            </div>
        </div>
        <div class="popup" id="popup4">
            <div class="popup-inner">
                <h4>Databasprojekt</h4>
                <p>Labb där vi byggde en databas och en konsolapp där man kunde se och lägga till elever,kurser,betyg
                    och anställda till en fiktiv skola</p>
                <a href="https://github.com/saibot5/Databasprojekt" class="button">Github Länk</a>
                <a href="#" class="button">stäng</a>
            </div>
        </div> */}
        </main>
    );
}