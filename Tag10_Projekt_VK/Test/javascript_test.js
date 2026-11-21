/* Java Script */

// ---------- Variablen ----------
// NEU: "let" statt "const", weil sich diese Werte verändern
let x = 0;          // Position links/rechts
let y = 0;          // Position oben/unten
let drehung = 0;    // wie stark der Ball gedreht ist
let offen = false;  // wurde das Papier schon geöffnet?


// ---------- 1. Scrollen: der Ball rollt ----------
function rollen(event) {

  // Wenn das Papier offen ist, bewegt sich nichts mehr
  if (offen) {
    return;
  }

  const ball = document.getElementById("ball");

  // Runter scrollen = nach rechts rollen, hoch scrollen = nach links
  x = x + event.deltaY * 0.5;
  // Seitlich scrollen (Trackpad / Shift + Scrollrad) = hoch/runter
  y = y + event.deltaX * 0.5;
  // Der Ball dreht sich beim Rollen mit
  drehung = drehung + event.deltaY * 0.4;

  // Damit der Ball nicht aus dem Bildschirm rollt
  const grenzeX = window.innerWidth / 2 - 150;
  const grenzeY = window.innerHeight / 2 - 150;

  if (x > grenzeX)  { x = grenzeX; }
  if (x < -grenzeX) { x = -grenzeX; }
  if (y > grenzeY)  { y = grenzeY; }
  if (y < -grenzeY) { y = -grenzeY; }

  ball.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + drehung + "deg)";
}


// ---------- 2. Klick: das Papier entfaltet sich ----------
function entfalten() {

  // Nur einmal ausführen
  if (offen) {
    return;
  }
  offen = true;

  const ball = document.getElementById("ball");
  const papier = document.getElementById("papier");
  const licht = document.getElementById("licht");
  const screen2 = document.getElementById("screen2");
  const knistern = document.getElementById("knistern");

  // Crumbling Sound abspielen
  knistern.play();

  // Ball rollt zurück in die Mitte
  ball.style.transform = "translate(0px, 0px) rotate(0deg)";

  // Papier entfaltet sich (2 Sekunden)
  papier.style.animation = "entfalten 2s ease-in-out forwards";

  // Licht strömt heraus: startet nach 1s, dauert 1.5s
  // -> nach 2.5s ist der Bildschirm komplett weiss
  licht.style.animation = "aufleuchten 1.5s ease-in 1s forwards";

  // 3 Sekunden komplett weiss (2.5s + 3s = 5.5s),
  // danach wird der Second Screen eingeblendet
  screen2.style.animation = "einblenden 1.5s ease-in 5.5s forwards";
}
