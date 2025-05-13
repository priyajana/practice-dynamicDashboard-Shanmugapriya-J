import ConditionalContent from "./ConditionalContent";
import TaskList from "./TaskList";

export default function DynamicDashboard()
{
    let user = {
        "name" : "Mark Wahlberg",
        "isPremium":false
        }
    let todayDate = new Date().toLocaleDateString();
    return(
        //Dynamic Greeting
        <div>
            <h1>Hello, {user.name}! </h1>
            <h2>Today's Date is {todayDate} </h2>
            <ConditionalContent/>
            <TaskList/>
        </div>
    );
}