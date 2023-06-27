{/*Add Student page*/}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button} from "@mui/material";
import {useEffect, useState} from "react";

export default function Student() {
    const paperStyle = {padding:'50px 20px',width:"500",margin:"20px auto"};
    const [sname, setsname] = useState('');
    const [address, setaddress] = useState('');
    const [email, setemail] = useState('');
    const [fname, setfname] = useState('');
    const [f_mobile, setf_mobile] = useState('');
    const [f_occupation, setf_occupation] = useState('');
    const [fartheremail, setfartheremail] = useState('');
    const [mname, setmname] = useState('');
    const [m_mobile, setm_mobile] = useState('');
    const [m_occupation, setm_occupation] = useState('');
    const [gname, setgname] = useState('');
    const [g_mobile, setg_mobile] = useState('');
    const [g_occupation, setg_occupation] = useState('');
    const [guardianemail, setguardianemail] = useState('');
    const [l_phone, setl_phone] = useState('');
    const [weight, setweight] = useState('');
    const [height, setheight] = useState('');
    const [image, setimage] = useState('');
    const [students, setStudents] = useState([]);
    const [id, setid] = useState('');

    const regStudent = (e)=>{
        e.preventDefault()
        const student = {sname,address,email, fname, f_mobile, f_occupation, fartheremail, mname, m_mobile, m_occupation, gname, g_mobile, g_occupation, guardianemail, l_phone, weight, height, image}
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
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height={50} // Set the desired height
                    >
                    <h1>Register a Student</h1>

                 </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <h2>Student's details</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true}
                       value={sname} onChange={(e)=>setsname(e.target.value)}
            />
            <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth={true}
                       value={address} onChange={(e)=>setaddress(e.target.value)}
            />
            <TextField id="outlined-basic" label="Land phone number" variant="outlined" fullWidth={true}
                       value={l_phone} onChange={(e)=>setl_phone(e.target.value)}
            />
            <TextField id="outlined-basic" label="email address" variant="outlined" fullWidth={true}
                       value={email} onChange={(e)=>setemail(e.target.value)}
            />            
            <TextField id="outlined-basic" label="Weight" variant="outlined" fullWidth={true}
                       value={weight} onChange={(e)=>setweight(e.target.value)}
            />
                <TextField id="outlined-basic" label="Height" variant="outlined" fullWidth={true}
                       value={height} onChange={(e)=>setheight(e.target.value)}
            />
            <TextField id="outlined-basic" label="IMAGE" variant="outlined" fullWidth={true}
                       value={image} onChange={(e)=>setimage(e.target.value)}
            />
                <h2>Father's details</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true}
                       value={fname} onChange={(e)=>setfname(e.target.value)}
                       />
            <TextField id="outlined-basic" label="Mobile number" variant="outlined" fullWidth={true}
                       value={f_mobile} onChange={(e)=>setf_mobile(e.target.value)}
                       />
            <TextField id="outlined-basic" label="Occupation" variant="outlined" fullWidth={true}
                       value={f_occupation} onChange={(e)=>setf_occupation(e.target.value)}
                       />
                        <TextField id="outlined-basic" label="email address" variant="outlined" fullWidth={true}
                       value={fartheremail} onChange={(e)=>setfartheremail(e.target.value)}
                       />
            <h2>Mother's details</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true}
                       value={mname} onChange={(e)=>setmname(e.target.value)}
                       />
            <TextField id="outlined-basic" label="Mobile number" variant="outlined" fullWidth={true}
                       value={m_mobile} onChange={(e)=>setm_mobile(e.target.value)}
                       />
            <TextField id="outlined-basic" label="Occupation" variant="outlined" fullWidth={true}
                       value={m_occupation} onChange={(e)=>setm_occupation(e.target.value)}
                       />
            <h2>Guardian's details</h2>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true}
                       value={gname} onChange={(e)=>setgname(e.target.value)}
            />
             <TextField id="outlined-basic" label="Mobile number" variant="outlined" fullWidth={true}
                       value={g_mobile} onChange={(e)=>setweight(e.target.value)}
            />
            <TextField id="outlined-basic" label="Occupation" variant="outlined" fullWidth={true}
                       value={g_occupation} onChange={(e)=>setg_mobile(e.target.value)}
            />
                        <TextField id="outlined-basic" label="email address" variant="outlined" fullWidth={true}
                       value={guardianemail} onChange={(e)=>setguardianemail(e.target.value)}
            />
        <br />
        <br />
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
               height={50} // Set the desired height
               margin="auto"
               >
               <Button variant="contained" color="primary">
               SUBMIT
               </Button>
            </Box>

        </Box>
            </Paper>

            {/* <Paper elevation={3} style={paperStyle}>
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
            </Paper> */}

            {/* <h1>Students</h1> */}

            {/* <Paper elevation={3} style={paperStyle}>

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
            </Paper> */}
        </Container>
    );
}