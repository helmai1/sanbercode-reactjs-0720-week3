import React from 'react';

class Buah extends React.Component {
    render() {
        let dataHargaBuah = [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
          ]
      return( <container>
          <center>
          <h2>Tabel Harga Buah</h2>
            <table>
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
            </tr>
            {dataHargaBuah.map(obj=>{
                return(
                    <tr>
                        <td>{obj.nama}</td>
                        <td>{obj.harga}</td>
                        <td>{obj.berat}</td>
                    </tr>
                );
            })}
            </table></center>
      </container>);
    }
}
export default Buah;