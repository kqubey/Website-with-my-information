document.onreadystatechange = function () {

    let percent = 0;

    let interval = setInterval(function () {
        document.querySelector('.percent').textContent = percent + '%';
        percent++;

        const element = document.querySelector('.percent');

        element.innerText = percent + "%";
        if (percent > 100) {
            percent = 0;
        }
    }, 1000); // изменять процент каждую секунду

};