A site to track movies, TV shows, theatre and books. 

This currently only supports tracking Broadway shows.

**Sources**

* The Movie Database (for movies, TV shows): https://www.themoviedb.org/
* The Internet Broadway Database (for Broadway theatre): https://www.ibdb.com/
* Open Library (for books): https://openlibrary.org/developers/api 

**Pages & APIs**

0. Header:
    * Show Movies; TV Shows; Theatre; Books; Login; Search Bar for content
1. Home page: index.html
    * This shows trending content, and a blurb about what the website is about.
2. Login page: login.html
    * Users can create or login to existing account on this page.
3. Individual pages for Movies, TV Shows, Theatre and Books: movies.html, tv.html, theatre.html, books.html
    * Users can see more trending movies/TV/theatre/books on their individual pages.
    * Users can click on individual content to read more information about the movie/TV...
4. On the specific content page, after the user has expanded the page, allow users to save to their "Watched" list. 

**Database Schema**

* Use SQL database -- it's structured data, separated into Movies/TV/Theatre/Books, Users.
* Movies
    * TMDB_id, Title, Year, Director
* TV Shows
    * TMDB_id, Title, First Air Date-Year
* Theatre
    * TIBD_id, Title, Year, Director
* Books
    * ISBN, Title, Publication Year, Author

* Users
    * UserID, email