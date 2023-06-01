// import React, { useEffect, useState } from 'react';




// function ConferenceForm () {

//     const [name, setName] = useState('');
//     const [starts, setStarts] = useState('');
//     const [ends, setEnds] = useState('');
//     const [description, setDescription] = useState('');
//     const [maxPresentations, setMaxPresentations] = useState('');
//     const [maxAttendees, setMaxAttendees] = useState('');
//     const [location, setLocation] = useState('');
//     const [locations, setLocations] =useState([]);

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     }
//     const handleStartsChange = (event) => {
//         setStarts(event.target.value);
//     }
//     const handleEndsChange = (event) => {
//         setEnds(event.target.value);
//     }
//     const handleDescriptionChange = (event) => {
//         setDescription(event.target.value);
//     }
//     const handleMaxPresentationsChange = (event) => {
//         setMaxPresentations(event.target.value);
//     }
//     const handleMaxAttendeesChange = (event) => {
//         setMaxAttendees(event.target.value);
//     }
//     const handleLocationChange = (event) => {
//         setLocation(event.target.value);
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//     const data ={};
//     data.name = name;
//     data.starts = starts;
//     data.ends = ends;
//     data.description = description;
//     data.max_presentations = maxPresentations;
//     data.max_attendees = maxAttendees;
//     data.location = location;
//     console.log(data);

//     const conferenceUrl = 'http://localhost:8000/api/conferences/';
//     const fetchConfig = {
//         method: "post",
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     };
//     const response = await fetch(conferenceUrl, fetchConfig);
//     if (response.ok) {
//         const newConference = await response.json();
//         console.log(newConference);

//         setName('');
//         setStarts('');
//         setEnds('');
//         setDescription('');
//         setMaxPresentations('');
//         setMaxAttendees('');
//         setLocation('');
//     }
// }

//     useEffect(() => {
//         const fetchLocations = async () => {
//             const locationUrl = 'http://localhost:8000/api/locations/';
//             try {
//                 const locationResponse = await fetch(locationUrl);
//                 if (!locationResponse.ok) {
//                     throw new Error('Error, Error, Error')
//                 } else {
//                     const locationData = await locationResponse.json();
//                     setLocations(locationData.locations);
//                 }
//             } catch (e) {
//                 console.error('error', e);
//             }
//         };

//         fetchLocations();

//     }, []);



//     return (
//         <div className="row">
//         <div className="offset-3 col-6">
//             <div className="shadow p-4 mt-4">
//             <h1>Create a new Conference</h1>
//             <form onSubmit={handleSubmit} id="create-conference-form">
//                 <div className="form-floating mb-3">
//                 <input onChange={handleNameChange} value={name} type="text" name="name" className="form-control" id="name" placeholder="Conference Name" required />
//                 <label htmlFor="name">Name</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                 <input onChange={handleStartsChange} value={starts} type="date" name="starts" className="form-control" id="starts" placeholder="Start Date" required />
//                 <label htmlFor="starts">Starts</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                 <input onChange={handleEndsChange} value={ends} type="date" name="ends" className="form-control" id="ends" placeholder="End Date" required />
//                 <label htmlFor="ends">Ends</label>
//                 </div>
//                 <label htmlFor="description" className="">Description</label>
//                 <div className="form-floating mb-3">
//                     <textarea onChange={handleDescriptionChange} value={description} style={{height:"110px", verticalAlign: 'top'}} className="form-control" id="description" placeholder="Description" required></textarea>
//                     {/* <label htmlFor="description">Description</label> */}
//                 </div>
//                 <div className="form-floating mb-3">
//                 <input onChange={handleMaxPresentationsChange} value={maxPresentations} type="number" name="max_presentations" className="form-control" id="max_presentations" placeholder="Maximum Presentations" required />
//                 <label htmlFor="max_presentations">Maximum Presentations</label>
//                 </div>
//                 <div className="form-floating mb-3">
//                 <input onChange={handleMaxAttendeesChange} value={maxAttendees} type="number" name="max_attendees" className="form-control" id="max_attendees" placeholder="Maximum Attendees" required />
//                 <label htmlFor="max_attendees">Maximum Attendees</label>
//                 </div>
//                 <div className="mb-3">
//                 <select onChange={handleLocationChange} value={location} required id="location" name="location" className="form-select">
//                     <option value="">Choose a location</option>
//                     {locations.map(location => {
//                         return (
//                             <option key={location.id} value={location.id}>
//                                 {location.name}
//                             </option>
//                         )
//                     })}
//                 </select>
//                 </div>
//                 <button className="btn btn-primary">Create</button>
//             </form>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default ConferenceForm;



// import React, { useEffect, useState } from 'react';

// function ConferenceForm() {
//   const [locations, setLocations] = useState([])

//   //Notice that we can condense all formData
//   //into one state object
//   const [formData, setFormData] = useState({
//     name: '',
//     starts: '',
//     ends: '',
//     description: '',
//     max_presentations: '',
//     max_attendees: '',
//     location: '',
//   })

//   const fetchData = async () => {
//     const url = 'http://localhost:8000/api/locations/';
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       setLocations(data.locations);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const url = 'http://localhost:8000/api/conferences/';

//     let modifiedData = {...formData};

//     console.log('Location data: ', formData.location)

//     let locationId = formData.location.split('/').filter(Boolean).pop();

//     if (isNaN(locationId)) {
//         console.error('Invalid location URL')
//         return;
//     }

//     modifiedData.location = Number(locationId);

