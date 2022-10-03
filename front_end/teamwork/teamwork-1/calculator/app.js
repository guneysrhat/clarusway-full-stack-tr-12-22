const td = document.querySelectorAll('td');



[...td].forEach((e) => {
    e.onclick = () => {
        console.log(e.innerText);
    };
});