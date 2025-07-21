import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    // delete a 
    res.status(200).send("you got 5 notes");
});



app.post("api/notes",(req, res) =>{
    res.status(201).json({message: "post created sucessgyully!"})
})


app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
