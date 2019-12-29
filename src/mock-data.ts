import { Email } from './types/common';

const MOCK_DATA: Email[] = [
  {
    from: 'bob@example.com',
    to: ['jane@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60),
    subject: '[HR-888] Notice of official announcement',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.'
  },
  {
    from: 'no_reply@example.com',
    to: ['bob@example.com', 'jeff@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    subject: 'Deployment successful',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.'
  },
  {
    from: 'aaa@example.com',
    to: ['bbb@example.com', 'ccc@example.com', 'ddd@example.com', 'eee@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    subject: 'Cur stella messis?',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.',
    attachments: [
      { name: 'document.docx', uri: 'some-uri-here' },
      { name: 'table.xlsx', uri: 'some-uri-here' }
    ]
  },
  {
    from: 'xxx@example.com',
    to: ['yyy@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    subject: 'Nunquam anhelare buxum.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.',
    attachments: [{ name: 'document.docx', uri: 'some-uri-here' }]
  },
  {
    from: 'Pablo-Diego-José-Francisco-Ruiz-Picasso',
    to: ['Pablo-Diego-José-Francisco-Ruiz-Picasso@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    subject: 'Bi-color sensorem vix talems acipenser est.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.',
    attachments: [{ name: 'document.docx', uri: 'some-uri-here' }]
  },
  {
    from: 'nikitakurpas@gmail.com',
    to: ['nikita.kurpas@toptal.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    subject: 'Lura fidelis gabalium est.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.'
  },
  {
    from: 'a@b.c',
    to: ['b@b.c', 'c@b.c', 'd@b.c', 'e@b.c'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    subject: 'Lura fidelis gabalium est.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.'
  }
];

export default MOCK_DATA;
