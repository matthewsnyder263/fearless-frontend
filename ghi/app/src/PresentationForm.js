import React, {useEffect, useState } from 'react';

function PresentationForm () {
    const [conferences, setConferences] = useState([])

    const [formData, setFormData] = useState({
        presenter_name: '',
        presenter_email: '',
        company_name: '',
        title: '',
        synopsis: '',
        conference: '',
    })

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/';
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            console.log(data.conferences)
            setConferences(data.conferences)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const conferenceId = formData.conference;

        if (conferenceId === "") {
            alert("Please choose a conference");
            return;
        }


        const locationUrl = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`;

        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log(formData);
        const response = await fetch(locationUrl, fetchConfig);

        if (response.ok) {
            const newConference = await response.json();
            console.log(newConference);
            setFormData({
                presenter_name: '',
                presenter_email: '',
                company_name: '',
                title: '',
                synopsis: '',
                conference: '',
            });
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        setFormData({
            ...formData,
            [inputName]: value
        });
    }

    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a new presentation</h1>
                    <form onSubmit={handleSubmit} id="create-presentation-form">
                        <div className="form-floating mb-3">
                        <input onChange={handleFormChange} placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
                        <label htmlFor="presenter_name">Presenter name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input onChange={handleFormChange} placeholder="Presenter email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
                        <label htmlFor="presenter_email">Presenter email</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input onChange={handleFormChange} placeholder="Company name" type="text" name="company_name" id="company_name" className="form-control" />
                        <label htmlFor="company_name">Company name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input onChange={handleFormChange} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
                        <label htmlFor="title">Title</label>
                        </div>

                        <div className="mb-3">
                        <label htmlFor="synopsis">Synopsis</label>
                        <textarea onChange={handleFormChange} className="form-control" id="synopsis" rows="3" name="synopsis"></textarea>
                        </div>

                        <div className="mb-3">
                        <select onChange={handleFormChange} required name="conference" id="conference" className="form-select">
                            <option value="">Choose a conference</option>
                            {conferences.map(conference => (
                            <option key={conference.id} value={conference.id} >
                                {conference.name}
                            </option>
                            ))}
                        </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default PresentationForm;



// import React, { useState, useEffect } from 'react';

// function PresentationForm() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [companyName, setCompanyName] = useState('');
//     const [title, setTitle] = useState('');
//     const [synopsis, setSynopsis] = useState('');
//     const [conferences, setConferences] = useState([]);
//     const [conference, setConference] = useState('');


//     const handleNameChange = (event) => {
//         const value = event.target.value;
//         setName(value);};

//     const handleEmailChange = (event) => {
//         const value = event.target.value;
//         setEmail(value);};

//     const handleCompanyNameChange = (event) => {
//         const value = event.target.value;
//         setCompanyName(value);};

//     const handleTitleChange = (event) => {
//         const value = event.target.value;
//         setTitle(value);};

//     const handleSynopsisChange = (event) => {
//         const value = event.target.value;
//         setSynopsis(value);};

//     const handleConferenceChange = (event) => {
//         const value = event.target.value;
//         setConference(value);};

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const data = {
//         name,
//         email,
//         companyName,
//         title,
//         synopsis,
//         conference,
//         };

//         const conferenceId = data.conference;
//         delete data.conference;

//         data.presenter_name = data.name;
//         delete data.name;

//         data.company_name = data.companyName;
//         delete data.companyName;

//         data.presenter_email = data.email;
//         delete data.email;

//         console.log(data);

//         const presentationUrl = `http://localhost:8000${conferenceId}presentations/`;
//         const fetchConfig = {
//             method: 'post',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         const response = await fetch(presentationUrl, fetchConfig);

//         if (response.ok) {
//             const newConference = await response.json();
//             console.log(newConference);

//             setName('');
//             setEmail('');
//             setCompanyName('');
//             setTitle('');
//             setSynopsis('');
//             setConference('');
//         }
//     };

//     useEffect(() => {
//         const fetchConferences = async () => {
//         const url = 'http://localhost:8000/api/conferences/';

//         const response = await fetch(url);

//         if (response.ok) {
//             const data = await response.json();
//             setConferences(data.conferences);
//         }
//         };

//         fetchConferences();
//     }, []);

//     return (
//         <div className="row">
//         <div className="offset-3 col-6">
//             <div className="shadow p-4 mt-4">
//             <h1>Create a new presentation</h1>
//             <form onSubmit={handleSubmit} id="create-presentation-form">
//                 <div className="form-floating mb-3">
//                     <input value={name} onChange={handleNameChange} placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" className="form-control" />
//                     <label htmlFor="presenter_name">Presenter name</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                     <input value={email} onChange={handleEmailChange} placeholder="Presenter email" required type="email" name="presenter_email" id="presenter_email" className="form-control" />
//                     <label htmlFor="presenter_email">Presenter email</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                     <input value={companyName} onChange={handleCompanyNameChange} placeholder="Company name" type="text" name="company_name" id="company_name" className="form-control" />
//                     <label htmlFor="company_name">Company name</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                     <input value={title} onChange={handleTitleChange} placeholder="Title" required type="text" name="title" id="title" className="form-control" />
//                     <label htmlFor="title">Title</label>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="synopsis">Synopsis</label>
//                     <textarea value={synopsis} onChange={handleSynopsisChange} className="form-control" id="synopsis" rows="3" name="synopsis"></textarea>
//                 </div>
//                 <div className="mb-3">
//                 <select value={conference} onChange={handleConferenceChange} required name="conference" id="conference" className="form-select">
//                     <option value="">Choose a conference</option>
//                     {conferences.map((conference) => {
//                     return (
//                         <option key={conference.href} value={conference.href}>
//                         {conference.name}
//                         </option>
//                     );
//                     })}
//                 </select>
//                 </div>
//                 <button className="btn btn-primary">Create</button>
//             </form>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default PresentationForm;
