import { useState } from "react";
import Principal from './components/Principal.jsx'
import Aside from './components/Aside.jsx'
import data from './data.json'

export default function App() {
    const [person, setPerson] = useState(data)
    function handleUpdate(newPerson) {
        setPerson(newPerson);
    }
    return (
        <>
            <Principal
                person={person}
                onUpdate={handleUpdate}
            />
            <Aside
                person={person}
                onUpdate={handleUpdate}
            />
        </>
    )
}