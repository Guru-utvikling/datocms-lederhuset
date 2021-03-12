const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-ansatte-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/ansatte.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/index.js"))),
  "component---src-pages-kontakt-oss-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/kontakt-oss.js"))),
  "component---src-pages-ledige-stillinger-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/ledige-stillinger.js"))),
  "component---src-pages-nyheter-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/nyheter.js"))),
  "component---src-pages-om-oss-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/om-oss.js"))),
  "component---src-pages-register-cv-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/register-cv.js"))),
  "component---src-pages-thank-you-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/thank-you.js"))),
  "component---src-pages-tjenester-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/pages/tjenester.js"))),
  "component---src-templates-services-js": hot(preferDefault(require("/Users/damiankursa/Desktop/Praca Guru/Guru/Clients/Lederhuset/All files new website/LederhusetDato/src/templates/services.js")))
}

