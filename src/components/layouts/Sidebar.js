import React from "react";
import { Button, Card, Feed, Icon, Image } from "semantic-ui-react";
const pict = require("../../assets/pict.jpg");
const Sidebar = () => {
  return (
    <div className="animated fadeIn">
      <Card fluid>
        <Card.Content
          header="Dani Lesmiadi"
          meta="Fullstack Web Developer"
          style={{ zIndex: 2 }}
        />
        <Image
          src={pict}
          wrapped
          ui={false}
          style={{ marginTop: -30, zIndex: 1 }}
        />
        <Card.Content>
          <Feed>
            <Feed.Event style={{ marginBottom: 20 }}>
              <Feed.Content>
                <Feed.Summary>
                  <Icon name="user" style={{ marginRight: 20 }} />
                  Dani Lesmiadi
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event style={{ marginBottom: 20 }}>
              <Feed.Content>
                <Feed.Summary>
                  <Icon name="mail" style={{ marginRight: 20 }} />
                  dani.lesmiadi@gmail.com
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Feed.Summary>
                  <Icon name="mail" style={{ marginRight: 20 }} />
                  08122443582
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
        <Card.Content>
          <Button icon labelPosition="right" color="teal" fluid>
            <Icon name="cloud download" />
            Download Cv
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Sidebar;
