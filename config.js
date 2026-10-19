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
  //   logo_login_url  -> schermata di login (versione a colori, larghezza ~170px)
  logo_url: "img/valere-logo-bianco.png",
  logo_login_url: "img/valere-logo.png",

  // Password condivisa di accesso (gate semplice, lato browser: non è una
  // protezione forte). Cambiarla prima della pubblicazione.
  password: "AnalizzaGare-2026",

  // Modello Claude usato dal browser (la chiave API la inserisce l'utente al login)
  claude_model: "claude-opus-5-5",

  // Chiave con cui la API key viene salvata nel browser (localStorage)
  storage_key: "ag_apikey",

  // File dati (relativi a index.html)
  catalog_url: "data/catalogo_prodotti.json",   // catalogo prodotti (usato da score e "Analisi prodotti")
  score_config_url: "data/score_config.json",   // pesi e fasce dello score di fattibilità

  // Nota a piè di pagina dei PDF scaricati dal browser
  footer_note: "Documento riservato ad uso interno",

  // Colori (esadecimali). Palette Valere: bordeaux, rosso, oro.
  colors: {
    primary:      "#520C24",   // header, titoli, intestazioni
    primary_dark: "#2A0611",   // sfondo schermata di login
    secondary:    "#7A1F3D",   // intestazioni sezione, link, elementi attivi
    accent:       "#E8213F",   // pulsanti principali
    accent_hover: "#C4142F",   // pulsanti principali (hover)
    light:        "#F4EDEF",   // sfondi chiari (etichette campi, selezioni)
    gold:         "#E0A63A",   // nome app nell'header, dettagli
  },
};
