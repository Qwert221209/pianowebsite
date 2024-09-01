document.addEventListener("DOMContentLoaded", () => {
  const keys = document.querySelectorAll(".key");
  const notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const noteDisplay = document.getElementById("note-display");
  const correctCountDisplay = document.getElementById("correct-count");
  const incorrectCountDisplay = document.getElementById("incorrect-count");
  let previousNote = null;
  let correctCount = 0;
  let incorrectCount = 0;
  rightnotecount = 0;
  wrongnotecount = 0;

  function getRandomNote() {
    let newNote;
    do {
      newNote = notes[Math.floor(Math.random() * notes.length)];
    } while (newNote === previousNote);
    previousNote = newNote;
    return newNote;
  }

  function setNewNote() {
    const newNote = getRandomNote();
    noteDisplay.innerHTML = `<img src="img/${newNote.replace(
      "#",
      "is"
    )}.jpg" alt="${newNote}">`;
    noteDisplay.classList.remove("correct", "incorrect");
    keys.forEach((key) => key.classList.remove("correct", "incorrect"));
    return newNote;
  }

  let currentNote = setNewNote();

  keys.forEach((key) => {
    key.addEventListener("click", (e) => {
      const clickedNote = e.target.getAttribute("data-note");
      if (clickedNote === currentNote) {
        noteDisplay.classList.remove("incorrect");
        noteDisplay.classList.add("correct");
        e.target.classList.add("correct");
        correctCount++;
        correctCountDisplay.textContent = `Correct notes: ${correctCount}`;
        setTimeout(() => {
          e.target.classList.remove("correct");
          currentNote = setNewNote();
        }, 500);
        rightnotecount ++;
        wrongnotecount = 0;
        if ([15, 30, 45, 60].includes(rightnotecount)) {
          alert("You played " + rightnotecount +  " correct notes succesively! Great!");
        }
      } else {
        noteDisplay.classList.remove("correct");
        noteDisplay.classList.add("incorrect");
        e.target.classList.add("incorrect");
        incorrectCount++;
        incorrectCountDisplay.textContent = `Wrong notes: ${incorrectCount}`;
        setTimeout(() => {
          e.target.classList.remove("incorrect");
        }, 500);
        rightnotecount = 0;
        wrongnotecount ++;
        if ([3, 6, 9, 12].includes(wrongnotecount)) {
          alert("You played " + wrongnotecount + " wrong notes succesively. Concentrate more or go back to the previous chapter");
        }
      }
    });
  });
});
