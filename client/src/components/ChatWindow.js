import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../reducers/flash';
import { addMessage } from '../reducers/messages';
import ChatMessage from './ChatMessage';
import axios from 'axios';
import { Segment, Header, Form, TextArea, Button } from 'semantic-ui-react';

class ChatWindow extends Component {
  state = { newMessage: '', loaded: false };

  componentDidMount() {
    const { dispatch } = this.props;
    window.MessageBus.start();

    dispatch(setFlash('Welcome To React Chat!', 'success'));

    window.MessageBus.subscribe("/chat_channel", (data) => {
      dispatch(addMessage(data));
    });
  }

  componentWillUnmount() {
    window.MessageBus.unsubscribe('/chat_channel');
  }

  displayMessages = () => {
    const { messages } = this.props;

    if(messages.length)
      return messages.map( (message, i) => {
        return(<ChatMessage key={i} message={message} />)
      });
    else
      return(
        <Segment inverted textAlign='center'>
          <Header as='h1'>No Chat Messages...</Header>
        </Segment>
      )
  }

  setMessage = (e) => {
    this.setState({ newMessage: e.target.value });
  }

 addMessage = (e) => {
   e.preventDefault();
   const { dispatch, user: { email } } = this.props;

   axios.post('/api/messages', { email, body: this.state.newMessage })
     .then(res => {
       this.setState({ newMessage: '' });
     })
     .catch( error => {
       dispatch(setFlash('Error posting message.', 'error'));
   });
 }

 render() {
   return(
     <Segment basic>
       <Header as='h2' textAlign='center' style={ styles.underline } >React Chat!</Header>
       <Segment basic style={ styles.mainWindow }>
         <Segment basic>
           { this.displayMessages() }
         </Segment>
       </Segment>
       <Segment style={ styles.messageInput }>
         <Form onSubmit={ this.addMessage }>
           <TextArea
             value={ this.state.newMessage }
             onChange={ this.setMessage }
             placeholder='Write Your Chat Message Here.'
             autoFocus
             required
           >
           </TextArea>
           <Segment basic textAlign='center'>
             <Button type='submit' primary>Send Message</Button>
           </Segment>
         </Form>
       </Segment>
     </Segment>
   );
  }
}

const styles = {
   mainWindow: {
     border: '3px solid black',
     height: '60vh',
     overflowY: 'scroll',
     backgroundColor: 'lightgrey',
     borderRadius: '10px',
  },
  messageInput: {
    borderRadius: '10px',
    width: '80%',
    margin: '0 auto',
    padding: '10px',
  },
  underline: {
    textDecoration: 'underline',
  },
  sendMessage: {
    marginBottom: '20px',
  },
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
  }
}

export default connect(mapStateToProps)(ChatWindow);