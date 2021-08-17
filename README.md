# App Gif React

## Search gifs app
![alt text](https://github.com/KryptomSilver/gif-app-react/blob/main/previw.png?raw=true)

#### Table of Contents
- [Development Setup](#development-setup)
  - [Install dependencies](#install-dependencies)
  - [Run Project](#run-project)
- [Production Setup](#production-setup)
  - [Install Serve](#install-serve-globaly)
  - [Bulding Project](#build-the-app)
  - [Start Project on production](#start-the-server)


## Development Setup

#### First, clone the repo and cd into the project:
```bash
git clone https://github.com/KryptomSilver/gif-app-react.git
cd gif-app-react
```

### Install dependencies:
```bash
cd gif-app-react
npm i
```

### Run project:

```bash
cd gif-app-react
npm start
```

## Production Setup

### Install serve globaly:
```bash
npm i -g serve
```
### Build the app:
```bash
npm run build # Or yarn build
```
### Start the server:
```bash
serve -s build -l 3000 # Or another port of your choice
```