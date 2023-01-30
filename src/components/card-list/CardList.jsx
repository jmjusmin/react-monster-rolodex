// import { Component } from "react";
import CardItem from "../card-item/CardItem.component";
import "./card-list.styles.css";

import React from "react";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardItem key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;

// class CardList extends Component {
//   render() {
//     console.log(this.props.monsters);
//     console.log("render from card-list");
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardItem monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
