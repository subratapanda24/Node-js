const fs = require("fs");

// TASK 1: CREATE FILE

const student = `Name: Subrata Panda
Course: Full Stack Development
Technology: Node.js
`;

fs.writeFile("student.txt", student, (err) => {
    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("student.txt created successfully");

    // TASK 2: READ FILE

    fs.readFile("student.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("\nStudent Information:");
        console.log(data);

        // TASK 3: UPDATE FILE

        const extraInfo = `Experience: 1 Year
City: Mumbai
`;

        fs.appendFile("student.txt", extraInfo, (err) => {
            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("Student information updated successfully");

            fs.readFile("student.txt", "utf8", (err, data) => {
                if (err) {
                    console.log("Error reading updated file");
                    return;
                }

                console.log("\nUpdated Student Information:");
                console.log(data);

                // TASK 4: RENAME FILE

                fs.rename("student.txt", "studentDetails.txt", (err) => {
                    if (err) {
                        console.log("Error renaming file");
                        return;
                    }

                    console.log("\nFile renamed successfully");

                    // TASK 5: DELETE FILE

                    fs.unlink("studentDetails.txt", (err) => {
                        if (err) {
                            console.log("Error deleting file");
                            return;
                        }

                        console.log("studentDetails.txt deleted successfully");
                    });
                });
            });
        });
    });
});