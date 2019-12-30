import React, {useState} from 'react';
import { format, isToday, isYesterday } from 'date-fns';
import 'styled-components/macro';
import { Email } from '../types/common';
import MailTable from './MailGrid/MailTable';
import MailList from './MailGrid/MailList';
import useMedia from '../hooks/useMedia';
import breakpoints from '../lib/breakpoints';

export type SortField = 'from' | 'to' | 'subject' | 'timestamp';
export type SortOrder = 1 | -1;

export const formatTimestamp = (date: Date): string => {
  if (isToday(date)) {
    return format(date, 'h:mm');
  }
  if (isYesterday(date)) {
    return format(date, 'MMM d');
  }
  return format(date, 'yyyy/M/d');
};

// Since the requirements do not state that we need to display as many recipients as possible, we display 1 recipient
// on desktop and 2 on mobile. This code is used to display as many as possible on desktop.
// const constructRecipientsMeta = (recipients: string[]): { text: string; additionalRecipients: number } => {
//   let additionalRecipients = 0;
//   let text = '';
//
//   if (recipients.length === 1) {
//     return {
//       text: recipients[0],
//       additionalRecipients: 0
//     };
//   }
//
//   for (let idx = 0; idx < recipients.length; idx++) {
//     let recipient = recipients[idx];
//     if (text.length + recipient.length <= 25) {
//       text += recipient;
//       // Add a coma if it is not the last recipient
//       if (idx < recipients.length - 1) {
//         text += ', ';
//       }
//       additionalRecipients--;
//     } else {
//       text += '...';
//       additionalRecipients += recipients.length;
//       return {
//         text,
//         additionalRecipients
//       };
//     }
//   }
//
//   return {
//     text,
//     additionalRecipients
//   };
// };

const valueRetriever = (email: Email, field: SortField) => {
  switch (field) {
    case 'from':
      return email.from;
    case 'to':
      return email.to[0];
    case 'subject':
      return email.subject;
    case 'timestamp':
      return email.timestamp;
  }
};

const sortEmails = (field: SortField, order: SortOrder) => (email1: Email, email2: Email) => {
  return valueRetriever(email1, field) > valueRetriever(email2, field)
    ? 1 * order
    : valueRetriever(email1, field) < valueRetriever(email2, field)
    ? -1 * order
    : 0;
};

const MailGrid: React.FC<{ items: Email[] }> = ({ items }) => {
  const [sort, setSort] = useState<{ field: SortField; order: SortOrder }>({
    field: 'timestamp',
    order: -1
  });

  const handleSortChange = (field: SortField) =>
    sort.field === field ? setSort({ field, order: (sort.order * -1) as SortOrder }) : setSort({ field, order: 1 });

  const isDesktop = useMedia(`(min-width: ${breakpoints.mobile})`);
  return isDesktop ? (
    <MailTable items={items.sort(sortEmails(sort.field, sort.order))} sort={sort} onSortChange={handleSortChange} />
  ) : (
    <MailList items={items.sort(sortEmails(sort.field, sort.order))} sort={sort} onSortChange={handleSortChange} />
  );
};

export default MailGrid;
