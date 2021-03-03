const $ = id => { return document.getElementById(id) };

let possibleTabs = ["main", "info", "store"];
let possibleTabIds = {"main": "sectionLeft", "info": "sectionMiddle", "store": "sectionRight"};
let activeTab = "main";

let currentTimer = null;

const GameClickUnRestricted = () => {
    var now = Date.now();

    if (now - Game.lastClick < 1000 / 15) {
        Game.autoclickerDetected += Game.fps;
        if (Game.autoclickerDetected >= Game.fps * 5) Game.Win('Uncanny clicker');
    }
    Game.loseShimmeringVeil('click');
    var amount = amount ? amount : Game.computedMouseCps;
    Game.Earn(amount);
    Game.handmadeCookies += amount;
    if (Game.prefs.particles) {
        Game.particleAdd();
        Game.particleAdd(Game.mouseX, Game.mouseY, Math.random() * 4 - 2, Math.random() * -2 - 2, Math.random() * 0.5 + 0.75, 1, 2);
    }
    if (Game.prefs.numbers) Game.particleAdd(Game.mouseX + Math.random() * 8 - 4, Game.mouseY - 8 + Math.random() * 8 - 4, 0, -2, 1, 4, 2, '', '+' + Beautify(amount, 1));

    Game.runModHook('click');

    Game.playCookieClickSound();
    Game.cookieClicks++;

    Game.lastClick = now;
    Game.Click = 0;
}

const toggleAuto = () => {
    if (currentTimer == null) {
        currentTimer = setInterval(() => {
            for (let i = 0; i < 10; i++) {
                GameClickUnRestricted();
            }
        }, 1000);
    } else {
        clearInterval(currentTimer);
        currentTimer = null;
    }
}

const mainExtraInit = () => {
    /*
    $("page-tabs__tab_main").addEventListener("click", () => {
        handleTabSwitch("main");
    });

    $("page-tabs__tab_info").addEventListener("click", () => {
        handleTabSwitch("info");
    });

    $("page-tabs__tab_store").addEventListener("click", () => {
        handleTabSwitch("store");
    });
    */

    // DEBUG: Display store first
    handleTabSwitch("main");

    // DEBUG: Test Game.touchEvents
    Game.touchEvents = 1;
}

const handleTabSwitch = tab => {
    if (tab != activeTab) {
        // Firstly make the target tab visible
        $(possibleTabIds[tab]).classList.add("section--visibility-visible");
        $(possibleTabIds[tab]).classList.remove("section--visibility-hidden");

        // Make the remaining tabs invisible
        let remainingTabs = [...possibleTabs].filter(t => t != tab);
        remainingTabs.forEach(tab => {
            $(possibleTabIds[tab]).classList.remove("section--visibility-visible");
            $(possibleTabIds[tab]).classList.add("section--visibility-hidden");
        });
        activeTab = tab;
    }
}