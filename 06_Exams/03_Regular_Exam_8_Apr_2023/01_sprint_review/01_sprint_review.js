function calculatePoints(data) {
  const elementsCount = Number(data[0]);
  const elementsData = data.slice(1, elementsCount + 1);
  const commands = data.slice(elementsCount + 1, data.length);
  let board = {};
  let toDoTasksTotalPoints = 0;
  let inProgressTasksTotalPoints = 0;
  let codeReviewTasksTotalPoints = 0;
  let doneTasksTotalPoints = 0;

  for (const element of elementsData) {
    const [assignee, taskId, title, status, estimatedPoints] = element.split(':')
    if (!board.hasOwnProperty(assignee)) {
      board[assignee] = [];
    }
    board[assignee].push({ [taskId]: [title, status, estimatedPoints] })
  }

  const commandParser = {
    'Add New': addTask,
    'Change Status': changeTaskStatus,
    'Remove Task': removeTask,
  }

  commands
    .forEach((line) => {
      const [command] = line.split(':');
      commandParser[command](line);
    });

  function addTask(commandData) {
    const [_, assignee, taskId, title, status, estimatedPoints] = commandData.split(':')

    if (board.hasOwnProperty(assignee)) {
      board[assignee].push({ [taskId]: [title, status, estimatedPoints] });
    } else {
      console.log(`Assignee ${assignee} does not exist on the board!`)
    }
  }

  function changeTaskStatus(commandData) {
    const [_, assignee, taskId, newStatus] = commandData.split(':');

    if (!board.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`)
    } else {
      let foundTask = false;
      for (const task of board[assignee]) {
        if (task.hasOwnProperty(taskId)) {
          const [taskName, status, points] = task[taskId]
          foundTask = true;
          task[taskId] = [taskName, newStatus, points];
          break;
        }
      }
      if (!foundTask) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
      }
    }
  }

  function removeTask(commandData) {
    const [_, assignee, index] = commandData.split(':');
    let idx = Number(index);

    if (!board.hasOwnProperty(assignee)) {
      console.log(`Assignee ${assignee} does not exist on the board!`)
    } else {
      if (idx < 0 || board[assignee].length < idx + 1) {
        console.log("Index is out of range!");
      } else {
        board[assignee].splice(idx, 1);
      }
    }
  }

  Object.values(board)
    .forEach(assignee => {
      assignee
        .forEach(task => {
          const [_, status, points] = Object.values(task)[0]
          if (status === 'ToDo') {
            toDoTasksTotalPoints += Number(points)
          } else if (status === 'In Progress') {
            inProgressTasksTotalPoints += Number(points);
          } else if (status === 'Code Review') {
            codeReviewTasksTotalPoints += Number(points);
          } else {
            doneTasksTotalPoints += Number(points);
          }
        })
    });

  console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
  console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
  console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
  console.log(`Done Points: ${doneTasksTotalPoints}pts`);

  if (doneTasksTotalPoints >= (toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints)) {
    console.log('Sprint was successful!')
  } else {
    console.log('Sprint was unsuccessful...')
  }

}

calculatePoints(
  [
    '1',
    'Kiril:BOP-1209:Fix Minor Bug:Progress:3',
    'Change Status:Kiril:BOP-1209:ToDo',
    'Remove Task:Kiril:0'
  ]
)

calculatePoints(
  [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
  ]
)

calculatePoints(
  [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
  ]
)