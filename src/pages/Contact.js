import React from "react";
import {
  Button,
  Form,
  Input,
  Message,
  Segment,
  TextArea
} from "semantic-ui-react";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup
    .string()
    .email()
    .required("email is required"),
  message: yup
    .string()
    .max(255)
    .required("message is required")
});

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    errors: null,
    isSuccess: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = async () => {
    const { name, email, message } = this.state;
    try {
      await schema.validate({ name, email, message }, { abortEarly: false });
      this.setState({ isSuccess: true, errors: null });
    } catch (e) {
      this.setState({ errors: e.errors });
    }
  };

  render() {
    const { errors, isSuccess, name } = this.state;
    return (
      <div className="animated fadeIn">
        <Segment padded>
          <h3>Contact Me</h3>
          {isSuccess && (
            <Message
              success
              header={`Hi ${name},`}
              content="Thank you for contacing me, I will respond to you as soon as posible :)"
            />
          )}
          <Form error>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="Your Name"
                name="name"
                placeholder="Your Name"
                onChange={this.onChange}
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Your Email Address"
                placeholder="Your Email Address"
                name="email"
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              placeholder="Message"
              name="message"
              onChange={this.onChange}
            />
            {errors && (
              <Message
                error
                header="Please fill the form properly"
                content={errors.join(", ")}
              />
            )}
            <Form.Field
              id="form-button-control-public"
              control={Button}
              color="teal"
              content="Send"
              onClick={this.submit}
            />
          </Form>
        </Segment>
      </div>
    );
  }
}

export default Contact;
