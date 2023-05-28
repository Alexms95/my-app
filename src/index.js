import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const BookList = () => (
  <section className="w-[90vw] max-w-[1170px] mx-[5rem] my-auto grid gap-[2rem] md:grid-cols-3">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
);

const Book = () => {
  return (
    <article className="rounded-[1rem] bg-[#fff] px-[1rem] py-[2rem]">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1 className="font-bold">I Love to the Moon and Back</h1>
      <h4>Amelia Hepworth</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
