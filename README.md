#INSTALL DAN CONFIGURASI TYPESCRIPT

- Membuat Folder Project
- Buka Folder Project di Code Editor (Visual Studio Code)
- Install Node.Js
- Jalankan Perintah :

```sh
npm init
```

- Install Typescript
  - Install secara global :

```sh
npm install -g typescript
```

- Install secara Local :

```sh
npm install -D typescript
```

- Membuat File tsconfig.json dengan perintah :

```sh
tsc --init
```

- Dalam Folder tsconfig.json, aktifkan script dibawah ini :

```js
"allowJs": true
```

dan "outDir": "" ditambahkan seperti ini :

```js
"outDir": "./build"
```

- Mensetting script seperti dibawah ini :

```js
"script": {
    "start": "tsc && node ./build/index.js",
    "dev": "nodemon ./build/index.js" //Jika sudah terinstall nodemon
}
```

- Isi file di index.ts lalu jalankan

```sh
npm start
```

File index.ts akan secara otomatis dicompile ke javascript. File Js nya bisa dilihat di dalam folder build

SELESAI !
