document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blogForm');
    const blogPostsSection = document.querySelector('.blog-posts');

    // Load existing posts from localStorage
    const loadPosts = () => {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.forEach(post => renderPost(post));
    };

    // Render a single post
    const renderPost = (post) => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <div class="post-meta">
                <span>${post.date}</span> | <span>${post.author}</span>
            </div>
            <p>${post.content}</p>
            <a href="#" class="read-more">Read More</a>
        `;
        blogPostsSection.appendChild(postElement);
    };

    // Handle form submission
    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('postTitle').value;
        const author = document.getElementById('postAuthor').value;
        const content = document.getElementById('postContent').value;
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const post = { title, author, content, date };

        // Save to localStorage
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        // Render the new post
        renderPost(post);

        // Clear form
        blogForm.reset();
    });

    // Load posts on page load
    loadPosts();
});