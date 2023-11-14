document.addEventListener("DOMContentLoaded", function () {
    const areas = document.querySelectorAll('area');
    const personInfo = document.getElementById('personInfo');

    areas.forEach(area => {
        area.addEventListener('mouseover', function () {
            const tooltip = document.getElementById('tooltip');
            tooltip.innerHTML = this.getAttribute('title');
            tooltip.style.display = 'block';
        });

        area.addEventListener('mouseout', function () {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.display = 'none';
        });

        area.addEventListener('click', function () {
            // Display person information box
            personInfo.style.display = 'block';
            // You can customize the content based on the clicked person
            personInfo.innerHTML = `<p>Information about ${this.getAttribute('title')} goes here.</p>`;
        });
    });
});
