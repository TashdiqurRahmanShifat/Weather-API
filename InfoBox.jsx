import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import './InfoBox.css';

function InfoBox({res}){


    let Sunny_URL="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vubnl8ZW58MHx8MHx8fDA%3D";
    let Rainy_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=";
    let Cold_URL="https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
    let IMG_URL="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";


    return(
        <div>
            <div className="cardContent">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                sx={{ height: 200 }}
                image={res.humidity>80?Rainy_URL:(res.temp>20?Sunny_URL:(res.temp<10?Cold_URL:IMG_URL))}
                title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <p>{res.city} &nbsp;
                    {res.humidity>80?<ThunderstormIcon/>:(res.temp>20?<SunnyIcon/>:(res.temp<10?<AcUnitIcon/>:<AirIcon/>))}</p>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                    <p>Temperature<b>: {res.temp}&deg;C</b></p>
                    <p>Minimum Temperature<b>: {res.minTemp}&deg;C</b></p>
                    <p>Maximum Temperature<b>: {res.maxTemp}&deg;C</b></p>
                    <p>Pressure<b>: {res.pressure}atm</b></p>
                    <p>Humidity<b>: {res.humidity}%</b></p>
                    <p>Wind<b>: {res.wind} m/s</b></p>
                    <p>The weather can be described as <b><i>{res.description}</i></b> and feels like <b>{res.feelsLike}&deg;C</b></p>
                </Typography>
                </CardContent>
                </Card>
            </div>
      </div>
    )
}

export default InfoBox;