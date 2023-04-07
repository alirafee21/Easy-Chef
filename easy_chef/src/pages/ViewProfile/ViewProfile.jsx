import Navbar from '../../components/Navbar/Navbar';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import { useState } from 'react';

function ViewProfile() {
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <Navbar />
            <Grid container spacing={2} paddingX="20%" marginTop={5}>
                <Grid item xs={12}>
                    <Box component="form">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    value={firstName}
                                    disabled
                                    sx={{ paddingRight: '1vw' }}
                                />
                                <TextField
                                    id="last-name"
                                    label="Last Name"
                                    variant="outlined"
                                    value={lastName}
                                    disabled
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '68%'
                                    }}
                                >
                                    <TextField
                                        id="date-of-birth"
                                        label="Date of Birth"
                                        variant="outlined"
                                        sx={{ mb: 2 }}
                                        value={dob}
                                        disabled
                                    />
                                    <TextField
                                        id="phone-number"
                                        label="Phone Number"
                                        variant="outlined"
                                        sx={{ mb: 2 }}
                                        value={phone}
                                        disabled
                                    />
                                    <TextField
                                        id="bio"
                                        label="Bio"
                                        multiline
                                        rows={8}
                                        placeholder="Write something here..."
                                        value={bio}
                                        disabled
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        flexDirection: 'column'
                                    }}
                                    display="flex"
                                    alignItems="center"
                                >
                                    <Typography variant="h6" sx={{ mb: 1 }}>
                                        Profile Picture
                                    </Typography>
                                    <Avatar
                                        sx={{ width: 200, height: 200, justifySelf: 'center' }}
                                        alt="Name"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="location"
                                    label="Location"
                                    variant="outlined"
                                    value={location}
                                    disabled
                                    sx={{ paddingRight: '1vw' }}
                                />
                                <TextField
                                    id="email"
                                    label="Email Address"
                                    variant="outlined"
                                    value={email}
                                    disabled
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default ViewProfile;