import React, { Fragment } from "react";

const ItemContent = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <h2>{data.title}</h2>
      <p className="item-content">{data.description}</p>
      <a
        className="item-content hover-red-transform"
        href={require(`../static/${data.fileName}`)}
        download
        style={{ textDecoration: "none" }}
      >
        <span role="img" aria-label="emoji-libretita`">
          📝
        </span>
        Ver apunte y descargar
      </a>
    </Fragment>
  );
};

export default ItemContent;
//
