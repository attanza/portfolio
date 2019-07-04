import React from "react";
import { Divider, Item } from "semantic-ui-react";
import trainings from "../lib/trainings";

const bc = require("../assets/training.png");
const Training = () => {
  return (
    <div className="animated fadeIn">
      <Divider hidden className="mobile hidden" />

      <Item.Group>
        {trainings.map(w => (
          <Item key={w.id}>
            <Item.Image size="mini" src={bc} className="computer only" />

            <Item.Content>
              <Item.Header>{w.name}</Item.Header>
              <Item.Meta>
                <span>{w.city}</span>
                <span>{w.year}</span>
              </Item.Meta>

              <Divider hidden className="mobile hidden" />
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
};

export default Training;
