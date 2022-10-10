import React, { useEffect,useState } from 'react'
import {Table,Button,Modal} from 'react-bootstrap'
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Hotellist() {
    let [data,setData] = useState([]);
    const [show,setShow] = useState(false);
    let [h_id, setH_id] = useState('');
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [pin, setPin] = useState('');
    let [howner, setHowner] = useState('');
    let [contact, setContact] = useState('');
    let [type, setType] = useState('');
    let handleClose =()=> setShow (false);
    const handleShow = (h_id,name,address,city,state,pin,howner,contact,type) =>{
      setShow(true)
      setH_id(h_id)
      setName(name)
      setAddress(address)
      setCity(city)
      setState(state)
      setPin(pin)
      setHowner(howner)
      setContact(contact)
      setType(type)

    }
    useEffect(()=> {
        async function dataFetch(){
            let response = await fetch ("http://localhost:3001/hotellist")
            let Udata = await response.json()
            setData(Udata.Response);
        }
        dataFetch();
    },[]);
    function deleteuser(hid){
      fetch(`http://localhost:3001/hdelete/${hid}`,{method :"DELETE"})
      .then((res)=>{
        if(res.status===200)
        {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
           
          })
          }
        })
      }
      function updateData(){
        let users = [{h_id,name,address,city,state,pin,howner,contact,type}]
        console.log("users",users)
             alert("updated")
        fetch(`http://localhost:3001/hput/${h_id}`,
        {
        method:"PUT",
      headers:{
              'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
            body:JSON.stringhfy({
              "name": name,
              "address":address,
              "city":city,
              "state":state,
              "pin":pin,
              "howner":howner,
              "contact":contact,
              "type":type

            })
      })
      .then((res) =>{
        if(res){
          alert("menu data updated")

          return res.json()
        }
      })
    .then((data) =>{
      console.log("after update");
      // console.log(index);
      console.log(data)
    })
     
  }
     
    
  return (
    <>
    <Table striped bordered hover size="sm">
    <thead>
      <tr>
        <th>Hotel_Id</th>
        <th>Hotel Name</th>
        <th>Address</th>
        <th>City</th>
        <th>Pin</th>
        <th>Owner</th>
        <th>Contact</th>
        <th>Type</th>
        <th>Update list</th>
        <th>Delete list</th>
        
      </tr>
    </thead>
    <tbody>
    {data && data.map((user,index)=>{
        return(
        <tr key={index}>
        <td>{user.h_id}</td>
        <td>{user.name}</td>
        <td>{user.address}</td>
        <td>{user.city}</td>
        <td>{user.state}</td>
        <td>{user.pin}</td>
        <td>{user.howner}</td>
        <td>{user.contact}</td>
        <td>{user.type}</td>
        <td><Button variant="primary" onClick={()=> handleShow(user.h_id,user.name,user.address,user.city,user.state,user.pin,user.howner,user.contact,user.type)}>Update</Button>{' '}</td>
        <td><Button onClick={()=>deleteuser(user.h_id)} variant="danger">Delete</Button></td>
        
      </tr>
        )
    })}
    
      </tbody>
  </Table>
   <Modal show={show} onHide ={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Update Data</Modal.Title>
   </Modal.Header>

   <Modal.Body>
  
                       
                    <label>h_id</label>
                    <input className="form-control" placeholder="eg:1" type="text" value={h_id} onChange={(e) => setH_id(e.target.value)} />
                    
                    <label>Name</label>
                    <input className="form-control" placeholder="eg.paneer" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>address</label>
                    <input className="form-control" placeholder="eg.500" type="number" value={address} onChange={(e) =>setAddress (e.target.value)} />
                    <label>Available_option</label>
                    <input className="form-control" placeholder="Tag" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    <label>Pin</label>
                    <input className="form-control" placeholder="avai_opt" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                    <label>Available_option</label>               
                    <input className="form-control" placeholder="Tag" type="text" value={parseInt} onChange={(e) => setPin(e.target.value)} />
                    <label>H_id</label>
                    <input className="form-control" placeholder="avai_opt" type="text" value={howner} onChange={(e) => setHowner(e.target.value)} />
                    <label>H_id</label>
                    <input className="form-control" placeholder="eg. ****" type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                    
                    <input className="form-control" placeholder="eg. ****" type="number" value={type} onChange={(e) => setType(e.target.value)} />
   </Modal.Body>
   

   <Modal.Footer>
     <Button variant="secondary" onclick={handleClose}>Close</Button>
     <Button variant="primary" onClick={updateData}>Save changes</Button>
   </Modal.Footer>
 </Modal>
 </>
  );

}

    

export default Hotellist;
// import React, { useEffect, useState } from "react";
// import { Table, Button } from "react-bootstrap";
// import { Modal } from "react-bootstrap";
// // import swal from 'sweetalert';
// function Hotallist() {
//     let [data1, setData1] = useState([]);
//     const [show, setShow] = useState(false);
//     let [h_id, setH_id] = useState('');
//     let [h_name, setName] = useState('');
//     let [address, setAddress] = useState('');
//     let [city, setCity] = useState('');
//     let [state, setState] = useState('');
//     let [pin, setPin] = useState('');
//     let [howner, setHowner] = useState('');
//     let [contact, setContact] = useState('');
//     let [type, setType] = useState('');
//     let [index, setIndex] = useState(-1);
//     const handleClose = () => setShow(false);
//     const handleShow = (h_id, name, address, city, state, pin, howner, contact, type, index) => {
//         setShow(true);
//         setH_id(h_id);
//         setName(name);
//         setAddress(address);
//         setCity(city);
//         setState(state);
//         setPin(pin);
//         setHowner(howner)
//         setContact(contact)
//         setType(type)
//         setIndex(index)
//     }
//     useEffect(() => {
//         async function dataFetch() {
//             let response = await fetch("http://localhost:3001/hotallist")
//             let Udata = await response.json()
//             setData1(Udata.response);
//         } dataFetch();
//     }, []);
//     function deleteUser(h_id) {
//         // alert(uid)
//         fetch(`http://localhost:3001/hdelete/${h_id}`, { method: "DELETE" })
//             .then((res) => {
//                 if (res.status === 200) {
//                     // alert("user deleted")
//                     // swal({
//                     //     title: "Good job!",
//                     //     text: "You clicked the button!",
//                     //     icon: "success",
//                     //     button: "Aww yiss!",
//                     // });
//                 }
//             })
//     }

//     function updateData(){
//         // let users = [{ h_id, h_name, address, city, state, pin, howner, contact, type }]
//         // console.log("users", users)
//         // alert("In process...");
//         fetch(`http://localhost:3001/hput/${h_id}`,
//             {
//                 method: "PUT",
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify({
//                     // "name": name,
//                     "address": address,
//                     "city": city,
//                     "state": state,
//                     "pin": pin,
//                     "howner": howner,
//                     "contact": contact,
//                     "type": type
//                 })
//             })
//             .then((res) => {
//                 if (res) {

//                     alert("menu data updated")

//                     return res.json()
//                 }
//             })
//             .then((data) => {
//                 console.log("after update");
//                 console.log(index);
//                 //data1[index].item = item;
//                 // setData1(data1[index].item = item)
//                 //console.log(data1[0].item);
//                 console.log(data)
//             })
//     }

//     function Display() {
//         return (
//             <Table striped bordered hover size="sm">
//                 <thead>
//                     <tr>
//                         <th>#Id</th>
//                         <th>name</th>
//                         <th>address</th>
//                         <th>city</th>
//                         <th>state</th>
//                         <th>pin</th>
//                         <th>howner</th>
//                         <th>contact</th>
//                         <th>type</th>
//                         <th>Update</th>
//                         <th>Delete</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data1.map((User, index) => {
//                         return (
//                             <tr key={index}>
//                                 <td>{User.h_id}</td>
//                                 <td>{User.name}</td>
//                                 <td>{User.address}</td>
//                                 <td>{User.city}</td>
//                                 <td>{User.state}</td>
//                                 <td>{User.pin}</td>
//                                 <td>{User.howner}</td>
//                                 <td>{User.contact}</td>
//                                 <td>{User.type}</td>
//                                 <td><Button variant="success" onClick={() => handleShow(User.h_id, User.name, User.address, User.city, User.state, User.pin, User.howner, User.contact, User.type)}>Update</Button></td>
//                                 <td><Button onClick={() => deleteUser(User.h_id)} variant="danger">Delete</Button></td>
//                             </tr>
//                         )
//                     }
//                     )}
//                 </tbody>
//             </Table>
//         )
//     }
//     return (
//         <>
//             <Display />
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Update Data</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <label>H_Id</label>
//                     <input className="form-control" placeholder="h_id"
//                         type="text" value={h_id} onChange={(e) => setH_id(e.target.value)} />
//                     <label>H_Name</label>
//                     <input className="form-control" placeholder="h_name" type="text" value={h_name} onChange={(e) => setName(e.target.value)} />
//                     <label>Address</label>
//                     <input className="form-control" placeholder="address" type="email" value={address} onChange={(e) => setAddress(e.target.value)} />
//                     <label>City</label>
//                     <input className="form-control" placeholder="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//                     <label>State</label>
//                     <input className="form-control" placeholder="state" type="text" value={state} onChange={(e) => setState(e.target.value)} />
//                     <label>Pincode</label>
//                     <input className="form-control" placeholder="eg. ****" type="number" value={pin} onChange={(e) => setPin(e.target.value)} />
//                     <label>Howner</label>
//                     <input className="form-control" placeholder="howner" type="text" value={howner} onChange={(e) => setHowner(e.target.value)} />
//                     <label>contact</label>
//                     <input className="form-control" placeholder="****" type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
//                     <label>type</label>
//                     <input className="form-control" placeholder="type" type="text" value={type} onChange={(e) => setType(e.target.value)} />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button varient="secondery" onClick={handleClose}>Close</Button>
//                     <Button varient="primary" onClick={updateData}>save changes</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     )
// }
// export default Hotallist;