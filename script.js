(() => {
    const tbody = document.getElementsByTagName('tbody')[0];
    const rows = tbody.getElementsByTagName('tr');
    let startLine, endLine;
    for (let i = 0; i < rows.length; i++) {
        rows[i].setAttribute('draggable', 'true');
        rows[i].addEventListener('dragstart' , (event) => {
           startLine = event.target.getElementsByTagName("td")[0].id;
           console.log(startLine);
        });
        rows[i].addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        rows[i].addEventListener('drop', (event) => {
            endLine = event.target.parentNode.getElementsByTagName("td")[0].id;
            console.log(endLine);
            let url = window.location.href;
            if (url.indexOf('#') != -1) {
                url = url.substring(0, url.indexOf('#'));
            }
            const newUrl = url + "#" + startLine + "-"+ endLine;
            navigator.clipboard.writeText(newUrl);
            window.location.href = newUrl;
        });
    }
})();