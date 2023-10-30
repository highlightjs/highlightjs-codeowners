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
        hljs.HASH_COMMENT_MODE,
      ],
    };
  };