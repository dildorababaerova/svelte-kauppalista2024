# svelte-kauppalista2024
Kauppalista koodattuna SvelteKitilla ja Pocketbase taustajärjestelmällä

1.Luodaan varsinainen projekti

Terminaali ikkuna
* `npm --help`
* tarkistetaan onko asennettu node, muuten asennetaan https://nodejs.org/en.
* Tulee "Tools for Node.js Native modules Installation Script" ikkuna. 
* Paina `Enter`
* Asennuksen jälkeen taas `Enter`
* Tarkista `npm --help`, `npm -v` 
* Voidaan uusittaa versio `npm install -g npm@latest`
* Jos halutaan uusuttaa node version `nvm install 20` => `nvm install [version.number]`
* `npm create svelte@latest kauppalista`, `Enter` => Y
* Tulee lisää kysymyksiä, liikkuu nuolinappaimen kanssa 
- Valitse Skeleton project
- jos ei halua TypeScript, valitse No
- Valitse `Add Eslint ...`sekä `Add Pretter for code formating`, `space` nappaimilla
![alt text](image-1.png)

Terminaalin seuraavat ajetaan komennot:

1: `cd kauppa`
2: `npm install`
3: `git init` && `git add -A` && `git commit -m "Initial commit" `(optional)
4: `npm run dev -- --open`

2. prettierrc tiedostoon:

{
    
    "useTabs": false,
    "tabWidth": 4,
    "singleQuote": true,
    "trailingComma": "es5",
    "printWidth": 79,
    "proseWrap": "always",
    "bracketSpacing": false,
    "plugins": ["prettier-plugin-svelte"],
    "overrides": [{"files": "*.svelte", "options": {"parser": "svelte"}}]
}













