import React from 'react';
import './ContactItem.scss';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/actions/contact.actions';

const mapDispatchToProps = (dispatch) => {
    return {
        deleteHandler: contact => dispatch(deleteContact(contact.name))
    }
}

class ConnectedContactItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const contact = this.props.contact;
        let contactEle;
        if(false) {
            contactEle = <span>{contact.name}</span>;
        } else {
            contactEle = <strong>{contact.name}</strong>;
        }
        return (
        <li onClick={() => this.props.deleteHandler(contact)}>{contactEle}</li>
        );
    }

}

const ContactItem = connect(null, mapDispatchToProps)(ConnectedContactItem);

export default ContactItem;