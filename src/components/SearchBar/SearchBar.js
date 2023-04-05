import React from 'react';
import { InputAdornment, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { closeMenu, showHideItem } from '../../store/appearance';

const SearchBar = () => {
    const dispatch = useDispatch();
    const openSearch = () => {
        dispatch(closeMenu());
        dispatch(showHideItem());
    }
    return (
        <div className={'search_wrapper'}>
            <TextField
                id="search"
                type="search"
                label="Search"
                size={'small'}
                placeholder={'type to search'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Button onClick={openSearch}>
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