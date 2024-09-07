document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    
    // Calculate the remaining days until the event
    const eventDate = new Date('2024-09-26');
    const currentDate = new Date();
    const differenceInTime = eventDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    
    // Display the countdown
    countdownElement.textContent = `${differenceInDays} days left`;
});
