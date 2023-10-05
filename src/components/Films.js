
import { data } from "../data/ListOfFilms";

import { Link } from 'react-router-dom';
import Icon from '@mui/material/Icon';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Film() {
  // const [film, setFilm] = useState([]);
  // const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div>

      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }} className="container" >
          {data.map((film) => (
            <Grid item xs={2} sm={4} md={4} key={film.id}  >
              <Item  >
                <div className="card">
                  <img src={film.image} alt="" />
                  <h3>{film.title}</h3>
                  <p className="title">{film.nation}</p>
                  <Link to={`detail/${film.id}`}>
                    <p><button className="column-button" >Detail </button></p>
                  </Link>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
