import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <ContactDeleteButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </ContactDeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
