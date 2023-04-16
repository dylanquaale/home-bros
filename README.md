# Homebros
https://arcane-savannah-38796.herokuapp.com/

## Description

AS A REAL ESTATE BROKER
I WANT TO SHOW HOMEBUYERS MY CURRENT REAL ESTATE LISTINGS
HOMEBUYERS CAN SAVE/DELETE LISTINGS
SO THAT IT’S EASIER FOR HOMEBUYERS TO SEARCH FOR A HOUSE AND RECALL HOUSES THAT THEY LIKE.

- As a real estate brokerage we wanted to make a web app the makes it easy for our clients to view and save our current listings along with save their information to our site. Users can create a profile signup/login/logout/save properties and delete properties. Along with being able to update all of your information as far as username, email and password. On our home page the user is presented with cards containing an image of the property along with information about the property when our dropdown arrow is clicked. Click the heart on the left of the card and the property is now saved as one of your saved properties and the heart is turned red.  Navigate to your ‘saved properties’ tab and you will be presented with all of the properties you have saved. In the same dropdown tab on the card you will find a remove property button. When clicked the property is removed from your saved properties list. Navigate to your profile page and the user is able to update their username, email, and password. 

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Questions](#questions)

## Installation 
- Installation instructions

npm i 
This will install all of the dependencies that are necessry. 
(You will need either MonogoDB Compass or access to the Apollo Graphql playground)
run cd server/utils and run node seed.js which will seed randomly generated properties from the faker API and insert them into the database which is why you need MongoDB or Apollo playground to verify your seeds.
return to the main folder by running cd ../.. and run npm run develop and the will automatically start up.


## Usage

- <a href="https://github.com/dylanquaale/home-bros">Github Repo</a>

- <a href="https://arcane-savannah-38796.herokuapp.com/">Heroku Live Website </a>

SCREENSHOTS

- ![Screenshot of Main Page/home page](/client/src/Assets/homeBrosMain.png)
- ![Screenshot of SignUp/signup page](/client/src/Assets/homeBrosSignUp.png)
- ![Screenshot of Login/login page](/client/src/Assets/homeBrosLogin.png)
- ![Screenshot of Change User Data page/profile page](/client/src/Assets/homeBrosChangeUserData.png)
- ![Screenshot of User Saved Properties page/saved page](/client/src/Assets/homeBrosChangeUserData.png)
- ![Screenshot of Footer/home page](/client/src/Assets/homeBrosFooter.png)

## Credits 

- In collaboration with : 
- Miguel Montenegro  https://github.com/Darkunitx
- Nicholas Mamberger https://github.com/NickHM05
- Krister Myrlønn    https://github.com/kristermyr
- Dylan Quaale       https://github.com/dylanquaale
- Salahuddin Imdad   https://github.com/Sal8298
- Instructor Charlie Werness
- TA Emma Olson
- TA Chris Stallcup
- Tutor Matthew Calimbas

## License

- MIT License

- Copyright (c) [2023] [Homebros App]

- Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

- The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
