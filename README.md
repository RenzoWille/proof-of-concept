
# Funda Listing Page
Voor dit project kregen we de opdracht een listing pagina na te bouwen van het nieuwe design voor Funda, met foto's en beschrijvingen uit de database, pleasurable interacties en de mogelijkheid om een huis te liken.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Voor dit project is er een listing pagina na gebouwd en de mogelijkheid gegeven om een like achter te laten voor een specifiek huis. Ook zijn er wat pleasurable interacties ingebouwd om de gebruikservaring zo positief mogelijk te maken.

<img width="333" alt="Scherm­afbeelding 2025-06-19 om 12 32 17" src="https://github.com/user-attachments/assets/39473345-5a3f-44b9-a8cb-07e58242ecfc" />

https://proof-of-concept-jgjb.onrender.com/house/20


## Gebruik

### User Story
Als gebruiker van de website wil ik zo veel mogelijk informatie op doen over het specifieke huis. Ook wil ik het huis waarin ik geïnteresseerd ben kunnen favorieten. Daarnaast wil ik een duidelijke en gebruiksvriendelijk menu waarin duidelijk is waar ik heen kan navigeren.

### Hoe het werkt
De website kan op verschillende manieren bestuurd worden. Zo kunnen gebruikers door de website heen tabben, en natuurlijk besturen met de muis. De gebruiker kan een specifieke listing favorieten, en dat zal een leuke interactie laten zien. Deze like wordt doorgestuurd naar de database, zodat deze wordt opgeslagen.

## Kenmerken

### Technieken
De technieken die zijn gebruikt zijn progressive enhanced werken, het werken met een server, het ophalen van data met JSON en het POSTen van een like naar de database.

### HTML
Er is gebruik gemaakt van nesting in de HTML, met genoeg witruimte en ademruimte zodat het overzichtelijk blijft. Ook zijn er comments geplaatst zodat de code voor iedereen duidelijk is en wat er is bedoeld tijdens het bouwen van dit project.

### CSS 
Ook in de CSS is er gebruik gemaakt van nesting, met genoeg wit- en ademruimte, en comments. Dit zorgt ervoor dat ook de CSS zo duidelijk mogelijk is beschreven zodat zo veel mogelijk mensen begrijpen wat er gebeurd.

De belangrijkste dingen in CSS zijn de @keyframes die zijn gebruikt voor de animatie op de like button, en de transition-delays voor de pleasurable hamburger menu.

Keyframes bouncy like button
https://github.com/RenzoWille/proof-of-concept/blob/7d6aef7c60b845d34a7b2114c62ba497db4ba488/public/listing.css#L44-L50

Transition delays voor het slide effect in hamburger menu
https://github.com/RenzoWille/proof-of-concept/blob/7d6aef7c60b845d34a7b2114c62ba497db4ba488/public/header.css#L61-L63

### JavaScript

### Client-side
JavaScript is gebruikt om de interacties zo pleasurable mogelijk te maken, bijvoorbeeld het bouncy effect op de like button. De JavaScript zorgt ervoor dat er een extra class wordt getoggled als er op de SVG wordt geklikt, dan zet het script het bluncy effect in werking.

https://github.com/RenzoWille/proof-of-concept/blob/7d6aef7c60b845d34a7b2114c62ba497db4ba488/views/listing.liquid#L254-L267

### Server-side
JavaScript is ook gebruikt om de server op te stellen, zo is er een route naar de pagina gebouwd met een link die de data ophaalt. Ook kan via de server een like gePOST worden, dat is ook met JavaScript gedaan.

Route
https://github.com/RenzoWille/proof-of-concept/blob/7d6aef7c60b845d34a7b2114c62ba497db4ba488/server.js#L26-L40

POST
https://github.com/RenzoWille/proof-of-concept/blob/7d6aef7c60b845d34a7b2114c62ba497db4ba488/server.js#L42-L68

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->

Volg deze stappen om het project lokaal te draaien:

### Clone de repository

Open je terminal en voer het volgende commando uit:

```bash
git clone https://github.com/RenzoWille/proof-of-concept.git
cd proof-of-concept

```

### Installeer de afhankelijkheden

Installeer alle benodigde packages met:

```bash
npm install
```

### Start de applicatie

```bash
npm start
```

### Open in je browser

Ga in je browser naar:

```bash
http://localhost:8000
```

Nu draait je project lokaal.

## Bronnen



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
