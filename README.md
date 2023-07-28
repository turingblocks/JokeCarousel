# Joke Carousel for Phil

Hello Phil! This is the simple joke caurosel we talked about a while back, here it is if you still need/want it. It's a fun little web application that displays a series of jokes, and you can click a button to go to the next joke.

:file_folder: Files Included
* index.html - This is the main HTML file that contains the structure of the web page.
* styles.css - This CSS file contains all the styles that make the joke carousel look nice.
* script.js - This JavaScript file contains the functionality of the joke carousel, including the jokes themselves and the logic to display the next joke when the -button is clicked (you can add your own jokes in this format).

:rocket: Setup Guide
To use the joke carousel as is, follow these steps:

1. Download all three files (index.html, styles.css, and script.js) and put them in the same directory.
2. Open the index.html file in a web browser. You should see the joke carousel, and you can click the "Next Joke" button to display the next joke.

:wrench: Implementing in WordPress
If you want to implement this joke carousel in your WordPress site, you can do so by following these steps:

1. Log in to your WordPress admin dashboard.
2. Go to the page where you want to add the joke carousel.
3. Click the "Edit" button to edit the page.
4. Click the "+" button to add a new block, and select "Custom HTML".
5. Copy the content of the index.html file and paste it into the "Custom HTML" block.
6. Click the "Update" or "Publish" button to save your changes.
7. Next, you'll need to add the CSS and JavaScript:

8. From your WordPress dashboard, go to "Appearance" > "Theme Editor".
9. Find the style.css file of your theme and add the content of the styles.css file at the end of it. Click "Update File" to save your changes.
10. Find the functions.php file of your theme and add the following code at the end of it:

```
function add_joke_carousel_script() {
    echo '
        <script>
        ' . file_get_contents('path/to/script.js') . '
        </script>
    ';
}
add_action('wp_footer', 'add_joke_carousel_script');
```
11. Replace 'path/to/script.js' with the actual path to the script.js file on your server. Remember to replace 'path/to/script.js' with the actual path to the script.js file on your server. This path should be relative to the functions.php file. For example, if you put script.js in the same directory as functions.php, you would just use 'script.js'.

<img width="486" alt="Screenshot 2023-07-28 at 5 09 08 PM" src="https://github.com/turingblocks/JokeCarousel/assets/101488664/a4e60952-56ac-48ac-8de8-4ab7dbe32645">
