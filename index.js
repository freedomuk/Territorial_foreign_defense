
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

    try {

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyxe5b9Yg3rYjWjfUwK9atQcVafSKxfTuyGmoFWsocGFkNkb-gJIASkV6uKPGSOATM/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.text();

        console.log(result);

        alert("Application sent!");

        form.reset();

    } catch(error){

        console.log(error);

        alert("Error sending form");

    }

});

