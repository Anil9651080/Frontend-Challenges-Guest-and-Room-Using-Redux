// import React, { useState } from 'react'

// const RoomComponent = () => {

//     const [adult, setAdults] = useState(" ");
//     const [children, setChildren] = useState(" ");
//     const [total, setTotal] = useState(" ");
//     const [isCalculated, setIsCalulated] = useState(false);


//     const handleAdultsChange = (operation) => {
//         setAdults(prev => {
//             const newCount = operation === 'increase' ? prev + 1 : prev - 1;
//             return Math.max(newCount, 0); // Minimum 1 adult
//         });
//     };

//     const handleChildrenChange = (operation) => {
//         setChildren(prev => {
//             const newCount = operation === 'increase' ? prev + 1 : prev - 1;
//             return Math.max(newCount, 0);
//         })
//     }
//     const totalSum = () => {
//         setTotal(adult + children);
//         setIsCalulated(true);
//     }
//     return (
//         <div>
//             <h1>Who is staying</h1>
//             <h3>Room 1</h3>
//             {/* Adults */}
//             <h1>
//                 Adults{' '}
//                 <span>
//                     <button onClick={() => handleAdultsChange('decrease')} disabled={adult <= 0}>-</button>
//                     {adult}
//                     <button onClick={() => handleAdultsChange('increase')}>+</button>
//                 </span>
//             </h1>

//             {/* Children */}
//             <h1>
//                 Children{' '}
//                 <span>
//                     <button onClick={() => handleChildrenChange('decrease')} disabled={children <= 0}>-</button>
//                     {children}
//                     <button onClick={() => handleChildrenChange('increase')}>+</button>
//                 </span>
//             </h1>
//             <button onClick={totalSum}>Add total Sum</button>
//             {
//                 isCalculated && <h1>Total Sum Adults + Children : {total}</h1>
//             }
//         </div>
//     )
// }

// export default RoomComponent



// components/RoomComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementAdults, decrementAdults,
    incrementChildren, decrementChildren,
    calculateTotal
} from '../redux/roomSlice';
import '../styles/RoomComponent.css'; // Import the CSS file

const RoomComponent = () => {
    const { adults, children, total, isCalculated } = useSelector((state) => state.room);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1>Who is staying</h1>
            <h3>Room 1</h3>

            {/* Adults Section */}
            <h1>
                Adults{' '}
                <span>
                    <button onClick={() => dispatch(decrementAdults())} disabled={adults <= 0}>-</button>
                    {adults}
                    <button onClick={() => dispatch(incrementAdults())}>+</button>
                </span>
            </h1>

            {/* Children Section */}
            <h1>
                Children{' '}
                <span>
                    <button onClick={() => dispatch(decrementChildren())} disabled={children <= 0}>-</button>
                    {children}
                    <button onClick={() => dispatch(incrementChildren())}>+</button>
                </span>
            </h1>

            {/* Button to calculate total sum */}
            <button onClick={() => dispatch(calculateTotal())}>Add total Sum</button>

            {/* Conditionally render total sum */}
            {isCalculated && <h1 className="total-sum">Total Sum Adults + Children: {total}</h1>}
        </div>
    );
};

export default RoomComponent;
