import { Box, Container, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/selectors';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector(getFilter);

  const handleFilterChange = e => {
    const query = e.target.value;
    dispatch(filterContacts(query));
  };

  return (
    <Box
      sx={{ my: 3, display: 'flex', width: '100%', flexDirection: 'column' }}
    >
      <Stack spacing={1}>
        <Typography color="black" fontSize="lg" fontWeight="xl">
          Search your contacts by name:
        </Typography>

        <Container sx={{ display: 'flex' }}>
          <SearchIcon />
          <input
            type="text"
            defaultValue={filterQuery}
            onChange={handleFilterChange}
            placeholder="Search here..."
          />
        </Container>
      </Stack>
    </Box>
  );
};
