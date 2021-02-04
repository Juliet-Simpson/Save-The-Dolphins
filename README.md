# **Conscious Catering** 

Milestone One Project for Code Institute's Fullstack Software Development Diploma.

A five page website to promote a friend's Vegan Catering business, consisting of an inviting landing page, an About page giving more detailed information, a photo Gallery page, a Menu page and a Contact form.  There is also the option to download menus/pricelists as pdfs, plus links to social media pages.

## **Preview** 
---

The homepage on different devices is shown here:

![Home Page Previews](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/preview.png "Home Page Previews")

The deployed site on GitHub Pages can be viewed [here.](https://juliet-simpson.github.io/Conscious-Catering/)

## **UX**
---
### **User Stories**

**First time visitors**

- Users searching for party catering:
    1. Will want to know if this is an option.
    1. Read about the capabilities and food.
    2. See the Gallery pictures.  
    3. Look at the Menu/pricelist.

- Business owners would like to know about supply capabilities:
    1. Details can be found in the About page.  
    2. The Contact form is available to arrange discussing their requirements further.

- Event organisers looking for a catering trailer:
    1. Will want to see photos of the trailer, as on the landing page and in the Gallery.
    2. Learn about successful past events, which can be read about on the About page. 
    3. Download a trailer menu pricelist.
    4. The Contact form can be used to request a callback to discuss their requirements further.

**Returning Visitors**

- Those with an existing booking:
    * Would like to download a menu quickly.  This can be done using the menu download link in the footer.

- Would like to write a review:
    * There is a link to Facebook in the footer where reviews can be written.

- Have booked in the past but lost Henry's contact details:
    * Can use the Contact form to get back in touch and discuss making another booking.


### **Strategy**

To create an attractive online presence for this business, giving users sufficicient info in the first instance, presented in a logical and appealing way, that they enquire further and ultimately make a booking.  

### **Scope**

The site will include:
- A landing page with an attractive image, some introductory information and a learn more button.

- An About page with factual information about capabilities, the food and past events, plus buttons to the menu, gallery and contact pages.

- A photo Gallery page with a button linking to the contact form.

- A Menu page with buttons for opening downloadable menus as a pdf in a new window for each of the three catering options.

- A Contact form.  

- A quick downloadable menu/pricelist link in the footer on all except small mobile screens.

### **Structure**

One page will flow logically to another but there will be a navigation bar as well, which will enable navigation to any page from any other.  There will be a link in the footer to quickly open a downloadable version of the full menu in a new window.

### **Skeleton**

Links to the wireframes can be found here:

- [Home page wireframes](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/wireframes/index-wireframes.pdf)

- [About wireframes](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/wireframes/about-wireframes.pdf)

- [Gallery wireframes](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/wireframes/gallery-wireframes.pdf)

- [Menu wireframes](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/wireframes/menu-wireframes.pdf)

- [Contact wireframes](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/wireframes/contact-wireframes.pdf)

### **Surface**

- A vibrant colour scheme has been chosen inspired by the colours of fresh fruit and vegetables.

- The font is Philosopher throughout the site with bold and italic variations.  The feel of it is hoped to appeal to a thinking person, interested in visiting 'Conscious' Catering.  Sans Serif is the fallback font in case for any reason Philosopher does not load correctly from the library.

- The imagery of food has been chosen to look as appetizing as possible.  The images of catering trailers have been chosen to look aesthetic and appealing for an event on the Home page and practical and well equipped in the gallery.

- Use has been made of Font Awesome icons to add to the visual appeal and intuitive understanding of the site.


## **Features**
---
- The site is responsive on all devices.

- A navigation menu which collapses to a dropdown on mobiles.

- Buttons throughout as an alternataive for navigating around the site.

- An About page.

- A photo Gallery carousel.

- A Menu page with buttons to open pdf versions of the menus in a new tab.

- A link to open a downloadable full menu in a new tab in the footer on all except small mobile screens.

- A Contact page with a form to submit giving name, email address and optionally specifying the type of catering required and optionally leaving a message and phonenumber.

- Links to Facebook and Instagram in the footer.

- Screen reader information and ARIA attributes where relevant.

## **Features left to implement**
---
- Content to drop below the navigation dropdown.

- Add some more subtle hover effects to the buttons and footer links. 

- An animation when the Home page loads of the jumbotron entering the screen from the left.

- A requirement to check at least one of the three checkboxes on the contact form.  This requires JavaScript.

## **Technologies Used**
---
### **Languages:**
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

### **Frameworks, Libraries & Programs:**

- [Bootstrap (version 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/)) 
    * Responsiveness throughout
    * Navbar
    * Photo carousel

- [Google Fonts:](https://fonts.google.com/)
    * Google fonts was used to import the 'Philosopher' font into the style.css file which is used on all pages throughout the site.

- [Hover.css:](https://ianlunn.github.io/Hover/)
    * Hover.css was used on the navigation items in the navbar to add the grow transition while being hovered over.

- [Font Awesome:](https://fontawesome.com/)
    * Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.

- [jQuery:](https://jquery.com/)
    * jQuery came with Bootstrap to make the navbar toggle on small screens work.

- [popper.js](https://popper.js.org)
    * popper.js came with Bootstrap and is used for Bootstrap.

- [Git](https://git-scm.com/)
    * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.

- [GitHub:](https://github.com/)
    * GitHub is used to store the projects code after being pushed from Git.

- [Paint-X:](https://paint-x.com/)
    - Photoshop was used to create the logo and cropping, resizing and adding a back ground to images used in the Gallery carousel.

- [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create wireframes for the skeleton phase of the design process.

- [CSS formatter](https://webformatter.com/css)
    -The CSS was formatted using this online tool.

## **Testing**
---
### **Third Party Tools/Services**
- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
    * [W3C HTML Validator](https://validator.w3.org/nu/#textarea)
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)

- The Chrome [Lighthouse](https://developers.google.com/web/tools/lighthouse/) extension was used to audit the site.  A summary of the results is can be viewed [here.](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/lighthouse-summary.pdf)

### **Testing User Stories**
- **Users searching for party catering:**
    1. It clearly states in the jumbotron on the Home page that party catering is available.

        ![Jumbotron](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/home-ss.png "Home Page Screenshot")

    2. The LEARN MORE button on the Home page (see above image) leads to the About page which gives written information about the capabilities and food.

        ![About1](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/about1.png "About Page Screenshot 1")
    
    3. There is a photo carousel on the Gallery page with 12 attractive pictures of food.

        ![Gallery](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/gallery-ss.png "Gallery Page Screenshot")

    4. The Menu page shows the menus and prices, starting with party catering.

        ![Party Menu](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/party-menu-ss.png "Menu Page Screenshot1")

    5. There is a button at the bottom of the party menu on the Menu page which opens a downloadable copy as a pdf in a new tab if the user wishes to download it for further consideration.

         ![Party Menu Button](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/party-menu-button.png "Party Menu Button")

   - **Business owners would like to know about supply capabilities and food:**
    1. Information is available on the About page (see above screenshot).

    2. It clearly states at the bottom of the Menu page that all food is available for business supply.

        ![Business Supply Screenshot](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/business-supply-ss.png "Business Supply Screenshot")

    3. The Contact form has an optional check box to indicate that business supply is of interest and an optional dialogue box to describe requirements.

        ![Contact Form Screenshot](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/contact-ss.png "Contact Form Screenshot")
    
    4. There are attractive food images in the Gallery.


- **Event organisers looking for a catering trailer will want to see photos, learn about successful past events and request a callback to discuss requirements further:**
    * There is a lovely picture of the catering trailer on the Home landing page (see above screenshot).

    * Past events involving the catering trailer are mentioned on the About page.

        ![About2](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/about2.png "About Page Screenshot 2")

    * The gallery carousel shows two pictures of the catering trailer.  Also pictures of food which will be of interest.

    * As all events are different the callback option on the contact form will be of particular use to discuss their event specifically.

- **Returning visitors who have already made a booking, would like to download a menu quickly:** 
    * The menu downloadlink in the footer successfully opens a pdf version of the full menu in a new browser tab and there are download and print buttons in the top right of the viewport.

    ![Quick Menu](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/quick-menu-ss.png "Menu Link Screenshot")
    ![Menu pdf](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/menu-pdf-ss.png "Menu pdf")

- **Returning visitors would like to write a review:**
    * There is a link to Facebook in the footer where a review can be written.

    ![Facebook Link](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/fb-link-ss.png "Facebook Link")

- **Returning visitor has booked in the past but lost Henry's contact details:**
    * They can explain this in the contact form dialogue box and submit the form again.

### Manual Testing

- The site has been tested on Chrome, Safari and Firefox browsers and on iphones 6,7 and 8 and on Alcatel Android.

- Resposiveness has been tested by altering the browser window size and using the mobile view option in Chrome Dev tools.

- All buttons and links throughout the site have been checked and they successfully lead to the correct destination.

- The contact form will not submit without filling in both the full name and email fields.  The checkboxes and other fields are optional so the form will submit with these empty.

- The navbar toggler dropdown successfully works on small screens and on a second click of the toggler icon it toggles back up.  The navigation links in the dropdown also work.

### Issues/Fixes

-  In Safari, iOS and android the philosopher font was not loading for the copyright text in the footer.  This was because the text was within the icon element.  It was fixed by putting it in a separate p element.

- Testing on full screen revealed the About and Contact page contents were sitting too high on the page and some more padding was added to address this.

- Testing on a mobile screen revealed that when the copyright text dropped onto more than one line some left padding was required.

- Testing on a mobile screen revealed that the dropdown was not readable on the Home screen due to the transparency of the navbar background color on this page.  A media query was added to make the colour solid on mobile screens.

### Pending Issues

- It is possible that an unwanted horizontal scroll still exists on screen resolution 1920px x 1080px but not regularly having access to a screen big enough to view this I have not been able to test for it further.

- On some screen resolutions there is a small amount of vertical scroll on the About page.

- After opening the menus in a new tab then returning to the main Menu page, the menu buttons remain on their hover colour until clicking somewhere on that screen.


## **Deployment**
---
- The site is deployed to GitHub Pages directly from the master branch using the following steps:

    1. Log into GitHub and locate the [GitHub Repository](https://github.com/Juliet-Simpson/Conscious-Catering)

    2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

    3. Scrolling down the Settings page until the "GitHub Pages" section is located.

    4. Making sure the "Master Branch"  and "root" folder are selected in the dropdown boxes.

    5. Pressing "Save".

- The site can be cloned by typing `git clone https://github.com/Juliet-Simpson/Conscious-Catering.git` into the terminal of your chosen editor.  
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## **Credits**
---
## **Content**
- Inspiration for this site and the menu content was given to me by Henry Jowett.

- All content on the Home page and About page was written by me.

## **Code**

- [Bootstrap (version 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/))
    * The navbar and carousel code, adapted for this project.
    * Responsiveness throughout.

- Deployment instructions in this README were taken from Code Institute examples which can be found [here](https://github.com/Code-Institute-Solutions/SampleREADME) and [here.](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive)

- All other code was written by me.

## **Media**

- Food images are from the following stock image libraries:
    - [Pexels](https://www.pexels.com/)
    - [Unsplash](https://unsplash.com/)
    - [Adobe Stock](https://stock.adobe.com/uk/)

- Trailer images belong to Henry Jowett.

- The Home Page Previews image in this readme was created by [Am I Responsive?](http://ami.responsivedesign.is/)

## **Acknowledgements**

- My Code Institute Mentor for invaluable insights and overseeing the entire project.

- Code Institute Tutor Support for immense help, patience and knowledge.

- Jim Morel from the Code Institute [Slack](https://slack.com/intl/en-gb/) community for help early on with the navbar.

- Henry Jowett for the concept.



