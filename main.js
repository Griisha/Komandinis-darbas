
import Card from "./moduls/moduls.js";


fetch('http://localhost:3000/dalyviai')
.then(res => res.json())
.then(data => {
    data.forEach(el => {
        
        const kortele = new Card( el )
        document.querySelector('#main_container').append(kortele);
    });
});
