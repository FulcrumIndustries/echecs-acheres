/**
 * Build games.js from games.pgn.
 * Usage: node scripts/build-games.mjs
 *
 * Add new games by appending a full PGN block to games.pgn, then re-run.
 * Optional nicknames: edit SHORT_BY_KEY below.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const pgnPath = path.join(root, "games.pgn");
const outPath = path.join(root, "games.js");

/** Optional short labels keyed by "White|Black|YYYY" or id slug */
const SHORT_BY_KEY = {
  "Paul Morphy|Duke of Brunswick / Count Isouard|1858": "L'Opéra",
  "Edwin Ziegler Adams|Carlos Torre Repetto|1920": "Le Moulin",
  "Michael Adams|Garry Kasparov|2005": "Linares 2005",
  "Alexander Alekhine|Richard Reti|1922": "Alekhine–Réti",
  "Viswanathan Anand|Veselin Topalov|2005": "Mtel 2005",
  "Adolf Anderssen|Jean Dufresne|1852": "L'Éternelle",
  "Adolf Anderssen|Kieseritzky|1851": "L'Immortelle",
  "Suat Atalik|Gyula Sax|1997": "Atalik–Sax",
  "Henry Edward Bird|Paul Morphy|1858": "Bird–Morphy",
  "Efim Bogoljubov|Alexander Alekhine|1922": "Hastings 1922",
  "Donald Byrne|Robert James Fischer|1956": "Partie du siècle",
  "Robert Eugene Byrne|Robert James Fischer|1963": "Byrne–Fischer",
  "Jose Raul Capablanca|Jaime Baca Arus|1912": "Capablanca",
  "Magnus Carlsen|Sipke Ernst|2004": "Carlsen–Ernst",
  "Rudolf Rezso Charousek|Jakob Wollner|1893": "Charousek",
  "Chris De Ronde|Hendrik Hermanus Kamstra|1938": "De Ronde",
  "Edward Lasker|George Alan Thomas|1912": "Lasker–Thomas",
  "Yakov Estrin|Hans Berliner|1965": "Estrin–Berliner",
  "Glucksberg|Miguel Najdorf|1929": "Partie polonaise",
  "Carl Hamppe|Philipp Meitner|1872": "Nulle immortelle",
  "F Alexander Hoffmann|Alexander Petrov|1844": "Hoffmann–Petrov",
  "Vassily Ivanchuk|Alexey Shirov|1996": "Ivanchuk–Shirov",
  "Vassily Ivanchuk|Artur Yusupov|1991": "Ivanchuk–Yusupov",
  "Baadur Jobava|Evgeny Bareev|2003": "Jobava–Bareev",
  "Gata Kamsky|Vladimir Kramnik|1994": "Kamsky–Kramnik",
  "Sergey Karjakin|Viswanathan Anand|2006": "Karjakin–Anand",
  "Anatoly Karpov|Garry Kasparov|1985": "La Pieuvre",
  "Anatoly Karpov|Wolfgang Unzicker|1974": "Karpov–Unzicker",
  "Garry Kasparov|Vladimir Kramnik|1996": "Kasparov–Kramnik",
  "Garry Kasparov|Veselin Topalov|1999": "Wijk aan Zee",
  "Andrei Kharlov|Veselin Topalov|2004": "Kharlov–Topalov",
  "Efim Korchmar|Abram Borisovich Poliak|1931": "Korchmar–Poliak",
  "Zdenko Kozul|Sergei Rublevsky|2004": "Kozul–Rublevsky",
  "Vladimir Kramnik|Viswanathan Anand|2004": "Kramnik–Anand",
  "Konstantin Landa|Evgeny Shaposhnikov|2005": "Landa–Shaposhnikov",
  "Bent Larsen|Boris Spassky|1970": "Larsen–Spassky",
  "Stefan Levitsky|Frank James Marshall|1912": "Le Coup d'or",
  "Liu Wenzhe|Jan Hein Donner|1978": "Liu–Donner",
  "Geza Maroczy|Mikhail Chigorin|1903": "Maroczy–Chigorin",
  "Nezhmetdinov|Oleg L Chernikov|1962": "Nezhmetdinov",
  "Aron Nimzowitsch|Systemsson|1927": "Surprotection",
  "NN|David Bronstein|1961": "Rêve de Bronstein",
  "Per Ofstad|Wolfgang Uhlmann|1963": "Ofstad–Uhlmann",
  "Lembit Oll|Mikhail Ulibin|1989": "Oll–Ulibin",
  "Harry Nelson Pillsbury|Emanuel Lasker|1896": "Pillsbury–Lasker",
  "Lev Polugaevsky|Nezhmetdinov|1958": "Polu–Nezh",
  "J Reinisch|Karel Traxler|1890": "Traxler",
  "Richard Reti|Alexander Alekhine|1925": "Réti–Alekhine",
  "Georg Rotlewi|Akiba Rubinstein|1907": "Rubinstein",
  "Friedrich Saemisch|Aron Nimzowitsch|1923": "Zugzwang",
  "Grigory Serper|Ioannis Nikolaidis|1993": "Serper",
  "Alexey Shirov|Judit Polgar|1994": "Shirov–Polgar",
  "Bogdan Sliwa|David Bronstein|1957": "Sliwa–Bronstein",
  "Boris Spassky|David Bronstein|1960": "Spassky–Bronstein",
  "Robert Steel|NN|1886": "Steel–NN",
  "Wilhelm Steinitz|Curt von Bardeleben|1895": "Steinitz",
  "Mir Sultan Khan|Jose Raul Capablanca|1930": "Sultan Khan",
  "Mikhail Tal|Bent Larsen|1965": "Tal–Larsen",
  "Veselin Topalov|Levon Aronian|2006": "Topalov–Aronian",
  "Veselin Topalov|Alexey Shirov|1998": "Shirov Bh3",
  "Heinrich Wagner|Wilhelm Schoenmann|1919": "Wagner",
  "Johannes Zukertort|Joseph Henry Blackburne|1883": "Zukertort",
};

