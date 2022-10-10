import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";

function Hotalreg() {
    let [hotel_id, setHotel_id] = useState('');
    let [hotel_name, setHotel_name] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [pincode, setPincode] = useState('');
    let [owner, setOwner] = useState('');
    let [contact, setContact] = useState('');
    let [type, setType] = useState('');
    function submitData() {
        // alert("you are clicked")
        let userdata = {
            hotel_id : hotel_id,
            hotel_name : hotel_name,
            address : address,
            city : city,
            state : state,
            pincode : pincode,
            owner: owner,
            contact: contact,
            type: type
        };
        let reqData = {
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userdata)
        }
        fetch('http://localhost:3001/hotelregistration', reqData)
            .then(response => console.log(`Data Submitted ${response.status}`))
    }
    return (
        <>
            <Container flud="md">
                <div><h2>Hotel Registration from</h2></div>
                <Row>
                    <Col>
                      <h6> <label><b>Hotel Id</b></label>
                        <input className="form-control" placeholder="eg: 10"
                            type="text" value={hotel_id} onChange={(e) => setHotel_id(e.target.value)} />
                        <label><b>Hotel Name</b></label>
                        <input className="form-control" placeholder="eg: Rajvilas" type="text" value={hotel_name} onChange={(e) => setHotel_name(e.target.value)} />
                        <label><b>Address</b></label>
                        <input className="form-control" placeholder="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <label>City</label>
                        <input className="form-control" placeholder="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        <label>State</label>
                        <input className="form-control" placeholder="state" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                        <label>Pincode</label>
                        <input className="form-control" placeholder="eg. ****" type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                        <label>Owner</label>
                        <input className="form-control" placeholder="Owner" type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
                        <label>contact</label>
                        <input className="form-control" placeholder="****" type="number" minLength={10} value={contact} onChange={(e) => setContact(e.target.value)} />
                        <label>Type</label>
                        <input className="form-control" placeholder="type" type="text" value={type} onChange={(e) => setType(e.target.value)} />
                        </h6>   </Col>
                </Row><br />
                <Row>
                    <Col>

                        <button onClick={submitData} className="btn btn-primary">Save</button>
                        <button className="btn btn-warning">Cancel</button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Hotalreg;