import './singlePage.css'
import React from 'react'
import { AiFillStar } from 'react-icons/all'
import { tabItems } from '../data/tabItems'
import { imgs } from '../data/itemPhoto'


const TabItemComponent = ({
    title = '',
    onItemClicked = () =>{},
    isActive = false,
}) => {
    return (
        <div className= 'nav-item'
            onClick={onItemClicked}
        >
          <li className='nav-link'>{title}</li>

        </div>
    )
}

const SinglePage = () => {
    const [active, setActive] = React.useState(0)

    return (
        <>
            <div className='container-fluid'>
                {/* picture and product name and details */}
                <div className='container-fluid p-5' id='p'>
                    <div className='row'>
                        <div className='col-sm border border-primary'>
                            <div className='col'>
                                {imgs.map(({ id, pic }) => (
                                    <div key={id}>
                                        <img
                                            src={pic}
                                            className='border border-secondary mr-2'
                                            width='75'
                                            alt='...'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col border border-primary bg-light'>
                            <div className='d-flex flex-shrink-1'>
                                <img
                                    src='https://www.stockportfencing.co.uk/wp-content/uploads/2016/11/s202.jpg'
                                    width='300'
                                    height='300'
                                    alt='product pic'
                                />
                            </div>
                        </div>
                        <div className='col border border-primary'>
                            <h2 className='fw-bold'>Product Name</h2>
                            <p>name of the store</p>
                            <span className='fs-2' style={{ color: '#ff9900' }}>
                                <i>
                                    <AiFillStar />
                                </i>
                                <i>
                                    <AiFillStar />
                                </i>
                                <i>
                                    <AiFillStar />
                                </i>
                                <i>
                                    <AiFillStar />
                                </i>
                                <i>
                                    <AiFillStar />
                                </i>
                            </span>
                            (28)
                            <p className='fw-bold fs-2'>25,000 RWF</p>
                            <p>xx in the store</p>
                            <p>Lorem Ipsum is simply dummy text of the</p>
                            <div className='d-flex  justify-content-between align-items-center'>
                                <div className='w-452'>
                                    <select
                                        className='form-select form-select-md'
                                        aria-label='multiple select example'
                                        style={{ width: '130px' }}
                                    >
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <button
                                        className='btn bg-color text-white'
                                        style={{
                                            width: '130px',
                                            backgroundColor: '#004896',
                                        }}
                                    >
                                        Add cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tabs and details */}
                <div className='container'>
                    {/* tabs */}
                    <div className=''>
                        <ul className='nav nav-fill' style={{ color: '#000' }}>
                            {tabItems.map(({ id, title }) => (
                                <TabItemComponent
                                    key={title}
                                    title={title}
                                    onItemClicked={() => setActive(id)}
                                    isActive={active === id}
                                />
                            ))}
                        </ul>
                    </div>
                    <hr />
                    {/* details  */}
                    <div className='container'>
                        <div>
                            {tabItems.map(({ id, content }) => {
                                return active === id ? content : ''
                            })}
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePage
