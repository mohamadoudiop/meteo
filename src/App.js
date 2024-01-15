import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [main, setMain] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [ready, setReady] = useState(false);

  React.useEffect(() => { fetch('https://api.openweathermap.org/data/2.5/weather?lat=14.6937&lon=-17.4441&appid=485eaae13c44dca81805beb5cfe0e7b3&units=metric')
  .then(result => result.json())
  .then(jsonresult => {
  setName(jsonresult.name);
  setTemp(jsonresult.main.temp);
  setMain(jsonresult.weather[0].main);
  setDescription(jsonresult.weather[0].description);
  setIcon(jsonresult.weather[0].icon);
  setSunrise(jsonresult.sys.sunrise);
  setSunset(jsonresult.sys.sunset);
  setLon(jsonresult.coord.lon);
  setLat(jsonresult.coord.lat);
  setReady(true);
  })
  .catch(err => console.error(err))
  }, [])

if (ready) {
    return (
        <div className="App">
            <div style={{ flex: 1 }}>
                <div style={{ width: '100%', fontSize: '2em', height: 50, background: 'Black', color: 'white', marginBottom: '10px' }}>
                    Mon Appli Météo
                </div>
                <table style={{ width: '100%', background: 'SkyBlue', textAlign: 'left', color: 'Black' }}>
                    <tbody>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'left', width: '70%' }}><strong>Région</strong></td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td><strong>Température</strong></td>
                                <td>{temp} °C</td>
                            </tr>
                            <tr>
                                <td><strong>Main</strong></td>
                                <td>{main}</td>
                            </tr>
                            <tr>
                                <td><strong>Description</strong></td>
                                <td>{description}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icône météo" />
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Sunrise</strong></td>
                                <td>{sunrise}</td>
                            </tr>
                            <tr>
                                <td><strong>Sunset</strong></td>
                                <td>{sunset}</td>
                            </tr>
                        </tbody>
                    </tbody>
                </table>
            </div>

            <div style={{ marginLeft: '50px' }}>
                <div style={{ width: '100%', fontSize: '2em', height: 50, background: 'Black', color: 'white', marginBottom: '10px' }}>
                    Coordonnées
                </div>
                <table style={{ textAlign: 'left', border: '1px solid black', width: '300px', color: 'white' }}>
                    <tbody>
                        <tr>
                            <strong>Longitude :</strong>
                            <td style={{ border: '1px solid black' }}>{lon}</td>
                        </tr>
                        <tr>
                        <strong>Latitude :</strong>
                            <td style={{ border: '1px solid black' }}>{lat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    }
    else 
        {
        return <div>Chargement en cours...</div>;
        }
}


export default App;
