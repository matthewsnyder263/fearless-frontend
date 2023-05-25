console.log('script running');
window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/states/';
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        const selectTag = document.getElementById('state');

        for(let state of data.states) {
            console.log(state);
            const option = document.createElement('option');
            option.value = state.abbreviation;
            option.innerHTML = state.name;
            selectTag.appendChild(option)
        }
    }
    const formTag = document.getElementById('create-location-form');
    formTag.addEventListener('submit', async event => {
        event.preventDefault();
        // console.log('need to submit the form data');
        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        // console.log(json);
        const locationUrl = 'http://localhost:8000/api/locations/';
        const fetchConfig = {
        method: "post",
        body: json,
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            formTag.reset();
            const newLocation = await response.json();
            // console.log(newLocation);
        }
    });
});










        // const locationUrl = 'http://localhost:8000/api/locations/';
        // const fetchConfig = {
        //     method: "POST",
        //     body: json,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // };
        // const response2 = await fetch(locationUrl, fetchConfig);
        // if (!response2.ok) {
        //     if (response2.headers.get('Content-Type').includes('application/json')) {
        //         const error = await response2.json();
        //         console.error('Error:', error);
        //     } else {
        //         const error = await response2.text();
        //         console.error('Error:', error);
        //     }
        //     return;
        // }
        // formTag.reset();
        // const newLocation = await response2.json();
        // console.log(newLocation);
