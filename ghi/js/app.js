function createCard(name, location, description, pictureUrl, startDate, endDate) {
    const start = new Date(startDate).toLocaleDateString();
    const end = new Date(endDate).toLocaleDateString();

    return `
        <div class="col">
            <div class="card shadow">
                <img src="${pictureUrl}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p></p>
                    <h6 class="card-subtitle mb-2 text-muted" style="font-size: 0.9rem;">${location}</6>
                    <p></p>
                    <p class="card-text text-dark">${description}</p>
                </div>
                <div class="card-footer bg-light'>
                    <span class="text-muted" style="font-size: 0.7rem;">${start} - ${end}</small>
            </div>
        </div>
    `;
}



window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';
    const columns = document.querySelectorAll('.col');
    const row = document.querySelector('.row');

    try {
        const response = await fetch(url);

        if (!response.ok) {
            let alertDiv = document.createElement('div');
            alertDiv.classList.add('alert', 'alert-danger');
            alertDiv.textContent = 'Failed to fetch conferences. Please buy a dog to help.';
            document.body.appendChild(alertDiv);
        } else {
        const data = await response.json();
        let index = 0;

        for (let conference of data.conferences) {
            const detailUrl = `http://localhost:8000${conference.href}`;
            const detailResponse = await fetch(detailUrl);
                if (detailResponse.ok) {
                    const details = await detailResponse.json();
                    const name = details.conference.name;
                    const location = details.conference.location.name;
                    const description = details.conference.description;
                    const pictureUrl = details.conference.location.picture_url;

                    // const column = document.querySelector('.col');
                    // column.innerHTML += html;
                    const startDate = details.conference.starts;
                    const endDate = details.conference.ends;

                    const html = createCard(name, location, description, pictureUrl, startDate, endDate)

                if (index === 3) index = 0;

                columns[index].innerHTML += html;

                index++;
            }
        }

        }
    } catch (e) {
        console.error(e)
        let alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger');
        alertDiv.textContent = 'Failed to fetch conferences. Please throw your PC out of the window.';
        document.body.appendChild(alertDiv);
    }

});










    // const conference = data.conferences[0];

    // const cardImg = document.querySelector('.card-img-top');
    // const nameTag = document.querySelector('.card-title');
    // const descriptionTag = document.querySelector('.card-text');

    // nameTag.innerHTML = conference.name;
    // descriptionTag.innerHTML = conference.description;

    // const detailUrl = `http://localhost:8000${conference.href}`;


    // if (detailResponse.ok) {
    //     const details = await detailResponse.json();
    //     console.log(details);

    //     cardImg.src = details.conference.location.picture_url;
    // }
    // }

































// window.addEventListener('DOMContentLoaded', async () => {

//     const url = 'http://localhost:8000/api/conferences/';

//     try {
//       const response = await fetch(url);

//       if (!response.ok) {
//         console.error('HTTP error, status = ' + response.status)
//       } else {
//         const data = await response.json();

//         const conference = data.conferences[0];

//         const cardImg = document.querySelector('.card-img-top');
//         const nameTag = document.querySelector('.card-title')
//         const descriptionTag = document.querySelector('.card-text');

//         nameTag.innerHTML = conference.name;
//         descriptionTag.innerHTML = conference.description;
//         // cardImg.src = conference.picture_url;
//         // console.log(conference.picture_url);
//         // nameTag.innerHTML = conference.name;


//         const detailUrl = `http://localhost:8000${conference.href}`;
//         const detailResponse = await fetch(detailUrl);
//         if (detailResponse.ok) {
//             const details = await detailResponse.json();
//             console.log(details);
//             console.log(details.conference.picture_url);

//             cardImg.src = details.conference.picture_url;

//             // // Get the description data out of the object
//             // const detail = details.conference.description

//             // // Use the querySelector method to select the HTML element that should hold the description.
//             // const detailNameTag = document.querySelector('.card-text'); // Adjust this as necessary

//             // // Set the innerHTML property of the HTML element to the description of the conference.
//             // detailNameTag.innerHTML = detail;
//         }
//       }
//     } catch (e) {
//       console.error('Fetch failed: ', e)
//     }
//   });
