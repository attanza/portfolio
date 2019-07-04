import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import myskils from "../lib/myskils";
const Skills = () => {
  return (
    <Grid>
      {myskils.map(s => (
        <Grid.Column mobile={16} tablet={8} computer={5} key={s.id}>
          <Card fluid>
            <Image src={s.logo} ui={false} style={{ height: 160 }} />
            <Card.Content>
              <Card.Header>{s.name}</Card.Header>
            </Card.Content>
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default Skills;
