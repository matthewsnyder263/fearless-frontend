import React, { useEffect, useState } from 'react';




function ConferenceForm () {

    const [name, setName] = useState('');
    const [starts, setStarts] = useState('');
    const [ends, setEnds] = useState('');
    const [description, setDescription] = useState('');
    const [maxPresentations, setMaxPresentations] = useState('');
    const [maxAttendees, setMaxAttendees] = useState('');
    const [location, setLocation] = useState('');
    const [locations, setLocations] =useState([]);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleStartsChange = (event) => {
        setStarts(event.target.value);
    }
    const handleEndsChange = (event) => {
        setEnds(event.target.value);
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const handleMaxPresentationsChange = (event) => {
        setMaxPresentations(event.target.value);
    }
    const handleMaxAttendeesChange = (event) => {
        setMaxAttendees(event.target.value);
    }
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

    const data ={};
    data.name = name;
    data.starts = starts;
    data.ends = ends;
    data.description = description;
    data.max_presentations = maxPresentations;
    data.max_attendees = maxAttendees;
    data.location = location;
    console.log(data);

    const conferenceUrl = 'http://localhost:8000/api/conferences/';
    const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(conferenceUrl, fetchConfig);
    if (response.ok) {
        const newConference = await response.json();
        console.log(newConference);

        setName('');
        setStarts('');
        setEnds('');
        setDescription('');
        setMaxPresentations('');
        setMaxAttendees('');
        setLocation('');
    }
}

    useEffect(() => {
        const fetchLocations = async () => {
            const locationUrl = 'http://localhost:8000/api/locations/';
            try {
                const locationResponse = await fetch(locationUrl);
                if (!locationResponse.ok) {
                    throw new Error('Error, Error, Error')
                } else {
                    const locationData = await locationResponse.json();
                    setLocations(locationData.locations);
                }
            } catch (e) {
                console.error('error', e);
            }
        };

        fetchLocations();

    }, []);



    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Create a new Conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
                <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={name} type="text" name="name" className="form-control" id="name" placeholder="Conference Name" required />
                <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleStartsChange} value={starts} type="date" name="starts" className="form-control" id="starts" placeholder="Start Date" required />
                <label htmlFor="starts">Starts</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleEndsChange} value={ends} type="date" name="ends" className="form-control" id="ends" placeholder="End Date" required />
                <label htmlFor="ends">Ends</label>
                </div>
                <label htmlFor="description" className="">Description</label>
                <div className="form-floating mb-3">
                    <textarea onChange={handleDescriptionChange} value={description} style={{height:"110px", verticalAlign: 'top'}} className="form-control" id="description" placeholder="Description" required></textarea>
                    {/* <label htmlFor="description">Description</label> */}
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleMaxPresentationsChange} value={maxPresentations} type="number" name="max_presentations" className="form-control" id="max_presentations" placeholder="Maximum Presentations" required />
                <label htmlFor="max_presentations">Maximum Presentations</label>
                </div>
                <div className="form-floating mb-3">
                <input onChange={handleMaxAttendeesChange} value={maxAttendees} type="number" name="max_attendees" className="form-control" id="max_attendees" placeholder="Maximum Attendees" required />
                <label htmlFor="max_attendees">Maximum Attendees</label>
                </div>
                <div className="mb-3">
                <select onChange={handleLocationChange} value={location} required id="location" name="location" className="form-select">
                    <option value="">Choose a location</option>
                    {locations.map(location => {
                        return (
                            <option key={location.id} value={location.id}>
                                {location.name}
                            </option>
                        )
                    })}
                </select>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default ConferenceForm;
