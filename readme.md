# Grenspark codebase documentatie

## Inleiding

Dit document is een handleiding dat de codebase van de statische grenspark website uitlegt hoe het in elkaar zit en hoe er eventuele aanpassingen gemaakt kunnen worden. De website is responsive genoeg om op een iPhone 5(S) te werken en op een desktop formaat.

## Hosting

De website wordt op dit moment gehost via de link [grenspark.bommezijn.me](grenspark.bommezijn.me) waar de website ook te bezichtigen is. De website wordt aangeleverd in een zip-bestand en kan uitgepakt worden in de FTP van de host. Zodra deze is uitgepakt staat de website eigenlijk al live.

## Programma's gebruikt voor de website

De website is gemaakt in vanilla code, dit houdt in dat iedereen met kennis van HTML, CSS deze website kan aanpassen tot zijn of haar wensen.

De tools die hiervoor zijn gebruikt:

| Tools  | usecase | link  |
| -------|---|-------|
| Visual Studio Code | code editor  | [VScode](https://code.visualstudio.com/)  |
| GIT    |       Version Control    | [GIT](https://git-scm.com/)               |
| NPM    |     Package manager      | [NPM](https://www.npmjs.com/)             |

GIT wordt gebruikt om versiebeheer toe te passen op het project.

NPM is alleen gebruikt voor de package [live-server](https://www.npmjs.com/package/live-server) om gemakkelijk te herladen zonder opnieuw te starten.

---

## CSS Aanpassingen aanbrengen.

### Kleur
Om kleur aan te passen kan je simpel weg de kleuren aanpassen in de css bestanden. Dit doe je door de variabelen in ```:root``` te wijzigen, wel moet het gewijzigd worden op ***drie*** plekken zodat de kleur aanpassingen zichtbaar zijn in de navigatie, bij de arrangementen en in de content van de website.

```
    --landschap: #88BC6B;
    --cultuur: #fd7e14;
    --vitaliteit: #940094;
```
Hierboven zie je een voorbeeld van de variabelen die aangepast kunnen worden zodat de kleur in de pagina gewijzigd wordt.

De reden dat het in drie plekken gewijzigd zal moeten worden is zodat de kleuren dan nog gelijk aan elkaar blijven.
Ook is de reden hiervoor dat je drie aparte componenten voor de website hebt.

[nav.css](/styles/nav.css) is de stylingsheet voor de navigatie specifiek mocht er visuele aanpassen worden aangemaakt.

[arrangement.css](/styles/arrangement.css) is de stylingsheet voor de arrangementen pagina waar er gekeken kan worden naar de arrangementen per laag.

[index.css](/styles/index.css) is waar het meeste bulk van de styling is geschreven. Hier zal er hoogstwaarschijnlijk de meeste aanpassingen worden gemaakt indien nodig zijn.

De pagina's onder gebieden [voeren](/gebied/voeren.html) & [Eijsden-Margraten](/gebied/eijsden.html) zijn gestyled met een ***drie kolommen grid*** dit houdt in dat de content van de website geplaatst kan worden binnen deze drie kolommen en dit kan aanpassen door in [index.css](/styles/index.css) tussen regels ```386 - 465``` de grid-column aan te passen.

```
.voorbeeld-class{
    grid-column: 1 / span 2;
}
```

de numerieke waardes na grid-column wilt zeggen waar het element begint en waar het element eindigt. in dit geval begint het vanaf de eerste lijn van de grid en eindigt op de laatste lijn.
![alt text](/Documentation/voorbeeld-grid.png "Logo Title Text 1")

Maar let wel op, zodra je naar mobiel gaat zal je erop moeten letten dat de grid in plaatsvan 3 kolommen 4 kolommen zijn. Hou hierom rekening mee en gebruik media queries. (Regel 203)

```
    @media only screen and (max-width: 60em) {
        main>section {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding-top: calc(3em + 2vw);
        }
    }
```

Indien je een klasse hebt aangemaakt zal deze moeten worden toegevoegd aan de desbetreffende doelwit. Dit doe je in de html pagina's.

## HTML Aanpassingen

HTML aanpassingen zijn de aanpassingen in de HTML bestanden, hier zal je de meeste content in willen verwerken zodat dit zichtbaar is in de website.

De [homepagina](/index.html) heet in de folderstructuur `index.html` het is van belang dat deze niet vernoemd wordt anders zal er geen homepagina meer zijn.

Indien er aanpassingen moeten worden gemaakt in de navigatiebalk raad ik dit te doen eerst op de homepagina en vervolgens deze aanpassing te plakken in de overige webpagina's. Zo blijft de navigatiebalk consistent en voorkomt er verwarring bij de bezoeker. Navigatiebalk valt binnen de eerste `header` in de body-tag van de html pagina.

Indien er een pagina in de navigatiebalk toegevoegd moet worden kan dit doormiddel van een referentie toevoegen.

```
<a href="/page/voorbeeldpagina.html">Voorbeeldpagina</a>
```

Het is wel van belang dat deze referentie binnen de `<nav class="topnav" id="myTopNav"></nav>` omdat anders deze niet juist gestyled en geplaatst wordt binnen de navigatiebalk of tussen de dropdown menu's komt te staan.

Mocht er een dropdown-menu moeten worden toegevoegd zal er het volgende element in de navigatiebalk toegevoegd worden:

```
<div class="dropdown right-side">
    <button class="dropdown-button"><img class="flag" src="/images/flag-nl.svg"
            alt="nederlandstalig"></button>
    <div class="dropdown-content">
        <a href=""><img class="flag" src="/images/flag-nl.svg" alt="nederlandstalig"></a>
        <a href=""><img class="flag" src="/images/flag-en.svg" alt="English"></a>
        <a href=""><img class="flag" src="/images/flag-de.svg" alt="Deutsche sprache"></a>
        <a href=""><img class="flag" src="/images/flag-fr.svg" alt="français"></a>
    </div>
</div>
```

Bovenstaand voorbeeld is van de taalvlaggen die aan de rechterkant staan in de navigatiebalk. De klasse `right-side` zorgt ervoor dat deze aan de rechterkant staat.

bij de tweede regel staat er een img-tag binnen een button-tag dit is puur alleen voor de vlag, dit is dus niet verplicht.

Wel is van belang in de `<div class="dropdown-content">` dat er een pad wordt verwezen naar een pagina zoals het volgende voorbeeld: `/page/pagina-voorbeeld.html`. De forward-slash zorgt ervoor dat de browser zoekt op de host vanuit de hoofdfolder naar vervolgens de map `page` en daarin de pagina `pagina-voorbeeld.html`

Dit geldt dus ook als er een pagina wordt aangemaakt en hier naartoe verwezen moet worden, je hebt een verwijzing nodig zoals het voorbeeld om naar een andere pagina te gaan.

```
<a href="/page/voorbeeldpagina.html">Voorbeeldpagina</a>
```

---

### Arrangementen

Om een arrangement aan te passen zal dat op twee plekken moeten. Een plek is om de korte weergave aan te passen en de andere plek is om de informatie kaart aan te passen.

Voorbeeld 1: korte weergave
```
    <div class="card">
        <img src="FOTO-LINK VOOR FOTO WEERGAVE" alt="">
        <p>NAAM VAN ARRANGEMENT</p>
    </div>
```
Voorbeeld 2: informatie kaart
```
    <div class="card card-spacing">
        <h1>NAAM VAN ARRANGEMENT</h1>
        <img src="FOTO-LINK VOOR FOTO WEERGAVE" alt="">
        <p>KORTEBESCHRIJVING ARRANGEMENT</p>
        <a href="WEBSITE_LINK_NAAR_ARRANGEMENT" class="bedrijf-link">Meer informatie over NAAM_ARRANGEMENT</a>
    </div>
```

Zodra deze twee elementen worden toegevoegd op de behorende plek binnen [arrangement.html](/page/arrangement.html) zal er een nieuwe bedrijf worden toegevoegd binnen de laag waar dit is aangepast. De desbetreffende lagen kan je vinden door te zoeken naar het onderstaande.
```
<!-- 
    ========================================
    NAAMVANDELAAG LAAG
    ========================================
-->
```

# Toekomstvisie

Voor de toekomst is het van belang dat er een backend systeem aan wordt gesloten zodat dit te combineren valt met de arrangementen en het bestellen van benoemde arrangementen. Dit kan gedaan worden met systemen zoals nodemailer (node.js package) om e-mails te versturen of node.js MySQL om data op te slaan die de gebruiker invult op de website.

Mocht er een revisie komen van de website raad ik het aan om de website te bouwen in een frameworks/library's zoals [Angularjs](https://angularjs.org/), [React](https://reactjs.org/), [Vue.JS](https://vuejs.org/) of dergelijke. Dit omdat je dan meer controle zal hebben doordat dit in een Model-View-Controller model wordt gebouwd. Hiermee zal je meer controle hebben in de interface van de website maar ook gemakkelijk componenten kunnen maken die beter herbruikbaar zijn dan statische componenten.