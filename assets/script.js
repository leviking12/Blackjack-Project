document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('game-title').style.display = 'none';
    this.style.display = 'none';
    alert('Game Started!');
});
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});


