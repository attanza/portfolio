import React from "react";
import { Divider, Item, List } from "semantic-ui-react";
import workingHistories from "../lib/workingHistories";

const bc = require("../assets/briefcase.png");
const WorkingHistories = () => {
  return (
    <div className="animated fadeIn">
      <Divider hidden className="mobile hidden" />
      <Item.Group>
        {workingHistories.map(w => (
          <Item key={w.id}>
            <Item.Image size="mini" src={bc} className="computer only" />
            <Item.Content>
              <Item.Header>
                {w.title} at {w.company}
              </Item.Header>
              <Item.Meta>
                <span className="price">{w.location}</span>
                <span className="stay">{w.year}</span>
              </Item.Meta>
              <Item.Description>
                <List bulleted>
                  {w.roles.map((r, index) => (
                    <List.Item key={index}>{r}</List.Item>
                  ))}
                </List>
              </Item.Description>
              <Divider hidden className="mobile hidden" />
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </div>
  );
};

export default WorkingHistories;
