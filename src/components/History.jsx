import { useState } from "react"

function HistoryItem({ dateFrom, dateTo, title, subtitle, description }) {
    return (
        <li>
            <h4>{dateFrom} - {dateTo}</h4>
            <h5>{title}</h5>
            <h6>{subtitle}</h6>
            {description != null &&
                description.map((item, index) => {
                    return <p key={index}>{item}</p>
                })
            }
        </li>
    )
}

function HistorySection({ title, items, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempItems, setTempItems] = useState(JSON.stringify(items));

    function handleEdit() {
        setTempItems(JSON.stringify(items));
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate(JSON.parse(tempItems));
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <section>
                <h3>{title}</h3>
                <textarea value={tempItems} onChange={e => { setTempItems(e.target.value) }} style={{ height: "29.3em", width: "18em" }}></textarea>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </section>
        )
    }
    else {
        return (
            <section>
                <h3>{title}</h3>
                <ul>
                    {items.map((item, index) => {
                        return <HistoryItem
                            key={index}
                            dateFrom={item.dateFrom}
                            dateTo={item.dateTo}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                        />
                    })}
                </ul>
                <div aria-colspan={2} ><button onClick={handleEdit}>Edit</button></div>
            </section>
        )
    }

}

export default function History({ background, onUpdate }) {
    function handleUpdateExperience(newExperience) {
        onUpdate({ ...background, experience: newExperience });
    }
    function handleUpdateEducation(newEducation) {
        onUpdate({ ...background, education: newEducation });
    }
    function handleUpdateCertifications(newCertifications) {
        onUpdate({ ...background, certifications: newCertifications });
    }
    return (
        <section id="detalle">
            <HistorySection
                title={"Experiencia"}
                items={background.experience}
                onUpdate={handleUpdateExperience}
            />
            <HistorySection
                title={"Educación"}
                items={background.education}
                onUpdate={handleUpdateEducation}
            />
            <HistorySection
                title={"Certificaciones"}
                items={background.certifications}
                onUpdate={handleUpdateCertifications}
            />
        </section>
    )
}