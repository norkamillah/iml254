<script>
        // JavaScript to add animation effect
        document.addEventListener('DOMContentLoaded', function() {
            let courses = document.querySelectorAll('.course');
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            let callback = function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            };

            let observer = new IntersectionObserver(callback, options);
            courses.forEach(course => {
                observer.observe(course);
            });
        });
    </script>