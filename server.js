// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express, { response } from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs'

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Routes
app.get('/house/:id', async function (request, response) {
    const houseId = request.params.id;
    const housesURL = `https://fdnd-agency.directus.app/items/f_houses/${houseId}`;
    const housesResponse = await fetch(housesURL);
    const housesJSON = await housesResponse.json();
    const house = housesJSON.data;
  
    const likeURL = `https://fdnd.directus.app/items/messages?filter[from][_eq]=renzo`;
    const likesResponse = await fetch(likeURL);
    const likesJSON = await likesResponse.json();
    const likedHouses = likesJSON.data;
  
    response.render('listing.liquid', { house, likedHouses });
  });

// POST

app.post('/house', async (req, res) => {
    // Haalt het 'houseID' op uit het body van de request vanuit een formulier
    const houseID = req.body.houseID;
  
    try {
      // Maakt een POST-verzoek naar de Directus API om een nieuwe like toe te voegen
      const response = await fetch('https://fdnd.directus.app/items/messages', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
          from: 'renzo', // Een afzender met de naam Renzo die de like naar de database post
          id: houseID    // De ID van het huis dat is meegegeven in de request
        })
      });
  
      // Als het verzoek succesvol is, wordt de gebruiker doorgestuurd naar de detailpagina van het huis
      res.redirect(`/house/${houseID}`);
  
    } catch (error) {
      // Als er een fout optreedt, wordt deze gelogd in de console
      console.error("Something went wrong in the page check error:", error);
    }
  });
  


  // DELETE 
  app.post('/house', async (req, res) => {
    const houseID = req.body.houseID;
 
    try {
         // Maakt een DELETE-verzoek naar de Directus API om een nieuwe like te verwijderen
      const response = await fetch('https://fdnd.directus.app/items/messages', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'renzo', // Een afzender met de naam Renzo die de like naar de database verwijdert
          id: houseID
        })
      });
 
      res.redirect(`/house/${houseID}`);
 
    } catch (error) {
      console.error("Something went wrong in the page check error:",error);
    }
  });

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
    console.log(`Project draait via http://localhost:${app.get('port')}/\n\n`)
})
