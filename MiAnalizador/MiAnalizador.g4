grammar MiAnalizador; 

// ---------------------------------------------
// REGLAS SINTÁCTICAS (PARSER)
// ---------------------------------------------

programa    : instruccion+ ;

instruccion : repeticion ;

repeticion  : REPETIR LLAVE_A sentencia* LLAVE_C HASTA condicion PUNTOYCOMA ;

sentencia   : salida+ 
            | terminar ;

salida      : IMPRIMIR PAREN_A CADENA PAREN_C PUNTOYCOMA ;

terminar    : SALIR PUNTOYCOMA ;

condicion   : VERDADERO 
            | FALSO ;

// ---------------------------------------------
// REGLAS LÉXICAS (LEXER - TOKENS)
// ---------------------------------------------

// Palabras reservadas
REPETIR     : 'repetir' ;
HASTA       : 'hasta' ;
IMPRIMIR    : 'imprimir' ;
SALIR       : 'salir' ;
VERDADERO   : 'verdadero' ;
FALSO       : 'falso' ;

// Símbolos de control
LLAVE_A     : '{' ;
LLAVE_C     : '}' ;
PAREN_A     : '(' ;
PAREN_C     : ')' ;
PUNTOYCOMA  : ';' ;

// Cadenas y caracteres
// El EBNF indica que la cadena está entre comillas dobles y formada por caracteres.
CADENA      : '"' (LETRA | DIGITO | SIMBOLO | ' ')* '"' ;

// Fragmentos: Nos ayudan a armar el token CADENA pero no son tokens por sí solos
fragment LETRA   : [a-zA-Z] ;
fragment DIGITO  : [0-9] ;
fragment SIMBOLO : [.,!?:;] ;

// Espacios en blanco y saltos de línea (se ignoran durante el análisis)
WS : [ \t\r\n]+ -> skip ;
