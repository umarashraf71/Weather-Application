

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');
 

weatherForm.addEventListener('submit',(event)=>{

    event.preventDefault();
    //console.log(search.value);

    message1.textContent = 'Loading...';
    message2.textContent = '';

fetch('http://localhost:3000/weather?address='+ search.value).then((response)=>{

    response.json().then((data)=>{

        if(data.error)
        {
            //console.log(data.error);
            message1.textContent = data.error;
            message1.style.color = 'red'; 
        }
        else
        {
            // console.log(data.location);
            // console.log(data.longitude);
            // console.log(data.longitude);
            // console.log(data.temp);
            
            message1.textContent = data.location;
            message1.style.color = '#3258a8';
            message2.textContent = data.temp + ' degree';
            message2.style.color = 'green';
            
        }

    })

});

});
