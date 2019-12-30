import React from 'react';
import 'styled-components/macro';
import { Email } from '../../types/common';
import styled from 'styled-components';
import Stack from '../Stack';
import { ReactComponent as MailIconSVG } from '../../icons/icon_mail_sp.svg';
import { ReactComponent as ClipIconSVG } from '../../icons/icon_clip.svg';
import { ReactComponent as ArrowIconSVG } from '../../icons/icon_arrow02.svg';
import { formatTimestamp } from '../MailGrid';
import theme from "../../lib/theme";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid ${theme.colors.lightGray.default};

  && > * + * {
    margin-top: 12px;
  }
`;

const Subject = styled.p`
  margin: 0;
  font-size: 18px;
`;

const From = styled.h2`
  flex: 1;
  min-width: 0;
  margin: 0;
  font-weight: bold;
  font-size: 16px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const To = styled.p`
  flex: 1;
  min-width: 0;
  margin: 0 16px 0 0;
  font-size: 16px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Date = styled.span``;

const Badge = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 1px 4px 2px 4px;
  border-radius: 4px;
  background-color: ${theme.colors.gray.light};
  color: white;
`;

const MailIcon = styled(MailIconSVG)`
  height: 2em;
`;

const ArrowIcon = styled(ArrowIconSVG)`
  height: 0.5em;
`;

const ClipIcon = styled(ClipIconSVG)`
  height: 1em;
`;

const MailListItem: React.FC<{ item: Email }> = ({ item }) => {
  const recipientsText = item.to.length > 2 ? `${item.to[0]}, ${item.to[1]}, ...` : item.to.join(', ');
  const additionalRecipients = item.to.length > 2 ? item.to.length - 2 : 0;
  return (
    <Container>
      <Stack spacing={8} crossAxis="center">
        <MailIcon />

        <Stack
          direction="column"
          spacing={7}
          css={`
            flex: 1;
            min-width: 0;
          `}
        >
          <Stack spacing={8} crossAxis="center">
            <From>{item.from}</From>
            {item.attachments && <ClipIcon />}
            <Date>{formatTimestamp(item.timestamp)}</Date>
            <ArrowIcon />
          </Stack>

          <Stack crossAxis="center">
            <To>{recipientsText}</To>
            {additionalRecipients > 0 && <Badge>+{additionalRecipients}</Badge>}
          </Stack>
        </Stack>
      </Stack>

      <Subject>{item.subject}</Subject>
    </Container>
  );
};

export default MailListItem;
