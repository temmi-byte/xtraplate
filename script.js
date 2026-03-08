function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // Toggle the 'active' class
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}