//     const fetchConfig = {
//       method: "post",
//       //Because we are using one formData state object,
//       //we can now pass it directly into our request!
//       body: JSON.stringify(modifiedData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     const response = await fetch(url, fetchConfig);

//     if (response.ok) {
//       //The single formData object
//       //also allows for easier clearing of data
//       setFormData({
//         name: '',
//         starts: '',
//         ends: '',
//         description: '',
//         max_presentations: '',
//         max_attendees: '',
//         location: '',
//       });
//     }
//   }

//   //Notice that we can also replace multiple form change
//   //eventListener functions with one
//   const handleFormChange = (e) => {
//     const value = e.target.value;
//     const inputName = e.target.name;

//     //We can condense our form data event handling
//     //into on function by using the input name to update it

//     setFormData({
//       //Previous form data is spread (i.e. copied) into our new state object
//       ...formData,

//       //On top of the that data, we add the currently engaged input key and value
//       [inputName]: value
//     });
//   }

//   return (
//     <div className="my-5 container">
//       <div className="offset-3 col-6">
//         <div className="shadow p-4 mt-4">
//           <h1>Create a new conference</h1>
//           <form onSubmit={handleSubmit} id="create-conference-form">

//             <div className="form-floating mb-3">
//               {/* <!-- Now, each field in our form references the same function --> */}
//               <input onChange={handleFormChange} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
//               <label htmlFor="name">Name</label>
//             </div>

//             <div className="form-floating mb-3">
//               <input onChange={handleFormChange} placeholder="Starts" required type="date" name="starts" id="starts" className="form-control" />
//               <label htmlFor="starts">Starts</label>
//             </div>

//             <div className="form-floating mb-3">
//               <input onChange={handleFormChange} placeholder="Ends" required type="date" name="ends" id="ends" className="form-control" />
//               <label htmlFor="ends">Ends</label>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="description">Description</label>
//               <textarea onChange={handleFormChange} className="form-control" id="description" rows="3" name="description" className="form-control"></textarea>
//             </div>

//             <div className="form-floating mb-3">
//               <input onChange={handleFormChange} placeholder="Maximum presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control" />
//               <label htmlFor="max_presentations">Maximum presentations</label>
//             </div>

//             <div className="form-floating mb-3">
//               <input onChange={handleFormChange} placeholder="Maximum attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control" />
//               <label htmlFor="max_attendees">Maximum attendees</label>
//             </div>

//             <div className="mb-3">
//               <select onChange={handleFormChange} required name="location" id="location" className="form-select">
//                 <option value="">Choose a location</option>
//                 {locations.map(location => {
//                   return (
//                     <option key={location.href} value={location.href}>{location.name}</option>
//                   )
//                 })}
//               </select>
//             </div>
//             <button className="btn btn-primary">Create</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ConferenceForm;
















import React, { useEffect, useState, } from 'react';

function ConferenceForm () {
    const [locations, setLocations] = useState([]);
    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const [startDate, setStartDate] = useState('');
    const handleStartDateChange = (event) => {
        const value = event.target.value;
        setStartDate(value);
    }
    const [endDate, setEndDate] = useState('');
    const handleEndDateChange = (event) => {
        const value = event.target.value;
        setEndDate(value);
    }
    const [description, setDescription] = useState('');
    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }
    const [maximumPresentations, setMaximumPresentations] = useState('');
    const handleMaximumPresentationChange = (event) => {
        const value = event.target.value;
        setMaximumPresentations(value);
    }
    const [maximumAttendees, setMaximumAttendees] = useState('');
    const handleMaximumAttendeesChange = (event) => {
        const value = event.target.value;
        setMaximumAttendees(value);
    }
    const [location, setLocation] = useState('');
    const handleLocationChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const locationId = event.target.options[selectedIndex].value;
        setLocation(locationId);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};
        data.name = name;
        data.starts = startDate;
        data.ends = endDate;
        data.description = description;
        data.max_presentations = maximumPresentations;
        data.max_attendees = maximumAttendees;
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
            setStartDate('');
            setEndDate('');
            setDescription('');
            setMaximumPresentations('');
            setMaximumAttendees('');
            setLocation('');
        }
    }
    const fetchData = async () => {
        const url = 'http://localhost:8000/api/locations/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setLocations(data.locations);
        }
      }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={startDate} onChange={handleStartDateChange} placeholder="Starts" required type="date" name="starts" id="starts" className="form-control"/>
                <label htmlFor="starts">Starts</label>
              </div>
              <div className="form-floating mb-3">
                <input value={endDate} onChange={handleEndDateChange} placeholder="Ends" required type="date" name="ends" id="ends" className="form-control"/>
                <label htmlFor="ends">Ends</label>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea value={description} onChange={handleDescriptionChange} required type="text" name="description" id="description" className="form-control"></textarea>
              </div>
              <div className="form-floating mb-3">
                <input value={maximumPresentations} onChange={handleMaximumPresentationChange} placeholder="Maximum presentations" required type="number" name="max_presentations" id="max_presentations" className="form-control"/>
                <label htmlFor="max_presentations">Maximum presentations</label>
              </div>
              <div className="form-floating mb-3">
                <input value={maximumAttendees} onChange={handleMaximumAttendeesChange} placeholder="Maximum attendees" required type="number" name="max_attendees" id="max_attendees" className="form-control"/>
                <label htmlFor="max_attendees">Maximum attendees</label>
              </div>
              <div className="mb-3">
                <select value={location} onChange={handleLocationChange} required id="location" name="location" className="form-select">
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
    );
}

export default ConferenceForm;
