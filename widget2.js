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

        // Styles
        const style = document.createElement("style");
        style.textContent = `
            .widget-container {
                all: initial;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px;
                border: 2px solid #4a4a4a;
                border-radius: 8px;
                background: #ffffff;
                max-width: 500px;
                margin: 10px auto;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                font-family: sans-serif;
                pointer-events: auto;
            }
            .widget-input {
                flex: 1;
                padding: 6px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 14px;
            }
            .widget-button {
                padding: 6px;
                border: none;
                border-radius: 4px;
                background: #4a4a4a;
                color: #ffffff;
                cursor: pointer;
            }
            .widget-logo {
                height: 40px;
                flex-shrink: 0;
            }
        `;

        // Elementer
        const container = document.createElement("div");
        container.className = "widget-container";

        const logo = document.createElement("img");
        logo.src = "https://slaegtsbibliotek.dk/dhosoeg/DHO_small.png";
        logo.alt = "Danskernes Historie Online";
        logo.className = "widget-logo";
        logo.onerror = () => {
            console.warn("DHO Widget: Logo kunne ikke indlæses – skjuler billede.");
            logo.style.display = "none";
        };

        const input = document.createElement("input");
        input.type = "text";
        input.id = "dhoscript-input-id";
        input.placeholder = "Fritekstsøgning i millioner af sider";
        input.className = "widget-input";
        input.autocomplete = "off";

        const button = document.createElement("button");
        button.innerText = "Søg";
        button.className = "widget-button";
        button.title = "Søg i Danskernes Historie Online";

        function performSearch() {
            const query = encodeURIComponent(input.value.trim());
            if (query) {
                window.location.href =
                    "https://slaegtsbibliotek.dk/soeg-efter-boeger/fritekst?ss360Query=" + query;
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
