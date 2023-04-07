import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Box from '@mui/material/Box';
import fetchBackend from '../../Utils/fetchBackend';
import { useState } from 'react';

function Searchbar() {
    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch(event) {
        event.preventDefault();

        // hit backend endpoint and redirect to home on success.
        // otherwise, set text-field error messages appropriately.
        fetchBackend
            .get(`/search/keyword?keyword=${searchQuery}`)
            .then((response) => {
                // handle showing results... either to a new page with results or using states to show component
                // containing results
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}>
            <Box
                component="form"
                onSubmit={handleSearch}
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 700 }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Recipes"
                    inputProps={{ 'aria-label': 'search recipes' }}
                    id="searchQuery"
                    onChange={(eventHandler) => {
                        setSearchQuery(eventHandler.target.value);
                    }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Box>
        </Paper>
    );
}

export default Searchbar;
