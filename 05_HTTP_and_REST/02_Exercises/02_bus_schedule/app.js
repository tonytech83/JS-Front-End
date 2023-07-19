function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    const info = document.getElementsByClassName('info')[0];

    function depart() {
        fetch(BASE_URL)
        .then(resp => resp.json())
        .then(data => {
            
        })
    }

    async function arrive() {
        // TODO:
    }

    return {
        depart,
        arrive
    };
}

let result = solve();