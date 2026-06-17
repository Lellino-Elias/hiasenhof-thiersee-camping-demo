import type { CampsiteConfig } from "../types";

const IMG = "/campsites/hiasenhof-thiersee";

const hiasenhofThiersee: CampsiteConfig = {
  name: "Hiasen Hof",
  shortName: "Hiasenhof",
  slug: "hiasenhof-thiersee",
  ort: "Vorderthiersee",
  region: "Tirol",
  brandKind: "Seecamping am Thiersee",
  see: "Thiersee",
  regionLong: "Thierseetal · Tirol · Österreich",

  heroVariant: "center",

  claim: "Camping mitten im Thierseetal, direkt am See",
  claimEmphasis: "direkt am See",
  emailDetail: "eure Lage direkt am Thiersee mit eigenem Seezugang",
  intro:
    "Eingebettet in grüne Wiesen und Wälder, direkt am glasklaren Thiersee: Bei Familie Kaindl findest du deinen Stellplatz mitten in den Tiroler Bergen — ganzjährig geöffnet.",

  logo: { src: `${IMG}/logo-d59cfdea2c.png`, alt: "Hiasen Hof – Camping am Thiersee Logo" },

  statement: {
    text: "Direkt hinter deinem Vorzelt beginnt der Thiersee — mit eigenem Seezugang und Liegewiese am Wasser.",
    emphasis: "der Thiersee",
  },

  pillars: [
    {
      title: "Direkt am Badesee",
      text: "Eigener Zugang zum Thiersee mit Liegewiese am Wasser — Baden beginnt direkt am Platz.",
      image: { src: `${IMG}/hero-3bae71a9b9.webp`, alt: "Der Thiersee mit Blühwiese am Ufer" },
    },
    {
      title: "Stellplätze im Grünen",
      text: "Eingebettet in grüne Wiesen und Wälder findest du ebene Plätze mit Strom und kurzen Wegen.",
      image: { src: `${IMG}/hero-f040425333.webp`, alt: "Wohnmobil und Wohnwagen auf der Wiese am Hiasen Hof" },
    },
    {
      title: "Aktiv am Wasser",
      text: "Baden am hauseigenen Strand, Tretboot und SUP, dazu Radeln und Wandern in den Bergen.",
      image: { src: `${IMG}/hero-24c932720f.webp`, alt: "Stand-up-Paddeln auf dem Thiersee" },
    },
  ],

  usps: [
    "Eigener Seezugang",
    "Ganzjährig geöffnet",
    "Stellplätze mit Strom",
    "Spielplatz für Kinder",
    "Hunde willkommen",
    "Kantine am Platz",
  ],

  trust: {
    heading: "Tiroler Natur, direkt vor dem Vorzelt",
    headingEmphasis: "direkt vor dem Vorzelt",
    intro:
      "Glasklares Wasser, grüne Wiesen und ein eigener Seezugang — den Hiasen Hof führt Familie Kaindl persönlich, ganzjährig geöffnet und mit allem, was entspanntes Camping braucht.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-2fa1734570.webp`, alt: "Luftaufnahme: Hiasen Hof am Thiersee in Tirol" },
  },

  breather: {
    image: { src: `${IMG}/hero-8e50ff9578.webp`, alt: "Der Thiersee im Thierseetal, umrahmt von Bergen" },
    line: "Glasklares Wasser, umrahmt von den Tiroler Bergen.",
  },

  // Kein eigenes Foto von Sanitär/Kantine/Spielplatz in der Library — die Camping-Sektion
  // blendet sich ehrlich aus (leere features), statt mit einem unpassenden Bild zu lügen.
  camping: {
    heading: "Camping am Hiasen Hof",
    intro:
      "Sanitäranlagen, Waschmaschine und Trockner, Stromanschlüsse, Kantine und ein Spielplatz für die Kinder — alles direkt am Platz.",
    features: [],
  },

  anreise: {
    heading: "Der Weg ins Thierseetal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A12 Inntalautobahn bis Ausfahrt Kufstein Nord, dann der Beschilderung nach Thiersee folgen.",
      },
      {
        title: "Aus Bayern",
        text: "Über Bayrischzell auf die B307 und die Tiroler Straße rund 11 km nach Vorderthiersee.",
      },
      {
        title: "Bahn & Flug",
        text: "Nächster Bahnhof Kufstein, Flughafen München rund 1,5 Stunden entfernt.",
      },
    ],
  },

  // Weniger als 4 eigene Galerie-taugliche Fotos vorhanden → Galerie blendet sich aus.
  galerie: {
    heading: "Eindrücke vom Thiersee",
    headingEmphasis: "Thiersee",
    intro: "Ein paar Aufnahmen vom Platz und vom See.",
    tag: "Ganzjährig",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Thiersee",
    headingEmphasis: "am Thiersee",
    intro: "Sag uns Zeitraum und Personen — Familie Kaindl meldet sich persönlich per E-Mail mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Erwachsene inkl. Stellplatz & Umweltgebühr — zzgl. Strom € 4 (pauschal) und Kurtaxe € 3,50 pro Erwachsenem. Kinder 5–14 J. € 4,50, unter 5 J. frei (Stand 2025).",
    highlight: {
      title: "Direkt am Thiersee",
      text: "Eigener Seezugang mit Liegewiese — der Badesee beginnt am Platz.",
    },
    categories: [
      { id: "wohnmobil", label: "Wohnmobil & Wohnwagen", perNight: 25.5, perExtraGuest: 7.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 21, perExtraGuest: 7.5 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 5376 / 5252",
    telHref: "tel:+4353765252",
    mail: "info@hiasenhof-thiersee.at",
    facebook: "https://www.facebook.com/hiasenhof",
    adresse: "Seebauern 2 · 6335 Vorderthiersee · Tirol",
    coords: { lat: 47.588598, lng: 12.116311 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Der Platz", href: "#top" },
    { label: "Lage & Anreise", href: "#anreise" },
    { label: "Preise", href: "#booking" },
  ],
};

export default hiasenhofThiersee;
