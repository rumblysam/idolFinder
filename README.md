# idolFinder

## Overview
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.


**Project Notes**
I used Materialize for this project.
*Note* I needed to change the version of Materialize in order for the js to work. Using the CDN link in the 'Get Started' section of the website threw error to the console.

- My first steps were to create the static content and the landing page (home.html).
- Then I started building the survey.html page.
    - Then I added click function for the home/survey pages:

```
$("#home-nav").on("click", function(){
    window.location.href = "./home.html";
})
```