let students = [];

const addstudent = () => {
    const id = document.getElementById("sid").value.trim();
    const name = document.getElementById("sname").value.trim();
    const mark = document.getElementById("smark").value.trim();
    if(!id || !name || !mark) {
        showResult("Please fill all fields!");
        return;
    }
    const student = {id, name, mark};
    students.push(student);
    showResult(`Student Added Successfully`);
    document.getElementById("sid").value = "";
    document.getElementById("sname").value = "";
    document.getElementById("smark").value = "";
};

const viewStudents = () => {
    if (students.length === 0) {
        showResult("No Students Found");
        return;
    }
    const list = students
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`All Students ${list}`);
};

const marksAbove90 = () => {
    const top = students.filter(s => s.mark >= 90);
    if (top.length === 0) {
        showResult("No students with marks >= 90");
        return;
    }
    const list = top
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`Marks >= 90 ${list}`);
};

const marksBelow89Above80 = () => {
    const top = students.filter(s => s.mark < 89 && s.mark >= 80);
    if (top.length === 0) {
        showResult("No students with mark < 89 and mark >= 80 ");
        return;
    }
    const list = top
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`Mark < 89 and Mark >= 80 ${list}`);
};

const marksBelow79Above70 = () => {
    const top = students.filter(s => s.mark < 79 && s.mark >= 70);
    if (top.length === 0) {
        showResult("No students with mark < 79 and mark >= 70");
        return;
    }
    const list = top
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`Mark < 79 and Mark >= 70 ${list}`);
};

const marksBelow69Above60 = () => {
    const top = students.filter(s => s.mark < 69 && s.mark >= 60);
    if (top.length === 0) {
        showResult("No students with mark < 69 and mark >= 60");
        return;
    }
    const list = top
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`Mark < 69 and Mark >= 60 ${list}`);
};

const marksBelow59Above50 = () => {
    const top = students.filter(s => s.mark < 59 && s.mark >= 50);
    if (top.length === 0) {
        showResult("No students with mark < 59 and mark >= 50");
        return;
    }
    const list = top
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`Mark < 59 and Mark >= 50 ${list}`);
};

const marksBelow49 = () => {
    const top = students.filter(s => s.mark <= 49);
    if (top.length === 0) {
        showResult("No students with mark <= 49");
        return;
    }
    const list = top
        .map(s => `<li>${s.id} - ${s.name} - ${s.mark}</li>`)
        .join("");
    showResult(`Mark <= 49 ${list}`);
};

const resetResult = () => showResult("<p><i>Results will appear here...</i></p>");

function showResult(content) {
    document.getElementById("result").innerHTML = content;
}