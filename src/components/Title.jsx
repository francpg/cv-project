import { useState } from "react"

export default function Title({ person, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempTitle, setTempTitle] = useState(person.shortName);
    const [tempSubtitle, setTempSubtitle] = useState(person.actualTitle);

    function handleEdit() {
        setTempTitle(person.shortName);
        setTempSubtitle(person.actualTitle);
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate({ ...person, shortName: tempTitle, actualTitle: tempSubtitle })
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <section id="nombre">
                <div id="fondo-nombre">
                    <input value={tempTitle} onChange={(e) => setTempTitle(e.target.value)}></input>
                </div>
                <input value={tempSubtitle} onChange={(e) => setTempSubtitle(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </section>
        )
    }
    else {
        return (
            <section id="nombre">
                <div id="fondo-nombre"><h1>{person.shortName}</h1></div>
                <h2>{person.actualTitle}</h2>
                <button onClick={handleEdit}>Edit</button>
            </section>
        )
    }
}