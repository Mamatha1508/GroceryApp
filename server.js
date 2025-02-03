



import express from 'express'

import cors from 'cors'
const app = express();


import { homePageDataObj } from './src/utils/constants.js';
import { homePageCardsDairy } from './src/utils/homePageCards.js';
import { paanCorner } from './src/utils/homePageCards.js';
import { vegetables } from './src/utils/homePageCards.js';
import { drinks } from './src/utils/homePageCards.js';
import { snacks } from './src/utils/homePageCards.js';
import { breakfast } from './src/utils/homePageCards.js';
import { chocolates } from './src/utils/homePageCards.js';
import { biscuits } from './src/utils/homePageCards.js';
import { tea,rice,oil,sauce,meat, organic,babyCare,pharma,cleanItems,homeItems,personalItems,petCare} from './src/utils/homePageCards.js';



// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes



let  homePagedataStore= homePageDataObj;
let  homePageCardsDataStore= homePageCardsDairy;
let homePageCardsPaanCorner=paanCorner;
let homePageVegetables=vegetables;
let homePageDrinks=drinks;
let homePageSnacks=snacks;
let homePageBreakFast=breakfast;
let homePageChocolates=chocolates;
let homePageBiscuits=biscuits;
let homePageTea=tea;
let homePageRice=rice;
let homePageOil=oil;
let homePageSauce=sauce;
let homePageMeat=meat;
let homePageOrganic=organic;
let homePageBabyCare=babyCare;
let homePagePharma=pharma;
let homePageCleanItems=cleanItems;
let homePageHomeItems=homeItems;
let homePagePersonalItems=personalItems;
let homePagePetCare=petCare;



// Route to get all homepage data
app.get('/homepage/data', (req, res) => {
  res.json(homePagedataStore);
});



// Route t get all itemlist


  app.get('/items/itemlist/9058276', (req, res) => {
    res.json(homePageCardsPaanCorner);
  });

  app.get('/items/itemlist/9058277', (req, res) => {
    res.json(homePageCardsDataStore);
  });

  app.get('/items/itemlist/9058278', (req, res) => {
    res.json(homePageVegetables);
  });

  app.get('/items/itemlist/9058279', (req, res) => {
    res.json(homePageDrinks);
  });

  app.get('/items/itemlist/9058280', (req, res) => {
    res.json(homePageSnacks);
  });
  app.get('/items/itemlist/9058281', (req, res) => {
    res.json(homePageBreakFast);
  });

  app.get('/items/itemlist/9058282', (req, res) => {
    res.json(homePageChocolates);
  });
  app.get('/items/itemlist/9058283', (req, res) => {
    res.json(homePageBiscuits);
  });

  app.get('/items/itemlist/9058284', (req, res) => {
    res.json(homePageTea);
  });
  app.get('/items/itemlist/9058285', (req, res) => {
    res.json(homePageRice);
  });

  app.get('/items/itemlist/9058286', (req, res) => {
    res.json(homePageOil);
  });
  app.get('/items/itemlist/9058287', (req, res) => {
    res.json(homePageSauce);
  });

  app.get('/items/itemlist/9058288', (req, res) => {
    res.json(homePageMeat);
  });
  app.get('/items/itemlist/9058289', (req, res) => {
    res.json(homePageOrganic);
  });

  app.get('/items/itemlist/9058290', (req, res) => {
    res.json(homePageBabyCare);
  });
  app.get('/items/itemlist/9058291', (req, res) => {
    res.json(homePagePharma);
  });

  app.get('/items/itemlist/9058292', (req, res) => {
    res.json(homePageCleanItems);
  });
  app.get('/items/itemlist/9058293', (req, res) => {
    res.json(homePageHomeItems);
  });

  app.get('/items/itemlist/9058294', (req, res) => {
    res.json(homePagePersonalItems);
  });
  app.get('/items/itemlist/9058295', (req, res) => {
    res.json(homePagePetCare);
  });

// Route to add homepage data (POST request) 
app.post('/homepage/data', (req, res) => {
  const newData = req.body; // Extract data sent in the request body
  newData.id = homePagedataStore.length + 1; // Generate a new ID
  homePagedataStore.push(newData); // Add new data to the in-memory store
  res.status(201).json(newData); // Return the added data with a status of 201 (Created)
});



//Route to add homepage cards data (POST Request)
app.post('/items/itemlist/9058277', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageCardsDataStore.length + 1; // Generate a new ID
    homePageCardsDataStore.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });


  app.post('/items/itemlist/9058276', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageCardsPaanCorner.length + 1; // Generate a new ID
    homePageCardsPaanCorner.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });

  app.post('/items/itemlist/9058278', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageVegetables.length + 1; // Generate a new ID
    homePageVegetables.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });

  app.post('/items/itemlist/9058279', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageDrinks.length + 1; // Generate a new ID
    homePageDrinks.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });

  app.post('/items/itemlist/9058280', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageSnacks.length + 1; // Generate a new ID
    homePageSnacks.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });

  app.post('/items/itemlist/9058281', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageBreakFast.length + 1; // Generate a new ID
    homePageBreakFast.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });


  app.post('/items/itemlist/9058282', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageChocolates.length + 1; // Generate a new ID
    homePageChocolates.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });


  app.post('/items/itemlist/9058283', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageBiscuits.length + 1; // Generate a new ID
    homePageBiscuits.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });


  app.post('/items/itemlist/9058284', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageTea.length + 1; // Generate a new ID
    homePageTea.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });


  app.post('/items/itemlist/9058285', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageRice.length + 1; // Generate a new ID
    homePageRice.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058286', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageOil.length + 1; // Generate a new ID
    homePageOil.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058287', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageSauce.length + 1; // Generate a new ID
    homePageSauce.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058288', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageMeat.length + 1; // Generate a new ID
    homePageMeat.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058289', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageOrganic.length + 1; // Generate a new ID
    homePageOrganic.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058290', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageBabyCare.length + 1; // Generate a new ID
    homePageBabyCare.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058291', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePagePharma.length + 1; // Generate a new ID
    homePagePharma.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058292', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageCleanItems.length + 1; // Generate a new ID
    homePageCleanItems.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058293', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePageHomeItems.length + 1; // Generate a new ID
    homePageHomeItems.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058294', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePagePersonalItems.length + 1; // Generate a new ID
    homePagePersonalItems.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  app.post('/items/itemlist/9058295', (req, res) => {
    const newData = req.body; // Extract data sent in the request body
    newData.id = homePagePetCare.length + 1; // Generate a new ID
    homePagePetCare.push(newData); // Add new data to the in-memory store
    res.status(201).json(newData); // Return the added data with a status of 201 (Created)
  });
  





// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
