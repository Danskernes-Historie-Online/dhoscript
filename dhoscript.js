function initWidget() {
    console.log("Widget initialiseres!");

    // Prevent duplicate initialization
    if (window.dhoscriptWidgetLoaded) {
        console.log("Widget eksisterer allerede, stopper initialisering.");
        return;
    }
    window.dhoscriptWidgetLoaded = true; // Mark as initialized

    // Opret container til widget
    let container = document.createElement("div");
    container.id = "dhoscript-widget"; // Separate ID for the widget itself
    container.style.display = "flex";
    container.style.alignItems = "center"; // Holder elementer på linje
    container.style.gap = "10px"; // Afstand mellem elementer
    container.style.padding = "8px";
    container.style.border = "2px solid #4a4a4a"; // Tydeligere ramme
    container.style.borderRadius = "8px"; // Blødere hjørner
    container.style.background = "#ffffff"; // Ren baggrund
    container.style.maxWidth = "500px"; // Sikrer, at det ikke bliver for bredt
    container.style.margin = "10px auto";
    container.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.1)"; // Let skygge

    // Opret logo
    let logo = document.createElement("img");
    logo.src = "https://slaegtsbibliotek.dk/dhosoeg/DHO_small.png";
    logo.alt = "Danskernes Historie Online";
    logo.style.height = "30px"; 
    logo.style.flexShrink = "0"; // Sikrer, at logoet ikke krymper

    // Opret inputfelt
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Fritekstsøgning i millioner af sider";
    input.style.flex = "1"; // Lader inputfeltet fylde mest
    input.style.padding = "6px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "4px";
    input.style.fontSize = "14px";

    // Opret søgeknap
    let button = document.createElement("button");
    button.innerText = "Søg";
    button.style.padding = "6px";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.background = "#4a4a4a";
    button.style.color = "#ffffff";
    button.style.cursor = "pointer";

    function performSearch() {
        let query = encodeURIComponent(input.value.trim());
        if (query) {
            window.location.href = "https://slaegtsbibliotek.dk/soeg-efter-boeger/fritekst?ss360Query=" + query;
        }
    }

    button.addEventListener("click", performSearch);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    container.appendChild(logo);
    container.appendChild(input);
    container.appendChild(button);

    // Find placeholder and insert widget
    let placeholder = document.getElementById("dhoscript-widget"); 
    if (placeholder) {
        console.log("✅ Found #dhoscript-widget, inserting widget.");
        placeholder.appendChild(container);
    } else {
        console.warn("⚠️ Placeholder not found, retrying in 100ms...");
        setTimeout(() => {
            let retryPlaceholder = document.getElementById("dhoscript-widget");
            if (retryPlaceholder) {
                console.log("✅ Found placeholder on retry. Inserting now.");
                retryPlaceholder.appendChild(container);
            } else {
                console.warn("❌ Still no placeholder found. Adding to body as fallback.");
                document.body.appendChild(container);
            }
        }, 100);
    }
}

// **Prevent multiple executions**
if (document.readyState === "complete" || document.readyState === "interactive") {
    console.log("DOM er allerede klar, initialiserer widget nu.");
    initWidget();
} else {
    console.log("Venter på DOMContentLoaded...");
    document.addEventListener("DOMContentLoaded", initWidget);
}
