import { useState } from "react"

function QR({ urlQR, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempUrlQR, setTempUrlQR] = useState(urlQR);

    function handleEdit() {
        setTempUrlQR(urlQR);
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate(tempUrlQR);
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <>
                <section id="qr">
                    <div style={{ paddingLeft: "3em", paddingTop: ".5em", width: "6em" }}>
                        <textarea value={tempUrlQR} onChange={(e) => setTempUrlQR(e.target.value)} style={{ width: "8em", height: "7em" }} ></textarea>
                    </div>
                </section>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </>

        )
    } else {
        return (
            <>
                <section id="qr">
                    <img src={urlQR} alt="Código QR" title="Escanéame" />
                </section>
                <button onClick={handleEdit}>Edit</button>
            </>
        )
    }
}
function Contact({ phone, email, address, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempPhone, setTempPhone] = useState(phone);
    const [tempEmail, setTempEmail] = useState(email);
    const [tempAddress, setTempAddress] = useState(address);

    function handleEdit() {
        setTempPhone(phone);
        setTempEmail(email);
        setTempAddress(address);
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate(tempPhone, tempEmail, tempAddress);
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }
    function handleChangeArray(value, setArray) {
        const arrPhone = value.split('\n');
        setArray(arrPhone);
    }
    if (editMode) {
        return (
            <section id="contacto">
                <h3>Contacto</h3>
                <ul>
                    <li key={"phone"}>
                        <img src="src/img/icono-telefono.png" />
                        <textarea
                            value={tempPhone.join("\n")}
                            onChange={e => { handleChangeArray(e.target.value, setTempPhone) }} ></textarea>
                    </li>
                    <li key={"email"}>
                        <img src="src/img/icono-correo.png" />
                        <textarea
                            value={tempEmail.join("\n")}
                            onChange={e => { handleChangeArray(e.target.value, setTempEmail) }} ></textarea>
                    </li>
                    <li key={"address"}>
                        <img src="src/img/icono-ubicacion.png" />
                        <textarea
                            value={tempAddress.join("\n")}
                            onChange={e => { handleChangeArray(e.target.value, setTempAddress) }} ></textarea>
                    </li>
                </ul>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </section>
        )
    } else {
        return (
            <section id="contacto">
                <h3>Contacto</h3>
                <ul>
                    <li key={"phone"}>
                        <img src="src/img/icono-telefono.png" />
                        <span>
                            {phone.map((item, index) => {
                                return <div key={index}>{item}<br /></div>
                            })}
                        </span>
                    </li>
                    <li key={"email"}>
                        <img src="src/img/icono-correo.png" />
                        <span>
                            {email.map((item, index) => {
                                return <div key={index}>{item}<br /></div>
                            })}
                        </span>
                    </li>
                    <li key={"address"}>
                        <img src="src/img/icono-ubicacion.png" />
                        <span>
                            {address.map((item, index) => {
                                return <div key={index}>{item}<br /></div>
                            })}
                        </span>
                    </li>
                </ul>
                <button onClick={handleEdit}>Edit</button>
            </section>
        )
    }

}
function Skills({ skills, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempSkills, setTempSkills] = useState(skills);

    function handleEdit() {
        setTempSkills(skills);
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate(tempSkills);
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <section id="habilidades">
                <h3>Habilidades</h3>
                <textarea value={JSON.stringify(tempSkills)} onChange={e => { setTempSkills(JSON.parse(e.target.value)) }}></textarea>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </section>
        )
    }
    else {
        return (
            <section id="habilidades">
                <h3>Habilidades</h3>
                <ul>
                    {skills.map((item, index) => {
                        return <li key={index}><img src={item.urlIcon} title={item.title}></img></li>
                    }
                    )}
                </ul>
                <button onClick={handleEdit}>Edit</button>
            </section>
        )
    }
}
function Interests({ interests, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempInterests, setTempInterests] = useState(interests);

    function handleEdit() {
        setTempInterests(JSON.stringify(interests));
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate(JSON.parse(tempInterests));
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <section id="intereses">
                <h3>Intereses</h3>
                <textarea value={tempInterests} onChange={e => { setTempInterests(e.target.value) }}></textarea>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </section>
        )
    }
    else {
        return (
            <section id="intereses">
                <h3>Intereses</h3>
                <ul>
                    {interests.map((item, index) => {
                        return <li key={index}><img src={item.urlIcon} /><span>{item.title}</span></li>
                    }
                    )}
                </ul>
                <button onClick={handleEdit}>Edit</button>
            </section>
        )
    }
}
function Social({ networks, onUpdate }) {
    const [editMode, setEditMode] = useState(false);
    const [tempNetworks, setTempNetworks] = useState(JSON.stringify(networks));

    function handleEdit() {
        setTempNetworks(JSON.stringify(networks));
        setEditMode(true);
    }
    function handleSubmit() {
        onUpdate(JSON.parse(tempNetworks));
        setEditMode(false);
    }
    function handleCancel() {
        setEditMode(false);
    }

    if (editMode) {
        return (
            <section id="redes">
                <textarea value={tempNetworks} onChange={e => { setTempNetworks(e.target.value) }}></textarea>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleCancel}>Cancel</button>
            </section>
        )
    }
    else {
        return (
            <section id="redes">
                <ul>
                    {networks.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item.urlIcon} /><a href={item.urlPage} target="_blank"><span>/{item.handle}</span></a>
                            </li>
                        )
                    }
                    )}
                </ul>
                <button onClick={handleEdit}>Edit</button>
            </section>
        )
    }
}

export default function Aside({ person, onUpdate }) {
    function handleUpdateUrlQR(newUrlQR) {
        onUpdate({ ...person, urlQR: newUrlQR });
    }
    function handleUpdateContact(phone, email, address) {
        onUpdate({ ...person, phone: phone, email: email, address: address });
    }
    function handleUpdateSkills(skills) {
        onUpdate({ ...person, skills: skills });
    }
    function handleUpdateInterests(interests) {
        onUpdate({ ...person, interests: interests });
    }
    function handleUpdateSocial(social) {
        onUpdate({ ...person, social: social });
    }
    return (
        <aside>
            <QR
                urlQR={person.urlQR}
                onUpdate={handleUpdateUrlQR}
            />
            <Contact
                phone={person.phone}
                email={person.email}
                address={person.address}
                onUpdate={handleUpdateContact}
            />
            <Skills
                skills={person.skills}
                onUpdate={handleUpdateSkills}
            />
            <Interests
                interests={person.interests}
                onUpdate={handleUpdateInterests}
            />
            <Social
                networks={person.social}
                onUpdate={handleUpdateSocial}
            />
        </aside>
    )
}