// This script is a self-contained widget that can be embedded in a webpage.
// It uses Shadow DOM to encapsulate its styles and functionality, preventing conflicts with the main document.
// The widget includes a logo, an input field for search queries, and a button to perform the search.
// The search redirects to a specific URL (Danskenes Historie Online) with the query parameter included.
// The script also handles cases where the logo fails to load by hiding it.
// The widget is designed to be responsive and works well on various screen sizes.
// It also includes a fallback mechanism to create the widget if the placeholder element is not found.
// The script is structured to ensure that it only runs once, preventing multiple instances from being created.
(function () {
    if (window.dhoscriptWidgetLoaded) return;
    window.dhoscriptWidgetLoaded = true;

    function initWidget(hostElement) {
        console.log("DHO Widget: Initialiseres med Shadow DOM");

        // Beskyt mod dobbelt shadowRoot
        if (hostElement.shadowRoot) {
            console.warn("DHO Widget: Shadow root findes allerede.");
            return;
        }

        const shadowRoot = hostElement.attachShadow({ mode: "open" });
        const openMode = hostElement.getAttribute("data-open") || "newtab";  // default fallback


        // Styles
        const style = document.createElement("style");
        style.textContent = `
            .dho-widget-container {
                all: initial;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px;
                border: 2px solid #4a4a4a;
                border-radius: 8px;
                background: #ffffff;
                max-width: 800px;
                margin: 10px auto;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                font-family: sans-serif;
                pointer-events: auto;
                width: fit-content;
            }
            .dho-widget-input {
                flex: 1;
                padding: 6px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 14px;
                width: 250px;
            }
            .dho-widget-button {
                padding: 6px;
                border: none;
                border-radius: 4px;
                background: #4a4a4a;
                color: #ffffff;
                cursor: pointer;
            }
            .dho-widget-logo {
                height: 40px;
                flex-shrink: 0;
            }
        `;

        // Elementer
        const container = document.createElement("div");
        container.className = "dho-widget-container";

        const logo = document.createElement("img");
        logo.src = "https://slaegtsbibliotek.dk/dhosoeg/DHO_small.png";
        logo.alt = "Danskernes Historie Online";
        logo.className = "dho-widget-logo";
        logo.onerror = () => {
            console.warn("DHO Widget: Logo kunne ikke indlæses – skjuler billede.");
            logo.style.display = "none";
        };

        const input = document.createElement("input");
        input.type = "text";
        input.id = "dhoscript-input-id";
        input.placeholder = "Fritekstsøgning i millioner af sider";
        input.className = "dho-widget-input";
        input.autocomplete = "off";

        const button = document.createElement("button");
        button.innerText = "Søg";
        button.className = "dho-widget-button";
        button.title = "Søg i Danskernes Historie Online";

        function performSearch() {
            const query = encodeURIComponent(input.value.trim());
            if (!query) return;
        
            const url = `https://slaegtsbibliotek.dk/soeg-efter-boeger/fritekst?ss360Query=${query}`;
        
            if (openMode === "samepage") {
                // Default behavior: same tab
                window.location.href = url;
            } else {
                const newTab = window.open(url, "_blank");
                if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
                    // Popup blocked — fallback to same tab
                    window.location.href = url;
                }
            }
        }        

        button.addEventListener("click", performSearch);
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") performSearch();
        });

        container.appendChild(logo);
        container.appendChild(input);
        container.appendChild(button);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(container);
    }

    function waitForPlaceholderAndInit(attempt = 0) {
        const hostElement = document.getElementById("dhoscript-widget");

        if (hostElement) {
            initWidget(hostElement);
        } else if (attempt < 10) {
            setTimeout(() => waitForPlaceholderAndInit(attempt + 1), 100);
        } else {
            console.warn("DHO Widget: Placeholder ikke fundet – opretter fallback nederst på siden.");
            const fallback = document.createElement("div");
            fallback.id = "dhoscript-widget";
            document.body.appendChild(fallback);
            initWidget(fallback);
        }
    }

    if (document.readyState === "complete" || document.readyState === "interactive") {
        waitForPlaceholderAndInit();
    } else {
        document.addEventListener("DOMContentLoaded", waitForPlaceholderAndInit);
    }
})();
// End of widget.js