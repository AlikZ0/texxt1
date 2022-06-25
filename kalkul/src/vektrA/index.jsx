import React, {useEffect} from "react";
import "./style.css"
import {useState} from "react";

const Vektor = () => {

  const [maxin, setmaxim] = useState("dd")
  const [sort, setsort] = useState([])
  const [arry, setArry] = useState([2, 4, 5, 6, 8, 4, 2, 3, 5, 2, 9, 67, 4, 5633, 234, 435, 567, 234, 1223, 345, 567, 678, 56745, 6345, 345, 34213, 32354, 536, 456, 877698, 9, 8, 7, 6, 5, 345,])
  arry.push();

  const foo = () => {
    const arrmap = arry.map((el) => {
      if (el % 2 == 0) {
        return el
      } else {
        return el = null
      }
    })
    console.log(arrmap);
  }
  const foo1 = () => {

    let min = arry[0]
    let max = arry[0]
    for (let i = 0; i < arry.length; i++) {
      if (min > arry[i]) {
        min = arry[i]
      }
      if (max < arry[i]) {
        max = arry[i]
      }
      setmaxim(min * max)
    }
  }
  const foo2 = () => {
    const  newSort = []
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] % 2 === 0) {
        newSort.push(arry[i])
      }
    }
    newSort.sort((a, b) => a - b)
    setsort(newSort)
  }

  return <div>
    <button onClick={foo1}>Click Me</button>
    <br/>
    {maxin ? <h3>{maxin}</h3> : null}
    <button onClick={foo2}>Click Me</button>
    <br/>
    <h3>{sort}</h3>
    <div className="P-map">
      {arry.map((el) => {
        // return el%2===0? <h1>{el}</h1>: <h2>{el}</h2>
        // return <h1 style={{color: el%2===0? 'red':'rgba(200,200,200,0.5)'}}>{el}</h1>
        // return <h1 className={`${el%2===0? 'P-red':''}`}>{el}</h1>
      })}
    </div>

  </div>
}


export default Vektor