function stripNoise(moves) {
  let s = moves;
  // Remove brace comments
  while (/{[^}]*}/.test(s)) s = s.replace(/{[^{}]*}/g, " ");
  // Remove ; line comments (rare in our dump)
  s = s.replace(/;[^\n]*/g, " ");
  // Remove NAGs $1, $3, etc.
  s = s.replace(/\$\d+/g, " ");
  // Remove nested variations (...)
  let prev;
  do {
    prev = s;
    s = s.replace(/\([^()]*\)/g, " ");
  } while (s !== prev);
  // Collapse whitespace, keep result at end
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

function parseHeaders(block) {
  const headers = {};
  const re = /\[(\w+)\s+"([^"]*)"\]/g;
  let m;
  while ((m = re.exec(block))) headers[m[1]] = m[2];
  return headers;
}

function yearOf(date) {
  if (!date || date === "?") return "";
  const y = date.slice(0, 4);
  return /^\d{4}$/.test(y) ? y : "";
}

function placeOf(h) {
  const site = (h.Site || h.Event || "").replace(/\s+/g, " ").trim();
  const year = yearOf(h.Date) || yearOf(h.EventDate);
  // Prefer a readable place: strip redundant country codes noise lightly
  let place = site
    .replace(/\b(USA|ESP|NED|BUL|GER|AUT|GRE|YUG|SRB|DEU|RUS|ARG|ENG|FRA|DEN|OL)\b/g, "")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/[,\s]+$/g, "")
    .replace(/^[,\s]+|[,\s]+$/g, "")
    .trim();
  if (!place || place === "?" || place === "-") place = (h.Event || "").trim();
  if (year) return place ? `${place}, ${year}` : year;
  return place || "—";
}

function resultText(h) {
  const r = h.Result || "*";
  const ply = parseInt(h.PlyCount || h.MovePly || "", 10);
  const move = Number.isFinite(ply) ? Math.ceil(ply / 2) : null;
  const at = move ? ` au ${move}e coup` : "";
  if (r === "1-0") return `Les Blancs gagnent${at}.`;
  if (r === "0-1") return `Les Noirs gagnent${at}.`;
  if (r === "1/2-1/2") return `Partie nulle${at ? ` (${move} coups)` : ""}.`;
  return "Résultat inconnu.";
}

function slugify(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function shortName(h, key) {
  if (SHORT_BY_KEY[key]) return SHORT_BY_KEY[key];
  const w = (h.White || "?").split(" ").pop();
  const b = (h.Black || "?").split(" ").pop();
  return `${w}–${b}`;
}

const TITLE_OVERRIDE = {
  "Paul Morphy|Duke of Brunswick / Count Isouard|1858":
    "Morphy – Duc de Brunswick et comte Isouard",
};

function titleOf(h, key) {
  if (TITLE_OVERRIDE[key]) return TITLE_OVERRIDE[key];
  return `${h.White || "?"} – ${h.Black || "?"}`;
}

function parseGames(text) {
  // Split on blank line before [Event, keep Opera etc.
  const chunks = text
    .replace(/\r\n/g, "\n")
    .replace(/\u001a/g, "") // DOS EOF
    .split(/\n(?=\[Event\s)/)
    .map((c) => c.trim())
    .filter((c) => c.startsWith("[Event"));

  const games = [];
  const usedIds = new Set();

  for (const block of chunks) {
    const headers = parseHeaders(block);
    const moveStart = block.search(/\n\s*\n\s*1\./);
    let movesRaw = moveStart >= 0 ? block.slice(moveStart) : block.replace(/\[[^\]]*\]/g, " ");
    // Also handle moves starting right after headers without blank line
    if (!/\d+\./.test(movesRaw)) {
      const idx = block.search(/\d+\.\s/);
      movesRaw = idx >= 0 ? block.slice(idx) : "";
    }
    const pgn = stripNoise(movesRaw);
    if (!pgn || !/\d+\./.test(pgn)) continue;

    const year = yearOf(headers.Date) || yearOf(headers.EventDate) || "xxxx";
    const key = `${headers.White}|${headers.Black}|${year}`;
    let id = slugify(`${headers.White}-${headers.Black}-${year}`);
    if (usedIds.has(id)) id = slugify(`${id}-${headers.Event || games.length}`);
    usedIds.add(id);

    games.push({
      id,
      short: shortName(headers, key),
      title: titleOf(headers, key),
      place: placeOf(headers),
      result: resultText(headers),
      pgn,
    });
  }
  return games;
}

const pgn = fs.readFileSync(pgnPath, "utf8");
const games = parseGames(pgn);

const body = games
  .map((g) => {
    const esc = (s) =>
      JSON.stringify(s)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
    return `  {
    id: ${esc(g.id)},
    short: ${esc(g.short)},
    title: ${esc(g.title)},
    place: ${esc(g.place)},
    result: ${esc(g.result)},
    pgn: ${esc(g.pgn)}
  }`;
  })
  .join(",\n");

const out = `/* ============================================================
   Parties — Club d'échecs d'Achères
   ------------------------------------------------------------
   Source éditable : games.pgn
   Régénérer avec : node scripts/build-games.mjs
   Ou ajouter une entrée ici directement (id, short, title, place, result, pgn).
   ============================================================ */
window.GAMES = [
${body}
];
`;

fs.writeFileSync(outPath, out, "utf8");
console.log(`Wrote ${games.length} games → games.js`);
