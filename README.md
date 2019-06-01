# friend finder

A compatibility-based "Friend Finder" application

[Live Demo](https://mc-friend-finder.herokuapp.com/)

## Overview

In this app, is compatibility-based "Friend Finder" application -- basically a dating app. This full-stack site takes in results from the users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
 
This app uses Express to handle routing and chosen for HTML form  formatting

[Express](https://www.npmjs.com/package/express)

[Chosen](https://harvesthq.github.io/chosen/)


## Settings

For local use:

1. install all the dependencies needed with **`$npm install`**  Note tha the file package.json already has what you need

2. Navigate to the app folder and start a console

3. Start Express server with `$ node server.js`

4. On your web browser go to `localhost:3000,

5. Enjoy



## How It Works

1. File Structure:

  ```
  FriendFinder
    - .gitignore
    - app
      - data
        - friends.js
      - public
        -css
            -chosen.css
            LICENSE.md
            -style.css
        -images
            -chosen-sprite.png
            -chosen-sprite@2x.png
        -js
            -chosen.jquery.js
            -composer.json
            -survey.js
        - home.html
        - survey.html
      - routing
        - apiRoutes.js
        - htmlRoutes.js
    - node_modules
    - package.json
    - server.js
  ```
2. The survey has 10 personality type questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

3. The `server.js` file should require the basic npm packages and has the routes configuration.

4. The `htmlRoutes.js` file includes two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

5. The `apiRoutes.js` contains two routes:

   * A GET route with the url `/api/friends`. This is used to display a JSON of all possible friends.
   * A POST route to `/api/friends`. This is used to handle incoming survey results. This route will also be used to handle the compatibility logic.

6. The application's data is saved inside of `app/data/friends.js` as an array of objects. Each of these objects  follows the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

7. Determines the user's most compatible friend using the following logic:

   * Converts each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compares the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example:
       * Data 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User : `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Absolute value of the differences are used. The app calculates both `5-3` and `3-5` as `2`, and so on.
   * The closest match is the Data with the least amount of difference.

8. Once It has found the current user's most compatible friend, displays the result as a modal pop-up.
   * The modal displays both the name and picture of the closest match.


## COMMITS

**_Commit 16_**

Added code to prevent modals to disapear unless press close button.

**_Commit 15_**

survey.js syntax error fixed.

**_Commit 14_**

Small html fixes.


**_Commit 13_**

Spelling changes in html files.


**_Commit 12_**

Change of var port for the heroku deploy to `var PORT = process.env.PORT || 3000;`


**_Commit 11_**

Final code formatting, Readme file updated.

**_Commit 10_**

Added route in server to use local css and local survey's java script logic. Mayor css configuration.

**_Commit 9_**

Complete match finder function. Searches the minimum score between user data and every person in friends array.

**_Commit 8_**

added POST function to push new data to friends array.

**_Commit 7_**

added connection to `friends.js` file to retrieve friends array.

**_Commit 6_**

html routes in different location function finished.

**_Commit 5_**

Created basic server connection, html navigation tested from server file and html files in different location. 


**_Commit 4_**

First version of html files created to test purposes.

**_Commit 3_**

Made **_$ npm init_** to add express package,  file `package.json`
 created.

**_Commit 2_**

File structure created

**_Commit 1_**

Initial commit, repository created

