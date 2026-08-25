# Student File Management Using Node.js

## Assignment Description

This project demonstrates basic file system operations using the Node.js `fs` module.

The program performs the following operations:

* Create a student information file
* Read the file
* Update the file
* Rename the file
* Delete the file

## Technologies Used

* Node.js
* JavaScript
* Node.js `fs` Module

## Project Structure

```text
student-file-assignment/
│
├── index.js
├── package.json
└── README.md
```

# Task 1: Create Student Information File

In this task, `fs.writeFile()` is used to create a file named `student.txt`.

The following student information is stored in the file:

```text
Name: Subrata Panda
Course: Full Stack Development
Technology: Node.js
```

### Expected Result

The file should be created successfully.

### Output Screenshot

| **📷 SCREENSHOT PLACEHOLDER**                                                |
| ---------------------------------------------------------------------------- |
| *Add screenshot showing `student.txt created successfully` in the terminal.* |

---

# Task 2: Read Student Information

In this task, `fs.readFile()` is used to read the data from `student.txt`.

The complete student information is displayed in the terminal.

### Expected Result

```text
Name: Subrata Panda
Course: Full Stack Development
Technology: Node.js
```

### Output Screenshot

| **📷 SCREENSHOT PLACEHOLDER**                                               |
| --------------------------------------------------------------------------- |
| *Add screenshot showing the student information displayed in the terminal.* |

---

# Task 3: Update Student Information

In this task, `fs.appendFile()` is used to add additional information to the existing `student.txt` file.

The following information is added:

```text
Experience: 1 Year
City: Mumbai
```

The existing content is not removed.

### Expected Result

```text
Name: Subrata Panda
Course: Full Stack Development
Technology: Node.js
Experience: 1 Year
City: Mumbai
```

### Output Screenshot

| **📷 SCREENSHOT PLACEHOLDER**                                                                            |
| -------------------------------------------------------------------------------------------------------- |
| *Add screenshot showing `Student information updated successfully` and the updated student information.* |

---

# Task 4: Manage File Name

In this task, `fs.rename()` is used to rename the file.

The file name is changed from:

```text
student.txt
```

to:

```text
studentDetails.txt
```

### Expected Result

The file should be renamed successfully.

### Output Screenshot

| **📷 SCREENSHOT PLACEHOLDER**                                         |
| --------------------------------------------------------------------- |
| *Add screenshot showing `File renamed successfully` in the terminal.* |

---

# Task 5: Remove File

In this task, `fs.unlink()` is used to delete the `studentDetails.txt` file.

### Expected Result

The file should be deleted successfully.

### Output Screenshot

| **📷 SCREENSHOT PLACEHOLDER**                                                       |
| ----------------------------------------------------------------------------------- |
| *Add screenshot showing `studentDetails.txt deleted successfully` in the terminal.* |

---

# How to Run the Program

### Step 1: Open the project folder in VS Code

### Step 2: Open the terminal

### Step 3: Run the following command

```bash
node index.js
```

# Conclusion

This project demonstrates how the Node.js `fs` module can be used to perform basic file operations. The program successfully creates, reads, updates, renames, and deletes a student information file.
