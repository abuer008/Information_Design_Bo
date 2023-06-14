import {useState} from "react";
// @mui
import {
    Autocomplete,
    Button,
    InputAdornment,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from '@mui/material';
// _mock
// components

// ----------------------------------------------------------------------

type Props = {
    categories: string[] | null;
    onChangeFilterList: (isCategory: boolean) => void;
    onChangeFilter: ( value: string) => void;
};

export default function FilterCategories({ categories, onChangeFilterList, onChangeFilter }: Props) {

    const [isCategory, setIsCategory] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [word, setWord] = useState('');
    const handleListToggle = (
        event: React.MouseEvent<HTMLElement>,
        newValue: string | null,
    ) => {
        setIsCategory(!isCategory);
        onChangeFilterList(!isCategory);
    }

    const handleButtonClick = (event: React.MouseEvent<HTMLElement>, value: string) => {
        onChangeFilter(value);
        setWord(value);
    }

    return (
        <Stack alignItems='end' sx={{
            pt: 10,
            ml: 2,
            width: '250px'
        }} spacing={2}>
            <ToggleButtonGroup
                value={isCategory ? 'Category' : 'Topic'}
                color='primary'
                onChange={handleListToggle}
            >
                <ToggleButton value='Category'>Category</ToggleButton>
                <ToggleButton value='Topic'>Topic</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup
                size='small'
                color='primary'
                orientation='vertical'
                value={word}
                exclusive
                onChange={handleButtonClick}
                sx={{
                    border: 'none',
                    alignItems: 'end',
                }}
            >
            {categories && categories.map((cat, index) => (
                <ToggleButton key={index} size='large' sx={{
                    textAlign: 'right',
                    "&:hover": {
                        backgroundColor: '#fff'
                    },
                    "&.Mui-selected": {
                        backgroundColor: '#fff',
                    },
                    "&.Mui-selected:hover": {
                        backgroundColor: '#fff'
                    }
                }} value={cat} disableRipple>
                    {cat}
                </ToggleButton>
            ))}
            </ToggleButtonGroup>
        </Stack>
        // <Autocomplete
        //     sx={{ width: 1 }}
        //     options={_mock.jobCategories}
        //     getOptionLabel={(option) => option}
        //     value={filterCategories}
        //     onChange={(event, value) => onChangeCategory(value)}
        //     renderInput={(params) => (
        //         <TextField
        //             {...params}
        //             hiddenLabel
        //             variant="filled"
        //             placeholder="Categories"
        //             InputProps={{
        //                 ...params.InputProps,
        //                 autoComplete: 'search',
        //                 startAdornment: (
        //                     <InputAdornment position="start">
        //                         <Iconify
        //                             width={24}
        //                             icon="carbon:inventory-management"
        //                             sx={{ color: 'text.disabled', mr: 1 }}
        //                         />
        //                     </InputAdornment>
        //                 ),
        //                 sx: { pb: 1 },
        //             }}
        //         />
        //     )}
        // />
    );
}
