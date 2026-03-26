/**
 * +----------------------------------------------------------------------+
 * ¦                   LABYRINTH — LEVEL DATEI                          ¦
 * ¦  Zeichne deine Level als ASCII-Karte oder nutze den Zufalls-Modus  ¦
 * +----------------------------------------------------------------------+
 *
 * FELDER PRO LEVEL:
 *
 *   name        — Anzeigename des Levels
 *
 *   zoneSpeedMs — Wie schnell die Zone sich ausbreitet (ms pro Schritt)
 *                 800 = sehr langsam  |  400 = mittel  |  100 = brutal
 *
 *   zoneDelayS  — Sekunden Vorsprung bevor die Zone startet
 *                 1 = sofort  |  5 = normal  |  15 = entspannt
 *
 * -- LAYOUT (selbst zeichnen) ------------------------------------------
 *
 *   layout      — Das Labyrinth als Array von Strings (eine Zeile = ein String)
 *
 *   Zeichen:
 *     #   Wand
 *     .   freier Weg      (Leerzeichen funktioniert auch)
 *     S   Startpunkt      (genau 1x!)
 *     G   Ziel            (genau 1x!)
 *
 *   Tipps:
 *   - Rand komplett mit # ummauern
 *   - Es muss einen Weg von S nach G geben
 *   - Beliebige Größe — das Spiel skaliert automatisch
 *   - Alle Zeilen sollten gleich lang sein
 *
 * -- ZUFALLS-LAYOUT ----------------------------------------------------
 *
 *   Wenn du kein layout angibst, wird es zufällig generiert:
 *
 *   size        — Labyrinthgröße (ungerade Zahl, 11–51)
 *   difficulty  — Wanddichte (1 = offen, 20 = eng)
 *   seed        — Zufallsseed (gleiche Zahl = immer gleiche Karte)
 */

const LEVELS = [

  // ----------------------------------------------------------------------
  //  HANDGEZEICHNETE LEVEL
  // ----------------------------------------------------------------------

  {
    name:        "Hallo Welt",
    zoneSpeedMs: 600,
    zoneDelayS:  6,
    layout: [
      "#############",
      "#S..........#",
      "#.#########.#",
      "#.#.......#.#",
      "#.#.#####.#.#",
      "#.#.#...#.#.#",
      "#.#.#.#.#.#.#",
      "#.#.#.#G#.#.#",
      "#.#.#.###.#.#",
      "#.#.#.....#.#",
      "#.#.#######.#",
      "#...........#",
      "#############",
    ],
  },

  {
    name:        "Schlangengang",
    zoneSpeedMs: 500,
    zoneDelayS:  5,
    layout: [
      "###################",
      "#S................#",
      "#.###############.#",
      "#.#...............#",
      "#.#.#############.#",
      "#.#.#.............#",
      "#.#.#.###########.#",
      "#.#.#.#...........#",
      "#.#.#.#.#########.#",
      "#.#.#.#.#.........#",
      "#.#.#.#.#.#######.#",
      "#.#.#.#.#.#.....#.#",
      "#.#.#.#.#.#..G..#.#",
      "#.#.#.#.#.#######.#",
      "#.#.#.#.#.........#",
      "#.#.#.#.###########",
      "#.#.#.#............",
      "#.#.#.#############",
      "#.#.#..............",
      "#.#.###############",
      "#.#................",
      "#.#################",
      "#..................",
      "###################",
    ],
  },

  {
    name:        "Das Kreuz",
    zoneSpeedMs: 450,
    zoneDelayS:  5,
    layout: [
      "#####S#####",
      "#....#....#",
      "#.##...##.#",
      "#.#.....#.#",
      "#...###...#",
      "##.#...#.##",
      "#...###...#",
      "#.#.....#.#",
      "#.##...##.#",
      "#....#....#",
      "#####G#####",
    ],
  },

  {
    name:        "Vier Zimmer",
    zoneSpeedMs: 400,
    zoneDelayS:  5,
    layout: [
      "#####################",
      "#S...#.....#.......#",
      "#....#.....#.......#",
      "#....#.....#.......#",
      "#....#.....#.......#",
      "######.####.########",
      "#.......#.#.......G#",
      "#.......#.#........#",
      "#.......#.#........#",
      "#.......#.#........#",
      "#####################",
    ],
  },

  {
    name:        "Spirale",
    zoneSpeedMs: 350,
    zoneDelayS:  4,
    layout: [
      "###################",
      "#S................#",
      "#.###############.#",
      "#.#...............#",
      "#.#.#############.#",
      "#.#.#...........#.#",
      "#.#.#.#########.#.#",
      "#.#.#.#.......#.#.#",
      "#.#.#.#.#####.#.#.#",
      "#.#.#.#.#...#.#.#.#",
      "#.#.#.#.#.G.#.#.#.#",
      "#.#.#.#.#####.#.#.#",
      "#.#.#.#.......#.#.#",
      "#.#.#.#########.#.#",
      "#.#.#...........#.#",
      "#.#.#############.#",
      "#.#...............#",
      "#.###############.#",
      "#.................#",
      "###################",
    ],
  },

  // ----------------------------------------------------------------------
  //  ZUFALLS-LEVEL  (kein layout-Feld ? wird automatisch generiert)
  // ----------------------------------------------------------------------

  {
    name:        "Chaos I",
    size:        19,
    difficulty:  12,
    zoneSpeedMs: 320,
    zoneDelayS:  4,
    seed:        9001,
  },

  {
    name:        "Chaos II",
    size:        25,
    difficulty:  15,
    zoneSpeedMs: 260,
    zoneDelayS:  3,
    seed:        9002,
  },

  {
    name:        "Großes Labyrinth",
    size:        33,
    difficulty:  16,
    zoneSpeedMs: 200,
    zoneDelayS:  3,
    seed:        9003,
  },

  {
    name:        "Alptraum",
    size:        41,
    difficulty:  18,
    zoneSpeedMs: 130,
    zoneDelayS:  2,
    seed:        9004,
  },

  {
    name:        "Das Ende",
    size:        49,
    difficulty:  20,
    zoneSpeedMs: 80,
    zoneDelayS:  2,
    seed:        9005,
  },

];

// -- WICHTIG: Diese Zeile nicht löschen! ----------------------------------
if (typeof window !== 'undefined') window.LABYRINTH_LEVELS = LEVELS;