import React, { useState } from 'react'

const List = ({ items }) => {
    const [subItems, setSubItems] = useState([]);
    const itemHandler = (item) => {
        if (item.child)
        {
            setSubItems(item.child)
        } else
        {
            console.log(item.title)
            setSubItems(null)
        }
    }
    return (
        <div className="flex gap-2">
            <ul className='flex flex-col gap-2'>
                {items.map((item, index) => (
                    <li key={index} onClick={() => itemHandler(item)} className="px-5 py-2 border w-16 cursor-pointer bg-indigo-200">{item.title}</li>
                ))}
            </ul>
            <ul className='flex flex-col gap-2'>
                {subItems && subItems.length > 0 && (
                    <List items={subItems} />
                )}
            </ul>
        </div>
    )
}

export default List