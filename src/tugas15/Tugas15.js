import React, {useContext, useEffect} from "react"
import axios from 'axios';
import {BuahContext} from "./buahContext"
import BuahAction from './buahAction'

const BuahList = () =>{
  const [dataBuah, setDataBuah] = useContext(BuahContext)

  useEffect(() =>{
		if(dataBuah === null){
			axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
				.then(res => {
					setDataBuah(res.data.map(el => {return {id:el.id, name:el.name, price:el.price, weight:el.weight }}))
				})
		}
  })

  return(
    <>
      <h1 style={{textAlign:"center", marginTop: '25px', marginBottom: '25px'}}>Table Harga Buah</h1>
	  	<table class="table table-striped" style={{width:'75%', marginLeft: 'auto', marginRight: 'auto'}}>
			<thead class = "thead-dark">
        <tr>
          <th> No </th>
          <th> Name </th>
          <th> Price </th>
          <th> Weight </th>
          <th> Action </th>
        </tr>
      </thead>
        {dataBuah !== null && dataBuah.map((el,index) =>{
          return(
            <tr key={index}>
              <td> {index + 1}</td>
              <td> {el.name}</td>
              <td> {el.price}</td>
              <td> {el.weight}</td>
                <BuahAction id = {el.id}/>
            </tr>
          )
        })}
      </table>
    </>
  )

}

export default BuahList;