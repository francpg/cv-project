import History from "./History";
import Presentation from "./Presentation";
import Title from "./Title";

export default function Principal({ person, onUpdate }) {

    function handleUpdateBackground(newBackground) {
        onUpdate({ ...person, background: newBackground });
    }

    return (
        <main>
            <Title
                person={person}
                onUpdate={onUpdate}
            />
            <Presentation
                person={person}
                onUpdate={onUpdate}
            />
            <History
                background={person.background}
                onUpdate={handleUpdateBackground}
            />
        </main>
    )
}