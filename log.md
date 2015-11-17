### Signing in @ 4:10AM, 2015-11-18

- Converted ems to rems in CSS.
- Adjusted sizes and CSS of badge images on homepage.
- Added the Slidey nav drawer. Using translate instead of positioning for sliding, hamburger icon generated with pure CSS and animates to X when drawer is open (need to update the Slidey project later).
- Created a digital image from my signature. Will be usiong this in the nav drawer (possibly even on homepage).

#### ToDo
- Style elements inside nav drawer.

### Signing in @ 8:12PM, 2015-10-29

- Added logo images.

### Signing in @ 9:48PM, 2015-10-28

- Read up on semantic markup, decided not to use them. Did not make much sense to use them.
- Tried Reflex grid for flexbox support, but reverted to Fluidable grid. With flexbox, vertical centering of columns works but repsonsive images behave strangely. Sticking with what works.

### Signing in @ 2:22AM, 2015-10-27

- Implemented theme switcher (yin-yang symbol at the top right).

### Signing in @ 1:00AM, 2015-10-27

- Added the Play font to the hero section text.
- Updated the hero section text.

### Signing in @ 10:45PM, 2015-10-25

- Began tracking using Git. Remote repo at https://github.com/thegwiz/personal-site

### Signing in @ 2:18AM, 2015-10-20

I was wrestling with making paragraphs center vertically in the grid, which Fluidable does not support. There is the "dsiplay: table-cell + vertical-align: middle + fixed height" hack, but that got me thinking again: why am I messing up my markup and relying on CSS hacks when I should be learning to incorporate the progressive web standards, like HTML5's new semantic tags and flexbox? I considered using flexbox but I couldn't forego support for the older IEs. I searched for grid systems again and I found 2 grids which use Flexbox but falls back to inline-block based grids (traditional CSS grid system) when flexbox is not supported.

#### ToDo
- Replace Fluidable with [Reflex grid](http://leejordan.github.io/reflex/docs/) or [flexible.gs](http://flexible.gs/compatibility/)
- Read about [HTML5's semantic tags and other features](http://diveintohtml5.info/semantics.html?ref=driverlayer.com). Clean markup and use semantic tags. (also read [this](http://html5doctor.com/lets-talk-about-semantics/))
  - To support this in old browsers, consider using [the HTML5 shiv](https://github.com/afarkas/html5shiv)
- Eventually incorporate [Outdated Browser](https://github.com/burocratik/Outdated-Browser/tree/master) warning.

### Signing in @ 1:06AM, 2015-10-19

- Experimented a lot with content on homepage, decided on short paragraphs with badges.
- Fluidable's column reordering also doesn't seem to work. Considering looking for other grid systems or rolling my own.
  - Need vertical centering of content in columns, so maybe base my grid off table cells. Won't use flexbox because compatibility is limited to >IE10.
- Make badges for content using Gimp:
  - [Buddha badge](http://spark9.deviantart.com/art/Buddha-Logo-566910741)
  - [Computer badge](http://spark9.deviantart.com/art/Desktop-Logo-566909286), using [this stock image](http://www.freeimages.com/photo/buddha-1310506)
  - [Hobby badge](http://spark9.deviantart.com/art/Hobby-Icons-566969672)
- Put the dev log at the top and made the entire log collapsible.
- Removed light/dark theming CSS, will work on it after content is ready. There will be a toggle on the navbar to switch between light and dark themes.

#### ToDo
- Figure out a way to vertically center content in grid
- Maybe roll my own grid
- Remake graphics as vectors using InkScape.

### Signing in @ 4:47PM, 2015-10-12

- Added some custom styling to the ticker to remove the li dots and properly set the width of the container (for centering in low-width screens).
- The dev log is now loaded from a separate markdown file using ajax. It's then rendered as HTML using [markdown-js](https://github.com/evilstreak/markdown-js).

### Signing in @ 3:02AM, 2015-10-12
#### ToDo
- Fill out content for the main headings in the home page
- Put anchors at each section (Programmer, Artist, etc.) so I can use them for the nav.
- Think about how Nav is implemented, and how it scales and behaves in mobile view.

## Original log worth a couple of days work. Formated and cleaned up on 2015-10-12 for the dev log on the website.

- Working almost 8 hours per day, so far 3 days of research starting 7th October 2015.

- Researched CSS frameworks alternatives to bootstrap and foundation (they are too heavy for my needs, trying to build something using minimal cruft and reinvent the wheel where needed so I can learn).
- Excluded MaterialUI CSS framework. Too new, not sure if it will be maintained.
- Excluded Materialize. Too heavy, style too specific, didn;t think it was any good for my site.
- Tried MDL by Google, excluded. Style too specific (MD), grid is funny, did not like default styling, which means a lot of css overrides. No thanks.
- Tried PureCSS comlete rollup with responsive grid. Grid usage classes funny (took me a day to figure out not all fractions work). No equal-height columns in grid, no way to easily hide grid on specific screensizes.
- Going to try Normalize + [FlexGRID](http://www.volumethemes.com/flexgrid) (and maybe PureMenu for Nav).
- Discovered the jsDelivr CDN, it's pretty awesome!

- Some notes on minimum IE version compatibilities for libs:
  - Min IE version: Normalize: IE8
  - jQuery2: IE9
  - FlexGRID IE8

Looking for equal-height column capable responsive grid.
- Came across a CSS-only equal-height column solution [here](http://webdesign.tutsplus.com/tutorials/quick-tip-solving-the-equal-height-column-conundrum--cms-20403). Works using absolute positioning, doesn't really work for this site.

- Best grid so far is this [flexbox-based grid](https://github.com/codingfriend1/flexgrid). But uses JS on page load and resize, so excluded.

- After reading about flexboxes, considered few flexbox-based grids, but only IE10+ support (IE10 buggy).

- After researching about 3 or 4 flexbox grids, decided to go with a non-flexbox grid with following features:
  - No CSS resets
  - Responsive
  - Provide offsets

- Found [Fluidable grid](http://fluidable.com) and it's AWESOME!
  - Markup is minimal
  - Provides utility classes for fixed aspect ratios! Hope I can use this for equal-height columns.

- Need to look into CDN fallback. RequireJS seems to be a good choice.

- Site is coming along well! Love the Fluidable grid system. Fixed aspect ratios were useless for making equal-height columns but oh well. At this point will use custom CSS. My usecase for equal-height column is way too specific so I can live with a minimal grid solution without that feature baked in. But in that case, maybe I can look for a more popular grid solution? Should revisit later, am going with this now.

- Quick search on the internet for a nice vertical ticker for the main page, and I found [vTicker](http://richhollis.github.io/vticker). Working like a charm so far.

- Came acoss [Point Jarvis](http://ravenjohn.github.io/.jarvis.js) in jsDelivr. IT NEEDS TESTING AND IMPLEMENTATION!!
