import React from "react";
import "./style.css"
import { useState } from "react";
const Spectre = () => {
    const [users, getUsers] = useState([
        {
            img: 'https://cdn-icons-png.flaticon.com/512/21/21104.png',
            firstName: 'test 1',
            lastName: 'Testyan 1',
            price: 300000,
            position: 'developer'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/634/634761.png',
            firstName: 'test 2',
            lastName: 'Testyan 2',
            price: 350000,
            position: 'designer'
        },
        {
            img: 'https://clck.ru/reUkD',
            firstName: 'test 3',
            lastName: 'Testyan 3',
            price: 400000,
            position: 'developer'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/634/634761.png',
            firstName: 'test 4',
            lastName: 'Testyan 4',
            price: 200000,
            position: 'manager'
        },
        {
            img: 'https://clck.ru/reUkD',
            firstName: 'test 5',
            lastName: 'Testyan 5',
            price: 150000,
            position: 'manager'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/634/634761.png',
            firstName: 'test 6',
            lastName: 'Testyan 6',
            price: 450000,
            position: 'developer'
        },
        {
            img: 'https://clck.ru/reUkD',
            firstName: 'test 7',
            lastName: 'Testyan 7',
            price: 100000,
            position: 'bloger'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/634/634761.png',
            firstName: 'test 9',
            lastName: 'Testyan 9',
            price: 300000,
            position: 'developer'
        },
        {
            img: 'https://clck.ru/reUkD',
            firstName: 'test 10',
            lastName: 'Testyan 10',
            price: 600000,
            position: 'designer'
        },
        {
            img: 'https://cdn-icons-png.flaticon.com/512/634/634761.png',
            firstName: 'test 11',
            lastName: 'Testyan 11',
            price: 550000,
            position: 'manager'
        },
        {
            img: 'https://clck.ru/reUkD',
            firstName: 'test 12',
            lastName: 'Testyan 12',
            price: 125000,
            position: 'bloger'
        }
    ])
    const [inputValue, getValue] = useState()
    const [sort, setsort] = useState([])
    const [flag, userFlag] = useState(false)
    //  userFlag(true)
    //  console.log();

    const foo = () => {
       
        const newSort = []
        if (inputValue) {
            userFlag(!flag)
        
        for (let i = 0; i < users.length; i++) {
            if (users[i].position === inputValue ) {
                newSort.push(users[i])

            }
        }
        newSort.sort((a, b) => a - b)
        setsort(newSort)
        console.log(sort);
    }
    }

    const foo1 = (e) => {
        const x = null
        
        console.log(x);
        getValue(e.target.value)
        console.log(inputValue);
    }





    return <div>

        <input type="text" value={inputValue} onChange={foo1} />
        <button onClick={foo}>Sort</button>
        <div className="P-flex">
            {flag ? sort.map((el) => {
                return <div className="G-Spectre">

                    <img src={el.img} alt="" className="P-img" />

                    <div>     <p className="P-border">{el.firstName}</p>
                        <p className="P-border">{el.lastName}</p>
                    </div>
                    <div className="P-border">{el.position}</div>
                    <h3 className="P-border">{el.price}</h3>

                </div>
            }) : null}

            {!flag ? users.map((el) => {
                return <div className="G-Spectre">

                    <img src={el.img} alt="" className="P-img" />

                    <div>     <p className="P-border">{el.firstName}</p>
                        <p className="P-border">{el.lastName}</p>
                    </div>
                    <div className="P-border">{el.position}</div>
                    <h3 className="P-border">{el.price}</h3>

                </div>
            }) : null}

        </div>
    </div>
}

export default Spectre