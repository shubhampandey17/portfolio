
const myportfolio=()=>{

    document.getElementById("portfoliobtn").addEventListener("click", function () {
        window.location.href = "./Portfolio.html";
    });
    
}

const contact=()=>{

    document.getElementById("contactbtn").addEventListener("click", function () {
        window.location.href = "./Contact.html";
    });

}

const submited = () => {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        console.log('Your Form is Submitted');
        alert('Your Form is Submitted Successfully!');
    } else {
        alert('Please fill in all the required fields.');
    }
}

AOS.init();