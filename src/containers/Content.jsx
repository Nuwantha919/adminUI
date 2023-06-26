import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button} from "@mui/material";
import {useEffect, useState} from "react";

export default function Student() {
    const paperStyle = {padding:'50px 20px',width:"500",margin:"20px auto"};
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    const [landphone, setlandphone] = useState('');
    const [weight, setweight] = useState('');
    const [height, setheight] = useState('');
    const [students, setStudents] = useState([]);
    const [id, setid] = useState('');

    const regStudent = (e)=>{
        e.preventDefault()
        const student = {name, address, landphone, weight, height}
        console.log(student)
        fetch("http://localhost:8080/student/addNew",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New Student added")
        })
    }

    const delStudent = (e) => {
        e.preventDefault();

        const studentId = {id}

        fetch(`http://localhost:8080/students/${studentId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                console.log("Student deleted");
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
            });
    };


    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
            .then(res=>res.json())
            .then((result)=>{
                    setStudents(result);
                }
            )
    },[])

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Register a Student</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth={true}
                       value={name} onChange={(e)=>setname(e.target.value)}
            />
            <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth={true}
                       value={address} onChange={(e)=>setaddress(e.target.value)}
            />
            <TextField id="outlined-basic" label="Land Phone" variant="outlined" fullWidth={true}
                       value={landphone} onChange={(e)=>setlandphone(e.target.value)}
            />
            <TextField id="outlined-basic" label="Weight" variant="outlined" fullWidth={true}
                       value={weight} onChange={(e)=>setweight(e.target.value)}
            />
            <TextField id="outlined-basic" label="Height" variant="outlined" fullWidth={true}
                       value={height} onChange={(e)=>setheight(e.target.value)}
            />
        </Box>
                <Button variant="contained" onClick = {regStudent}>
                    Submit
                </Button>
            </Paper>

            <Paper elevation={3} style={paperStyle}>
                <h1>Delete a Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student ID" variant="outlined" fullWidth={true}
                               value={id} onChange={(e)=>setid(e.target.value)}
                    />
                </Box>
                <Button variant="outlined" id="studentId" color="error" onClick={(e) => delStudent(e)}>
                    Delete
                </Button>
            </Paper>

            <h1>Students</h1>

            <Paper elevation={3} style={paperStyle}>

                {students.map(student=>(
                    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                        Id:{student.id}<br/>
                        Name:{student.name}<br/>
                        Address:{student.address}<br/>
                        LandPhone:{student.landphone}<br/>
                        Weight: {student.weight}<br/>
                        Height: {student.height}
                    </Paper>
                ))
                }
            </Paper>
        </Container>
    );
}