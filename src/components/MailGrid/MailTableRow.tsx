import React, { useState } from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import theme from '../../lib/theme';
import { Email } from '../../types/common';
import { formatTimestamp, SortField, SortOrder } from '../MailGrid';
import { ReactComponent as ClipIconSVG } from '../../icons/icon_clip.svg';
import MailDetailView from './MailDetailView';

const Cell = styled.td<{ active?: boolean }>`
  padding: 12px 8px;
  font-size: 16px;
  color: ${theme.colors.gray.dark};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const AttachmentIndicator = styled(ClipIconSVG)`
  height: 1em;
`;

const Row = styled.tr`
  border-bottom: 1px solid ${theme.colors.lightGray.default};

  &:hover {
    background-color: ${theme.colors.lightGray.light};
    cursor: pointer;

    ${Cell}:not(:last-child) {
      color: ${theme.colors.blue.default};
    }

    ${Cell} ${AttachmentIndicator} .a {
      fill: ${theme.colors.blue.default};
    }
  }
`;

const MailDetailRow = styled.tr`
  border-bottom: 1px solid ${theme.colors.lightGray.default};
  border-left: 1px solid ${theme.colors.lightGray.default};
  border-right: 1px solid ${theme.colors.lightGray.default};
`;

const MailDetailCell = styled.td`
  padding: 8px;
`;

const Badge = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 1px 4px 2px 4px;
  border-radius: 4px;
  background-color: ${theme.colors.gray.light};
  color: white;
`;

const MailTableRow: React.FC<{ item: Email; sort?: { field: SortField; order: SortOrder } }> = ({ item, sort }) => {
  const [isOpen, setOpen] = useState(false);

  // const { text: recipientsText, additionalRecipients } = constructRecipientsMeta(item.to);
  const recipientsText = item.to.length > 1 ? `${item.to[0]}, ...` : item.to[0];
  const additionalRecipients = item.to.length > 1 ? item.to.length - 1 : 0;

  return (
    <>
      <Row onClick={() => setOpen(!isOpen)}>
        <Cell active={sort?.field === 'from'}>{item.from}</Cell>
        <Cell active={sort?.field === 'to'}>{recipientsText}</Cell>
        <Cell>{additionalRecipients > 0 && <Badge>+{additionalRecipients}</Badge>}</Cell>
        <Cell active={sort?.field === 'subject'}>{item.subject}</Cell>
        <Cell>{item.attachments?.length && <AttachmentIndicator />}</Cell>
        <Cell active={sort?.field === 'timestamp'}>{formatTimestamp(item.timestamp)}</Cell>
      </Row>
      {isOpen && (
        <MailDetailRow>
          <MailDetailCell colSpan={6}>
            <MailDetailView item={item} />
          </MailDetailCell>
        </MailDetailRow>
      )}
    </>
  );
};

export default MailTableRow;
