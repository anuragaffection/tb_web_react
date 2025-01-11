import task from "../../assets/task.png";

function TaskBuddy() {
  return (
    <div className="flex flex-row text-tbPurple items-center">
      <img src={task} alt="task logo" />
      <div className="text-xl font-bold">TaskBuddy</div>
    </div>
  );
}

export default TaskBuddy;
