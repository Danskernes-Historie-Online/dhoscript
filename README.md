# dhoscript Søgescript til Danskernes Historie Online
Vi har forsøgt at lave et stykke kode, der giver adgang til DHOs fritekstsøgning i bøger, og som vil kunne sættes ind i de fleste websider og virke derfra.
Der er et input-felt og en søgeknap, der sender søgningen til Danskernes Historie Online
Kravet er, at web-sitet understøtter JavaScript.

Man indsætter blot følgende JavaScript - typisk lige efter <body> eller lige før </body> (i starten eller slutningen af html-skriptet)
# <script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script>
Så vil søgefeltet blive forsøgt vist i bunden af siden, som det f.eks. kan ses på https://poulsteen.dk/links/

Hvis den, der sætter det ind, vil have mere kontrol over, hvor på web-siden input-feltet vises, skal følgende linje placeres på det sted, hvor man vi have søgefeltet til at være.
Men det kræver naturligvis viden om, hvor man kan sætte et sådant division-element, og selv da kan det drille.
# <div id="dhoscript-widget">
Koden, som bliver kaldt, vil forsøge at placere inputfeltet med tilhørende søgeknap der, hvor dette <div> element findes.
Der kan være mange grunde til, at browseren ikke vil fortolke dette rigtigt. I så fald anbefales det at nøjes med placeringen i bunden.

De to kodefiler nedenfor indeholder den eller de linjer, der skal indsættes på den web-side hvorfra søgefunktionen skal kunne kaldes.
    1. "Placering i bunden.html". (Simpel placering, een kodelinje)
    2. "Tilpasset placering.html". (Tilpasset placering, to kodelinjer)

NB: Begge disse linjer er i html syntaks.
-----------------------------------------
Hvis de ønskes indsat i midten af et php-script, hvor der forventes php-syntaks, 
skal denne midlertidigt ophæves og aktiveres igen bagefter ved hjælp af elementerne "?>" (slut php) og "<?php" (start php).
Det kan f.eks. se ud som følger_
# ?><script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script><?php

God fornøjelse!