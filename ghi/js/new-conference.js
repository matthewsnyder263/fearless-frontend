console.log('Script Running');
window.addEventListener('DOMContentLoaded', async () => {
    const locationUrl = 'http://localhost:8000/api/locations/';
    try{
        const locationResponse = await fetch(locationUrl);
        if (!locationResponse.ok) {
            throw new Error('Error, Error, Error')
        } else {
            const locationData = await locationResponse.json();

            const locationSelectTag = document.getElementById('location');

            for(let location of locationData.locations) {
                console.log(location);
                const option = document.createElement('option');
                option.value = location.id;
                option.innerHTML = location.name;
                locationSelectTag.appendChild(option)
            }

            const formTag = document.getElementById('create-conference-form');
            formTag.addEventListener('submit', async event=> {
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData));

                const conferenceUrl = 'http://localhost:8000/api/conferences/';
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = await fetch(conferenceUrl, fetchConfig);
                if (response.ok) {
                    formTag.reset();
                    const newConference = await response.json();
                }
            });
        }
    } catch (e) {
        console.error('error', e);
    }
});
