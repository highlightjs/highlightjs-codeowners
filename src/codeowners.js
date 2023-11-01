/*
Language: Codeowners
Author: Nataliia Radina-Shyianovska <shyianovska@gmail.com>
Description: language definition for CODEOWNERS files
*/

/** @type LanguageFn */
export default (hljs) => {
  return {
      name: 'codeowners',
      case_insensitive: true,
      disableAutodetect: true,
      aliases: ['codeowners'],
    contains: [
      {
        scope: 'number',
        begin: '\\[\\d+\\]',
        end: '(?=\\s|$)',
      },
      {
        scope: 'regexp',
        begin: '^\\^|\\*',
      },
      {
        scope: 'attr',
        begin: '^\\s*(?![#^*[])\\S|(?<=\\*)\\S*',
        end: '(?=\\s|$)',
        contains: [
          {
            scope: 'regexp',
            begin: '\\*',
          },
        ],
      },
      {
        scope: 'keyword',
        begin: '\\[(?!\\d+\\])[^\\]]+\\]',
      },
      {
        scope: 'variable',
        begin: '\\S*@.*$',
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.HASH_COMMENT_MODE,
    ],
  };
};
