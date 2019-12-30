import React, { MouseEventHandler } from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import { Email } from '../../types/common';
import MailListItem from './MailListItem';
import { ReactComponent as OrderIconSVG } from '../../icons/icon_arrow01.svg';
import { SortField, SortOrder } from '../MailGrid';
import theme from "../../lib/theme";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListHeader = styled.div`
  padding: 16px;
  background-color: ${theme.colors.lightGray.light};
  border-top: 1px solid ${theme.colors.lightGray.default};
  border-bottom: 1px solid ${theme.colors.lightGray.default};

  & > * + * {
    padding: 0 12px;
    border-left: 1px solid ${theme.colors.gray.default};
  }
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

const HeaderItem: React.FC<{ active?: boolean; order?: SortOrder; onClick?: MouseEventHandler<HTMLSpanElement> }> = ({
  active,
  order,
  children,
  onClick
}) => (
  <span
    css={`
      font-size: 14px;
      font-weight: bold;
      color: ${active ? theme.colors.black.default : theme.colors.gray.dark};
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:first-child {
        padding-right: 12px;
      }
    `}
    onClick={onClick}
  >
    {children}
    {active && <OrderIcon order={order} />}
  </span>
);

const MailList: React.FC<{
  items: Email[];
  sort?: { field: SortField; order: SortOrder };
  onSortChange?: (field: SortField) => void;
}> = ({ items, sort = { field: 'date', order: 1 }, onSortChange }) => (
  <>
    <ListHeader>
      <HeaderItem active={sort?.field === 'from'} order={sort.order} onClick={() => onSortChange?.('from')}>
        From
      </HeaderItem>
      <HeaderItem active={sort?.field === 'to'} order={sort.order} onClick={() => onSortChange?.('to')}>
        To
      </HeaderItem>
      <HeaderItem active={sort?.field === 'subject'} order={sort.order} onClick={() => onSortChange?.('subject')}>
        Subject
      </HeaderItem>
      <HeaderItem active={sort?.field === 'timestamp'} order={sort.order} onClick={() => onSortChange?.('timestamp')}>
        Date
      </HeaderItem>
    </ListHeader>
    <List>
      {items.map(item => (
        <MailListItem item={item} />
      ))}
    </List>
  </>
);

export default MailList;
