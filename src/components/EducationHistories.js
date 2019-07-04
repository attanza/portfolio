import React from "react";
import { Divider, Item } from "semantic-ui-react";
import educationHistories from "../lib/educationHistories";

const bc = require("../assets/graduationcap.png");
const EducationHistories = () => {
  return (
    <div className="animated fadeIn">
      <Divider hidden className="mobile hidden" />

      <Item.Group>
        {educationHistories.map(w => (
          <Item key={w.id}>
            <Item.Image size="mini" src={bc} className="computer only" />

            <Item.Content>
              <Item.Header>{w.name}</Item.Header>
              <Item.Meta>
                <p>{w.title}</p>
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

export default EducationHistories;
