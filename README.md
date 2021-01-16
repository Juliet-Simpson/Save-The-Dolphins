# **Conscious Catering** 

Milestone One Project for Code Institute's Fullstack Software Development Diploma.

A four page website to promote a friend's Vegan Catering business, consisting of an inviting landing page, an about page giving more detailed information, a photo gallery and a contact form.  There is also the option to download a menu/pricelist as a pdf plus links to social media pages.

## **Demo** 
---

A live demo can be found here.

## **UX**
---
### **User Stories**

Users searching for party catering will want to see the gallery pictures and downlaodable menu/pricelist.

Business owners would like to know about supply capabilities, details of which can be found in the about page.  The contact form is available to discuss their requirements further.

Event organisers looking for a catering trailer will want to see photos, as on the landing page and in the gallery, and learn about successful past event, which can be read about on the about page.  The contact form can be used to request a callback to discuss requirements further.

### **Strategy**

To create an attractive online presence for this business, giving users sufficicient info in the first instance, presented in a logical and appealing way, that they enquire further and ultimately make a booking.

### **Scope**

The site will include a landing page, an about page with factual information about cababilities, the food and past events, a photo gallery page and a contact form.  Plus a downloadable menu/pricelist.

### **Structure**

One page will flow logically to another but there will be a menu bar which will enable navigation to any page from any other also. 

### **Skeleton**

Links to wireframes

### **Surface**

### **Notes**
Struggled to make navbar items justify to the right.  Thanks Jim on Slack for helping.  Needed to use the justify-content-end class on the navbar-collapse div not on the ul that I was trying.

https://www.shutterstock.com/purchase/success?orderId=CS-02FF3-41F7 Used Shutterstock free trial for logo.

https://imagecolorpicker.com/ to take colors from logo. VInspired by the vibrant colours of fresh fruit and veg.

Easier to use pre-existing bootstrap class for navbar text than to make new color class.

Used Hover class to make nav items grow from external library hover.css

Struggled to verically center items in the footer.  In the end just padded them at the top to give the same effect.

I struggled to remove a right margin showing white on the foooter.  I asked Jim Lynx on slack for advice, he told me it was a bootstap default margin on the row.  I think actually it was at that point that I hadn't understood to always put a row in a container.  In the end Alan later explained this to me on tutor support and everything became so much clearer and better.  At the time of writing this I've just commented out some margin:0; and padding:0; and on first inspection maybe I don't need them afterall.

Jim advised me to use * and set margin and padding to 0 at the top of my css and box-sizing to border box.  Now on commenting this out though it looks like it isn't actually necessary either.

He did alert me to the fact I was using Bootstrap 5.  I had forgotten the part in the lesson which said use the dropdown box and choose 4.5.  He helped me change this in my header and redo my navbar accordingly.
This then fixed the problem I had been having of my dropdown not toggling back up on a second click.  Very grateful to Jim for this help.
Also that putting my logo text in the code was a bad idea and I shouldmake one complete externally.  He mocked one up quickly to demonstrate.  I had already been thinking of doing this but hadn't done it yet.  This then made the hover shutter effect work and I subsequently changed it's colour forrowing the lesson on doing this.  I have since redond the logo.

I still have an issue with my footer that at very small screensizes the contents jumble.  I'd like to use a media query to then increase its height but agian I've yet to make that work.

My next problem was setting my background image.  I thought I had done it correctly but it wasn't showing. Cormac on support explained that I had to give it a height and width, which I did of 100vh and 100vw and that solved it.

I overlaid the image with the text and gave it a back ground and absolute positioning.  However when I added the learn more button it absolutely wou1d not center.  Again it was in the chat with Alan that he explained the pitfalls of absolute poitioning.  He also said my textbox would not resize well and suggested a jumbotron instead which would be responsive.  I've done this and then the button centered.  
While on chat with him on his suggestion, I created a dummy jumbotron page and also css2 linked to it to test the functionality.  This was very helpful and I've retained the pages at this stage incase I need to use them further for testing code.  I am still having issues with changing the shape of the jumbotron to taller and narrower for smaller screens. I'm trying to do it with a media query but it isn't working.  I need to go on tutor support regarding this I think.

Moving on to the about page.  Initially I forgot to use container>row>col but once I remembered I'm very pleased with the result.  For the catering capabilities I've managed to split the content into 3 columns within one column for medium screens than back to one column but all the page content in three columns for large screens.  This worked surprisingly easily and has impressed me with the benefits of bootstrap columns.
I did however badly struggle with getting the content all to show from behind the navbar and footer.  Sammy on chat suggested giving the body padding and this was great, although I actually gave it to the section.
I am still struggling with changing the margins and padding on these different layouts.   I have been trying using media queries but they've not worked.  Again I need tutor support about media queries.   I've also got an issue with aligning the past events in a straight line on the left.  I've tried using the icons as bullets but that didn't help.  I haven't worked very hard on this yet, I may or may not need help with it.
Currently, my gallery page has issues.  As the pictures are different sizes there is a problem with the position of the arrows and the indicators.  I've successfully moved the arrows into the adjacent colums but their position and sizing still isn't done yet.  Again I think I will need help with this.
I am however very pleased with having been able to create a carousel at all, using Bootstrap, and also using colums to centre it with different size margins on different screen sizes.
Images have come from Henry although as his business is in its infancy he has used free stock photos.
I have yet to upload the downloadable menu as I'm waiting on this from him.
The contact form has gone well and I'm pleased with it.  Again using Bootstrap columns to alter the margin widths on different screen sizes has been successful.  I am contemplating the colour scheme for this and also the about page.  i am coosing colous inspired by the fruit and veg graphic in the logo.

My next step is to link up all my buttons and add aria attributes to my font-awesome icons.  Then style my buttons and finalise the colours for the backgrounds.  These things I can do.   
I need to complete the about text with Henry and add the downloadable menu.  I'm then left with solving my position/sizing issues for the jumbotron, footer, about page and gallery.  Then testing and completing the readme.
I have been so focussed on building the site and worrying about the deadline that I haven't put my notes into my readme until now.




