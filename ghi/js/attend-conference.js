window.addEventListener('DOMContentLoaded', async () => {
const selectTag = document.getElementById('conference');
const loadingSpinner = document.getElementById('loading-conference-spinner');
const formTag = document.getElementById('create-attendee-form');
const successMessage = document.getElementById('success-message');

const url = 'http://localhost:8000/api/conferences/';
const response = await fetch(url);
if (response.ok) {
    const data = await response.json();

    for (let conference of data.conferences) {
    const option = document.createElement('option');
    option.value = conference.href;
    option.innerHTML = conference.name;
    selectTag.appendChild(option);
    }
    loadingSpinner.classList.add('d-none');

    selectTag.classList.remove('d-none');
}

formTag.addEventListener('submit', async event => {
    console.log('form submitted');
    event.preventDefault();
    const formData = new FormData(formTag);
    const json = JSON.stringify(Object.fromEntries(formData));
    const attendeeUrl = 'http://localhost:8001/api/attendees/';
    const fetchConfig = {
        method: 'post',
        body: json,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log('Making request to', attendeeUrl);
    const response = await fetch(attendeeUrl, fetchConfig);
    console.log('Response received', response);
    if (response.ok) {
        formTag.reset();
        const newAttendee = await response.json();

        successMessage.classList.remove('d-none');

        formTag.classList.add('d-none');
    }
});
});
