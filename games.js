/* ============================================================
   Parties — Club d'échecs d'Achères
   ------------------------------------------------------------
   Source éditable : games.pgn
   Régénérer avec : node scripts/build-games.mjs
   Ou ajouter une entrée ici directement (id, short, title, place, result, pgn).
   ============================================================ */
window.GAMES = [
  {
    id: "paul-morphy-duke-of-brunswick-count-isouard-1858",
    short: "L'Opéra",
    title: "Morphy – Duc de Brunswick et comte Isouard",
    place: "Paris, 1858",
    result: "Les Blancs gagnent au 17e coup.",
    pgn: "1. e4 e5 2. Nf3 d6 3. d4 Bg4 4. dxe5 Bxf3 5. Qxf3 dxe5 6. Bc4 Nf6 7. Qb3 Qe7 8. Nc3 c6 9. Bg5 b5 10. Nxb5 cxb5 11. Bxb5+ Nbd7 12. O-O-O Rd8 13. Rxd7 Rxd7 14. Rd1 Qe6 15. Bxd7+ Nxd7 16. Qb8+ Nxb8 17. Rd8# 1-0"
  },
  {
    id: "edwin-ziegler-adams-carlos-torre-repetto-1920",
    short: "Le Moulin",
    title: "Edwin Ziegler Adams – Carlos Torre Repetto",
    place: "New Orleans, 1920",
    result: "Les Blancs gagnent au 23e coup.",
    pgn: "1. e4 e5 2. Nf3 d6 3. d4 exd4 4. Qxd4 Nc6 5. Bb5 Bd7 6. Bxc6 Bxc6 7. Nc3 Nf6 8. O-O Be7 9. Nd5 Bxd5 10. exd5 O-O 11. Bg5 c6 12. c4 cxd5 13. cxd5 Re8 14. Rfe1 a5 15. Re2 Rc8 16. Rae1 Qd7 17. Bxf6 Bxf6 18. Qg4 Qb5 19. Qc4 Qd7 20. Qc7 Qb5 21. a4 Qxa4 22. Re4 Qb5 23. Qxb7 1-0"
  },
  {
    id: "michael-adams-garry-kasparov-2005",
    short: "Linares 2005",
    title: "Michael Adams – Garry Kasparov",
    place: "Linares, 2005",
    result: "Les Noirs gagnent au 26e coup.",
    pgn: "1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6 6.Be3 e6 7.Be2 Qc7 8.Qd2 b5 9.a3 Bb7 10.f3 Nc6 11.O-O-O b4 12.axb4 Nxb4 13.g4 Be7 14.g5 Nd7 15.h4 Nc5 16.Kb1 Rb8 17.h5 O-O 18.g6 Bf6 19.Rdg1 Ba8 20.Bg5 Be5 21.gxh7+ Kxh7 22.Nb3 Nxc2 23.Nxc5 Na3+ 24.Ka2 Qxc5 25.Na4 Nc2 26.Kb1 Qa3 0-1"
  },
  {
    id: "alexander-alekhine-richard-reti-1922",
    short: "Alekhine–Réti",
    title: "Alexander Alekhine – Richard Reti",
    place: "Vienna, 1922",
    result: "Partie nulle (59 coups).",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. Nc3 b5 6. Bb3 Bc5 7. Nxe5 Nxe5 8. d4 Bd6 9. dxe5 Bxe5 10. f4 Bxc3+ 11. bxc3 O-O 12. e5 c5 13. Ba3 Qa5 14. O-O Qxa3 15. exf6 c4 16. Qd5 Qa5 17. fxg7 Qb6+ 18. Kh1 Kxg7 19. Bxc4 Bb7 20. Qe5+ Qf6 21. Bd3 Rfe8 22. Qh5 h6 23. Qg4+ Kh8 24. Qxd7 Re7 25. Qd4 Qxd4 26. cxd4 Rd8 27. f5 f6 28. Rae1 28... Rg7 29. Be4 Rxd4 30. Bxb7 Rxb7 31. Re6 Kg7 32. Rxa6 Rc4 33. Rf3 Rxc2 34. h3 Kf7 35. Rg3 Rf2 36. Rg6 Rxf5 37. Rxh6 Kg7 38. Rh4 b4 39. Rg4+ Kf7 40. Rg3 Rfb5 41. Rb3 Kg6 42. Kh2 Rc5 43. Ra4 Rcb5 44. h4 R5b6 45. Kh3 Rb8 46. g3 f5 47. Ra5 Rc8 48. Rf3 Rf6 49. Kg2 Rc3 50. Ra8 Rxf3 51. Kxf3 Rc6 52. Rb8 Rc4 53. Rb6+ Kg7 54. h5 Rd4 55. Rc6 Re4 56. Rg6+ Kf7 57. g4 Rxg4 58. Rxg4 fxg4+ 59. Kxg4 Kg7 1/2-1/2"
  },
  {
    id: "viswanathan-anand-veselin-topalov-2005",
    short: "Mtel 2005",
    title: "Viswanathan Anand – Veselin Topalov",
    place: "Sofia, 2005",
    result: "Partie nulle (60 coups).",
    pgn: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e6 7. f3 b5 8. g4 h6 9. Qd2 b4 10. Na4 Nbd7 11. O-O-O Ne5 12. b3 Bd7 13. Nb2 d5 14. Bf4 Nxf3 15. Nxf3 Nxe4 16. Qd4 f6 17. Bd3 Bc5 18. Bxe4 Bxd4 19. Bg6+ Kf8 20. Rxd4 a5 21. Re1 Be8 22. Nh4 e5 23. Rd2 a4 24. bxa4 Kg8 25. Bg3 d4 26. Rd3 h5 27. Bxe8 Qxe8 28. g5 Rc8 29. g6 Rh6 30. Rxd4 Rxg6 31. Nxg6 Qxg6 32. Rd2 Rc3 33. Red1 Kh7 34. Kb1 Qf5 35. Be1 Ra3 36. Rd6 Rh3 37. a5 Rxh2 38. Rc1 Qe4 39. a6 Qa8 40. Bxb4 h4 41. Bc5 h3 42. Nd3 Rd2 43. Rb6 h2 44. Nf2 Qd5 45. Be3 Re2 46. Rb3 f5 47. a7 Rxe3 48. Rxe3 Qb7+ 49. Rb3 Qxa7 50. Nh1 f4 51. c4 e4 52. c5 e3 53. c6 e2 54. c7 Qxc7 55. Rxc7 e1=Q+ 56. Rc1 Qe4+ 57. Ka1 Qd4+ 58. Kb1 Qe4+ 59. Ka1 Qd4+ 60. Kb1 Qe4+ 1/2-1/2"
  },
  {
    id: "adolf-anderssen-jean-dufresne-1852",
    short: "L'Éternelle",
    title: "Adolf Anderssen – Jean Dufresne",
    place: "Berlin, 1852",
    result: "Les Blancs gagnent au 24e coup.",
    pgn: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24.Bxe7# 1-0"
  },
  {
    id: "adolf-anderssen-kieseritzky-1851",
    short: "L'Immortelle",
    title: "Adolf Anderssen – Kieseritzky",
    place: "London, 1851",
    result: "Les Blancs gagnent au 23e coup.",
    pgn: "1.e4 e5 2.f4 exf4 3.Bc4 Qh4+ 4.Kf1 b5 5.Bxb5 Nf6 6.Nf3 Qh6 7.d3 Nh5 8.Nh4 Qg5 9.Nf5 c6 10.g4 Nf6 11.Rg1 cxb5 12.h4 Qg6 13.h5 Qg5 14.Qf3 Ng8 15.Bxf4 Qf6 16.Nc3 Bc5 17.Nd5 Qxb2 18.Bd6 Bxg1 19. e5 Qxa1+ 20. Ke2 Na6 21.Nxg7+ Kd8 22.Qf6+ Nxf6 23.Be7# 1-0"
  },
  {
    id: "suat-atalik-gyula-sax-1997",
    short: "Atalik–Sax",
    title: "Suat Atalik – Gyula Sax",
    place: "Szeged, 1997",
    result: "Les Blancs gagnent au 26e coup.",
    pgn: "1.d4 Nf6 2.c4 e6 3.Nc3 Bb4 4.Qc2 d5 5.a3 Bxc3+ 6.Qxc3 Ne4 7.Qc2 Nc6 8.e3 e5 9.cxd5 Qxd5 10.Bc4 Qa5+ 11.b4 Nxb4 12.Qxe4 Nc2+ 13.Ke2 Qe1+ 14.Kf3 Nxa1 15.Bb2 O-O 16.Kg3 Kh8 17.dxe5 Be6 18.Nf3 Qxh1 19.Ng5 g6 20.Nxf7+ Rxf7 21.Bxe6 Rg7 22.Bf7 Rxf7 23.e6+ Kg8 24.Qd4 Kf8 25.exf7 Kxf7 26.Qd7+ 1-0"
  },
  {
    id: "henry-edward-bird-paul-morphy-1858",
    short: "Bird–Morphy",
    title: "Henry Edward Bird – Paul Morphy",
    place: "London, 1858",
    result: "Les Noirs gagnent au 29e coup.",
    pgn: "1.e4 e5 2.Nf3 d6 3.d4 f5 4.Nc3 fxe4 5.Nxe4 d5 6.Ng3 e4 7.Ne5 Nf6 8.Bg5 Bd6 9.Nh5 O-O 10.Qd2 Qe8 11.g4 Nxg4 12.Nxg4 Qxh5 13.Ne5 Nc6 14.Be2 Qh3 15.Nxc6 bxc6 16.Be3 Rb8 17.O-O-O Rxf2 18.Bxf2 Qa3 19.c3 Qxa2 20.b4 Qa1+ 21.Kc2 Qa4+ 22.Kb2 Bxb4 23.cxb4 Rxb4+ 24.Qxb4 Qxb4+ 25.Kc2 e3 26.Bxe3 Bf5+ 27.Rd3 Qc4+ 28.Kd2 Qa2+ 29.Kd1 Qb1+ 0-1"
  },
  {
    id: "efim-bogoljubov-alexander-alekhine-1922",
    short: "Hastings 1922",
    title: "Efim Bogoljubov – Alexander Alekhine",
    place: "Hastings, 1922",
    result: "Les Noirs gagnent au 53e coup.",
    pgn: "1. d4 f5 2. c4 Nf6 3. g3 e6 4. Bg2 Bb4+ 5. Bd2 Bxd2+ 6. Nxd2 Nc6 7. Ngf3 O-O 8. O-O d6 9. Qb3 Kh8 10. Qc3 e5 11. e3 a5 12. b3 Qe8 13. a3 Qh5 14. h4 Ng4 15. Ng5 Bd7 16. f3 Nf6 17. f4 e4 18. Rfd1 h6 19. Nh3 d5 20. Nf1 Ne7 21. a4 Nc6 22. Rd2 Nb4 23. Bh1 Qe8 24. Rg2 dxc4 25. bxc4 Bxa4 26. Nf2 Bd7 27. Nd2 b5 28. Nd1 Nd3 29. Rxa5 b4 30. Rxa8 bxc3 31. Rxe8 c2 32. Rxf8+ Kh7 33. Nf2 c1=Q+ 34. Nf1 Ne1 35. Rh2 Qxc4 36. Rb8 Bb5 37. Rxb5 Qxb5 38. g4 Nf3+ 39. Bxf3 exf3 40. gxf5 Qe2 41. d5 Kg8 42. h5 Kh7 43. e4 Nxe4 44. Nxe4 Qxe4 45. d6 cxd6 46. f6 gxf6 47. Rd2 Qe2 48. Rxe2 fxe2 49. Kf2 exf1=Q+ 50. Kxf1 Kg7 51. Ke2 Kf7 52. Ke3 Ke6 53. Ke4 d5+ 0-1"
  },
  {
    id: "donald-byrne-robert-james-fischer-1956",
    short: "Partie du siècle",
    title: "Donald Byrne – Robert James Fischer",
    place: "New York, 1956",
    result: "Les Noirs gagnent au 41e coup.",
    pgn: "1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Rc2# 0-1"
  },
  {
    id: "robert-eugene-byrne-robert-james-fischer-1963",
    short: "Byrne–Fischer",
    title: "Robert Eugene Byrne – Robert James Fischer",
    place: "New York City, NY, 1963",
    result: "Les Noirs gagnent au 21e coup.",
    pgn: "1. d4 Nf6 2. c4 g6 3. g3 c6 4. Bg2 d5 5. cxd5 cxd5 6. Nc3 Bg7 7. e3 O-O 8. Nge2 Nc6 9. O-O b6 10. b3 Ba6 11. Ba3 Re8 12. Qd2 e5 13. dxe5 Nxe5 14. Rfd1 Nd3 15. Qc2 Nxf2 16. Kxf2 Ng4+ 17. Kg1 Nxe3 18. Qd2 Nxg2 19. Kxg2 d4 20. Nxd4 Bb7+ 21. Kf1 Qd7 0-1"
  },
  {
    id: "jose-raul-capablanca-jaime-baca-arus-1912",
    short: "Capablanca",
    title: "Jose Raul Capablanca – Jaime Baca Arus",
    place: "Havana, 1912",
    result: "Les Blancs gagnent au 25e coup.",
    pgn: "1. d4 d5 2. e3 e6 3. Bd3 c6 4. Nf3 Bd6 5. Nbd2 f5 6. c4 Qf6 7. b3 Nh6 8. Bb2 O-O 9. Qc2 Nd7 10. h3 g6 11. O-O-O e5 12. dxe5 Nxe5 13. cxd5 cxd5 14. Nc4 dxc4 15. Bxc4+ Nhf7 16. Rxd6 Qxd6 17. Nxe5 Be6 18. Rd1 Qe7 19. Rd7 Bxd7 20. Nxd7 Rfc8 21. Qc3 Rxc4 22. bxc4 Nd6 23.Qh8+ Kf7 24.Ne5+ Ke6 25.Qxa8 1-0"
  },
  {
    id: "magnus-carlsen-sipke-ernst-2004",
    short: "Carlsen–Ernst",
    title: "Magnus Carlsen – Sipke Ernst",
    place: "Wijk aan Zee, 2004",
    result: "Les Blancs gagnent au 29e coup.",
    pgn: "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bf4 Ngf6 12. O-O-O Be7 13. Ne4 Qa5 14. Kb1 O-O 15. Nxf6+ Nxf6 16. Ne5 Rad8 17. Qe2 c5 18. Ng6 fxg6 19. Qxe6+ Kh8 20. hxg6 Ng8 21. Bxh6 gxh6 22. Rxh6+ Nxh6 23. Qxe7 Nf7 24. gxf7 Kg7 25. Rd3 Rd6 26. Rg3+ Rg6 27. Qe5+ Kxf7 28. Qf5+ Rf6 29. Qd7# 1-0"
  },
  {
    id: "rudolf-rezso-charousek-jakob-wollner-1893",
    short: "Charousek",
    title: "Rudolf Rezso Charousek – Jakob Wollner",
    place: "Kaschau, 1893",
    result: "Les Blancs gagnent au 19e coup.",
    pgn: "1.e4 e5 2.d4 exd4 3.c3 dxc3 4.Bc4 Nf6 5.Nf3 Bc5 6.Nxc3 d6 7.O-O O-O 8.Ng5 h6 9.Nxf7 Rxf7 10.e5 Ng4 11.e6 Qh4 12.exf7+ Kf8 13.Bf4 Nxf2 14.Qe2 Ng4+ 15.Kh1 Bd7 16.Rae1 Nc6 17.Qe8+ Rxe8 18.fxe8=Q+ Bxe8 19.Bxd6# 1-0"
  },
  {
    id: "chris-de-ronde-hendrik-hermanus-kamstra-1938",
    short: "De Ronde",
    title: "Chris De Ronde – Hendrik Hermanus Kamstra",
    place: "Amsterdam Dutch Ch Prelim., 1938",
    result: "Les Blancs gagnent au 50e coup.",
    pgn: "1. c4 Nf6 2. Nc3 g6 3. e4 d6 4. d4 Bg7 5. f3 Nbd7 6. Be3 e5 7. d5 a5 8. Qd2 b6 9. g4 Nc5 10. Nge2 h5 11. g5 Nfd7 12. Qc2 Nb8 13. O-O-O Nba6 14. a3 Bd7 15. Kb1 O-O 16. Nc1 Qe7 17. Be2 Rfe8 18. Rdg1 Qd8 19. h3 Qc8 20. Bf1 Re7 21. Rh2 Qb7 22. Bd3 Nxd3 23. Nxd3 Nc5 24. a4 Qc8 25. Nf2 Na6 26. Qd1 Nb4 27. Nb5 Qb7 28. Bd2 Na6 29. Qe1 Nc5 30. Be3 Nxa4 31. Ng4 hxg4 32. hxg4 Ree8 33. Qh4 Kf8 34. Qh7 Nc5 35. Nd4 exd4 36. Qxg7+ Kxg7 37. Bxd4+ Re5 38. f4 Nxe4 39. fxe5 Nxg5 40. e6+ f6 41. Rf1 Rf8 42. exd7 Qb8 43. Rxf6 Rxf6 44. Rf2 Ne4 45. Rxf6 Qd8 46. g5 Nxg5 47. Rxd6+ Kf8 48. Bf6 cxd6 49. Bxd8 Nf7 50. Bf6 1-0"
  },
  {
    id: "edward-lasker-george-alan-thomas-1912",
    short: "Lasker–Thomas",
    title: "Edward Lasker – George Alan Thomas",
    place: "London, England, 1912",
    result: "Les Blancs gagnent au 18e coup.",
    pgn: "1. d4 e6 2. Nf3 f5 3. Nc3 Nf6 4. Bg5 Be7 5. Bxf6 Bxf6 6. e4 fxe4 7. Nxe4 b6 8. Ne5 O-O 9. Bd3 Bb7 10. Qh5 Qe7 11. Qxh7+ Kxh7 12. Nxf6+ Kh6 13. Neg4+ Kg5 14. h4+ Kf4 15. g3+ Kf3 16. Be2+ Kg2 17. Rh2+ Kg1 18. Kd2# 1-0"
  },
  {
    id: "yakov-estrin-hans-berliner-1965",
    short: "Estrin–Berliner",
    title: "Yakov Estrin – Hans Berliner",
    place: "corr-5, 1965",
    result: "Les Noirs gagnent au 42e coup.",
    pgn: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 d5 5.exd5 b5 6.Bf1 Nd4 7.c3 Nxd5 8.Ne4 Qh4 9.Ng3 Bg4 10.f3 e4 11.cxd4 Bd6 12.Bxb5+ Kd8 13.O-O exf3 14.Rxf3 Rb8 15.Be2 Bxf3 16.Bxf3 Qxd4+ 17.Kh1 Bxg3 18.hxg3 Rb6 19.d3 Ne3 20.Bxe3 Qxe3 21.Bg4 h5 22.Bh3 g5 23.Nd2 g4 24.Nc4 Qxg3 25.Nxb6 gxh3 26.Qf3 hxg2+ 27.Qxg2 Qxg2+ 28.Kxg2 cxb6 29.Rf1 Ke7 30.Re1+ Kd6 31.Rf1 Rc8 32.Rxf7 Rc7 33.Rf2 Ke5 34.a4 Kd4 35.a5 Kxd3 36.Rf3+ Kc2 37.b4 b5 38.a6 Rc4 39.Rf7 Rxb4 40.Rb7 Rg4+ 41.Kf3 b4 42.Rxa7 b3 0-1"
  },
  {
    id: "glucksberg-miguel-najdorf-1929",
    short: "Partie polonaise",
    title: "Glucksberg – Miguel Najdorf",
    place: "Warsaw, 1929",
    result: "Les Noirs gagnent au 22e coup.",
    pgn: "1.d4 f5 2.c4 Nf6 3.Nc3 e6 4.Nf3 d5 5.e3 c6 6.Bd3 Bd6 7.O-O O-O 8.Ne2 Nbd7 9.Ng5 Bxh2+ 10.Kh1 Ng4 11.f4 Qe8 12.g3 Qh5 13.Kg2 Bg1 14.Nxg1 Qh2+ 15.Kf3 e5 16.dxe5 Ndxe5+ 17.fxe5 Nxe5+ 18.Kf4 Ng6+ 19.Kf3 f4 20.exf4 Bg4+ 21.Kxg4 Ne5+ 22.fxe5 h5# 0-1"
  },
  {
    id: "carl-hamppe-philipp-meitner-1872",
    short: "Nulle immortelle",
    title: "Carl Hamppe – Philipp Meitner",
    place: "Vienna, 1872",
    result: "Partie nulle (18 coups).",
    pgn: "1. e4 e5 2. Nc3 Bc5 3. Na4 Bxf2+ 4. Kxf2 Qh4+ 5. Ke3 Qf4+ 6. Kd3 d5 7. Kc3 Qxe4 8. Kb3 Na6 9. a3 Qxa4+ 10. Kxa4 Nc5+ 11. Kb4 a5+ 12. Kxc5 Ne7 13. Bb5+ Kd8 14. Bc6 b6+ 15. Kb5 Nxc6 16. Kxc6 Bb7+ 17. Kb5 Ba6+ 18. Kc6 Bb7+ 1/2-1/2"
  },
  {
    id: "f-alexander-hoffmann-alexander-petrov-1844",
    short: "Hoffmann–Petrov",
    title: "F Alexander Hoffmann – Alexander Petrov",
    place: "Warsaw, 1844",
    result: "Les Noirs gagnent au 20e coup.",
    pgn: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d4 exd4 6.e5 Ne4 7.Bd5 Nxf2 8.Kxf2 dxc3+ 9.Kg3 cxb2 10.Bxb2 Ne7 11.Ng5 Nxd5 12.Nxf7 O-O 13.Nxd8 Bf2+ 14.Kh3 d6+ 15.e6 Nf4+ 16.Kg4 Nxe6 17.Nxe6 Bxe6+ 18.Kg5 Rf5+ 19.Kg4 h5+ 20.Kh3 Rf3# 0-1"
  },
  {
    id: "vassily-ivanchuk-alexey-shirov-1996",
    short: "Ivanchuk–Shirov",
    title: "Vassily Ivanchuk – Alexey Shirov",
    place: "Wijk aan Zee, 1996",
    result: "Les Blancs gagnent au 35e coup.",
    pgn: "1.d4 d5 2.c4 c6 3.Nc3 Nf6 4.Nf3 e6 5.Bg5 dxc4 6.e4 b5 7.e5 h6 8.Bh4 g5 9.Nxg5 hxg5 10.Bxg5 Nbd7 11.exf6 Bb7 12.g3 c5 13.d5 Qb6 14.Bg2 O-O-O 15.O-O b4 16.Na4 Qb5 17.a3 exd5 18.axb4 cxb4 19.Be3 Nc5 20.Qg4+ Rd7 21.Qg7 Bxg7 22.fxg7 Rg8 23.Nxc5 d4 24.Bxb7+ Rxb7 25.Nxb7 Qb6 26.Bxd4 Qxd4 27.Rfd1 Qxb2 28.Nd6+ Kb8 29.Rdb1 Qxg7 30.Rxb4+ Kc7 31.Ra6 Rb8 32.Rxa7+ Kxd6 33.Rxb8 Qg4 34.Rd8+ Kc6 35.Ra1 1-0"
  },
  {
    id: "vassily-ivanchuk-artur-yusupov-1991",
    short: "Ivanchuk–Yusupov",
    title: "Vassily Ivanchuk – Artur Yusupov",
    place: "Brussel, 1991",
    result: "Les Noirs gagnent au 39e coup.",
    pgn: "1.c4 e5 2.g3 d6 3.Bg2 g6 4.d4 Nd7 5.Nc3 Bg7 6.Nf3 Ngf6 7.O-O O-O 8.Qc2 Re8 9.Rd1 c6 10.b3 Qe7 11.Ba3 e4 12.Ng5 e3 13.f4 Nf8 14.b4 Bf5 15.Qb3 h6 16.Nf3 Ng4 17.b5 g5 18.bxc6 bxc6 19.Ne5 gxf4 20.Nxc6 Qg5 21.Bxd6 Ng6 22.Nd5 Qh5 23.h4 Nxh4 24.gxh4 Qxh4 25.Nde7+ Kh8 26.Nxf5 Qh2+ 27.Kf1 Re6 28.Qb7 Rg6 29.Qxa8+ Kh7 30.Qg8+ Kxg8 31.Nce7+ Kh7 32.Nxg6 fxg6 33.Nxg7 Nf2 34.Bxf4 Qxf4 35.Ne6 Qh2 36.Rdb1 Nh3 37.Rb7+ Kg8 38.Rb8+ Qxb8 39.Bxh3 Qg3 0-1"
  },
  {
    id: "baadur-jobava-evgeny-bareev-2003",
    short: "Jobava–Bareev",
    title: "Baadur Jobava – Evgeny Bareev",
    place: "Rethymnon, 2003",
    result: "Les Blancs gagnent au 34e coup.",
    pgn: "1. e4 c6 2. d4 d5 3. Nd2 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 Ngf6 11. Bd2 e6 12. O-O-O Be7 13. Qe2 O-O 14. Kb1 c5 15. d5 exd5 16. Bxh6 gxh6 17. Nf5 Re8 18. Nxh6+ Kf8 19. Ng5 Qb6 20. Qf3 Ne5 21. Qg3 Bd6 22. Nf5 Qxb2+ 23. Kxb2 Nc4+ 24. Kb3 Bxg3 25. h6 Na5+ 26. Ka4 b5+ 27. Kxa5 Bc7+ 28. Kxb5 Rab8+ 29. Ka4 Ne4 30. Rxd5 Nc3+ 31. Ka3 Nb5+ 32. Kb2 Nd4+ 33. Kc3 Nb5+ 34.Kd3 1-0"
  },
  {
    id: "gata-kamsky-vladimir-kramnik-1994",
    short: "Kamsky–Kramnik",
    title: "Gata Kamsky – Vladimir Kramnik",
    place: "New York, 1994",
    result: "Les Blancs gagnent au 41e coup.",
    pgn: "1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. Nf3 e6 5. Bg5 dxc4 6. e4 b5 7. e5 h6 8. Bh4 g5 9. Nxg5 hxg5 10. Bxg5 Nbd7 11. exf6 Bb7 12. g3 c5 13. d5 Qb6 14. Bg2 O-O-O 15. O-O b4 16. Na4 Qb5 17. a3 Ne5 18. axb4 cxb4 19. Qd4 Nc6 20. dxc6 Rxd4 21. cxb7+ Kc7 22. Be3 e5 23. Nc3 bxc3 24. bxc3 Bc5 25. cxd4 Bxd4 26. Rfb1 Qc5 27. Ra6 Rb8 28. Bc1 c3 29. Ba3 Qc4 30. Bd6+ Kd7 31. Bc6+ Ke6 32. Bb5 Bxf2+ 33. Kxf2 Qd4+ 34. Kf1 Qe4 35. Re1 Qh1+ 36. Kf2 Qxh2+ 37. Kf3 Rxb7 38. Bxe5+ Rb6 39. Bc4+ Kd7 40. Rxa7+ Kc8 41. Rc7+ 1-0"
  },
  {
    id: "sergey-karjakin-viswanathan-anand-2006",
    short: "Karjakin–Anand",
    title: "Sergey Karjakin – Viswanathan Anand",
    place: "Wijk aan Zee, 2006",
    result: "Les Noirs gagnent au 37e coup.",
    pgn: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 16. Nbd4 exd4 17. Nxd4 b3 18. Kb1 bxc2+ 19. Nxc2 Bb3 20. axb3 axb3 21. Na3 Ne5 22. h4 Ra5 23. Qc3 Qa8 24. Bg2 Nc7 25. Qxc7 Rc8 26. Qxe7 Nc4 27. g6 hxg6 28. fxg6 Nxa3+ 29. bxa3 Rxa3 30. gxf7+ Kh7 31. f8=N+ Rxf8 32. Qxf8 Ra1+ 33. Kb2 Ra2+ 34. Kc3 Qa5+ 35. Kd3 Qb5+ 36. Kd4 Ra4+ 37. Kc3 Qc4+ 0-1"
  },
  {
    id: "anatoly-karpov-garry-kasparov-1985",
    short: "La Pieuvre",
    title: "Anatoly Karpov – Garry Kasparov",
    place: "Moscow, 1985",
    result: "Les Noirs gagnent au 40e coup.",
    pgn: "1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nb5 d6 6.c4 Nf6 7.N1c3 a6 8.Na3 d5 9.cxd5 exd5 10.exd5 Nb4 11.Be2 Bc5 12.O-O O-O 13.Bf3 Bf5 14.Bg5 Re8 15.Qd2 b5 16.Rad1 Nd3 17.Nab1 h6 18.Bh4 b4 19.Na4 Bd6 20.Bg3 Rc8 21.b3 g5 22.Bxd6 Qxd6 23.g3 Nd7 24.Bg2 Qf6 25.a3 a5 26.axb4 axb4 27.Qa2 Bg6 28.d6 g4 29.Qd2 Kg7 30.f3 Qxd6 31.fxg4 Qd4+ 32.Kh1 Nf6 33.Rf4 Ne4 34.Qxd3 Nf2+ 35.Rxf2 Bxd3 36.Rfd2 Qe3 37.Rxd3 Rc1 38.Nb2 Qf2 39.Nd2 Rxd1+ 40.Nxd1 Re1+ 0-1"
  },
  {
    id: "anatoly-karpov-wolfgang-unzicker-1974",
    short: "Karpov–Unzicker",
    title: "Anatoly Karpov – Wolfgang Unzicker",
    place: "Nice, 1974",
    result: "Les Blancs gagnent au 44e coup.",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3 O-O 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 12. Nbd2 Nc6 13. d5 Nd8 14. a4 Rb8 15. axb5 axb5 16. b4 Nb7 17. Nf1 Bd7 18. Be3 Ra8 19. Qd2 Rfc8 20. Bd3 g6 21. Ng3 Bf8 22. Ra2 c4 23. Bb1 Qd8 24. Ba7 Ne8 25. Bc2 Nc7 26. Rea1 Qe7 27. Bb1 Be8 28. Ne2 Nd8 29. Nh2 Bg7 30. f4 f6 31. f5 g5 32. Bc2 Bf7 33. Ng3 Nb7 34. Bd1 h6 35. Bh5 Qe8 36. Qd1 Nd8 37. Ra3 Kf8 38. R1a2 Kg8 39. Ng4 Kf8 40. Ne3 Kg8 41. Bxf7+ Nxf7 42. Qh5 Nd8 43. Qg6 Kf8 44. Nh5 1-0"
  },
  {
    id: "garry-kasparov-vladimir-kramnik-1996",
    short: "Kasparov–Kramnik",
    title: "Garry Kasparov – Vladimir Kramnik",
    place: "Dos Hermanas (Spain), 1996",
    result: "Les Noirs gagnent au 35e coup.",
    pgn: "1.d4 d5 2.c4 c6 3.Nc3 Nf6 4.Nf3 e6 5.e3 Nbd7 6.Bd3 dxc4 7.Bxc4 b5 8.Bd3 Bb7 9.O-O a6 10.e4 c5 11.d5 c4 12.Bc2 Qc7 13.Nd4 Nc5 14.b4 cxb3 15.axb3 b4 16.Na4 Ncxe4 17.Bxe4 Nxe4 18.dxe6 Bd6 19.exf7+ Qxf7 20.f3 Qh5 21.g3 O-O 22.fxe4 Qh3 23.Nf3 Bxg3 24.Nc5 Rxf3 25.Rxf3 Qxh2+ 26.Kf1 Bc6 27.Bg5 Bb5+ 28.Nd3 Re8 29.Ra2 Qh1+ 30.Ke2 Rxe4+ 31.Kd2 Qg2+ 32.Kc1 Qxa2 33.Rxg3 Qa1+ 34.Kc2 Qc3+ 35.Kb1 Rd4 0-1"
  },
  {
    id: "garry-kasparov-veselin-topalov-1999",
    short: "Wijk aan Zee",
    title: "Garry Kasparov – Veselin Topalov",
    place: "Wijk aan Zee, 1999",
    result: "Les Blancs gagnent au 44e coup.",
    pgn: "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be3 Bg7 5. Qd2 c6 6. f3 b5 7. Nge2 Nbd7 8. Bh6 Bxh6 9. Qxh6 Bb7 10. a3 e5 11. O-O-O Qe7 12. Kb1 a6 13. Nc1 O-O-O 14. Nb3 exd4 15. Rxd4 c5 16. Rd1 Nb6 17. g3 Kb8 18. Na5 Ba8 19. Bh3 d5 20. Qf4+ Ka7 21. Rhe1 d4 22. Nd5 Nbxd5 23. exd5 Qd6 24. Rxd4 cxd4 25. Re7+ Kb6 26. Qxd4+ Kxa5 27. b4+ Ka4 28. Qc3 Qxd5 29. Ra7 Bb7 30. Rxb7 Qc4 31. Qxf6 Kxa3 32. Qxa6+ Kxb4 33. c3+ Kxc3 34. Qa1+ Kd2 35. Qb2+ Kd1 36. Bf1 Rd2 37. Rd7 Rxd7 38. Bxc4 bxc4 39. Qxh8 Rd3 40. Qa8 c3 41. Qa4+ Ke1 42. f4 f5 43. Kc1 Rd2 44. Qa7 1-0"
  },
  {
    id: "andrei-kharlov-veselin-topalov-2004",
    short: "Kharlov–Topalov",
    title: "Andrei Kharlov – Veselin Topalov",
    place: "Tripoli, Libya, 2004",
    result: "Les Noirs gagnent au 53e coup.",
    pgn: "1. e4 e5 2. Bc4 Nf6 3. d3 c6 4. Nf3 Be7 5. O-O d6 6. a4 O-O 7. Re1 Nbd7 8. Nc3 Nc5 9. d4 exd4 10. Nxd4 a5 11. Bf4 Ng4 12. Be2 Nf6 13. Bf3 Re8 14. Qd2 g6 15. h3 Nfd7 16. Rad1 Bf8 17. g4 Qb6 18. Bg2 Ne5 19. b3 Qb4 20. Nde2 f6 21. Be3 h5 22. f4 Nxg4 23. hxg4 Bxg4 24. Qc1 f5 25. Rd4 Qb6 26. Qd2 Qc7 27. Bf2 Re6 28. Rc4 Rae8 29. Nd4 Rxe4 30. Nxe4 Nxe4 31. Bxe4 fxe4 32. Rc3 d5 33. Rg3 Bd6 34. Be3 Qd7 35. c3 Rf8 36. Rf1 b6 37. Rf2 c5 38. Nb5 Bb8 39. Rfg2 g5 40. Rf2 Kg7 41. Qc1 Kg6 42. Qf1 Rf5 43. Rgg2 Qf7 44. fxg5 Bf3 45. Rh2 Bxh2+ 46. Rxh2 Rf4 47. Bxf4 Qxf4 48. Rg2 h4 49. Qe1 e3 50. Rh2 Qxg5+ 51. Kf1 h3 52. Qb1+ Be4 53. Qb2 Bd3+ 0-1"
  },
  {
    id: "efim-korchmar-abram-borisovich-poliak-1931",
    short: "Korchmar–Poliak",
    title: "Efim Korchmar – Abram Borisovich Poliak",
    place: "Ukraine, 1931",
    result: "Les Blancs gagnent au 23e coup.",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. d4 Bd7 5. Nc3 Nf6 6. O-O Nxd4 7. Bxd7+ Qxd7 8. Nxd4 exd4 9. Qxd4 Be7 10. Rd1 O-O 11. e5 Ne8 12. Bf4 a5 13. Rd3 Ra6 14. Re1 Qf5 15. Nd5 Bd8 16. exd6 Nxd6 17. Rg3 f6 18. Bh6 Rf7 19. Nb4 axb4 20. Qxd6 Qd7 21. Qd5 Kf8 22. Rxg7 Qxd5 23. Rg8+ 1-0"
  },
  {
    id: "zdenko-kozul-sergei-rublevsky-2004",
    short: "Kozul–Rublevsky",
    title: "Zdenko Kozul – Sergei Rublevsky",
    place: "Tripoli, Libya, 2004",
    result: "Les Blancs gagnent au 47e coup.",
    pgn: "1. d4 d5 2. c4 c6 3. Nf3 Nf6 4. e3 a6 5. Nbd2 Bf5 6. Be2 e6 7. O-O Bd6 8. c5 Bc7 9. b4 Nbd7 10. Bb2 Ne4 11. a4 Qf6 12. Nxe4 dxe4 13. Nd2 Qh6 14. g3 Nf6 15. b5 Qh3 16. b6 Bd8 17. f3 h5 18. Nxe4 Bxe4 19. Rf2 Ng4 20. Qe1 Nxf2 21. Qxf2 Bg6 22. Bf1 Qf5 23. e4 Qg5 24. f4 Qe7 25. f5 Bh7 26. d5 O-O 27. dxc6 bxc6 28. Be5 Qd7 29. Bd6 Be7 30. Rd1 Rfd8 31. Qf4 Bxd6 32. Rxd6 Qe7 33. Rxc6 Rd7 34. Bxa6 exf5 35. Rc7 g5 36. b7 Rf8 37. Rxd7 Qxd7 38. Qxg5+ Bg6 39. Qf4 Qd4+ 40. Kg2 Qb2+ 41. Kh3 fxe4 42. c6 Qb3 43. c7 Qe6+ 44. Kg2 Qa2+ 45. Qf2 Qd5 46. b8=Q e3+ 47. Qf3 1-0"
  },
  {
    id: "vladimir-kramnik-viswanathan-anand-2004",
    short: "Kramnik–Anand",
    title: "Vladimir Kramnik – Viswanathan Anand",
    place: "Wijk aan Zee Corus Chess, 2004",
    result: "Partie nulle (25 coups).",
    pgn: "1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be2 e5 7. Nb3 Be7 8. Bg5 Be6 9. Bxf6 Bxf6 10. Qd3 Nc6 11. O-O-O Be7 12. Kb1 O-O 13. Nd5 Bg5 14. h4 Bxh4 15. g3 Bf6 16. Qf3 Bg5 17. Qh5 h6 18. f4 Bf6 19. Nd2 Nd4 20. Bc4 Rc8 21. c3 Nb5 22. f5 Bxd5 23. Bxd5 Rxc3 24. Qg6 Qb6 25. Rxh6 1/2-1/2"
  },
  {
    id: "konstantin-landa-evgeny-shaposhnikov-2005",
    short: "Landa–Shaposhnikov",
    title: "Konstantin Landa – Evgeny Shaposhnikov",
    place: "Sochi, 2005",
    result: "Les Blancs gagnent au 24e coup.",
    pgn: "1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bf4 Qa5+ 12. Bd2 Bb4 13. c3 Be7 14. c4 Qa6 15. O-O Rd8 16. b4 Ngf6 17. a4 b6 18. Rfe1 O-O 19. Nf5 Rfe8 20. Nxg7 Kxg7 21. Rxe6 fxe6 22. Bxh6+ Kh8 23. Bg7+ Kxg7 24. Qg6+ 1-0"
  },
  {
    id: "bent-larsen-boris-spassky-1970",
    short: "Larsen–Spassky",
    title: "Bent Larsen – Boris Spassky",
    place: "Belgrade, 1970",
    result: "Les Noirs gagnent au 17e coup.",
    pgn: "1. b3 e5 2. Bb2 Nc6 3. c4 Nf6 4. Nf3 e4 5. Nd4 Bc5 6. Nxc6 dxc6 7. e3 Bf5 8. Qc2 Qe7 9. Be2 O-O-O 10. f4 Ng4 11. g3 h5 12. h3 h4 13. hxg4 hxg3 14. Rg1 Rh1 15. Rxh1 g2 16. Rf1 Qh4+ 17. Kd1 gxf1=Q+ 0-1"
  },
  {
    id: "stefan-levitsky-frank-james-marshall-1912",
    short: "Le Coup d'or",
    title: "Stefan Levitsky – Frank James Marshall",
    place: "Breslau, 1912",
    result: "Les Noirs gagnent au 23e coup.",
    pgn: "1.d4 e6 2.e4 d5 3.Nc3 c5 4.Nf3 Nc6 5.exd5 exd5 6.Be2 Nf6 7.O-O Be7 8.Bg5 O-O 9.dxc5 Be6 10.Nd4 Bxc5 11.Nxe6 fxe6 12.Bg4 Qd6 13.Bh3 Rae8 14.Qd2 Bb4 15.Bxf6 Rxf6 16.Rad1 Qc5 17.Qe2 Bxc3 18.bxc3 Qxc3 19.Rxd5 Nd4 20.Qh5 Ref8 21.Re5 Rh6 22.Qg5 Rxh3 23.Rc5 Qg3 0-1"
  },
  {
    id: "liu-wenzhe-jan-hein-donner-1978",
    short: "Liu–Donner",
    title: "Liu Wenzhe – Jan Hein Donner",
    place: "Buenos Aires, 1978",
    result: "Les Blancs gagnent au 20e coup.",
    pgn: "1. e4 d6 2. d4 Nf6 3. Nc3 g6 4. Be2 Bg7 5. g4 h6 6. h3 c5 7. d5 O-O 8. h4 e6 9. g5 hxg5 10. hxg5 Ne8 11. Qd3 exd5 12. Nxd5 Nc6 13. Qg3 Be6 14. Qh4 f5 15. Qh7+ Kf7 16. Qxg6+ Kxg6 17. Bh5+ Kh7 18. Bf7+ Bh6 19. g6+ Kg7 20. Bxh6+ 1-0"
  },
  {
    id: "geza-maroczy-mikhail-chigorin-1903",
    short: "Maroczy–Chigorin",
    title: "Geza Maroczy – Mikhail Chigorin",
    place: "Vienna, 1903",
    result: "Les Blancs gagnent au 24e coup.",
    pgn: "1. e4 e5 2. f4 exf4 3. Nf3 g5 4. Bc4 g4 5. Nc3 gxf3 6. Qxf3 d6 7. d4 Be6 8. Nd5 c6 9. O-O cxd5 10. exd5 Bf5 11. Bxf4 Bg6 12. Bb5+ Nd7 13. Rae1+ Be7 14. Bxd6 Kf8 15. Rxe7 Nxe7 16. Re1 Kg7 17. Bxe7 Qa5 18. Qe2 Nf8 19. Bf6+ Kg8 20. Qe5 h6 21. Bxh8 f6 22. Qe7 Kxh8 23. Qxf6+ Kg8 24.Re7 1-0"
  },
  {
    id: "nezhmetdinov-oleg-l-chernikov-1962",
    short: "Nezhmetdinov",
    title: "Nezhmetdinov – Oleg L Chernikov",
    place: "Rostov, 1962",
    result: "Les Blancs gagnent au 33e coup.",
    pgn: "1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. Nc3 Bg7 6. Be3 Nf6 7. Bc4 O-O 8. Bb3 Ng4 9. Qxg4 Nxd4 10. Qh4 Qa5 11. O-O Bf6 12. Qxf6 Ne2+ 13. Nxe2 exf6 14. Nc3 Re8 15. Nd5 Re6 16. Bd4 Kg7 17. Rad1 d6 18. Rd3 Bd7 19. Rf3 Bb5 20. Bc3 Qd8 21. Nxf6 Be2 22. Nxh7+ Kg8 23. Rh3 Re5 24. f4 Bxf1 25. Kxf1 Rc8 26. Bd4 b5 27. Ng5 Rc7 28. Bxf7+ Rxf7 29. Rh8+ Kxh8 30. Nxf7+ Kh7 31. Nxd8 Rxe4 32. Nc6 Rxf4+ 33. Ke2 1-0"
  },
  {
    id: "aron-nimzowitsch-systemsson-1927",
    short: "Surprotection",
    title: "Aron Nimzowitsch – Systemsson",
    place: "Copenhagen, 1927",
    result: "Les Blancs gagnent au 24e coup.",
    pgn: "1.e4 e6 2.h4 d5 3.e5 c5 4.d4 cxd4 5.h5 Qb6 6.h6 Nxh6 7.Qh5 g6 8.Qh2 Nf5 9.Bd3 Nc6 10.Nf3 h5 11.b3 Bg7 12.Bf4 Bd7 13.Nbd2 Rc8 14.Ke2 Nb4 15.Ne1 Nxd3 16.Nxd3 Rxc2 17.Rae1 a5 18.Kd1 Rc6 19.Re2 Ke7 20.Rhe1 Re8 21.Nf3 Bf8 22.g4 hxg4 23.Qh7 gxf3 24.Bg5# 1-0"
  },
  {
    id: "nn-david-bronstein-1961",
    short: "Rêve de Bronstein",
    title: "NN – David Bronstein",
    place: "Dream Game (composition), 1961",
    result: "Les Noirs gagnent au 19e coup.",
    pgn: "1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Bg5 h6 5. Bh4 Qe7 6. Nf3 d6 7. Qa4+ Nc6 8. d5 exd5 9. cxd5 Qe4 10. Nd2 Qxh4 11. dxc6 O-O 12. a3 Ng4 13. g3 Qf6 14. axb4 Qxf2+ 15. Kd1 b5 16. Qb3 Be6 17. Qa3 Ne3+ 18. Kc1 Qe1+ 19. Nd1 Qxd1# 0-1"
  },
  {
    id: "per-ofstad-wolfgang-uhlmann-1963",
    short: "Ofstad–Uhlmann",
    title: "Per Ofstad – Wolfgang Uhlmann",
    place: "zt, 1963",
    result: "Les Blancs gagnent au 19e coup.",
    pgn: "1.e4 e6 2.d4 d5 3.Nd2 c5 4.exd5 Qxd5 5.Ngf3 cxd4 6.Bc4 Qd6 7.O-O Nc6 8.Re1 a6 9.a4 Qc7 10.Ne4 Bd7 11.Nxd4 Be7 12.Nf5 exf5 13.Nd6+ Kf8 14.Nxf7 Be8 15.Qd5 Qa5 16.Qe6 Nd4 17.Ng5 Bxg5 18.Qd6+ Be7 19.Rxe7 1-0"
  },
  {
    id: "lembit-oll-mikhail-ulibin-1989",
    short: "Oll–Ulibin",
    title: "Lembit Oll – Mikhail Ulibin",
    place: "Tbilisi, 1989",
    result: "Les Blancs gagnent au 34e coup.",
    pgn: "1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 O-O 8. Bd3 Nbc6 9. Qh5 h6 10. Bxh6 gxh6 11. Qxh6 Nf5 12. Bxf5 exf5 13. Nh3 f6 14. Qg6+ Kh8 15. Qh6+ Kg8 16. Qg6+ Kh8 17. O-O-O fxe5 18. Qh6+ Kg8 19. Qg6+ Kh8 20. Rd3 f4 21. Qh6+ Kg8 22. Qg6+ Kh8 23. Qh6+ Kg8 24. Rg3+ fxg3 25. Qg6+ Kh8 26. hxg3 Qh4 27. gxh4 Bf5 28. Qh6+ Kg8 29. Ng5 exd4 30. Rh3 Ne5 31. Rg3 Bg6 32. Ne6 Kf7 33. Nxf8 Rxf8 34. Qf4+ 1-0"
  },
  {
    id: "harry-nelson-pillsbury-emanuel-lasker-1896",
    short: "Pillsbury–Lasker",
    title: "Harry Nelson Pillsbury – Emanuel Lasker",
    place: "Petersburg 1895-96, 1896",
    result: "Les Noirs gagnent au 30e coup.",
    pgn: "1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 c5 5. Bg5 cxd4 6. Qxd4 Nc6 7. Qh4 Be7 8. O-O-O Qa5 9. e3 Bd7 10. Kb1 h6 11. cxd5 exd5 12. Nd4 O-O 13. Bxf6 Bxf6 14. Qh5 Nxd4 15. exd4 Be6 16. f4 Rac8 17. f5 Rxc3 18. fxe6 Ra3 19. exf7+ Rxf7 20. bxa3 Qb6+ 21. Bb5 Qxb5+ 22. Ka1 Rc7 23. Rd2 Rc4 24. Rhd1 Rc3 25. Qf5 Qc4 26. Kb2 Rxa3 27. Qe6+ Kh7 28. Kxa3 Qc3+ 29. Ka4 b5+ 30. Kxb5 Qc4+ 0-1"
  },
  {
    id: "lev-polugaevsky-nezhmetdinov-1958",
    short: "Polu–Nezh",
    title: "Lev Polugaevsky – Nezhmetdinov",
    place: "Sochi 28th RSFSR ch, 1958",
    result: "Les Noirs gagnent au 33e coup.",
    pgn: "1. d4 Nf6 2. c4 d6 3. Nc3 e5 4. e4 exd4 5. Qxd4 Nc6 6. Qd2 g6 7. b3 Bg7 8. Bb2 O-O 9. Bd3 Ng4 10. Nge2 Qh4 11. Ng3 Nge5 12. O-O f5 13. f3 Bh6 14. Qd1 f4 15. Nge2 g5 16. Nd5 g4 17. g3 fxg3 18. hxg3 Qh3 19. f4 Be6 20. Bc2 Rf7 21. Kf2 Qh2+ 22. Ke3 Bxd5 23. cxd5 Nb4 24. Rh1 Rxf4 25. Rxh2 Rf3+ 26. Kd4 Bg7 27. a4 c5+ 28. dxc6 bxc6 29. Bd3 Nexd3+ 30. Kc4 d5+ 31. exd5 cxd5+ 32. Kb5 Rb8+ 33. Ka5 Nc6+ 0-1"
  },
  {
    id: "j-reinisch-karel-traxler-1890",
    short: "Traxler",
    title: "J Reinisch – Karel Traxler",
    place: "Hostoun, 1890",
    result: "Les Noirs gagnent au 17e coup.",
    pgn: "1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6 4.Ng5 Bc5 5.Nxf7 Bxf2+ 6.Ke2 Nd4+ 7.Kd3 b5 8.Bb3 Nxe4 9.Nxd8 Nc5+ 10.Kc3 Ne2+ 11.Qxe2 Bd4+ 12.Kb4 a5+ 13.Kxb5 Ba6+ 14.Kxa5 Bd3+ 15.Kb4 Na6+ 16.Ka4 Nb4+ 17.Kxb4 c5# 0-1"
  },
  {
    id: "richard-reti-alexander-alekhine-1925",
    short: "Réti–Alekhine",
    title: "Richard Reti – Alexander Alekhine",
    place: "Baden Baden, 1925",
    result: "Les Noirs gagnent au 40e coup.",
    pgn: "1. g3 e5 2. Nf3 e4 3. Nd4 d5 4. d3 exd3 5. Qxd3 Nf6 6. Bg2 Bb4+ 7. Bd2 Bxd2+ 8. Nxd2 O-O 9. c4 Na6 10. cxd5 Nb4 11. Qc4 Nbxd5 12. N2b3 c6 13. O-O Re8 14. Rfd1 Bg4 15. Rd2 Qc8 16. Nc5 Bh3 17. Bf3 Bg4 18. Bg2 Bh3 19. Bf3 Bg4 20. Bh1 h5 21. b4 a6 22. Rc1 h4 23. a4 hxg3 24. hxg3 Qc7 25. b5 axb5 26. axb5 Re3 27. Nf3 cxb5 28. Qxb5 Nc3 29. Qxb7 Qxb7 30. Nxb7 Nxe2+ 31. Kh2 Ne4 32. Rc4 Nxf2 33. Bg2 Be6 34. Rcc2 Ng4+ 35. Kh3 Ne5+ 36. Kh2 Rxf3 37. Rxe2 Ng4+ 38. Kh3 Ne3+ 39. Kh2 Nxc2 40. Bxf3 Nd4 0-1"
  },
  {
    id: "georg-rotlewi-akiba-rubinstein-1907",
    short: "Rubinstein",
    title: "Georg Rotlewi – Akiba Rubinstein",
    place: "Lodz, 1907",
    result: "Les Noirs gagnent au 25e coup.",
    pgn: "1.d4 d5 2.Nf3 e6 3.e3 c5 4.c4 Nc6 5.Nc3 Nf6 6.dxc5 Bxc5 7.a3 a6 8.b4 Bd6 9.Bb2 O-O 10.Qd2 Qe7 11.Bd3 dxc4 12.Bxc4 b5 13.Bd3 Rd8 14.Qe2 Bb7 15.O-O Ne5 16.Nxe5 Bxe5 17.f4 Bc7 18.e4 Rac8 19.e5 Bb6+ 20.Kh1 Ng4 21.Be4 Qh4 22.g3 Rxc3 23.gxh4 Rd2 24.Qxd2 Bxe4+ 25.Qg2 Rh3 0-1"
  },
  {
    id: "friedrich-saemisch-aron-nimzowitsch-1923",
    short: "Zugzwang",
    title: "Friedrich Saemisch – Aron Nimzowitsch",
    place: "Copenhagen, 1923",
    result: "Les Noirs gagnent au 25e coup.",
    pgn: "1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Be7 6. Nc3 O-O 7. O-O d5 8. Ne5 c6 9. cxd5 cxd5 10. Bf4 a6 11. Rc1 b5 12. Qb3 Nc6 13. Nxc6 Bxc6 14. h3 Qd7 15. Kh2 Nh5 16. Bd2 f5 17. Qd1 b4 18. Nb1 Bb5 19. Rg1 Bd6 20. e4 fxe4 21. Qxh5 Rxf2 22. Qg5 Raf8 23. Kh1 R8f5 24. Qe3 Bd3 25. Rce1 h6 0-1"
  },
  {
    id: "grigory-serper-ioannis-nikolaidis-1993",
    short: "Serper",
    title: "Grigory Serper – Ioannis Nikolaidis",
    place: "St Petersburg, 1993",
    result: "Les Blancs gagnent au 48e coup.",
    pgn: "1.c4 g6 2.e4 Bg7 3.d4 d6 4.Nc3 Nf6 5.Nge2 Nbd7 6.Ng3 c6 7.Be2 a6 8.Be3 h5 9.f3 b5 10.c5 dxc5 11.dxc5 Qc7 12.O-O h4 13.Nh1 Nh5 14.Qd2 e5 15.Nf2 Nf8 16.a4 b4 17.Nd5 cxd5 18.exd5 f5 19.d6 Qc6 20.Bb5 axb5 21.axb5 Qxb5 22.Rxa8 Qc6 23.Rfa1 f4 24.R1a7 Nd7 25.Rxc8+ Qxc8 26.Qd5 fxe3 27.Qe6+ Kf8 28.Rxd7 exf2+ 29.Kf1 Qe8 30.Rf7+ Qxf7 31.Qc8+ Qe8 32.d7 Kf7 33.dxe8=Q+ Rxe8 34.Qb7+ Re7 35.c6 e4 36.c7 e3 37.Qd5+ Kf6 38.Qd6+ Kf7 39.Qd5+ Kf6 40.Qd6+ Kf7 41.Qxe7+ Kxe7 42.c8=Q Bh6 43.Qc5+ Ke8 44.Qb5+ Kd8 45.Qb6+ Kd7 46.Qxg6 e2+ 47.Kxf2 Be3+ 48.Ke1 1-0"
  },
  {
    id: "alexey-shirov-judit-polgar-1994",
    short: "Shirov–Polgar",
    title: "Alexey Shirov – Judit Polgar",
    place: "Buenos Aires, 1994",
    result: "Les Noirs gagnent au 29e coup.",
    pgn: "1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 d6 6.g4 a6 7.Be3 Nge7 8.Nb3 b5 9.f4 Bb7 10.Qf3 g5 11.fxg5 Ne5 12.Qg2 b4 13.Ne2 h5 14.gxh5 Nf5 15.Bf2 Qxg5 16.Na5 Ne3 17.Qg3 Qxg3 18.Nxg3 Nxc2+ 19.Kd1 Nxa1 20.Nxb7 b3 21.axb3 Nxb3 22.Kc2 Nc5 23.Nxc5 dxc5 24.Be1 Nf3 25.Bc3 Nd4+ 26.Kd3 Bd6 27.Bg2 Be5 28.Kc4 Ke7 29.Ra1 Nc6 0-1"
  },
  {
    id: "bogdan-sliwa-david-bronstein-1957",
    short: "Sliwa–Bronstein",
    title: "Bogdan Sliwa – David Bronstein",
    place: "It, 1957",
    result: "Les Blancs gagnent au 29e coup.",
    pgn: "1. d4 f5 2. g3 g6 3. Bg2 Bg7 4. Nc3 Nf6 5. Bg5 Nc6 6. Qd2 d6 7. h4 e6 8. O-O-O h6 9. Bf4 Bd7 10. e4 fxe4 11. Nxe4 Nd5 12. Ne2 Qe7 13. c4 Nb6 14. c5 dxc5 15. Bxc7 O-O 16. Bd6 Qf7 17. Bxf8 Rxf8 18. dxc5 Nd5 19. f4 Rd8 20. N2c3 Ndb4 21. Nd6 Qf8 22. Nxb7 Nd4 23. Nxd8 Bb5 24. Nxe6 Bd3 25. Bd5 Qf5 26. Nxd4+ Qxd5 27. Nc2 Bxc3 28. bxc3 Qxa2 29. cxb4 1-0"
  },
  {
    id: "boris-spassky-david-bronstein-1960",
    short: "Spassky–Bronstein",
    title: "Boris Spassky – David Bronstein",
    place: "Leningrad, 1960",
    result: "Les Blancs gagnent au 23e coup.",
    pgn: "1. e4 e5 2. f4 exf4 3. Nf3 d5 4. exd5 Bd6 5. Nc3 Ne7 6. d4 O-O 7. Bd3 Nd7 8. O-O h6 9. Ne4 Nxd5 10. c4 Ne3 11. Bxe3 fxe3 12. c5 Be7 13. Bc2 Re8 14. Qd3 e2 15. Nd6 Nf8 16. Nxf7 exf1=Q+ 17. Rxf1 Bf5 18. Qxf5 Qd7 19. Qf4 Bf6 20. N3e5 Qe7 21. Bb3 Bxe5 22. Nxe5+ Kh7 23. Qe4+ 1-0"
  },
  {
    id: "robert-steel-nn-1886",
    short: "Steel–NN",
    title: "Robert Steel – NN",
    place: "Calcutta, 1886",
    result: "Les Blancs gagnent au 26e coup.",
    pgn: "1.e4 e5 2.Nc3 Nc6 3.f4 exf4 4.d4 Qh4+ 5.Ke2 d5 6.exd5 Bg4+ 7.Nf3 O-O-O 8.dxc6 Bc5 9.cxb7+ Kb8 10.Nb5 Nf6 11.c3 Rhe8+ 12.Kd3 Bf5+ 13.Kc4 Be6+ 14.Kxc5 a5 15.Nxc7 Qh5+ 16.Ne5 Nd7+ 17.Kb5 Qxd1 18.Bxf4 Qxa1 19.Ka6 Nxe5 20.Nxe8 f6 21.dxe5 f5 22.Be3 Rxe8 23.Bb5 Qxh1 24.Ba7+ Kc7 25.Bc5 Rd8 26.Ka7 1-0"
  },
  {
    id: "wilhelm-steinitz-curt-von-bardeleben-1895",
    short: "Steinitz",
    title: "Wilhelm Steinitz – Curt von Bardeleben",
    place: "Hastings, England, 1895",
    result: "Les Blancs gagnent au 25e coup.",
    pgn: "1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 d5 8. exd5 Nxd5 9. O-O Be6 10. Bg5 Be7 11. Bxd5 Bxd5 12. Nxd5 Qxd5 13. Bxe7 Nxe7 14. Re1 f6 15. Qe2 Qd7 16. Rac1 c6 17. d5 cxd5 18. Nd4 Kf7 19. Ne6 Rhc8 20. Qg4 g6 21. Ng5+ Ke8 22. Rxe7+ Kf8 23. Rf7+ Kg8 24. Rg7+ Kh8 25. Rxh7+ 1-0"
  },
  {
    id: "mir-sultan-khan-jose-raul-capablanca-1930",
    short: "Sultan Khan",
    title: "Mir Sultan Khan – Jose Raul Capablanca",
    place: "Hastings, 1930",
    result: "Les Blancs gagnent au 65e coup.",
    pgn: "1.Nf3 Nf6 2.d4 b6 3.c4 Bb7 4.Nc3 e6 5.a3 d5 6.cxd5 exd5 7.Bg5 Be7 8.e3 O-O 9.Bd3 Ne4 10.Bf4 Nd7 11.Qc2 f5 12.Nb5 Bd6 13.Nxd6 cxd6 14.h4 Rc8 15.Qb3 Qe7 16.Nd2 Ndf6 17.Nxe4 fxe4 18.Be2 Rc6 19.g4 Rfc8 20.g5 Ne8 21.Bg4 Rc1+ 22.Kd2 R8c2+ 23.Qxc2 Rxc2+ 24.Kxc2 Qc7+ 25.Kd2 Qc4 26.Be2 Qb3 27.Rab1 Kf7 28.Rhc1 Ke7 29.Rc3 Qa4 30.b4 Qd7 31.Rbc1 a6 32.Rg1 Qa4 33.Rgc1 Qd7 34.h5 Kd8 35.R1c2 Qh3 36.Kc1 Qh4 37.Kb2 Qh3 38.Rc1 Qh4 39.R3c2 Qh3 40.a4 Qh4 41.Ka3 Qh3 42.Bg3 Qf5 43.Bh4 g6 44.h6 Qd7 45.b5 a5 46.Bg3 Qf5 47.Bf4 Qh3 48.Kb2 Qg2 49.Kb1 Qh3 50.Ka1 Qg2 51.Kb2 Qh3 52.Rg1 Bc8 53.Rc6 Qh4 54.Rgc1 Bg4 55.Bf1 Qh5 56.Re1 Qh1 57.Rec1 Qh5 58.Kc3 Qh4 59.Bg3 Qxg5 60.Kd2 Qh5 61.Rxb6 Ke7 62.Rb7+ Ke6 63.b6 Nf6 64.Bb5 Qh3 65.Rb8 1-0"
  },
  {
    id: "mikhail-tal-bent-larsen-1965",
    short: "Tal–Larsen",
    title: "Mikhail Tal – Bent Larsen",
    place: "Bled, 1965",
    result: "Les Blancs gagnent au 37e coup.",
    pgn: "1.e4 c5 2.Nf3 Nc6 3.d4 cxd4 4.Nxd4 e6 5.Nc3 d6 6.Be3 Nf6 7.f4 Be7 8.Qf3 O-O 9.O-O-O Qc7 10.Ndb5 Qb8 11.g4 a6 12.Nd4 Nxd4 13.Bxd4 b5 14.g5 Nd7 15.Bd3 b4 16.Nd5 exd5 17.exd5 f5 18.Rde1 Rf7 19.h4 Bb7 20.Bxf5 Rxf5 21.Rxe7 Ne5 22.Qe4 Qf8 23.fxe5 Rf4 24.Qe3 Rf3 25.Qe2 Qxe7 26.Qxf3 dxe5 27.Re1 Rd8 28.Rxe5 Qd6 29.Qf4 Rf8 30.Qe4 b3 31.axb3 Rf1+ 32.Kd2 Qb4+ 33.c3 Qd6 34.Bc5 Qxc5 35.Re8+ Rf8 36.Qe6+ Kh8 37.Qf7 1-0"
  },
  {
    id: "veselin-topalov-levon-aronian-2006",
    short: "Topalov–Aronian",
    title: "Veselin Topalov – Levon Aronian",
    place: "Wijk aan Zee, 2006",
    result: "Les Blancs gagnent au 44e coup.",
    pgn: "1.d4 Nf6 2.c4 e6 3.Nf3 b6 4.g3 Ba6 5.b3 Bb4+ 6.Bd2 Be7 7.Bg2 c6 8.Bc3 d5 9.Ne5 Nfd7 10.Nxd7 Nxd7 11.Nd2 O-O 12.O-O Nf6 13.e4 b5 14.exd5 exd5 15.Re1 Rb8 16.c5 Bc8 17.Nf3 Ne4 18.Rxe4 dxe4 19.Ne5 Qd5 20.Qe1 Bf5 21.g4 Bg6 22.f3 b4 23.fxe4 Qe6 24.Bb2 Bf6 25.Nxc6 Qxc6 26.e5 Qa6 27.exf6 Rfe8 28.Qf1 Qe2 29.Qf2 Qxg4 30.h3 Qg5 31.Bc1 Qh5 32.Bf4 Rbd8 33.c6 Be4 34.c7 Rc8 35.Re1 Qg6 36.Rxe4 Rxe4 37.d5 Rce8 38.d6 Re1+ 39.Kh2 Qf5 40.Qg3 g6 41.Qg5 Qxg5 42.Bxg5 Rd1 43.Bc6 Re2+ 44.Kg3 1-0"
  },
  {
    id: "veselin-topalov-alexey-shirov-1998",
    short: "Shirov Bh3",
    title: "Veselin Topalov – Alexey Shirov",
    place: "Linares, 1998",
    result: "Les Noirs gagnent au 53e coup.",
    pgn: "1.d4 Nf6 2.c4 g6 3.Nc3 d5 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7 7.Bb5+ c6 8.Ba4 O-O 9.Ne2 Nd7 10.O-O e5 11.f3 Qe7 12.Be3 Rd8 13.Qc2 Nb6 14.Bb3 Be6 15.Rad1 Nc4 16.Bc1 b5 17.f4 exd4 18.Nxd4 Bg4 19.Rde1 Qc5 20.Kh1 a5 21.h3 Bd7 22.a4 bxa4 23.Ba2 Be8 24.e5 Nb6 25.f5 Nd5 26.Bd2 Nb4 27.Qxa4 Nxa2 28.Qxa2 Bxe5 29.fxg6 hxg6 30.Bg5 Rd5 31.Re3 Qd6 32.Qe2 Bd7 33.c4 Bxd4 34.cxd5 Bxe3 35.Qxe3 Re8 36.Qc3 Qxd5 37.Bh6 Re5 38.Rf3 Qc5 39.Qa1 Bf5 40.Re3 f6 41.Rxe5 Qxe5 42.Qa2+ Qd5 43.Qxd5+ cxd5 44.Bd2 a4 45.Bc3 Kf7 46.h4 Ke6 47.Kg1 Bh3 48.gxh3 Kf5 49.Kf2 Ke4 50.Bxf6 d4 51.Be7 Kd3 52.Bc5 Kc4 53.Be7 Kb3 0-1"
  },
  {
    id: "heinrich-wagner-wilhelm-schoenmann-1919",
    short: "Wagner",
    title: "Heinrich Wagner – Wilhelm Schoenmann",
    place: "Correspondence, 1919",
    result: "Les Blancs gagnent au 25e coup.",
    pgn: "1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. Nbd2 f6 6. e6 Bxe6 7. a3 a5 8. b3 f5 9. Bb2 Bc5 10. Qc2 Qe7 11. g3 O-O-O 12. Qd3 Nh6 13. Bg2 Ng4 14. O-O h5 15. b4 axb4 16. axb4 Nxb4 17. Qb3 Nc6 18. Qb5 Bb6 19. Bxd4 Bxd4 20. Nxd4 Rxd4 21. Qxb7+ Kxb7 22. Rfb1+ Kc8 23. Bxc6 Qa3 24. Rb8+ Kxb8 25. Rxa3 1-0"
  },
  {
    id: "johannes-zukertort-joseph-henry-blackburne-1883",
    short: "Zukertort",
    title: "Johannes Zukertort – Joseph Henry Blackburne",
    place: "London, 1883",
    result: "Les Blancs gagnent au 33e coup.",
    pgn: "1. c4 e6 2. e3 Nf6 3. Nf3 b6 4. Be2 Bb7 5. O-O d5 6. d4 Bd6 7. Nc3 O-O 8. b3 Nbd7 9. Bb2 Qe7 10. Nb5 Ne4 11. Nxd6 cxd6 12. Nd2 Ndf6 13. f3 Nxd2 14. Qxd2 dxc4 15. Bxc4 d5 16. Bd3 Rfc8 17. Rae1 Rc7 18. e4 Rac8 19. e5 Ne8 20. f4 g6 21. Re3 f5 22. exf6 Nxf6 23. f5 Ne4 24. Bxe4 dxe4 25. fxg6 Rc2 26. gxh7+ Kh8 27. d5+ e5 28. Qb4 R8c5 29. Rf8+ Kxh7 30. Qxe4+ Kg7 31. Bxe5+ Kxf8 32. Bg7+ Kg8 33. Qxe7 1-0"
  }
];
