/*
Language: IEC 61131-3 Structured Text (ST)
Description: IEC 61131-3 Structured Text (ST) is a high-level programming language for PLCs.
Author: Goodwill Mzumala <fisothemes@gmail.com>
Website: https://content.helpme-codesys.com/en/CODESYS%20Development%20System/_cds_f_reference_programming.html
Category: common, industrial, plc
*/

export default function (hljs) {
  const KEYWORDS = [
    "PROGRAM",
    "END_PROGRAM",
    "FUNCTION",
    "END_FUNCTION",
    "FUNCTION_BLOCK",
    "END_FUNCTION_BLOCK",
    "INTERFACE",
    "END_INTERFACE",
    "PROPERTY",
    "END_PROPERTY",
    "GET",
    "END_GET",
    "SET",
    "END_SET",
    "METHOD",
    "END_METHOD",
    "ACTION",
    "END_ACTION",
    "TYPE",
    "END_TYPE",
    "STRUCT",
    "END_STRUCT",
    "UNION",
    "END_UNION",
    "VAR",
    "END_VAR",
    "VAR_INPUT",
    "VAR_OUTPUT",
    "VAR_IN_OUT",
    "VAR_GLOBAL",
    "VAR_TEMP",
    "VAR_EXTERNAL",
    "VAR_STAT",
    "VAR_INST",
    "VAR_ACCESS",
    "VAR_CONFIG",
    "PARAMS",
    "PERSISTENT",
    "RETAIN",
    "READ_ONLY",
    "READ_WRITE",
    "CONSTANT",
    "EXTENDS",
    "IMPLEMENTS",
    "REFERENCE",
    "TO",
    "POINTER",
    "ARRAY",
    "OF",
    "IF",
    "THEN",
    "ELSE",
    "END_IF",
    "FOR",
    "DO",
    "END_FOR",
    "WHILE",
    "END_WHILE",
    "REPEAT",
    "UNTIL",
    "END_REPEAT",
    "CASE",
    "END_CASE",
    "RETURN",
    "CONTINUE",
    "EXIT",
    "JMP",
    "JMPC",
    "JMPCN",
    "AND",
    "OR",
    "ORN",
    "AND_THEN",
    "OR_ELSE",
    "XOR",
    "XORN",
    "NOT",
    "R",
    "S"
  ];

  const TYPES = [
    "INT",
    "DINT",
    "REAL",
    "LREAL",
    "BOOL",
    "BIT",
    "STRING",
    "ANY",
    "ANY_BIT",
    "ANY_DATE",
    "ANY_NUM",
    "ANY_REAL",
    "ANY_INT",
    "ANY_STRING",
    "TIME",
    "DATE",
    "LTIME",
    "DT",
    "DATE_AND_TIME",
    "DATE",
    "TIME_OF_DAY",
    "TOD",
    "BYTE",
    "WORD",
    "DWORD",
    "LWORD",
    "SINT",
    "USINT",
    "UINT",
    "UDINT",
    "ULINT",
    "__XINT",
    "__UXINT",
    "WSTRING",
    "__SYSTEM",
    "%I*",
    "%Q*"
  ];

  const LITERALS = [
    "TRUE",
    "FALSE"
  ];

  const BUILT_IN = [
    "ABS",
    "SQRT",
    "LN",
    "LOG",
    "EXP",
    "EXPT",
    "SIN",
    "COS",
    "TAN",
    "ASIN",
    "ACOS",
    "ATAN",
    "ATAN2",
    "SHL",
    "SHR",
    "ROL",
    "ROR",
    "GT",
    "GE",
    "LT",
    "LE",
    "EQ",
    "NE",
    "MIN",
    "MAX",
    "LIMIT",
    "SEL",
    "MUX",
    "TO_INT",
    "TO_DINT",
    "TO_LINT",
    "TO_REAL",
    "TO_LREAL",
    "TO_BOOL",
    "TO_TIME",
    "TO_DATE",
    "TO_LTIME",
    "TO_DT",
    "TO_DATE_AND_TIME",
    "TO_TIME_OF_DAY",
    "TO_TOD",
    "TO_BYTE",
    "TO_WORD",
    "TO_DWORD",
    "TO_LWORD",
    "TRUNC",
    "ROUND",
    "TRUNC_INT",
    "SIZEOF",
    "XSIZEOF",
    "ADR",
    "ADRINST",
    "THIS",
    "SUPER",
    "__NEW",
    "__DELETE",
    "__ISVALIDREF",
    "__QUERYINTERFACE",
    "__QUERYPOINTER",
    "__VARINFO",
    "__POUNAME",
    "__POSITION",
    "UPPER_BOUND",
    "LOWER_BOUND",

  ];

  const COMMENT = {
    className: 'comment',
    variants: [
    hljs.C_LINE_COMMENT_MODE,
    { begin: '\\(\\*', end: '\\*\\)', contains: ['self'] },
    ]
  };

  const DIRECTIVE = {
    className: 'meta',
    variants: [
      {
        begin: /\{\$/,
        end: /\}/
      },
      {
        begin: /\(\*\$/,
        end: /\*\)/
      }
    ]
  };

  const STRING = {
    className: 'string',
    variants: [
      {
        begin: /"/,
        end: /"/
      },
      {
        begin: /'/,
        end: /'/
      }
    ]
  };

  const OPERATORS = [
    "+", "-", "*", "/", "^", ">", "<", "=", ":=", ":", ";", ",", ".", "(", ")", "[", "]", "{", "}", "$",
  ];

  const NUMBER = {
    className: 'number',
    variants: [
      {
        begin: '\\b\\d+(_\\d+)*\\b',
        relevance: 10
      },
      { 
        begin: '\\b(2#|8#|16#)[0-9a-fA-F]+(_[0-9a-fA-F]+)*\\b',
        relevance: 20 
      },
      hljs.NUMBER_MODE
    ]
  };

  const TYPED_LITERALS = {
    className: 'literal',
    begin: '\\b[A-Z][A-Z0-9_]*#'
  };

  const TIME_LITERALS = {
    className: 'number',
    variants: [
      { 
        begin: '\\b(T|TIME|LT|LTIME)#[-+]?\\d+(\\.\\d+)?([dhmsnuDHMSNU][smuSMU]?)*\\b',
        relevance: 20
      },
      { 
        begin: '\\b(D|DATE|LD|LDATE)#\\d{4}-\\d{1,2}-\\d{1,2}\\b',
        relevance: 20
      },
      { 
        begin: '\\b(TOD|TIME_OF_DAY|LTOD|LTIME_OF_DAY)#\\d{1,2}:\\d{1,2}:\\d{1,2}(\\.\\d+)?\\b',
        relevance: 20
      },
      { 
        begin: '\\b(DT|DATE_AND_TIME|LDT|LDATE_AND_TIME)#\\d{4}-\\d{1,2}-\\d{1,2}-\\d{1,2}:\\d{1,2}:\\d{1,2}(\\.\\d+)?\\b',
        relevance: 20
      }
    ]
  };

  return {
    name: 'IEC 61131-3 Structured Text',
    aliases: ['iecst', "iec-st", "iec61131"],
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS.join(" "),
      type: TYPES.join(" "),
      literal: LITERALS.join(" "),
      built_in: BUILT_IN.join(" "),
    },
    contains: [
      COMMENT,
      STRING,
      DIRECTIVE,
      NUMBER,
      TIME_LITERALS,
      TYPED_LITERALS
    ]
  }
};
