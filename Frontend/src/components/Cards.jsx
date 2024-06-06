import React from 'react'

function Cards({ item }) {
  // console.log(item);
  return (
    <>
    <div className=" mt-4 my-3 p-3 ">
    <div className="card w-92 bg-white-100 shadow-xl transition-transform transform hover:scale-105
     dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="book" /></figure>
  <div className="card-body">
    <h2 className="card-title ">
      {item.name}
      <div className="badge badge-secondary text-white  text-xs  ">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between ">
      <div className="badge badge-outline bg-pink-200 dark:bg-pink-400">${item.price}</div> 
      <div className="badge badge-outline bg-pink-200 dark:bg-pink-400 hover:bg-pink-500 hover:text-white hover:px-2 py-1 duration-200 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards