import WalkCard from "./WalkCard";
import TodaysWeather from "./TodaysWeather";
import PageHeader from "./PageHeader";

export default function TodaysWalks({ setLoggedOut, dogs }) {

    const todaysWalkstitle = "Today's Walks"

    const todaysDate = new Date();
    const todaysWeekDay = todaysDate.getDay()
    const todaysWeekDayString = todaysWeekDay.toString()

    const todaysWalksArr = dogs.filter((dog) => dog.days[todaysWeekDayString])

    return (
        <div className="todaysWalksDiv">
            <PageHeader setLoggedOut={setLoggedOut} title={todaysWalkstitle} />
            <TodaysWeather />
            <ul className="walkCardUl">
                {todaysWalksArr.map((dog) => (
                    <WalkCard key={dog.id} dog={dog} />
                ))}
            </ul>
        </div>
    )
}