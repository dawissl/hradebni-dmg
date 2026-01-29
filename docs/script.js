// Smooth scroll pro navigaci
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Filtrování slovníku (volitelné)
const filterBtns = document.querySelectorAll('.filter-btn');
const terms = document.querySelectorAll('.slovnik dt, .slovnik dd');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aktivní tlačítko
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        // Filtrování
        for (let i = 0; i < terms.length; i += 2) {
            const dt = terms[i];
            const dd = terms[i + 1];
            
            if (filter === 'all' || dt.dataset.category === filter) {
                dt.style.display = 'block';
                dd.style.display = 'block';
            } else {
                dt.style.display = 'none';
                dd.style.display = 'none';
            }
        }
    });
});
