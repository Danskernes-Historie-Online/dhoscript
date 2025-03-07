function initWidget() {
    console.log("Widget initialiseres!");

    if (document.getElementById("slaegtsbibliotek-search-widget")) {
        console.log("Widget eksisterer allerede, stopper initialisering.");
        return;
    }

    // Opret container
    let container = document.createElement("div");
    container.id = "slaegtsbibliotek-search-widget";
    container.style.display = "flex";
    container.style.alignItems = "center"; // Holder elementer på linje
    container.style.gap = "10px"; // Afstand mellem elementer
    container.style.padding = "8px";
    container.style.border = "2px solid #4a4a4a"; // Tydeligere ramme
    container.style.borderRadius = "8px"; // Blødere hjørner
    container.style.background = "#ffffff"; // Ren baggrund
    container.style.maxWidth = "360px"; // Sikrer, at det ikke bliver for bredt
    container.style.margin = "10px auto";
    container.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.1)"; // Let skygge

    // Opret logo
    let logo = document.createElement("img");
    logo.src = "https://slaegtsbibliotek.dk/dhosoeg/DHO_small.png";
    logo.alt = "Slaegtsbibliotek.dk";
    logo.style.height = "30px"; 
    logo.style.flexShrink = "0"; // Sikrer, at logoet ikke krymper

    // Opret inputfelt
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Søg i Slægtsbiblioteket";
    input.style.flex = "1"; // Lader inputfeltet fylde mest
    input.style.padding = "6px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "4px";
    input.style.fontSize = "14px";

    // Opret søgeknap med SVG-lup
    let button = document.createElement("button");
    button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `;
    button.style.padding = "6px";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.background = "#4a4a4a"; // Mørkegrå baggrund
    button.style.color = "#ffffff"; // Hvidt ikon
    button.style.cursor = "pointer";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.width = "36px"; // Firkantet knap
    button.style.height = "36px";

    function performSearch() {
        let query = encodeURIComponent(input.value.trim());
        if (query) {
            let searchURL = "https://slaegtsbibliotek.dk/soeg-efter-boeger/fritekst?ss360Query=" + query;
            
            // Try to open in a new tab
            let newTab = window.open(searchURL, "_blank");
    
            // If popup blocked (newTab is null), fallback to same window
            if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
                window.location.href = searchURL;
            }
        }
    }
    

    button.addEventListener("click", performSearch);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Tilføj elementerne til containeren i korrekt rækkefølge
    container.appendChild(logo);
    container.appendChild(input);
    container.appendChild(button);

    // Tilføj til siden
    let placeholder = document.getElementById("slaegtsbibliotek-widget-placeholder");
    if (placeholder) {
        placeholder.appendChild(container);
        console.log("Widget tilføjet til placeholder");
    } else {
        document.body.appendChild(container);
        console.log("Widget tilføjet til body");
    }
}

// **Eksekver straks, hvis DOM allerede er færdigindlæst**
if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("DOM er allerede klar, initialiserer widget nu.");
    initWidget();
} else {
    console.log("Venter på DOMContentLoaded...");
    document.addEventListener("DOMContentLoaded", initWidget);
}
