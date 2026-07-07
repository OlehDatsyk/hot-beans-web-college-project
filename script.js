document.addEventListener('DOMContentLoaded', () => {
    // Runs code only after the HTML page has fully loaded
    const currentPath = window.location.pathname.split("/").pop();
    // Gets current page file name (e.g. index.html)
    const navLinks = document.querySelectorAll('.nav-links a');
    // Selects all navigation links

    navLinks.forEach(link => {
        // Loops through each navigation link
    if (link.getAttribute('href') === currentPath) {
        // Checks if link matches current page
        link.classList.add('active-page');
        // Adds active styling to current page link
    }
});

    const form = document.getElementById('applyForm');
    // Selects application form
    const successMsg = document.getElementById('successMessage');
    // Selects success message element

    if (form) {
        // Runs only if form exists on page
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Stops page refreshing when form is submitted
            form.style.opacity = '0';
            // Fades out the form visually
            setTimeout(() => {
                // Waits 0.5 seconds before continuing
                form.style.display = 'none';
                // Hides the form completely
                successMsg.style.display = 'block';
                // Shows success message
                successMsg.classList.add('fade-in');
                // Adds fade-in animation
            }, 500);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Another load event (could be combined with above for better practice)
    const navLinks = document.querySelectorAll('.nav-links a');
    // Select navigation links again
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    // Gets current page, defaults to index.html if empty

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Gets each link path

        if (linkPath === currentPath) {
            link.classList.add('active-page');
            // Highlights active page
        } else {
            link.style.borderColor = 'var(--teal)';
            // Styles non-active links
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Job roles page functionality
    const roles = document.querySelectorAll('.job-role');
    // Selects all job role sections
    const thumbs = document.querySelectorAll('.thumb');
    // Selects thumb images
    const mainImg = document.getElementById('mainImage');
    // Selects main display image
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    // Select navigation buttons

    let current = 0;
    // Tracks current role index
    
    function updateDisplay(index) {
        current = index;

        // Show/Hide the job role text
        roles.forEach((role, i) => {
            role.style.display = (i === index) ? 'block' : 'none';
        });

        // Update main image and thumbnails
        const newSrc = thumbs[index].getAttribute('src');
        mainImg.setAttribute('src', newSrc);
        thumbs.forEach((thumb, i) => {
            thumb.classList.toggle('active-thumb', i === index);
        });
        
        // Use visibility instead of display to keep the "Next" button on the right
        if (current === 0) {
            prevBtn.style.visibility = 'hidden'; 
        } else {
            prevBtn.style.visibility = 'visible';
        }

        // Hide Next button on the last page
        if (current === roles.length - 1) {
            nextBtn.style.visibility = 'hidden';
        } else {
            nextBtn.style.visibility = 'visible';
        }
    }

    // Initial call to set the buttons correctly when the page first loads
    updateDisplay(0);

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateDisplay(index);
            // Changes role when thumbnail clicked
        });
    });

    nextBtn.addEventListener('click', () => {
        if (current < roles.length - 1) {
            updateDisplay(current + 1);
            // Moves to next role
        }
    });

    prevBtn.addEventListener('click', () => {
        if (current > 0) {
            updateDisplay(current - 1);
            // Moves to previous role
        }
    });

    updateDisplay(0);
    // Shows first role on page load
});

document.addEventListener('DOMContentLoaded', () => {
    // Courses page navigation
    const pages = document.querySelectorAll('.course-page');
    // Selects course sections
    const nextBtn = document.getElementById('nextCourseBtn');
    const prevBtn = document.getElementById('prevCourseBtn');
    // Selects navigation buttons

    let current = 0;
    // Current page index

    function showPage(index) {
        pages.forEach((page, i) => {
            page.style.display = (i === index) ? 'block' : 'none';
            // Shows only selected course page
        });
    }

    if (nextBtn && prevBtn) {
        // Only runs if buttons exist
        nextBtn.addEventListener('click', () => {
            if (current < pages.length - 1) {
                current++;
                showPage(current);
                // Go forward
            }
        });

        prevBtn.addEventListener('click', () => {
            if (current > 0) {
                current--;
                showPage(current);
                // Go back
            }
        });

        showPage(current);
        // Shows first page initially
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Shows/hides menu
        hamburger.classList.toggle('active');
        // Animates hamburger icon
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            // Closes menu when link clicked
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const flipButtons = document.querySelectorAll('.flip-btn');
    // Team card flip functionality
    flipButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.team-card');
            // Selects all flip buttons
            card.classList.toggle('flipped');
            // Flips the card (CSS handles animation)
        });
    });
});

function toggleDetails(id) {
    // Function to show/hide job role details
    const element = document.getElementById(id);
    // Gets element by ID
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
        // Shows content
    } else {
        element.style.display = "none";
        // Hides content
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Wait for the page to fully load before running any code
    const coursePages = document.querySelectorAll('.course-page');
    const nextCourseBtn = document.getElementById('nextCourseBtn');
    const prevCourseBtn = document.getElementById('prevCourseBtn');
    
    // Start the counter at 0 (the first page)
    let currentCourse = 0;

    // The main function that updates what the user sees
    function updateCourseDisplay(index) {
        currentCourse = index;

        // Loop through pages: show the active one and hide the rest
        coursePages.forEach((page, i) => {
            page.style.display = (i === index) ? 'block' : 'none';
        });

        // If on the first page, hide 'Previous' but keep the button's space
        if (currentCourse === 0) {
            prevCourseBtn.style.visibility = 'hidden';
        } else {
            prevCourseBtn.style.visibility = 'visible';
        }

        // If on the last page, hide 'Next' so the user can't go further
        if (currentCourse === coursePages.length - 1) {
            nextCourseBtn.style.visibility = 'hidden';
        } else {
            nextCourseBtn.style.visibility = 'visible';
        }
    }

    // Check if buttons exist on the page, then add the click functions
    if (nextCourseBtn && prevCourseBtn) {
        
        // Listen for clicks on the Next button
        nextCourseBtn.addEventListener('click', () => {
            if (currentCourse < coursePages.length - 1) {
                updateCourseDisplay(currentCourse + 1);
            }
        });

        // Listen for clicks on the Previous button
        prevCourseBtn.addEventListener('click', () => {
            if (currentCourse > 0) {
                updateCourseDisplay(currentCourse - 1);
            }
        });

        // Run once on startup to set up the initial page view
        updateCourseDisplay(0);
    }
});

const flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Find the closest card container
        const card = this.closest('.team-card');
        const cardInner = card.querySelector('.card-inner');

        // Toggle the flip animation
        cardInner.style.transform = 
            cardInner.style.transform === 'rotateY(180deg)' 
            ? 'rotateY(0deg)' 
            : 'rotateY(180deg)';
    });
});
