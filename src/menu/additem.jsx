import React, { useState } from "react";
import { Row, Col, Container} from "react-bootstrap";

function Additem() {
    let[menu_id,setMenu_id] = useState('');
    let [item, setItem] = useState('');
    let [price, setPrice] = useState('');
    let [tag, setTag] = useState('');
    let [available_option, setAvailable_option] = useState('');
    let [h_id, setH_id] = useState('');
   
    function submitData() {
        // alert("you are clicked")
        let userdata = {
            menu_id : menu_id,
            item : item,
            price : price,
            tag : tag,
            available_option : available_option,
            h_id : h_id,
            
        };
        let reqData = {
            method : "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userdata)
        }
        fetch('http://localhost:3001/menuitem', reqData)
            .then(response => console.log(`Data Submitted ${response.status}`))
    }
    return (
        <>
            <Container flud="md">
                <div><h1>Add Item</h1></div>
                <Row>
                    <Col>
                        <h6><label>Menu_Id</label>
                        <input className="form-control" placeholder="eg:1"
                            type="text" value={menu_id} onChange={(e) => setMenu_id(e.target.value)} />
                        <label>Item</label>
                        
                        <input className="form-control" placeholder="eg.paneer" type="text" value={item} onChange={(e) => setItem(e.target.value)} />

                        <label>Price</label>
                        <input className="form-control" placeholder="eg.500" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <label>Tag</label>
                        <input className="form-control" placeholder="Tag" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
                        <label>Available_option</label>
                        <input className="form-control" placeholder="avai_opt" type="text" value={available_option} onChange={(e) => setAvailable_option(e.target.value)} />
                        <label>H_id</label>
                        <input className="form-control" placeholder="eg. ****" type="number" value={h_id} onChange={(e) => setH_id(e.target.value)} />
                        </h6>
                    </Col>
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
export default Additem;