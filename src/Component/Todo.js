import React , {useState} from 'react'
import "./TodoStyle.css"

function Todo() {

    const [inputdata ,  setInputData] = useState ("")
    const [items ,  setItems] = useState ([])

    //ADD ITEM
    const addItem = () => {
        if (!inputdata) {
            alert("fill any task")
        }

        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name : inputdata
            }
            setItems([...items , myNewInputData])
            setInputData("");
        }
    }

    // DELETE ITEMS

    const deleteItem = (index) => {
        const updatedItem = items.filter ((curElem) => {
            return curElem.id !== index;
        })

        setItems (updatedItem)
    }

    //REMOVE ALL

    const removeAll = () => {
        setItems([])
    }

  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <figcaption>Add Your List Here 🤷‍♂️</figcaption>
                </figure>

                <div className='addItems'>
                    <input type="text" 
                    placeholder='✍️Add Task' 
                    className='form-control'
                    value={inputdata}
                    onChange={ (event) => setInputData (event.target.value)}/>
                     
                    <i class="fa fa-plus add-btn" onClick={addItem}></i>
                </div>

                {/* SHOW ITEMS */}

                <div className='showItems' >
                    {items.map((curElem , index) => {
                        return(
                          <div className='eachItem' key={curElem.id}>
                               <h3>{curElem.name}</h3>
                                   <div className='todo-btn'>
                                      <i class="far fa-edit add-btn"></i>
                                     <i class="far fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
                                   </div>
                          </div>
                        )
                    })}
                    
                </div>



                {/* Remove */}
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text = 'Remove All'
                    onClick={removeAll}>
                        <span>CHECK LIST</span></button>
                </div>

            </div>

        </div>
    </>
  )
}

export default Todo