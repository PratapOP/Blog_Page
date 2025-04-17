# My Blog Website
A static blog website with a Home page for creating and displaying blog posts and an About Me page, built using HTML, CSS, and JavaScript.
Features

- Home Page: Input and display blog posts using a form, with posts stored in the browser's local storage.
- Responsive Design: Mobile-friendly layout with consistent styling across pages.
- Navigation: Functional header links for Home and About pages (Categories and Contact are placeholders).
- Local Storage: Blog posts persist in the browser for the user's session.

## Setup

Clone the Repository:
git clone <your-repository-url>
cd my-blog


## Open Locally:

Open index.html in a web browser (e.g., Chrome, Firefox) to view the Home page.
No server is required for local testing, as the site is static.


## Deploy:

- Enable GitHub Pages in repository settings, setting the source to the main branch and root directory.

## Usage

### Home Page (index.html):
- Use the form to input a blog post (title, author, content).
- Click "Publish Post" to display the post below the form.
- Posts are saved in local storage and persist until the browser data is cleared.
- Navigate to the About page via the header link.


### Customization

- Social Links: Update the <a> tags in the footer of both HTML files with your social media URLs.
- Styling: Modify styles.css to change colors, fonts, or layout.
- Additional Pages: Add categories.html or contact.html to make the placeholder links functional.

### Limitations

- Local Storage: Blog posts are stored in the browser's local storage, so they are user- and device-specific and not shared across users.
- Static Site: No server-side storage or backend, limiting scalability for production use.
- Placeholder Links: Categories and Contact pages are not implemented.

## Future Enhancements

- Implement a backend (e.g., Node.js, Firebase) for server-side post storage.
- Add post editing/deleting functionality.
- Enhance navigation with dynamic active state handling.
- Improve SEO with meta tags and sitemap.

## Contributing

- Fork the repository.
- Create a feature branch (git checkout -b feature/your-feature).
- Commit changes (git commit -m "Add your feature").
- Push to the branch (git push origin feature/your-feature).
- Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

#### Contact
For questions or suggestions, contact the author via [GitHub Issues](/issues) or social media links in the footer.
