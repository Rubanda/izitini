import "./singlePage.css"
import { AiFillStar } from "react-icons/all"
import { icons } from "../data/icons"
const SinglePage = () => {
  return (
    <>
      <div className="container-fluid">
        {/* picture and product name and details */}
        <div className="container-fluid" id="p">
          <div className="row">
            <div className="col-sm border border-primary">
              <div className="col-md-4   text-center">
                <img
                  src="https://koumas-timber.com/wp-content/uploads/2020/05/Screws.jpg"
                  className="border border-secondary mr-2"
                  width="75"
                  alt="..."
                />
                <img
                  src="https://koumas-timber.com/wp-content/uploads/2020/05/Screws.jpg"
                  className="border border-secondary mr-2"
                  width="75"
                  alt="..."
                />
                <img
                  src="https://koumas-timber.com/wp-content/uploads/2020/05/Screws.jpg"
                  className="border border-secondary mr-2"
                  width="75"
                  alt="..."
                />
                <img
                  src="https://koumas-timber.com/wp-content/uploads/2020/05/Screws.jpg"
                  className="border border-secondary mr-2"
                  width="75"
                  alt="..."
                />
              </div>
            </div>
            <div className="col border border-primary bg-light">
              <img
                src="https://www.stockportfencing.co.uk/wp-content/uploads/2016/11/s202.jpg" width="300" height="300"
                alt="product pic"
              />
            </div>
            <div className="col border border-primary">
              <h2>Product Name</h2>
              <h6>name of the store</h6>
              <span>
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
              <p>25,000 RWF</p>
              <p>xx in the store</p>
              <p>
                src/components/SinglePage.tsx Line 3:10: 'icons' is defined but
                never used @typescript-eslint/no-unused-vars Search for the
                keywords to learn more about each warning. To ignore, add //
                eslint-disable-next-line to the line before.
              </p>
              <div className="d-flex j-between">
                <select></select>
                <button>Add cart</button>
              </div>
            </div>
          </div>
        </div>
        {/* tabs and details */}
        <div className="container">
          {/* tabs */}
          <div></div>
          {/* details  */}
          <div className="container">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePage
