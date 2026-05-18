import antlr4 from 'antlr4';
import fs from 'fs';
import MiAnalizadorLexer from './generated/MiAnalizadorLexer.js';
import MiAnalizadorParser from './generated/MiAnalizadorParser.js';

// CLASE PARA MANEJAR ERRORES (PUNTO 1 DEL TEMA) ---
class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`[ERROR] Línea ${line}:${column} - ${msg}`);
    }
}

// 1. Leemos el archivo input
const input = fs.readFileSync('./input.txt', 'utf-8');
const chars = new antlr4.InputStream(input);

// 2. Lexer
const lexer = new MiAnalizadorLexer(chars);
// Se quitan los errores por defecto y ponemos el nuestro
lexer.removeErrorListeners();
lexer.addErrorListener(new CustomErrorListener());

const tokens = new antlr4.CommonTokenStream(lexer);

// IMPRIMIR TABLA DE TOKENS (PUNTO 2 DEL TEMA) ---
// Le decimos al token stream que cargue todos los tokens encontrados
tokens.fill();
console.log("=========================================");
console.log("          TABLA DE TOKENS ENCONTRADOS      ");
console.log("=========================================");
console.log("Línea\t| Token\t\t\t| Lexema");
console.log("-----------------------------------------");
for (let token of tokens.tokens) {
    if (!token || token.type == null || token.type === antlr4.Token.EOF) {
        continue;
    }
    // Obtenemos el nombre del token según la gramática
    const tokenName = MiAnalizadorLexer.symbolicNames[token.type] ? MiAnalizadorLexer.symbolicNames[token.type] : token.type;
    console.log(`${token.line}	| ${tokenName.padEnd(15)}	| '${token.text}'`);
}
console.log("=========================================\n");

// 3. Parser
const parser = new MiAnalizadorParser(tokens);
// Quitamos los errores por defecto y ponemos el nuestro
parser.removeErrorListeners();
parser.addErrorListener(new CustomErrorListener());

// 4. Árbol (PUNTO 3 DEL TEMA)
const tree = parser.programa();
console.log("=========================================");
console.log("            ÁRBOL DE DERIVACIÓN            ");
console.log("=========================================");
console.log(tree.toStringTree(parser.ruleNames));