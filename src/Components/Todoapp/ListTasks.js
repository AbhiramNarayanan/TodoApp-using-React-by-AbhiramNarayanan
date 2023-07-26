import React from 'react'

const ListTasks = ({task,removeTask,index}) => {
  return (
    <>
    <div className="list-tasks">
       {task.title}
        <button onClick={()=>{removeTask(index)}}className="delete-btn">Delete</button>

    </div>
    </>
  )
}

export default ListTasks