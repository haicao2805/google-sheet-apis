![npm](https://img.shields.io/npm/v/google-sheet-apis)
![npm](https://img.shields.io/npm/dw/google-sheet-apis)
![npm bundle size](https://img.shields.io/bundlephobia/min/google-sheet-apis)

[![NPM](https://nodei.co/npm/google-sheet-apis.png)](https://nodei.co/npm/google-sheet-apis)

# google-sheet-apis

# How to use it

## 1. Install the package

### npm

```sh
npm install google-sheet-apis
```

### yarn

```sh
yarn add google-sheet-apis
```

## 2. Set up to access Google Sheet API

### 2.1 Create a new project in Google Console

Go to [Google Console](https://console.cloud.google.com/) >> Select a project >> NEW PROJECT >> Type your project's name >> CREATE

<details>
<summary>Show steps</summary>
<img src="./images/2.1/group1.png"/>
<img src="./images/2.1/group2.png"/>
<img src="./images/2.1/group3.png"/>
</details>
<br />

### 2.2 Enable Google Sheets API

Select your project >> Search: Google Sheet API >> ENABLE

<details>
<summary>Show steps</summary>
<img src="./images/2.2/group4.png"/>
<img src="./images/2.2/group5.png"/>
</details>
<br />

### 2.3 Create Service Accounts Credentials

Credentials >> + CREATE CREDENTIALS >> Service account >> Type your service'name >> CREATE AND CONTINUE >> CONTINUE >> DONE

<details>
<summary>Show steps</summary>
<img src="./images/2.3/group6.png"/>
<img src="./images/2.3/group7.png"/>
<img src="./images/2.3/group8.png"/>
<img src="./images/2.3/group9.png"/>
<img src="./images/2.3/group10.png"/>
</details>
<br />

### 2.4 Add JSON keys

Click on the email in Service Accounts >> KEYS >> ADD KEY >> Create new key >> JSON >> CREATE >> The key will be downloaded in your machine

<details>
<summary>Show steps</summary>
<img src="./images/2.4/group11.png"/>
<img src="./images/2.4/group12.png"/>
<img src="./images/2.4/group13.png"/>
<img src="./images/2.4/group14.png"/>
</details>
<br />

## 3. Example to use the package
