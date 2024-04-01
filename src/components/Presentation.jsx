import { useState } from "react"
export default function Presentation({ person, onUpdate }) {
    const [editMode, setEditMode] = useState(false);

    const [tempUrlPhoto, setTempUrlPhoto] = useState(person.urlPhoto);
    const [tempAbstract, setTempAbstract] = useState(person.abstract);
    const [tempQuoteText, setTempQuoteText] = useState(person.quote.text);
    const [tempQuoteAuthor, setTempQuoteAuthor] = useState(person.quote.author);
    const [tempQuoteDegree, setTempQuoteDegree] = useState(person.quote.degree);

    function handleEdit() {
        setTempUrlPhoto(person.urlPhoto);
        setTempAbstract(person.abstract);
        setTempQuoteText(person.quote.text);
        setTempQuoteAuthor(person.quote.author);
        setTempQuoteDegree(person.quote.degree);
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate({
            ...person,
            urlPhoto: tempUrlPhoto,
            abstract: tempAbstract,
            quote: {
                text: tempQuoteText,
                author: tempQuoteAuthor,
                degree: tempQuoteDegree
            },
        });
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <section id="presentacion">
                <textarea id="foto" value={tempUrlPhoto} onChange={(e) => setTempUrlPhoto(e.target.value)} style={{ height: "16em" }}></textarea>
                <div id="texto">
                    <textarea value={tempAbstract} style={{ width: "100%", height: "6.6em" }} onChange={(e) => setTempAbstract(e.target.value)}></textarea>
                    <textarea value={tempQuoteText} style={{ width: "100%", height: "4em" }} onChange={(e) => setTempQuoteText(e.target.value)}></textarea>
                    <textarea value={tempQuoteAuthor} style={{ width: "100%", height: "1.2em" }} onChange={(e) => setTempQuoteAuthor(e.target.value)}></textarea>
                    <textarea value={tempQuoteDegree} style={{ width: "100%", height: "2em" }} onChange={(e) => setTempQuoteDegree(e.target.value)}></textarea>
                </div>
                <div aria-colspan={2} >
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </section>
        )
    }
    else {
        return (
            <section id="presentacion">
                <span id="foto"><img src={person.urlPhoto} alt="foto" /></span>
                <span id="texto">
                    <p>{person.abstract}</p>
                    <q>{person.quote.text}</q>
                    <h6><strong>{person.quote.author}</strong>, {person.quote.degree}</h6>
                </span>
                <div aria-colspan={2} ><button onClick={handleEdit}>Edit</button></div>
            </section>
        )
    }
}