import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import theme from '../../lib/theme';
import { Email } from '../../types/common';
import { ReactComponent as ClipIconSVG } from '../../icons/icon_clip.svg';

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr`
  border-bottom: 1px solid ${theme.colors.lightGray.default};

  &:nth-child(2n) {
    background-color: ${theme.colors.lightGray.light};
  }
`;

const HeaderCell = styled.th`
  color: ${theme.colors.gray.default};
  text-align: start;
  width: 10ch;
  padding: 8px 0;
`;

const ValueCell = styled.td`
  color: ${theme.colors.black.default};
  padding: 8px 0;
`;

const FromCell = styled(ValueCell)`
  font-weight: bold;
`;

const AttachmentCell = styled(ValueCell)`
  padding: 8px 0;

  & > * + * {
    margin-left: 8px;
  }
`;

const AttachmentLink = styled.a`
  color: ${theme.colors.blue.default};
  text-decoration: none;
`;

const AttachmentIndicator = styled(ClipIconSVG)`
  height: 0.8em;
`;

const MailDetailView: React.FC<{ item: Email }> = ({ item }) => (
  <Table>
    <tbody>
      <Row>
        <HeaderCell>From</HeaderCell>
        <FromCell>{item.from}</FromCell>
      </Row>
      <Row>
        <HeaderCell>To</HeaderCell>
        <ValueCell>{item.to.join(', ')}</ValueCell>
      </Row>
      <Row>
        <HeaderCell>Cc</HeaderCell>
        <ValueCell>{item.cc?.join(', ')}</ValueCell>
      </Row>
      <Row>
        <HeaderCell>Bcc</HeaderCell>
        <ValueCell>{item.cc?.join(', ')}</ValueCell>
      </Row>
      <Row>
        <HeaderCell>Subject</HeaderCell>
        <ValueCell>{item.subject}</ValueCell>
      </Row>
      {item.attachments?.length && (
        <Row>
          <HeaderCell>Attachments</HeaderCell>
          <AttachmentCell>
            {item.attachments?.map(attachment => (
              <AttachmentLink key={attachment.name} href={attachment.uri} download={attachment.name}>
                <AttachmentIndicator /> {attachment.name}
              </AttachmentLink>
            ))}
          </AttachmentCell>
        </Row>
      )}
      <tr>
        <ValueCell colSpan={2}>
          <p>{item.body}</p>
        </ValueCell>
      </tr>
    </tbody>
  </Table>
);

export default MailDetailView;
