import React, {useState, useEffect} from "react"
import axios from "axios"

const Lists = () => {
  
    const [dataHargaBuah, setDataHargaBuah] = useState(null)
	const [input, setInput] = useState({
		name: "",
		price: "",
		weight: ""
	})
	const [statusForm, setStatusForm] = useState("create")
	const [selectId, setSelectedId] = useState(0)

	useEffect(() =>{
		if(dataHargaBuah === null){
			axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
				.then(res => {
					setDataHargaBuah(res.data.map(el => {return {id:el.id, name:el.name, price:el.price, weight:el.weight }}))
				})
		}
	},[dataHargaBuah])

	const handleDelete = (event) => {
		let id = Number(event.target.value)
		let newDataBuah = dataHargaBuah.filter(el => el.id !== id)

		axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
			.then(res => {
				console.log(res)
			})
		setDataHargaBuah([...newDataBuah])
	}

	const handleEdit = (event) => {
		let id = Number(event.target.value)
		console.log(dataHargaBuah)
		let buah = dataHargaBuah.find(x => x.id === id)
		setInput({name: buah.name, price: buah.price, weight: buah.weight})
		setSelectedId(id)
		setStatusForm("edit")
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if(input['name'].replace(/\s/g, '') !== "" && input['price'].toString().replace(/\s/g, '') !== "" && input['weight'].toString().replace(/\s/g, '') !== "" ){
			if(statusForm === "create"){
				axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
					.then(res => {
						console.log(res.data)
						setDataHargaBuah([...dataHargaBuah, {name: res.data.name, price: res.data.price, weight: res.data.weight}])
					})

				// request.post({url: `http://backendexample.sanbercloud.com/api/fruits`, form: input}, (err, res, body) => {
				// 	if (err) { console.log(err) }
				// 	setDataHargaBuah([...dataHargaBuah, {name: body.name, price: body.price, weight: body.weight}])
				// });
			}else if(statusForm === "edit"){
				axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectId}`, input)
					.then(res => {
						let buah = dataHargaBuah.find(el => el.id === selectId)
						buah['name'] = input.name
						buah['price'] = input.price
						buah['weight'] = input.weight
						setDataHargaBuah([...dataHargaBuah])
					})
			}

			setStatusForm("create")
			setSelectedId(0)
			setInput({
				name: "",
				price: "",
				weight: ""
			})
		}
	}
  return(
    <>
      <h1>Daftar Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Buah</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              dataHargaBuah !== null && dataHargaBuah.map((el,index) =>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{el.weight/1000 + " kg"}</td>
                    <td>
                      <button onClick={handleEdit} value={el.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={el.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Buah</h1>
      <form onSubmit={handleSubmit}>
        <label>Nama buah:</label>          
        <input type="text" name='name' value={input.name} onChange={handleChange} placeholder="nama"/><br/><br/>
        <label>Harga Buah : </label>
		<input type="text" name='price' value ={input.price} onChange={handleChange} placeholder="harga" /><br/><br/>
		<label>Berat Buah : </label>
		<input type="text" name='weight' value={input.weight} onChange={handleChange} placeholder="dalam gram" /><br/><br/>
        <button>submit</button>
      </form>
    </>
  )
}

export default Lists
