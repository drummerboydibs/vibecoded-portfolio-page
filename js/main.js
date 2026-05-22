// Highlight the active nav link based on the current page URL.
//
// window.location.pathname returns the path portion of the URL:
//   on resume.html it's "/resume.html" (or just "resume.html" when opened as a file)
// We check whether each nav link's href ends with that path segment.

const currentPath = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('nav a').forEach(function(link) {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentPath) {
        link.classList.add('nav-active');
    }
});
