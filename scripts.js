document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.job, .school, .language, .certification, .project, .award, .volunteer, .hobby, .reference');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
