import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{ 
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=>console.error(error))

    }
   ,[])
    return (
        <div>
            <h2>left nav</h2>
            {
                categories.map(category=> <p 
                 key={category.id}> 
                 <div className='ps-4 '> {
                    <Link  to={`/category/${category.id}`}
                     className='text-black text-decoration-none'>{category.name}</Link>
                  } 
                  </div>

                </p>)
            }
        </div>
    );
};

export default LeftNav;     