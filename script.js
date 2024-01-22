// script.js

function joinWaitlist() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Simulate sending details to your email (replace this with actual server-side code)
    var mailtoLink = 'mailto:iamniraj@gmail.com?subject=Waitlist%20Submission&body=Name:%20' + name + '%0AEmail:%20' + email;
    window.location.href = mailtoLink;

    // You can also log the details to the console (for testing purposes)
    console.log('Name:', name);
    console.log('Email:', email);
}
