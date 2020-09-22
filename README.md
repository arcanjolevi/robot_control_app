# Robot control app

<h1 align="center">
    <img alt="CCL" title="logo" src="https://github.com/arcanjolevi/robot_control_interface/blob/master/schemas/ezgif.com-video-to-gif.gif" width="700px" />
</h1>

### Communication layer

<h1 align="center">
    <img alt="CCL" title="logo" src="https://github.com/arcanjolevi/control_communication_interface_for_hover_robot/blob/master/schemas/CCL.png" width="400px" />
</h1>

<h4 align="center">
  🚀 Description
</h4>

<h5 align="center">
  This project is an implementation of a mobile app for control agrobot/coronaKiller robots.
</h5>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/arcanjolevi/robot_control_app">

  <a href="https://github.com/arcanjolevi/robot_control_app/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arcanjolevi/robot_control_app">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arcanjolevi/robot_control_app">
  
  <a href="https://github.com/arcanjolevi/robot_control_app/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/arcanjolevi/robot_control_app">
  </a>
</p>

#### ❯ AgroBot/CoronaKiller official repository:
https://github.com/CaioslppUO/Agrobot-2.0

#### ❯ Server and communication layer repository:
https://github.com/arcanjolevi/robot_control_interface

## Use instructions

### ❯ How to use the mobile app

* Download the app here: https://github.com/arcanjolevi/robot_control_interface/releases/download/coronaKiller/mobileAppControl.apk
* Configure the communication data: server ip and port.
* When the server is running at the same network that the mobile device is connectd and the commnunication data is set correctly in the device, both will connect automatically.

### ❯ How run the server

* Clone this ropository
```
https://github.com/arcanjolevi/robot_control_interface.git && cd robot_control_interface
```
* Change directory to server folder and run npm to install modules
```
cd server && npm install
```
* Run the server
```
npm start
```
