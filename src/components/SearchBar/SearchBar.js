import React from 'react';
import { InputAdornment, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({setShow}) => {
    return (
        <div>
            <TextField
                id="search"
                type="search"
                label="Search"
                // value={'search'}
                size={'small'}
                placeholder={'type to search'}
                //onChange={handleChange}
                sx={{ width: 300 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button onClick={()=>setShow()}>
                                <SearchIcon/>
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};

export default SearchBar;