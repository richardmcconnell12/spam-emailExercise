console.log("Spam");

const customerOutput = document.getElementById("output");
let eachCustomer = [];

for (let i = 0; i < customers.length; i++) {
    console.log(customers[i])
    let customerHtml = `<h2>${customers[i].first_name} ${customers[i].last_name}</h2>`
    customerOutput.innerHTML += customerHtml;

    let emailAddress = customers[i].contacts.email;
    let emailList = emailAddress.forEach(email => {
        console.log(email)
        let emailHtml = `<p>${email}</p>`
        customerOutput.innerHTML += emailHtml;
    });
    console.log(emailList)
};
