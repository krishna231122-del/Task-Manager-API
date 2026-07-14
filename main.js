const express = require('express');
const server = express();
const PORT = 8090;

server.use(express.json());
let tasks = [];
let nextid = 1;


server.get("/api",(req,res)=>{
     res.send("task manager api is running");
     res.json(tasks);
});
server.get('/api/tasks',(req,res)=>{
     res.json(tasks);
});


server.get('/api/tasks/:id',(req,res)=>{
     const id = Number(req.params.id);
     const task = tasks.find(task => task.id === id);
     if(!task){
          return res.status(404).json({
               message:"task not found"
          });
     }
     res.json(task);
});

server.post('/api/tasks',(req,res)=>{
     const {title} = req.body;
     if (!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }

     const newTask = {
        id: nextid++,
        title,
        completed: false
     };

    tasks.push(newTask);

    res.status(201).json(newTask);
});


server.put("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { title, completed } = req.body;

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
});


server.delete('/api/tasks/:id',(req,res)=>{
     const id = Number(req.params.id);

     const index = tasks.findIndex(task => task.id === id);
 
     if (index === -1) {
          return res.status(404).json({
            message: "Task not found"
          });
     }

     tasks.splice(index,1);
     res.json({
        message: "Task deleted successfully"
     });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});