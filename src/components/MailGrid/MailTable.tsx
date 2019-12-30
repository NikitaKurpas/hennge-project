import React, {MouseEventHandler} from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import {ReactComponent as OrderIconSVG} from '../../icons/icon_arrow01.svg';
import {SortField, SortOrder} from '../MailGrid';
import {Email} from '../../types/common';
import theme from '../../lib/theme';
import MailTableRow from "./MailTableRow";

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
      {items.map(item => (
        <MailTableRow key={item.id} item={item} sort={sort} />
      ))}
    </tbody>
  </Table>
);

export default MailTable;
