
import List from './list';
import data from './data';
import { useState } from 'react';
import "./style.css"
function BirthDay() {

  const [myData, useData] = useState(data)

  const RemoveData = (e) => {
    useData([])
  }
  const HandelData = (e) => {
    useData(data)
  }
  return (
    <div className="App">
      <div className='main-list'>
        <h1 className='title'>{myData.length} birthdays today</h1>
        <List people={myData}></List>
        <div className='main-button'>
          <button className='clear' onClick={RemoveData}>clear data</button>
          <button className='clear' onClick={HandelData}>return data</button>
        </div>
      </div>

    </div>
  );
}

export default BirthDay;
