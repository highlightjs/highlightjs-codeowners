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
        scope: 'keyword',
        begin: /^(\/?)(\*|\S+)/,
        end: '\\s',
        relevance: 0
      },
      {
        scope: 'string',
        begin: /\@/,
        end: '\\s',
        relevance: 0
      },
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.HASH_COMMENT_MODE,
      ],
    };
  };