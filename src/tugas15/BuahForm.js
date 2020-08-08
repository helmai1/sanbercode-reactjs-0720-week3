import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"
import axios from "axios"

const BuahForm = () =>{ 
  const [dataBuah, setDataBuah, idBuah, setIdBuah, input, setInput, status, setStatus] = useContext(BuahContext)
  
  const handleSubmit = (event) =>{ 
    event.preventDefault()

    console.log('masuk')
    console.log(status)

		if(input['name'].replace(/\s/g, '') !== "" && input['price'].toString().replace(/\s/g, '') !== "" && input['weight'].toString().replace(/\s/g, '') !== "" ){
			if(status === "create"){
				axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
					.then(res => {
						console.log(res.data)
						setDataBuah([...dataBuah, {name: res.data.name, price: res.data.price, weight: res.data.weight}])
					})
			}else if(status === "edit"){
				axios.put(`http://backendexample.sanbercloud.com/api/fruits/${idBuah}`, input)
					.then(res => {
						let buah = dataBuah.find(el => el.id === idBuah)
						buah['name'] = input.name
						buah['price'] = input.price
						buah['weight'] = input.weight
						setDataBuah([...dataBuah])
					})
			}

			setIdBuah(0)
			setInput({
				name: "",
				price: "",
        weight: ""
      })
      setStatus("create")
		}
	}
  
  const handleChange = (event) => {
    const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
    }))
	}


  return(
    <>
    <h1 style={{textAlign:"center", marginTop: '25px', marginBottom: '25px'}}>Form Buah</h1>
		<form onSubmit={handleSubmit} style={{width:'25%', marginLeft: 'auto', marginRight: 'auto'}}>
			<div class="form-group">
				<label> Nama Buah : </label>          
				<input class="form-control" type="text" name='name' value={input.name} onChange={handleChange} placeholder="name" />
			</div>
			<div className="form-group">
				<label>Harga Buah : </label>
				<input class="form-control" type="text" name='price' value ={input.price} onChange={handleChange} placeholder="price" />
			</div>
			<div className="form-group">
				<label>Berat Buah : </label>
				<input class="form-control" type="text" name='weight' value={input.weight} onChange={handleChange} placeholder="in gram" />
			</div>
			<br/>
			<button type="submit" class="btn btn-primary"> submit</button>
		</form>
    </>
  )
}

export default BuahForm;