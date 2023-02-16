import WalkCard from "./WalkCard";
import PageNavLinks from "./PageNavLinks";
import PageHeader from "./PageHeader";

export default function ViewPack({ currentUser, setLoggedOut, dogs }) {

    const viewPackTitle = "View Pack"

    if (!dogs) return <p>...loading</p>

    return (
        <div className="viewPackDiv">
            <PageNavLinks />
            <PageHeader setLoggedOut={setLoggedOut} title={viewPackTitle} currentUser={currentUser} />
            {dogs.map((dog, index) => (
                <ul key={index} className="walkCardUl">
                    <WalkCard dog={dog} />
                </ul>
            ))}
        </div>
    )
}