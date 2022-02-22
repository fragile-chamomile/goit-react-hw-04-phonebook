import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Contact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContactlist }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Contact>
          {name}: {number}
        </Contact>
        <Button onClick={() => onDeleteContactlist(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContactlist: PropTypes.func.isRequired,
};

export default ContactList;
