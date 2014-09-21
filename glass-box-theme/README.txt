 # Glass Box Theme Readme 

The Glass Box theme is a boxed transparent theme layer for Twitter Bootstrap. Included are a number of 
HTML templates:

* index.html - A front page layout with feature headings and various calls to action.
* isotope.hml - An isotope grid for blog or portfolio layouts with bookmarking buttons.
* portfolio.html - A portfolio page with expanding portfolio items.
* blog.html - A blog layout.
* blog-comments.html - A single blog item with lightbox gallery, comments and comment form.
* single-item.html - A single page with 'Post Like These' link box examples.
* single-item-letterbox.html - A single page with a large full width image.
* faq.html - Frequently Asked Questions using the bootstrap collapsing accordian style.
* contact.html - Contact form with Leaflet map.
* pricing.html - Pricing tables styles.
* login.html - A dedicated login page.
* register.html - A site registration page.
* extras.html - A page of theme componants for quick reference and cut/paste.
* typography.html - Variations on stock bootstrap type styles and elements.


# CSS Files

The main theme styles are found in glass.css, but all colours are set in glass-colors.css.
If you want to replace the default colour scheme, you can either rename glass-colors-green.css or
glass-colors-pink.css to glass-colors.css or you can roll your own colour scheme. See #Rolling your 
Own Colour Scheme notes below to make this a quick and painless process.


# Changing the Font

All reference to the fonts used can be found at the top of glass.css:

@font-face {
  font-family: 'UbuntuTitlingBold';
  src: url('../font/UbuntuTitling-Bold-webfont.eot');
  src: url('../font/UbuntuTitling-Bold-webfont.eot?#iefix') format('embedded-opentype'),
    url('../font/UbuntuTitling-Bold-webfont.woff') format('woff'),
    url('../font/UbuntuTitling-Bold-webfont.ttf') format('truetype'),
    url('../font/UbuntuTitling-Bold-webfont.svg#UbuntuTitlingBold') format('svg');
  font-weight: normal;
  font-style: normal;
}

With the styles set in the typography section below, swapping these out should be pretty easy to do.


# Theme Colors 

There are three colour files included with the theme... the default blue, green and hot pink. These 
are examples that should help you roll your own colour variations. 


# Rolling Your Own Colour Schemes

If you look at the differences between the colour scheme CSS files, you'll notice that the changes are
confined to just a few signature styles. These are mainly just link colours and the brand colour 
backgrounds.

The gradients used are cross browser... a great online tool for rolling new colour gradients can be 
found here:

http://www.colorzilla.com/gradient-editor/


# Making PNG's small

As transparency is this theme's thing, you'll likely be using a lot of PNGs for various 
graphical elements. A great way to decrease the file size and save on bandwidth is by using the free
service below:

http://tinypng.org/


# Sequence Slideshow

Replacing the bootstrap carousel in this theme (you can of course just use the regular carousel) is a 
sequence.js slideshow. There are two present slide configurations like the examples below. The first 
puts an image on the left with text and a button on the right, whilst the second utilizes a full width 
image with a single title line above it.

<!-- Configuration 1 -->
<li>
  <h2 class="title">Responsive<br/> Bootstrap Templates</h2>
  <h3 class="subtitle">Phasellus euismod accumsan massa a pellentesque.</h3>
  <a href="#" class="link btn btn-large btn-glass">Read more</a>
  <img class="slide-left" src="images/standards.png" alt="" />
</li>
<!-- Configuration 2 -->
<li>
  <h2 class="title-full">A Variety of Colour Options</h2>
  <img class="slide-full" src="images/full.png" alt="" />
</li>

There are many themes available for sequence and these can be found at:

http://www.sequencejs.com/


# Isotope Portfolio

The main portfolio layout is an adaptable isotope grid with filters. Each item in the grid should resize 
dependant on screen size, collapsing down to a single column for mobile layouts.

Items can be given data attributes by which they can be filtered. The filters are set in #filters, with 
each list item having data-filter=".yourclass" set to determin what it is that is being filtered. In the
theme HTML template, the list is arranged as a button group likes like this:

<nav id="filters" class="btn-group">
  <a class="btn btn-large btn-glass" href="#" data-filter="*">Show all</a>
  <a class="btn btn-large btn-glass" href="#" data-filter=".YOUR-CLASS-HERE">Forests</a>
  <a class="btn btn-large btn-glass" data-filter=".sky">Skies</a>
  <a class="btn btn-large btn-glass" href="#" data-filter=".ocean">Oceans</a>
  <a class="btn btn-large btn-glass" href="#" data-filter=".desert">Deserts</a>
  <a class="btn btn-large btn-glass" href="#" data-filter=".ice">Ice</a>          
</nav>

Classes are then added to the item like the following example below:

