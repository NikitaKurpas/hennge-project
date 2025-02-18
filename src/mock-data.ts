import { Email } from './types/common';

const MOCK_DATA: Email[] = [
  {
    id: '1',
    from: 'bob@example.com',
    to: ['jane@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60),
    subject: '[HR-888] Notice of official announcement',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor. Adiurators mori in nobilis tornacum! Fermiums mori!, Victrixs credere in caelos! Eheu, devirginato! Accelerare tandem ducunt ad altus cannabis. Armariums prarere!'
  },
  {
    id: '2',
    from: 'no_reply@example.com',
    to: ['bob@example.com', 'jeff@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    subject: 'Deployment successful',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor. Hydras credere!, Luna studeres, tanquam fidelis exemplar., Cum racana resistere, omnes elogiumes magicae albus, clemens menses., Nunquam carpseris devatio., Domesticus vigils ducunt ad hilotae., Agripeta talis orexis est.'
  },
  {
    id: '3',
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
    id: '4',
    from: 'xxx@example.com',
    to: ['yyy@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    subject: 'Nunquam anhelare buxum.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.',
    attachments: [{ name: 'document.docx', uri: 'some-uri-here' }]
  },
  {
    id: '5',
    from: 'Pablo-Diego-José-Francisco-Ruiz-Picasso',
    to: ['Pablo-Diego-José-Francisco-Ruiz-Picasso@example.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
    subject: 'Bi-color sensorem vix talems acipenser est.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor., Ubi est bassus glos?, Hercle, nixus raptus!, audax ionicis tormento! Adiurators prarere! Racana albus stella est. Sunt bursaes fallere primus, magnum gloses.',
    attachments: [{ name: 'document.docx', uri: 'some-uri-here' }]
  },
  {
    id: '6',
    from: 'nikitakurpas@gmail.com',
    to: ['nikita.kurpas@toptal.com'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    subject: 'Lura fidelis gabalium est.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.'
  },
  {
    id: '7',
    from: 'a@b.c',
    to: ['b@b.c', 'c@b.c', 'd@b.c', 'e@b.c'],
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15),
    subject: 'Lura fidelis gabalium est.',
    body:
      'Solitudos cantare in azureus revalia! Pol, a bene tabes, fluctus! Fortis, azureus fraticinidas interdum talem de flavum, barbatus decor.'
  }
];

export default MOCK_DATA;
