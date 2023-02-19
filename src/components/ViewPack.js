import WalkCard from "./WalkCard";
import PageHeader from "./PageHeader";

export default function ViewPack({ currentUser, setLoggedOut, dogs }) {

    const viewPackTitle = "View Pack"

    return (
        <div className="viewPackDiv">
            <PageHeader setLoggedOut={setLoggedOut} title={viewPackTitle} currentUser={currentUser} />
            <ul className="walkCardUl">
                {dogs.map((dog) => (
                    <WalkCard key={dog.id} dog={dog} />
                ))}
            </ul>
        </div>
    )
}