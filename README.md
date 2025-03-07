# dhoscript
Jeg har forsøgt at lave et stykke kode, der giver adgang til DHOs fritekstsøgning i bøger, og som vil kunne sættes ind i de fleste websider og virke derfra.
Der er et input-felt og en søgeknap.

Enten indsætter man følgende JavaScript - typisk lige efter <body> eller lige før </body> (i starten eller slutningen af html-skriptet)
<script src="https://slaegtsbibliotek.dk/dhosscript/dhoscript.js" async></script>
og så vil søgefeltet blive forsøgt vist i bunden af siden, som f.eks. på https://poulsteen.dk/links/

Hvis den, der sætte det ind, vil have mere kontrol over, hvor på web-siden input-feltet vises, skal man placere følgende linje på det sted, hvor man vi have søgefeltet til at være.
Men det kræver naturligvis viden om, hvor man kan sætte et sådant division-element: 
<div id="dhoscript"></div> 
Koden, som bliver kaldt, vil forsøge at placere inputfeltet med tilhørende søgeknap der, hvor dette element findes.

De to kodestumper, hvoraf den ene eller begge skal indsættes på den web-side hvorfra søgefunktionen skal kunne kaldes, findes også i filesn "Dette_skal_indsaettes.html".

God fornøjelse
Poul Steen