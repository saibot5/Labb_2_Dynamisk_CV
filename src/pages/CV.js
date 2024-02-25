import React, { useState, useEffect } from "react"
import cvData from "../cv.json"

export default function CV() {
    return (
        <main class="main">
            <div class="row">

                <section className="CVsection">
                    <h2>Erferenheter</h2>
                    <ul>
                        {cvData.Work.map((work) => (
                            <li key={work.id}>
                                <h3>{work.Workplace}</h3>
                                <p>{work.year}</p>
                                <p>{work.description}</p>
                            </li>
                    ))}

                    </ul>
                </section>
                <section className="CVsection">
                    <h2> Utbildning</h2>
                    <ul>
                        {cvData.Studies.map((studies) => (
                            <li key={studies.id}>
                                <h3>{studies.course}</h3>
                                <p>{studies.year}</p>
                                <p className="pre-line">{studies.description}</p>
                            </li>
                    ))}

                    </ul>
                </section>
            </div>
        </main>
    )
}