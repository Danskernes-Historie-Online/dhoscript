# dhoscript - Søgescript til Danskernes Historie Online
Vi har forsøgt at lave et stykke kode, der giver adgang til DHOs fritekstsøgning i DHO's mere end 50.000 bøger, og som vil kunne sættes ind i de fleste websider og virke derfra.
Der er et input-felt og en søgeknap, der sender søgningen til Danskernes Historie Online.
En forudsætning er, at web-sitet understøtter JavaScript.

Man indsætter blot følgende JavaScript - typisk i starten af html-skriptet (gerne lige efter <body>) eller i slutningen (gerne lige før </body>).
NB: Anførselstegnene skal ikke med, kun det, der står inden for dem, så det begynder med <script> og slutter med </script>
    
    `<script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script>`

Så vil søgefeltet blive forsøgt vist i bunden af siden, som det f.eks. kan ses på https://poulsteen.dk/links/ og i bunden nedenfor.

Hvis den, der sætter det ind, vil have mere kontrol over, hvor på web-siden input-feltet vises, kan følgende <div> element placeres på det sted, hvor man vi have søgefeltet til at være.
Men det kræver naturligvis viden om, hvordan man indsætter sådanne division-elementer, og selv for øvede kan det drille.
    
    `<div id="dhoscript-widget"></div>`

Koden, som bliver kaldt, vil forsøge at placere inputfeltet med tilhørende søgeknap der, hvor dette `<div>` element findes.
Hvis de ønskes indsat i midten af et php-script, hvor der forventes php-syntaks, 
skal denne midlertidigt ophæves og aktiveres igen bagefter ved hjælp af elementerne `?>` (slut php) og `<?php` (start php).
Her er et eksempel, hvor man har sat `?>` før og `<?php` efter (igen uden anførselstegn):

    `?><div id="dhoscript-widget"></div><?php`

Der kan være mange grunde til, at browseren ikke vil fortolke dette rigtigt, herunder om det system (Joomla, WordPress, one.com Web-builder m.fl.) overhovedet vil acceptere, at man sætter kode ind i "deres" sider". I disse tilfælde anbefales det at konsultere de pågældende systemers dokumentation.

God fornøjelse!

<script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script>