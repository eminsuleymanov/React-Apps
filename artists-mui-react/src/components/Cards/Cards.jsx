import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Cards = ({ data }) => {
    return (
        <>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    {data && data.map((artist, idx) => {
                        return <Card sx={{ maxWidth: 345 }} key={idx}>
                            <CardMedia
                                component="img"
                                alt={artist.name}
                                height="200"
                                image={artist.imgSrc}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {artist.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {artist.info}
                                    
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Age: {artist.age}
                                    
                                </Typography>
                                <Typography variant="body3" color="text.primary">
                                    Age: {artist.age}
                                    Genre: {artist.genre}
                                   
                                </Typography>
                                <Typography variant="body4"  color="text.primary">
                                    Age: {artist.age}
                                    Genre: {artist.genre}
                                    Songs: {artist.songs.length}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add</Button>
                                <Button size="small">Delete</Button>
                            </CardActions>
                        </Card>

                    })}

                </Grid>

            </Grid>


        </>
    )
}

export default Cards