import { Modal } from 'react-bootstrap';
import {Table,Button} from 'react-bootstrap'
import React, { useEffect,useState } from 'react' 
import Swal from 'sweetalert2/dist/sweetalert2.js'

function Viewlist(){
        let [data,setData] = useState([]);
        const [show, setShow] = useState('');
        const  handleClose =() =>setShow(false);
        let[menu_id,setMenu_id] = useState('');
    let [item, setItem] = useState('');
    let [price, setPrice] = useState('');
    let [tag, setTag] = useState('');
    let [available_option, setAvailable_option] = useState('');
    let [h_id, setH_id] = useState('');

    const handleShow = (menu_id,item,price,tag,available_option,h_id) =>{
      setShow(true)
      setMenu_id(menu_id)
      setItem(item)
      setPrice(price)
      setTag(tag)
      setAvailable_option(available_option)
      setH_id(h_id);

    }
        useEffect(()=> {
            async function dataFetch(){
                let response = await fetch ("http://localhost:3001/menulist")
                let Udata = await response.json()
                setData(Udata.Response);
            }
            dataFetch();
        },[]);
        function deleteuser(uid){
          fetch(`http://localhost:3001/mdelete/${uid}`,{method :"DELETE"})
          .then((res)=>{
            if(res.status===200)
            {
              // alert("user deleted")
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
            }
          })}
          function updateData(){
         

          }
   function Display(){       
    return(
        <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Menu_Id</th>
            <th>Item</th>
            <th>Price</th>
            <th>Tag</th>
            <th>Available_item</th>
            <th>H_id</th>
            <th>Update item</th>
            <th>Delete item</th>
            
            
          </tr>
        </thead>
        <tbody>
        {data && data.map((user,index)=>{
        return(
        <tr key={index}>
            <td>{user.menu_id}</td>
            <td>{user.item}</td>
            <td>{user.price}</td>
            <td>{user.tag}</td>
            <td>{user.available_option}</td>
            <td>{user.h_id}</td>

             <td><Button variant="primary" onClick={()=>handleShow(user.menu_id,user.item,user.price,user.tag
             ,user.available_option, user.h_id)}>Update</Button>{' '}</td>
            <td><Button onClick={()=>deleteuser(user.menu_id)} variant="danger">Delete</Button></td>
        
      </tr>
        )
    })}
        </tbody>
      </Table>
    )
}
return(
  <>
       <Display/>
       <Modal show={show} onHide ={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Update Data</Modal.Title>
       </Modal.Header>
 
       <Modal.Body>
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
       </Modal.Body>
 
       <Modal.Footer>
         <Button variant="secondary" onclick={handleClose}>Close</Button>
         <Button variant="primary" onClick={(menu_id)=>updateData(menu_id)}>Save changes</Button>
       </Modal.Footer>
     </Modal>
  </>
)
}
export default Viewlist;