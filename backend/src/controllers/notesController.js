export function getAllNotes(req, res) {
    res.status(200).send("You just feteched notes");
};
export function createNote(req, res) {
      res.status(201).json({message: "Note created sucessfully!" });
}

export function updateNote(req, res) {
    res.status(200).json({meassage: "Note updated succesfully"});
}

export function deleteNote(req, res) {
      res.status(200).json({meassage: "Note deleted succesfully"})
}