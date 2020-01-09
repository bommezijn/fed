# Grenspark codebase documentatie

## Inleiding

Dit document is een handleiding dat de codebase van de grenspark website uitlegt hoe het in elkaar zit en hoe er eventuele aanpassingen gemaakt kunnen worden. De website is responsive genoeg om op een iPhone 5(S) te werken en op een desktop formaat.

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



De handleiding moet eigenlijk duidelijk maken hoe de website werkt. Dus hoe zit het in elkaar, met welk programma heb je gewerkt etc. Daarbij is het belangrijk dat onze opdrachtgever weet hoe hij de website kan aanpassen. Dus hoe veranderd hij de indeling van de pagina's, hoe kan hij teksten toevoegen etc. In principe dus gewoon een uitleg voor iemand die nog niet helemaal wegwijs is met het maken van een website.