import styled from 'styled-components';

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;

const ContactName = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const ContactNumber = styled.span`
  margin-right: 10px;
  font-size: 24px;
`;

const ContactDeleteButton = styled.button`
  font-size: 16px;
  margin-left: auto;
`;

export { ContactItem, ContactName, ContactNumber, ContactDeleteButton };
