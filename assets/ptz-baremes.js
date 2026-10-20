/* ══════════ Barèmes PTZ ══════════
 * Logement neuf, offres de prêt émises depuis le 1er avril 2025 (décret n° 2025-299), reconduits en 2026,
 * dispositif prolongé jusqu'au 31/12/2027. Sources : CCH D31-10-3-1 / D31-10-9, ANIL, service-public (09/2026).
 * Mêmes tables que le simulateur public du site (solution-neuf-site/site/assets/simulateur.js) : à mettre à jour ensemble.
 */
window.PTZ = {
  ressources: { // plafond de RFR N-2 par nombre d'occupants 1…8+
    A:  [49000, 73500, 88200, 102900, 117600, 132300, 147000, 161700],
    B1: [34500, 51750, 62100, 72450, 82800, 93150, 103500, 113850],
    B2: [31500, 47250, 56700, 66150, 75600, 85050, 94500, 103950],
    C:  [28500, 42750, 51300, 59850, 68400, 76950, 85500, 94050],
  },
  operation: { // plafond du coût de l'opération pris en compte, par occupants 1…5+
    A:  [150000, 225000, 270000, 315000, 360000],
    B1: [135000, 202500, 243000, 283500, 324000],
    B2: [110000, 165000, 198000, 231000, 264000],
    C:  [100000, 150000, 180000, 210000, 240000],
  },
  coef: [1, 1.5, 1.8, 2.1, 2.4, 2.7, 3, 3.3],
  tranches: { A: [25000, 31000, 37000, 49000], B1: [21500, 26000, 30000, 34500], B2: [18000, 22500, 27000, 31500], C: [15000, 19500, 24000, 28500] },
  quotite: { appartement: [0.5, 0.4, 0.4, 0.2], maison: [0.3, 0.2, 0.2, 0.1] },
  remboursement: [ { differe: 10, duree: 15 }, { differe: 8, duree: 12 }, { differe: 2, duree: 13 }, { differe: 0, duree: 10 } ],
};
