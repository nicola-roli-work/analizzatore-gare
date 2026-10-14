// ============================================================
//  Analizzatore Gare — configurazione della webapp (whitelabel)
//  Questo è l'UNICO file da modificare per personalizzare la webapp.
//  Viene pubblicato insieme a index.html (repository pubblico):
//  NON inserire qui chiavi API o segreti veri.
// ============================================================
window.APP_CONFIG = {
  // Nome dell'applicativo (titolo pagina, header, login, PDF)
  app_name: "Analizzatore Gare",

  // Nome dell'azienda: mostrato prima del nome app nell'header e come
  // intestazione dei PDF. Lasciare "" per mostrare solo app_name.
  company_name: "",

  // Breve descrizione dell'azienda usata nel prompt "Analisi prodotti"
  // (es. "azienda che fornisce arredi e tecnologia alle scuole")
  company_description: "azienda che fornisce beni e servizi a istituti scolastici ed enti pubblici",

  // Sottotitolo della schermata di accesso
  login_subtitle: "Accedi con la password condivisa",

  // Logo (percorso relativo o URL). "" = nessun logo, solo testo.
  //   logo_url        -> header (consigliato: versione chiara/bianca, altezza ~32px)
  //   logo_login_url  -> schermata di login (versione a colori, larghezza ~80px)
  logo_url: "",
  logo_login_url: "img/logo.svg",

  // Password condivisa di accesso (gate semplice, lato browser: non è una
  // protezione forte). Cambiarla prima della pubblicazione.
  password: "AnalizzaGare-2026",

  // Modello Claude usato dal browser (la chiave API la inserisce l'utente al login)
  claude_model: "claude-sonnet-4-5",

  // Chiave con cui la API key viene salvata nel browser (localStorage)
  storage_key: "ag_apikey",

  // File dati (relativi a index.html)
  catalog_url: "data/catalogo_prodotti.json",   // catalogo prodotti (usato da score e "Analisi prodotti")
  score_config_url: "data/score_config.json",   // pesi e fasce dello score di fattibilità

  // Nota a piè di pagina dei PDF scaricati dal browser
  footer_note: "Documento riservato ad uso interno",

  // Colori (esadecimali). Palette neutra predefinita: sostituire con i colori aziendali.
  colors: {
    primary:      "#1E293B",   // header, titoli, intestazioni
    primary_dark: "#0F172A",   // sfondo schermata di login
    secondary:    "#334155",   // intestazioni sezione, link, elementi attivi
    accent:       "#0F766E",   // pulsanti principali
    accent_hover: "#115E59",   // pulsanti principali (hover)
    light:        "#E2E8F0",   // sfondi chiari (etichette campi, selezioni)
  },
};
