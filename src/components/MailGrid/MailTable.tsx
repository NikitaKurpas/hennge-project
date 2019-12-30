import React, { MouseEventHandler } from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import { ReactComponent as ClipIconSVG } from '../../icons/icon_clip.svg';
import { ReactComponent as OrderIconSVG } from '../../icons/icon_arrow01.svg';
import { formatTimestamp, SortField, SortOrder } from '../MailGrid';
import { Email } from '../../types/common';
import theme from '../../lib/theme';

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: ${theme.colors.lightGray.light};
  border-top: 1px solid ${theme.colors.lightGray.default};
  border-bottom: 1px solid ${theme.colors.lightGray.default};
`;

const OrderIcon = styled(OrderIconSVG)<{ order?: SortOrder }>`
  height: 0.4em;
  vertical-align: middle;
  margin-left: 8px;
  transform: ${props => (!props.order || props.order > 0 ? 'unset' : 'rotateX(180deg)')};

  .a {
    fill: ${theme.colors.gray.dark};
  }
`;

const HeaderCell: React.FC<{
  active?: boolean;
  order?: SortOrder;
  onClick?: MouseEventHandler<HTMLTableHeaderCellElement>;
}> = ({ active, order, children, onClick }) => (
  <th
    css={`
      padding: 12px 8px;
      font-size: 14px;
      color: ${active ? theme.colors.black.default : theme.colors.gray.default};
      text-align: start;
      cursor: pointer;
      user-select: none;
    `}
    onClick={onClick}
  >
    {children}
    {active && <OrderIcon order={order} />}
  </th>
);

const FromColumn = styled.col`
  width: calc(15ch + 16px);
`;

const RecipientsColumn = styled.col`
  width: calc(20ch + 16px);
`;

const AdditionalRecipientsColumn = styled.col`
  width: 56px;
`;

const SubjectColumn = styled.col``;

const AttachmentColumn = styled.col`
  width: 32px;
`;

const TimestampColumn = styled.col`
  width: calc(10ch + 16px);
`;

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
  width: 1em;
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

const Badge = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 1px 4px 2px 4px;
  border-radius: 4px;
  background-color: ${theme.colors.gray.light};
  color: white;
`;

const MailTable: React.FC<{
  items: Email[];
  sort?: { field: SortField; order: SortOrder };
  onSortChange?: (field: SortField) => void;
}> = ({ items, sort = { field: 'timestamp', order: -1 }, onSortChange }) => (
  <Table>
    <colgroup>
      <FromColumn />
      <RecipientsColumn />
      <AdditionalRecipientsColumn />
      <SubjectColumn />
      <AttachmentColumn />
      <TimestampColumn />
    </colgroup>
    <TableHeader>
      <tr>
        <HeaderCell active={sort.field === 'from'} order={sort.order} onClick={() => onSortChange?.('from')}>
          From
        </HeaderCell>
        <HeaderCell active={sort.field === 'to'} order={sort.order} onClick={() => onSortChange?.('to')}>
          To
        </HeaderCell>
        <HeaderCell />
        <HeaderCell active={sort.field === 'subject'} order={sort.order} onClick={() => onSortChange?.('subject')}>
          Subject
        </HeaderCell>
        <HeaderCell />
        <HeaderCell active={sort.field === 'timestamp'} order={sort.order} onClick={() => onSortChange?.('timestamp')}>
          Date
        </HeaderCell>
      </tr>
    </TableHeader>
    <tbody>
      {items.map(item => {
        // const { text: recipientsText, additionalRecipients } = constructRecipientsMeta(item.to);
        const recipientsText = item.to.length > 1 ? `${item.to[0]}, ...` : item.to[0];
        const additionalRecipients = item.to.length > 1 ? item.to.length - 1 : 0;
        return (
          <Row>
            <Cell active={sort?.field === 'from'}>{item.from}</Cell>
            <Cell active={sort?.field === 'to'}>{recipientsText}</Cell>
            <Cell>{additionalRecipients > 0 && <Badge>+{additionalRecipients}</Badge>}</Cell>
            <Cell active={sort?.field === 'subject'}>{item.subject}</Cell>
            <Cell>{item.attachments?.length && <AttachmentIndicator />}</Cell>
            <Cell active={sort?.field === 'timestamp'}>{formatTimestamp(item.timestamp)}</Cell>
          </Row>
        );
      })}
    </tbody>
  </Table>
);

export default MailTable;
