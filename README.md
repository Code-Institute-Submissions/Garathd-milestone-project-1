# Led Zeppelin Band Page

This website is designed to show case the music and videos of Led Zeppelin.  Fans are able to purchase concert tickets as well as listen to some of Led Zeppelin’s greatest hits and purchase some of their most popular albums. Fans can also contact Led Zeppelin in order to request performances at events and parties


## UX

My UX process was to analyze the customers (Led Zeppelin’s) requirements and try and think of different ways to incorporate this into not only just a website but a website that is user friendly and easy to navigate.  

The customer’s requirements are: 

-   For their fans to be able to hear clips from their back catalogue and potentially new material
-   To showcase their music and publicise their ability to perform at various functions
-   To incorporate pictures of the band into the website
-   Include audio and video clips
-   Create Social Media Links

Following on from this is what Led Zeppelin’s fan base want from their website experience. Below is a list of user stories.

-	As a fan, I want to be able to follow Led Zeppelin on Social Media
-	As a fan, I want to be able to buy tickets to concerts
-	As a fan, I want to be able to listen to their music and watch their videos
-	As a fan, I want to be able to contact Led Zeppelin

For my research I looked at various design trends and I thought I would go through one of my Wordpress websites and check out the latest themes and what was the most widely used and most popular layouts not just for music related websites but for every type of website. You never know what might inspire you. I also looked at what Metallica was doing and I really liked the way they used a lot of call to action sections in their website. 

Once I found 5 websites I liked or at least parts of the websites I liked I used Photoshop to draw up my website. I was aided in this process using gridlines in order to keep everything straight. The sketches were relatively quick as I know which way I wanted the website to look and knew my design would be both appealing to both the customer and the user. The sketches can be found in the mock-ups folder.


## Features

The features of this website are listed below by each page (_There is some repeated features_): 


**The Home Page**

1.	Small Logo that’s consistently in the Navigation bar to always show the brand this is also displayed in the responsive Navigation bar.

2.	Main Led Zeppelin banner image as an introduction to the homepage

3.	About the band which consists of an introduction to who the band is

4.	Four Videos of the band to showcase their ability to perform live and also their musical abilities

5.	Pictures of the band along with name and instruments played

6.	Two Call to Actions used for both the Tour and Contact Pages.  

7.	Most Popular Albums section with links to purchase the albums

8.	Social Media Links for fans can follow the band on their favourite social media platforms or to see their videos on YouTube,

9.	Scroll to Top button for easier site navigation


**The Tour Page**

1.  Small Logo that’s consistently in the Navigation bar to always show the brand this is also displayed in the responsive Navigation bar.

2.  Main Banner with Page Title

3.  Widgets where the user can view an upcoming concert and it's location and date and purchase tickets

4.  Call to Action for the Contact Page

5.	Social Media Links for fans can follow the band on their favourite social media platforms or to see their videos on YouTube,

6.	Scroll to Top button for easier site navigation

7.  Three Videos in the footer


**The Music Page**

1.  Small Logo that’s consistently in the Navigation bar to always show the brand this is also displayed in the responsive Navigation bar.

2.  Main Banner with Page Title

3.  Playable Audio Track Widgets

4.	Social Media Links for fans can follow the band on their favourite social media platforms or to see their videos on YouTube,

5.	Scroll to Top button for easier site navigation

6.  Three Videos in the footer


**The Contact Page**

1.  Small Logo that’s consistently in the Navigation bar to always show the brand this is also displayed in the responsive Navigation bar.

2.  Main Banner with Page Title

3.  Contact Form for fans can request Led Zeppelin to play at functions and parties

4.	Social Media Links for fans can follow the band on their favourite social media platforms or to see their videos on YouTube,

5.	Scroll to Top button for easier site navigation

6.  Three Videos in the footer



## Technologies Used

The technologies used in this project are HTML, CSS and JQuery and using the Bootstrap framework.  
I’m using Bootstrap to create a website that is responsive and clean as it has good inbuilt functionality that makes designing websites easier and quicker.

I’m using JQuery to scroll to top of the page for the button I have located in the footer and also for the bootstrap responsive menu bar. I find using regular html anchor tags sometimes problematic and not accurate so I chose this solution as it is consistent and smooth. I'm also using an imported css effect called Hover.css which gives a nice animated effect on my menu bar links. This resource can be found at http://ianlunn.github.io/Hover/. I also use a JQuery Validation plugin for my contact form. This resource can be found ar https://jqueryvalidation.org/.

In the future I want to implement real functionality to the contact form using PHP so it can really send emails.


## Testing

This website was tested in Chrome, Firefox and Microsoft Edge as well as a Samsung Galaxy S5 and HTC Desire 530. For both mobile phones it was tested a lot in both portrait and landscape screen displays to make sure everything was responsive and displayed correctly. Anything that gave me any problems I used a few media queries to fix any issues and tested again. Using the 3 Desktop browsers I also constantly changed the width and height of the browser to see if everything was displayed correctly. 
When creating the audio files I initially had an issue with all the songs playing automatically when I navigated to the page. I was initially using Iframes and even setting the auto play to false or 0 it still played automatically. After a lot of research I discovered I can use html5 <audio> and this ended up working perfectly.
  
When testing with Chrome and Firefox I was initially getting console log errors but these errors were resolved when I disabled adblock.

When testing my contact form I had a problem initially when submitting the form when the website was deployed to Github pages. The issue was a 405 error. This was resolved by removing _method="post"_ from my form code.


## Deployment

During development, all code was written in Cloud 9 and updates were saved and tested locally. Throughout the process I used Github to keep track of changes and to maintain version control in my codebase. Once development was completed I deployed the project to GitHub pages by taking the following steps: 

- Make the final commit to the repo
- Click settings
- Scroll to Github Pages section
- Select the master branch as the source
- Save changes and test

A live version of the project is available on GitHub pages at https://garathd.github.io/milestone-project-1/


## Content

My Content for the about section was inspired by the Led Zeppelin Wikipedia page and I just took what was there and changed it into my own words.


## Media

The photos used in this site were all got from Google.  I had to use a bit of Photoshop to modify the pictures to work with the site. 


## Acknowledgements

I received inspiration for this website from various wordpress themes and templates as well as the Metallica.com website.
