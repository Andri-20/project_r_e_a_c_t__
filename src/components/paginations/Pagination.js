import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useState} from "react";

import css from './PAGINATION.module.css'
import {useDispatch} from "react-redux";
import {addPage} from "../../redux";

export default function PaginationControlled() {
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value)
    };

    let dispatch = useDispatch();
    dispatch(addPage(page))

    return (
        <div className={css.pagination_controled}>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination className={css.pagination} count={500} color="primary" size="large" page={page}
                            onChange={handleChange}/>
            </Stack>
        </div>
    );
}
