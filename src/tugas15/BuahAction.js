import React, {useContext} from 'react'
import {BuahContext} from "./BuahContext"
import axios from 'axios'

const BuahAction = (props) => {
    const [dataBuah, setDataBuah,  setIdBuah,input, setInput, status, setStatus] = useContext(BuahContext)
    
    const handleDelete = (event) => {
      let id = Number(event.target.value)
		  let newDataBuah = dataBuah.filter(el => el.id !== id)

      axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
        .then(res => {
          console.log(res)
        })
        setDataBuah([...newDataBuah])
      }

      const handleEdit = (event) => {
		let id = Number(event.target.value)
		console.log(dataBuah)
		let buah = dataBuah.find(x => x.id === id)
		setInput({name: buah.name, price: buah.price, weight: buah.weight})
		setIdBuah(id)
		setStatus("edit")
	}

    return(
        <>
          <td>
            <button type="button" class="btn btn-warning"  onClick={handleEdit} value={props.id}>Edit</button>
            &nbsp;
            <button type="button" class="btn btn-danger" onClick={handleDelete} value ={props.id}>Delete</button>
          </td>
        </>
    )
}

export default BuahAction;