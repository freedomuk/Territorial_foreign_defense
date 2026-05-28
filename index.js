
const form =
document.getElementById("joinForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        country: form.country.value,
        message: form.message.value
    };

    try{

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxPpdqLVNx9v8I_tIe4n7lnf2AFY2MwGZdHLc6bEDKvQ6GD_0waYU6gi8qBU5vCYXFH/exec",
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        );

        if(response.ok){

            alert("Application sent successfully!");

            form.reset();

        } else {

            alert("Error sending application");

        }

    } catch(error){

        console.log(error);

        alert("Server error");

    }

});