<article class="item span3 YOUR-CLASS-HERE">
  <div class="thumbnail">
    <img src="images/image_1.jpg" alt="" />
    <h4>Excepteur sint occaecat unt cupidatat</h4>
    <div class="dateline text-right"><small><i>Thursday 21st July 2013</i> &nbsp;<i class="icon-calendar"></i></small></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="portfolio-links btn-toolbar">
      <div class="btn-group">
      <a href="#" class="btn btn-inverse disabled link-icon"><i class="icon-white icon-pinterest"></i><span class="hidden-tablet hidden-phone">&nbsp; Pin</span></a>
      <a href="#" class="btn btn-inverse disabled link-icon"><i class="icon-white icon-facebook-sign"></i><span class="hidden-tablet hidden-phone">&nbsp; Like</span></a>
      <a href="#" class="btn btn-inverse disabled link-icon"><i class="icon-white icon-twitter"></i><span class="hidden-tablet hidden-phone">&nbsp; Tweet</span></a>
      </div>
    </div>			  
  </div>  
</article>

There are many more options available for isotope layouts. You can find out more about them at:

http://isotope.metafizzy.co/


# jQuery Vegas

The background images are provided by the jQuery Vegas plugin. I've noticed a few performance issues 
associated with this plugin on certain tablets (though not iPads), so if you'd like, you can uncomment 
the following lines at the top of glass.css:

background: url(../../images/background-1.jpg) no-repeat center center fixed; 
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../images/background-1.jpg', sizingMethod='scale');
-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../../images/background-1.jpg', sizingMethod='scale')";

This will load a single background image covering the entire viewport. This works for IE7 & IE8 as well.


# Expanding Portfolio Grid
 
To edit what's contained in the dropdown for each item, you need to edit grid.js.

Go to line 282 and find the following:

// create Preview structure:
this.$title = $( '<h3></h3>' );
this.$description = $( '<p></p>' );
this.$href = $( '<a class="btn btn-large btn-glass" href="#">View item</a>' );
this.$details = $( '<div class="portfolio-item-details"></div>' ).append( this.$title, this.$description, this.$href );
this.$loading = $( '<div class="portfolio-item-loading"></div>' );
this.$fullimage = $( '<div class="portfolio-item-fullimg"></div>' ).append( this.$loading );
this.$closePreview = $( '<span class="portfolio-item-close"><i class="icon-remove-sign icon-large"></i></span>' );
this.$previewInner = $( '<div class="portfolio-item-expander-inner"></div>' ).append( this.$closePreview, this.$fullimage, this.$details );
this.$previewEl = $( '<div class="portfolio-item-expander"></div>' ).append( this.$previewInner );

From here, you can set the icon and button text. Other item details, such as the drop down image, title, 
description and button link are all set in the HTML like the example below.

<li class="span3">
<a href="SET BUTTON LINK" data-largesrc="SET THE DROPDOWN IMAGE" data-title="SET TITLE" data-description="SET DESCRIPTION">
<img class="thumbnail" src="images/thumbs/1.jpg" alt=""/>
</a>
</li>

The HTML template does a check for IE in the footer, loading throttledresize.js if the browser 
is IE7 or IE8. For IE9 and all other modern browsers it loads debouncedresize.js. If you just 
want to support modern browsers, you can remove the conditional check for IE.  


# Leaflet Map

The leaflet map on the contact.html page is a nice alternative to a regular Google map. You could 
of course replace this with a Google map should you wish. The leaflet files are linked via their CDN
like so:

In the header:

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5/leaflet.css" />

In the footer:

<script src="http://cdn.leafletjs.com/leaflet-0.5/leaflet.js"></script>

If you want to host these files locally, please download them from: 

http://leafletjs.com/

Instructions for changing the marker position can be found in the JS comments in the page footer. 


# Animated Bootstrap Polls

The animated poll styles are a result of the following plugin:

https://github.com/minddust/bootstrap-progressbar

Visit this page to see other animation options available for polls or progress bars.


# Logos

To add the greyscale filter to logo items, each container must be given the class "greybox"

Logo Samples from http://www.logoinstant.com


# iPhone, iMac and iPad Images

The obligatory iMockups... these images are freely available (for both personal and commercial use)
on http://www.pixeden.com.

You can download the PSD files at the following links:

iPhone - http://www.pixeden.com/psd-mock-up-templates/3d-view-iphone-5-psd-vector-mockup
iPad (Landscape) - http://www.pixeden.com/psd-mock-up-templates/psd-ipad-perspective-mockup
iPad (Upright like theme) - http://www.pixeden.com/psd-mock-up-templates/ipad-2-psd-vector-mockup-template
iMac - http://www.pixeden.com/psd-mock-up-templates/imac-psd-mockup-template

# Twitter Feed Plugins

The twitter feed in the template footer is provided as static markup based on the jQuery plugin here:

http://tweet.seaofclouds.com/

To integrate this plugin, please refer to the website above for details.