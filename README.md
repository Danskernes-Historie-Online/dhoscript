# dhoscript - Søgescript til Danskernes Historie Online
Vi har forsøgt at lave et stykke kode, der giver adgang til DHOs fritekstsøgning i DHO's mere end 50.000 bøger, og som vil kunne sættes ind i de fleste websider og virke derfra.
Der er et input-felt og en søgeknap, der sender søgningen til Danskernes Historie Online i et nyt vindue eller nyt faneblad i browseren.
En forudsætning er, at web-sitet understøtter JavaScript.

Man indsætter blot følgende JavaScript:

`<script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script>`

Så vil søgefeltet blive forsøgt vist i bunden af siden, som det f.eks. kan ses på https://poulsteen.dk/links/ og i bunden nedenfor.

Man vil typisk indsætte ovenstående kodelinje enten i starten af html-skriptet (gerne lige efter `<body>`, hvis der er et sådant element) eller i slutningen (gerne lige før `</body>`, hvis dette findes).
Det vigtige er, at det ikke sættes midt i noget andet, som det evt. vil kunne forstyrre. 

Mere behøver man ikke at gøre, for at få det til at virke.

### Ekstra - ikke nødvendigt:
Hvis den, der sætter det ind, vil have mere kontrol over, hvor på web-siden input-feltet vises, kan følgende `<div>` element placeres på det sted, hvor man vi have søgefeltet til at være.
Men det kræver naturligvis viden om, hvordan man indsætter sådanne division-elementer, og selv for øvede kan det drille.

`<div id="dhoscript-widget"></div>`

Koden, som bliver kaldt, vil forsøge at placere inputfeltet med tilhørende søgeknap der, hvor dette `<div>` element findes.
Hvis det ønskes indsat i midten af et php-script, hvor der forventes php-syntaks, 
skal denne php-syntaks midlertidigt ophæves og aktiveres igen bagefter ved hjælp af elementerne `?>` (slut php) og `<?php` (start php).
Her er et eksempel, hvor man har sat `?>` før og `<?php` efter:

`?><div id="dhoscript-widget"></div><?php`

Der kan være mange grunde til, at browseren ikke vil fortolke dette rigtigt, herunder om det system (Joomla, WordPress, one.com Web-builder m.fl.) overhovedet vil acceptere, at man sætter kode ind i "deres" sider". I disse tilfælde anbefales det at konsultere de pågældende systemers dokumentation.

<script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script>

### For specialister:
Hvis du er erfaren med html og web-udvikling, vil du kunne styre, på hvilken måde søgefeltet placeres på din web-side m.m. ved at benytte det viste division-element med `id="dhoscript-widget"`.

Dette element kan, som de fleste andre html elementer, udstyres med parametre, som bestemmer udseende og placering på siden. Du kan også via parametre bestemme, om resultatet fra Danskernes Historie Online skal vises i det samme eller et nyt faneblad eller vindue. 

Som udgangspunkt vises resultatet i et nyt vindue eller faneblad (hvis brugerens indstillinger tillader det). Men hvis du tilføjer parameteren  `data-open="samepage"`, vil det altid blive vist i samme vindue. Hele koden ser sådan ud: `<div id="dhoscript-widget" data-open="samepage"></div>`. 

Du kan også ændre placeringen på siden, f.eks. flytte søgefeltet 2 centimeter til venstre ved at tilføje en `style="margin-left: -2cm;"` parameter, så det ser ud som følger: `<div id="dhoscript-widget" data-open="samepage" style="margin-left: -2cm;"></div>`. Men alt dette er kun for specialister, der ved, hvad de gør, og derfor helt på eget ansvar.

God fornøjelse!