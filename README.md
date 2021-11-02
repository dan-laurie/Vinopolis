# Vinopolis 🍷
### Project Overview
A solo full stack application using Python/Django, built in 7 days! I decided to create an app that allows users to browse an online admin controlled catalogue of different wines from around the world! Users are then allowed to leave reviews on a specific wine, once logged in!

### Languages/Technologies Used
- HTML5, CSS3
- Bootstrap, Bulma
- JavaScript ES6+
- React
- Python
- Django
- PostgreSQL
- Devicon, FontAwesome

## Home Page
The home page features a bootstrap carousel and a few different links to different pages of the app!

<a href="https://imgur.com/jij2LUZ"><img src="https://i.imgur.com/jij2LUZ.gif" title="source: imgur.com" /></a>

I also decided to use react-reveal across the whole app, adding animations on load and on scroll to enhance the users experience!

## Secure Routes
As the app features user authentication through the use of Django, all links on the page are secured. Users must log in to view further content on the site.

<a href="https://imgur.com/U3wHse1"><img src="https://i.imgur.com/U3wHse1.gif" title="source: imgur.com" /></a>

The user is presented with forms that they may use to register or login!

## The Catalogue
This is the main product page of the app, created using the Django admin portal. All products displayed are seeds, pulled through to the front-end using Axios requests!

<a href="https://imgur.com/a5uLQS9"><img src="https://i.imgur.com/a5uLQS9.gif" title="source: imgur.com" /></a>

Furthermore, users are able to use the filter on the left side of the page to filter by type (red, white, rose or fine) or by the wines country of origin. In addition to this, I made a search feature utilising JavaScript RegEx, where users are able to search the data base directly by name. 

## Specific Product Page
When the user selects the card of the desired wine, they are then taken to a further page, highlighting more details about the wine! This includes a description, grapes used and a suggested pairing.

<a href="https://imgur.com/EB8d8b7"><img src="https://i.imgur.com/EB8d8b7.gif" title="source: imgur.com" /></a>

The user is also able to leave a review on the wine, this is then displayed for all to see. Only the user who wrote the review may delete it, as well as the admin account!

## Further Pages
Some further pages include an About and Education pages.  The former displays information on what languages/technologies were used to build the app and the latter displays levels of wine certification provided by WSET that the user may be interested in researching further

## Challenges
- I think one of the main challenges was being able to present an MVP within the 7 days timeframe. This definitely challenged my ability to plan and schedule what work needed to be done and when. This was a great insight into what production may be like in industry.

- Dealing with Django migration issues provided frequent set backs during the build. These occurred when making changes to models. It was a great learning curve tackling these issues and being able to work out a fix whilst also searching to see if any other developers had encountered similar issues.

- Building a full stack application solo was also a great challenge for me, as some areas of the build such as building the filter and search features proved difficult. Finding solutions and figuring these problems out alone has increased my confidence for sure.

## Wins

- I am really happy with the design and colour scheme, for sure elements could be further fine tuned, but on the whole its aesthetically pleasing!

- Using one to many relationships on the backend when handling users reviews was also a big win. Utilising Axios post requests on the front end to update the wine model was really fun to work out.
## Future Enhancements

- Adding a blog feature, when users can post their thoughts on a newsfeed style page.
- Manipulating the buy now button to take users directly to a google search with the wines respective name; it currently takes users to the Majestic landing page.
-  Users ability to add their own wines to the database and appear on the catalogue.
