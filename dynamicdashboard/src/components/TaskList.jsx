export default function TaskList()
{
    const taskArray = 
            [
                {
                 taskName:"Wash Clothes",
                 completed: true   
                },
                {
                 taskName:"Grocery Shopping",
                 completed: false   
                },
                {
                 taskName:"Clean the garage",
                 completed: true   
                },
                {
                 taskName:"Feed the baby",
                 completed: false   
                }
            ]
    let completed = taskArray.filter(task => task.completed);
   
    return(
        <div>
            <ul>
                {
                    taskArray.map((task, index) => (
                        <li style={ task.completed ? { color: 'green' } : { }} key={index}>
                            {task.completed ? `${task.taskName} ${String.fromCodePoint(9989)}`:`${task.taskName} ${String.fromCodePoint(10060)}`}
                        </li>
                    ))
             }
            </ul>
            <span style={{alignContent:'left'}}> Complete : {completed.length} Incomplete : {taskArray.length - completed.length}</span>
        </div>
    );
}