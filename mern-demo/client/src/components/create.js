import React, {useState} from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        name:"",
        position: "",
        level: "",
    });
    //use the router by "/"
    const navigate = useNavigate();
    //update state properties
    function updateForm(value) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        //post request sent to create url, add new to record
        const newPerson = { ...form }
        //this will require contacting database so async-await syntax used
        await fetch("http://localhost:3000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ name:"",position:"",level:"" });
        navigate("/");
    }
    return (
        <div>
            <h3>Create New Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor = "name">Name</label>
                    <input
                        type="text"
                        className = "form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({name:e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className = "form-control"
                        id="position"
                        value={form.name}
                        onChange={(e) => updateForm({position:e.target.value})}
                    />
                </div>
                <div>
                    <div className="form-group">
                        <input
                            type="radio"
                            className = "form-control"
                            id="positionOptions"
                            value="Senior"
                            checked = {form.level="Senior"}
                            onChange={(e) => updateForm({position:e.target.value})}
                        />
                        <label htmlFor="positionSenior" className="form-check-label">Senior</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            className = "form-control"
                            id="n"
                            value="Intern"
                            checked = {form.level="Intern"}
                            onChange={(e) => updateForm({position:e.target.value})}
                        />
                        <label htmlFor="positionIntern" className="form-check-label">Intern</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            className = "form-control"
                            id="n"
                            value="Junior"
                            checked = {form.level="Junior"}
                            onChange={(e) => updateForm({level :e.target.value})}
                        />
                        <label htmlFor="positionJunior" className="form-check-label">Junior</label>
                    </div>
                    <br />
                    <div>
                        <input
                            type="submit"
                            value="Update Record"
                            className = "btn btn-primary"
                        />
                    </div>
                </div>
            </form>
        </div>

    )
}
