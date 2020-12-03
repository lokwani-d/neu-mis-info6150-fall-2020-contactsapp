import React from 'react';
import ContactItem from './contact-item/ContactItem';
import './ContactsContainer.scss';
import { connect } from 'react-redux';
import { getAvailableContacts } from '../store/selectors/contact.selectors'

const mapStateToProps = (state) => {
    return { contacts: getAvailableContacts(state) }
};

class ConnectedContactsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const contactsList = this.props.contacts.map((c, i) => {
            return (
            <ContactItem key={i} contact={c}>
            </ContactItem>
            )
        });
        return (
        <ul>
            {contactsList}
        </ul>
        );
    }

}

const ContactsContainer = connect(mapStateToProps)(ConnectedContactsContainer);

export default ContactsContainer;