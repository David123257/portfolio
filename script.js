// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function(event)
{ event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");

    document.getElementById("contactForm").requestFullscreen();
});