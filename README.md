# **Conscious Catering** 

Milestone One Project for Code Institute's Fullstack Software Development Diploma.

A five page website to promote a friend's Vegan Catering business, consisting of an inviting landing page, an about page giving more detailed information, a photo gallery page, a menu page and a contact form.  There is also the option to download a menu/pricelists as pdfs, plus links to social media pages.

## **Preview** 
---

The homepage on different devices is shown here:

![Home Page Previews](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/preview.png "Home Page Previews")

The deployed site on GitHub Pages can be viewed [here.](https://juliet-simpson.github.io/Conscious-Catering/)

## **UX**
---
### **User Stories**

**First time visitors**

- Users searching for party catering will want to see the gallery pictures and menu/pricelists.  They may also want to download a copy.

- Business owners would like to know about supply capabilities, details of which can be found in the about page.  The contact form is available to arrange discussing their requirements further.

- Event organisers looking for a catering trailer will want to see photos,as on the landing page and in the gallery, and learn about successful past events, which can be read about on the about page.  The contact form can be used to request a callback to discuss their requirements further.

**Returning Visitors**

- Returning visitors, perhaps who have already made a booking, would like to download a menu quickly.  This can be done using the menu download link in the footer.

### **Strategy**

To create an attractive online presence for this business, giving users sufficicient info in the first instance, presented in a logical and appealing way,that they enquire further and ultimately make a booking.  

### **Scope**

The site will include:
- A landing page with an attractive image, some introductory inforamtion and a learn more button.
- An about page with factual information about cababilities, the food and past events, plus buttons to the menu, gallery and contact pages.
- A photo gallery page with a button linking to the contact form.
- A menu page with buttons for opening a downloadable menus as a pdf in a new window for each of the three catering options.
- A contact form.  
- A quick downloadable menu/pricelist link in the footer on all except small mobile screens.

### **Structure**

One page will flow logically to another but there will be a navigation bar which will enable navigation to any page from any other also. Plus there will be a link in the footer to quickly open a downloadable version of the full menu in a new window.

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

- The imagery of food has been chosen to look as appetizing as possible.  The images of catering trailers have been chosen to look aesthetic and appealing for an event on the home page and practical and well equipped in the gallery.

- Use has been made of font awesome icons to add to the visual appeal and intuitive understanding of the site.


## **Features**
---
- The site is responsive on all devices.

- A navigation menu which collapses to a dropdown on mobiles.

- Buttons throughout as an alternataive for navigating around the site.

- An about page.

- A photo gallery carousel.

- A menu page with buttons to open pdf versions of the menus in a new tab.

- A link to open a downloadable full menu in a new tab in the footer on all except small mobile screens.

- Links to Facebook and Instagram in the footer.

- Screen reader information and ARIA attributes where relevant.

## **Features left to implement**
---
- Content to drop below the navigation dropdown.

- Add some more subtle hover effects to the buttons and footer links. 

- An animation when the homepage loads of the jumbotron entering the screen from the left.

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
    * Google fonts was used to import the 'Philospher' font into the style.css file which is used on all pages throughout the site.

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
    - Photoshop was used to create the logo, cropping, resizing and adding a black ground to images used in the gallery carousel.

- [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create wireframes for the skeleton phase of the design process.

## **Testing**
---
### **Third Party Testing**
- The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.
    * [W3C HTML Validator](https://validator.w3.org/nu/#textarea)
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)

- The Chrome [Lighthouse](https://developers.google.com/web/tools/lighthouse/) extension was used to audit the site.  A summary of the results is can be viewed [here.](https://github.com/Juliet-Simpson/Conscious-Catering/blob/master/assets/images/readme/lighthouse-summary.pdf)

### **Testing User Stories**
- **Users searching for party catering will want to learn about the food,  see the gallery pictures and download a menu/pricelist.**
    * It clearly states in the jumbotron on the home landing page that party catering is available and users are invited to enter the site to find the information they seek by using the large inviting LEARN MORE button. 
    * The LEARN MORE button navigates to the about page which gives general background information and buttons to the menu gallery and contact pages.  They can alternatively use the navbar to reach these pages.
    * The gallery page has a carousel of attractive images that will automatically scroll through after a time delay or can be manually scroled with next and previous arrows. 
    * The menu page shows all the menus clearly laid out and buttons which open downloadable menus as pdfs in new windows.
    * Should they wish to make contact for more information they can link to the contact page from the navbar.

- **Business owners would like to know about supply capabilities, details of which can be found in the about page.  The contact form is available to discuss their requirements further.**
    * Again, it clearly states in the jumbotron on the home landing page that party catering is available and users are invited to enter the site to find the information they seek via the large inviting LEARN MORE button. 
    * The about page gives more info about business supply and an example of a current business being supplied.  There are also buttons to the menu and contact form, as in the navbar also.
    * There is a checkbox on the contact form to indicate they are interested in business supply and also a text area they can optionally fill in with more details of their requirements.   The form will submit even if they choose not to write in this box.
    * There is space on the contact form to leave a phone number if they would like a call back but again this is not required and the form will submit with this blank.

- **Event organisers looking for a catering trailer will want to see photos, as on the landing page and in the gallery, and learn about successful past events, which can be read about on the about page.  The contact form can be used to request a callback to discuss requirements further.**
    * There is a lovely picture of the catering trailer on the home landing page which will aims to inspire users to want it at their event and research the site further, which again can be easily done starting with the learn more page.  
    * Past events involving the catering trailer are mentioned on the about page.
    * The gallery carousel shows two pictures of the catering trailer.  Also pictures of food which will be of interest.
    * As all events are different the callback option on the contact form will be of particular use to discuss thir event specifically.

- **Returning visitors, perhaps who have already made a booking, would like to download a menu quickly.  This can be done using the menu download link in the footer.**
    * The menu downloadlink in the footer successfully opens a pdf version of the full menu in a new browser tab and there are download and print buttons in the top right of the viewport.

### Manual Testing

- The site has been tested on Chrome, Safari and Firefox browsers and on iphones 6,7 and 8 and alcatel android.  In Safari, iOS and android the philosopher font was not loading for the copyright text in the footer.  This was because the text was within the icon element.  It was fixed by putting it in a separate p element.
- Resposiveness has been tested by altering the browser window size and using the mobile view option in Chrome Dev tools.
- Testing on full screen revealed the the about and contact page contents were sitting too high on the page and some more padding was added to address this.
- It is possible that an unwanted horizontal scroll still exists on screen resolution 1920px x 1080px but not regularly having access to a screen big enough to view this I have not been able to test for it further.
- All buttons and links throughout the site have been checked and they successfully lead to the correct destination.
- The contact form will not submit without filling in both the full name and email fields.  The checkboxes and other fields are optional so the form will submit with these empty.
- The navbar toggler dropdown successfully works on small screens and on a second click of the toggler icon it toggles back up.  The navigation links in the dropdown also work.

## **Deployment**
---
- The site is deployed to GitHub Pages directly from the master branch using the following steps:

    1. Log into GitHub and locate the [GitHub Repository](https://github.com/Juliet-Simpson/Conscious-Catering)

    2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.

    3. Scrolling down the Settings page until the "GitHub Pages" section is located.

    4. Making sure the "Master Branch" is selected in the source dropdown box.

    5. Pressing "Save".

- The site can be cloned by typing `git clone https://github.com/Juliet-Simpson/Conscious-Catering.git` into the terminal of your chosen editor.  
To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## **Credits**
---
## **Content**
- Inspiration for this site and the menu content was given to me by Henry Jowett.

- All content on the home page and about page was written by me.

## **Code**

- [Bootstrap (version 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/))
    * The navbar and carousel code, adapted for this project.
    * Responsiveness throughout.

- Deployment instructions in this README were taken from Code Institute examples which can be found [here](https://github.com/Code-Institute-Solutions/SampleREADME) and [here.](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive)

- All other code was written by me.

- The CSS was formatted using this online [CSS formatter](https://webformatter.com/css).

## **Media**

- Food images are from the following stock image libraries:
    - [Pexels](https://www.pexels.com/)
    - [Unsplash](https://unsplash.com/)
    - [Adobe Stock](https://stock.adobe.com/uk/)

- Trailer images belong to Henry Jowett.

- The Home Page Previews image in this readme was created by [Am I Responsive?](http://ami.responsivedesign.is/)

## **Acknowledgements**

- My Code Institute Mentor for invaluable insights and overseeing the entire project.

- Code Institute Tutor Support for imense help, patience and knowledge.

- Jim Morel from the Code Institute [Slack](https://slack.com/intl/en-gb/) community for help early on with the navbar and, in particular, targetting the nav items.

- Henry Jowett for the concept.



