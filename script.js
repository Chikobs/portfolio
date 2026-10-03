
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    // show message
    status.style.display = "block";
    status.innerText = "Message sent ✅";
    status.style.background = "#00c853";
    status.style.color = "white";

    // clear form
    form.reset();

    // hide after 4 seconds
    setTimeout(() => {
      status.style.display = "none";
    }, 4000);
  });




  // Make each div show on click - only the one you click
document.addEventListener('DOMContentLoaded', () => {
  
  const allCards = document.querySelectorAll(
    '.matrix-card, .techdeck-tile-module, .project-card, .contact-card, .projects-tile-module'
  );

  allCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Remove active from others if you want only one at a time
      // If you want many to stay open, delete this next 3 lines
      allCards.forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      
      // Toggle only the one you clicked
      card.classList.toggle('active');
    });
  });

});
