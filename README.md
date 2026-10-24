# Club d'échecs d'Achères

Site du club : présentation, images, parties célèbres et problème de la semaine.

## Parties

Les parties de l’onglet **Les parties** sont séparées du code de la page :

1. Éditer `games.pgn` (coller un bloc PGN complet par partie)
2. Régénérer : `node scripts/build-games.mjs`
3. Cela met à jour `games.js`

Les libellés courts (ex. « L'Opéra ») se configurent dans `scripts/build-games.mjs` (`SHORT_BY_KEY`).
