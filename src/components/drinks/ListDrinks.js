import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import "./ListDrinks.css";

const ListDrinks = () => {
  const Coffee = useSelector((state) => state.Drinks.Drinks.slice(0, 19));
  const [pageNumb, setPageNum] = useState(0);
  const coffePerPage = 5;
  const pageVisited = pageNumb * coffePerPage;
  const pageCount = Math.ceil(Coffee.length / coffePerPage);
  const displayCoffee = Coffee.slice(
    pageVisited,
    pageVisited + coffePerPage
  ).map((item) => {
    return (
      <div
        data-aos={"fade-in"}
        key={item.id}
        className=" col-sm-6 col-md-4   my-2"
      >
        <img
          class="card-img-top rounded Card_image"
          src={item.image}
          alt="Card  cap"
        />

        <div className="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.description}</p>
          <Link to={`/coffee/${item.id}`}>  <button className="btn btn-primary"> view product </button> </Link>
        </div>
      </div>
    );
  });

  const handlePageClick = async (data) => {
    console.log(data.selected);

    setPageNum(data.selected);
  };

  return (
    <div className="mx-5 mt-5 DrinksContainer">
      <div className="row m-2">{displayCoffee}</div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default ListDrinks;
