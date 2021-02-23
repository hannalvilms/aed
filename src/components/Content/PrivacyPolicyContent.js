import React, { Component } from 'react';

export default class PrivacyPolicyContent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row policy">
                        <div className="col-lg-12 policy-text">
                            <h1>Kasutustingimused</h1>
                            <p>Andmekaitsetingimused kirjeldavad, kuidas töödeldakse veebirakenduse Aed kasutaja isikuandmeid. Aed annab Kliendile poolte vahel sõlmitud teenuselepingu alusel ligipääsu veebirakenduse materjalidele.
                                Isikuandmed on igasugune informatsioon, mis on otseselt seotud Aed kasutajaga või teenustega. Täpsemalt - identifitseervad tunnused nagu nimi, sünnikuupäev, kontaktandmed.
                                Töötlemine on mistahes tooiming, mida teostatakse Isikuandmetega - kogumine, hoiustamine, salvestamine jms.
                            </p>
                        </div>
                        <div className="col-lg-12 policy-text">
                            <h3>Milliseid andmeid kogume</h3>
                            <p>Aeg kogub kasutajaks registreerimisel järmiseid isikuandmeid: eesnimi, perekonnanimi, õppeasutus.</p>
                        </div>
                        <div className="col-lg-12 policy-text">
                            <h3>Millisel eesmärgil isikuandmeid kogume</h3>
                            <p>Aed töötleb isikuandmeid järgnevatel eesmärkidel:</p>
                            <p>1. teenuse pakkumiseks ja haldamiseks;</p>
                            <p>2. kasutaja konto loomiseks ja identifitseerimiseks;</p>
                            <p>3. teenuse arendamiseks.</p>
                        </div>
                        <div className="col-lg-12 policy-text">
                            <h3>Isikuandmetele ligipääes ja edastamine</h3>
                            <p>Isikuandmetele on ligipääes Aed hooldajatel. Aed ei jaga, avalikusta ega müü isikuandmeid kolmadatele osapooltele.</p>
                        </div>
                        <div className="col-lg-12 policy-text">
                            <h3>Isikuandmete turvalisus</h3>
                            <p>Kogutud isikuandmed salvestatakse turvatud serverites. Kasutajakontole juurdepääs toimub kasutajanime ja salasõnaga.</p>
                            <p>Kui toimub isikuandmete rikkumine, millel võib olla kõrge risk kasutaja privaatsusele, teavitatakse sellest kasutajat.</p>
                        </div>
                        <div className="col-lg-12 policy-text">
                            <h3>Õigused</h3>
                            <p>Kasutajal on õigus nõuda isikuandmete parandamist ja pääseda neile ligi. Kasutaja võib nõuda isikuandmete kustutamist. Peale isikuandmete kustutamist kaotab kasutaja ligipääsu materjalidele ning ülesannete tulemustele.</p>
                        </div>
                        <div className="col-lg-12 policy-text">
                            <h3>Isikuandmete säilitamine</h3>
                            <p>Aed konto isikuandmed säilitatakse seni, kuni kasutaja oma konto kustutab. Isikuandmed võidakse säilitada anonümiseeritud kujul statistika koostamiseks.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
