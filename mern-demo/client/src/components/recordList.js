import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position}</td>
   <td>{props.record.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
//fetch data from database
export default function RecordList() {
    //records is the [] in useState([]) and setRecords is a function that changes it once it re-renders
    //empty list passed into useState() is the initial 'state' of 'records'
    const [records, setRecords] = useState([]);
    useEffect(() => {//this is run after changing the website using js Document obj manipulation
        async function getRecords() {
            const response = await fetch("https://localhost:5000/record/");
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`
                window.alert(message);
                return
            } 
            const records = await response.json();
            setRecords(records);
        }
        getRecords();
        return;
    }, [records.length])

    //deletes ENTIRE records
    async function deleteRecord(subgroup) {
        const response = await fetch(`https://localhost:5000/${subgroup}/`, {
            method:"DELETE"
        });
        const newRecords = ((el) => el._id !== response._id);
        setRecords(newRecords);
    }
    
    //maps out the records in a table
    function recordList() {
        return records.map((record) => {
            return (
                <Record
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            )
        })
    }

    //basically render the whole table we made via JSX
    return (
        <div>
         <h3>Record List</h3>
         <table className="table table-striped" style={{ marginTop: 20 }}>
           <thead>
             <tr>
               <th>Name</th>
               <th>Position</th>
               <th>Level</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>{recordList()}</tbody>
         </table>
       </div>
    );
}



