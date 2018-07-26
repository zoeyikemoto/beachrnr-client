import React from 'react'
import { Button, Checkbox, Form, Header, Icon, Image, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const FormDivider = styled.br`
  height: 3em;
`;

class ReportModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      report_reason: '',
      open: false,
      mark: false
    };
  }

  onChange(e, reason){
    this.setState({report_reason: reason.value});

  }

  close() {
    this.setState({open: false});
  }

  show() {
    this.setState({open: true});
  }

  submit() {
    this.close();
    this.setState({'mark': true});
  }

  render() {
    return(
      <div>
        {this.state.mark
          ? <div>
              <Icon onClick={this.show.bind(this)} name='flag' color='red'/>
              <Modal open={this.state.open}>
                <Modal.Header>You have reported this review</Modal.Header>
                  <FormDivider></FormDivider>
                  <Modal.Content>
                   <Button color='grey' onClick={this.close.bind(this)}>
                      Close
                    </Button>
                  </Modal.Content>
              </Modal>
            </div>
          : <div>
              <Icon onClick={this.show.bind(this)} name='flag outline' color='red'/>
              <Modal open={this.state.open}>
                <Modal.Header>Do you want to anonymously report this review?</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                      <Form>
                        <Form.Field>
                          If so, please choose one of the following reasons:
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label='Inappropriate content'
                            name='inappropriate_content'
                            value='Inappropriate content'
                            checked={this.state.report_reason === 'Inappropriate content'}
                            onChange={this.onChange.bind(this)}
                          />
                          <p>This review contains violent, graphic, promotional, or otherwise offensive content.</p>
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label='Dishonest or hateful content'
                            name='dishonest_hateful_content'
                            value='Dishonest or hateful content'
                            checked={this.state.report_reason === 'Dishonest or hateful content'}
                            onChange={this.onChange.bind(this)}
                          />
                          <p>This review is purposefully malicious and assaulting.</p>
                        </Form.Field>
                        <Form.Field>
                          <Checkbox
                            radio
                            label='Fake content'
                            name='fake_content'
                            value='Fake content'
                            checked={this.state.report_reason === 'Fake content'}
                            onChange={this.onChange.bind(this)}
                          />
                          <p>This review contains false information or may be fake.</p>
                        </Form.Field>
                      </Form>
                      <FormDivider></FormDivider>
                      <Button color='black' onClick={this.close.bind(this)}>
                        Cancel
                      </Button>
                      <Button color='black' onClick={this.submit.bind(this)} disabled={this.state.report_reason === ''}>
                        Submit
                      </Button>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
        }
      </div>
    )
  }
};

export default ReportModal;