# ImVitro Frontend
Hey ! Welcome on the frontend project of the product ImVitro. 💻
If you are here, it's maybe because you want to develop on the current app. So welcome !

Follow each following steps to install and launch the front-end environement. You will next be able to launch the rocket !

## Pre-req
Before you start coding, you'll need to have the next tools installed on your laptop:

- NodeJs (v15.4.0) - You can either use NVM for a better version handling
- NPM (v7.0.15)
- ⚠️ With Node-Gyp and Node-Sass installation. If you are using a Mac OS X system, make sure you have XCode installed, if you have any issues, run the following commands:

```bash
npm rebuild node-sass
```

## Clone Repository
You can now clone the current repository, choose either `ssh` or `https` cloning method:

HTTP example:
```bash
git clone https://gitlab.com/imvitro/imvitro-frontend.git
```

SSH example:
```bash
git clone git@gitlab.com:imvitro/imvitro-frontend.git
```

## Install the project
The project uses VueJs version 2. To install the project, open your terminal, go inside the project you just cloned:

```bash
cd imvitro-frontend
npm install
```

## Local database configuration & Env. variables.

// TODO

## Launch the project 🚀
In order to develop on the project you can use a lot of commands to launch the project:

```bash
# Local database
npm run serve

# Allows you to launch the server with base API pointing on the staging API of ImVitro.
npm run serve:staging
```
## Create a production bundle of the solution
Here you can create a minified version of the current app to deploy it wherever you want.

``` bash
# build for production with minification
npm run build
```

## CI/CD

TODO

## Workflow on this project

We use a simple Git Flow to develop new features on this project. If you do not know what is git flow just take the following [documentation](https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html). Here is our branching system:

- FEATURES: feature/<topic>
- EPICS: epic/<topic>
- DEVELOP: develop (base merging branch)
- RELEASES: release/vX.X.X
- MASTER: master (base stable branch with all tagged versions)

// TODO continue explanation.

## Icons Handling

All Icons ar located inside the following folder: `icons-imvitro-fonts-demo` (this will be available in a new repo soon)
