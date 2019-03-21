import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pets extends Component {
  render() {
    let pets;
    this.props.pets &&
      (pets = this.props.pets.map((pet, id) => {
        return (
          <div className="card mt-3" key={id}>
            <div className="card-body pets-index">
              <div className="card-content">
                <h2>
                  <font color="orange">{pet.name}</font>
                </h2>
                <div className="card-image">
                  <img
                    src={pet.profilepicture}
                    alt="profilepic"
                    className="profile-pic"
                  />
                </div>
                <h3>
                  Licks{" "}
                  <span role="img" aria-label="lick">
                    {pet.species === "Dog" ? "🐶" : "🐱"}
                  </span>{" "}
                  {pet.licks}
                </h3>
                <div className="card-action">
                  <p>
                    <Link to={"/pets/" + pet._id}>
                      <button className="btn orange lighten-2">Profile</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }));
    return (
      this.props.isLoggedIn === true && (
        <div>
          <h1>
            <em>The Licking Post</em>
          </h1>
          {pets}
        </div>
      )
    );
  }
}

export default Pets;
