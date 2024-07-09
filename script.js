function getQoute () {
    let message=document.getElementById("message");
    let auth=document.getElementById("auth");

    let url="https://api.api-ninjas.com/v1/quotes?category=happiness";
    fetch(url,{headers: {
        'X-Api-Key': "HLeEpuMSALL0zMJ3Q0YlYQ==jIuFr5MYRszuDu0s"
    }})
                .then(res => res.json())
                .then(data => {
                    
                    message.innerHTML =data[0].quote ;
                    auth.innerHTML=data[0].author;
                })
                .catch(err => alert(err));


}