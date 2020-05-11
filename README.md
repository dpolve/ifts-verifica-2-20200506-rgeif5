# UC12 – Sviluppo applicazioni Prova di valutazione 2
## 06/05/2020

Per informare i cittadini il Dipartimento della Protezione Civile mette a disposizione i dati raccolti sul monitoraggio dell’epidemia del Coronavirus COVID-19 attraverso un repository GIT all’indirizzo https://github.com/pcm-dpc/COVID-19

Download degli ultimi dati delle regioni in formato JSON:

    https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json

Download degli ultimi dati delle province in formato JSON:

    https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json

Si chiede di realizzare un’applicazione Angular tramite il sito StackBlitz
(https://stackblitz.com/) con le seguenti specifiche:

  1. Creare un’applicazione SPA (Single Page Application) con il framework Angular
  
  (10 punti)

  2. Importare i dati delle regioni all’interno di una variabile TypeScript chiamata "DATI_REGIONI"
  
  (15 punti)

  3. Creare un componente Angular denominato "TabellaRegioniComponent" in grado
  di ricevere come parametro i dati delle regioni e visualizzarli in una tabella
  HTML.

  La tabella conterrà le colonne:

    - Regione (denominazione_regione)
    - Positivi (totale_positivi)
    - Guariti (dimessi_guariti)
    - Deceduti (deceduti)
    - Totale Casi (totale_casi)
  
  (15 punti)

  4. Importare i dati delle province all’interno di una variabile 
  TypeScript chiamata "DATI_PROVINCE"

  (15 punti)

  5. Creare un componente Angular denominato "TabellaProvinceComponent" in grado
  di ricevere come parametro i dati delle province e visualizzarli in una tabella HTML.

  La tabella conterrà le colonne:

    - Regione (denominazione_regione)
    - Provincia (denominazione_provincia)
    - Totale Casi (totale_casi)

  (15 punti)

  6. Inserire nella pagina principale dell’applicazione un pulsante 
  con label "Regioni", premendo il quale viene visualizzata la
  tabella dei dati delle regioni.

  (15 punti)

  7. Inserire nella pagina principale dell’applicazione un pulsante con label "Province",
  premendo il quale viene visualizzata la tabella dei dati delle province.

  (15 punti)


## Norme per la consegna:

  - E’ molto più importante che il programma funzioni correttamente piuttosto che abbia
  un bell’aspetto, pertanto concentratevi prima sul rispetto delle specifiche e se rimane
  del tempo correggete eventuali problemi grafici o di layout.

  - Comunicare all’insegnante il link dell’applicazione StackBlitz tramite email
  all’indirizzo: daniele.arduini@01s.it
