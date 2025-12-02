# Cinema Archive - Scene Population Tasks

This file tracks the progress of populating the 50-scene databases for each movie in the Cinema Archive.

## Status

- [x] **Top Gun (1986)**
- [x] **Interview with the Vampire (1994)**
- [x] **Oldboy (2003)**
- [x] **John Wick (2014)**
- [x] **American Psycho (2000)**
- [x] **Gladiator (2000)**
- [x] **Se7en (1995)**
- [x] **Fight Club (1999)**
- [x] **Aliens (1986)**
- [x] **Predator (1987)**
- [x] **Joker (2019)**
- [x] **Dune (2021)**
- [x] **The Matrix (1999)**
- [x] **Blade Runner 2049 (2017)**
- [x] **Mad Max: Fury Road (2015)**
- [x] **The Dark Knight (2008)**
- [x] **Pulp Fiction (1994)**
- [x] **Terminator 2: Judgment Day (1991)**
- [x] **Inception (2010)**
- [x] **Kill Bill: Vol. 1 (2003)**
- [x] **No Country for Old Men (2007)**
- [x] **Drive (2011)**
- [x] **The Fifth Element (1997)**
- [x] **Interstellar (2014)**
- [x] **The Shining (1980)**
- [x] **Tron: Legacy (2010)**
- [x] **Taxi Driver (1976)**

## Workflow for Adding a Movie

1.  **Generate Scenes**: Create 50 detailed scene descriptions ("Mega-Prompts") capturing key moments, lighting, and atmosphere.
2.  **Create Data File**: Create a new file `src/data/scenes/[movie-id].ts`.
3.  **Register**: Import and add the scenes to `src/data/scenes.ts`.
4.  **Verify**: Test the movie in the application to ensure scenes load and prompts generate correctly.
