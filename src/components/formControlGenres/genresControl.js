import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector} from "react-redux";

export default function SelectGenres() {
    const [idGenres, setGenresId] = React.useState('');

    const handleChange = (event) => {
        setGenresId(event.target.value);
    };
// let {genres} = useSelector(state => state.movie);
    // console.log(genres);
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">All genres</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={idGenres}
                    label="Genres"
                    onChange={handleChange}>

                    {/*{genres?.map((genre)=>(<MenuItem key={genre?.id} value={genre?.id}>{genre}</MenuItem>)*/}
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}