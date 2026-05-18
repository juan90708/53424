// Generated from c:/TareaAnalizador/MiAnalizador/MiAnalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MiAnalizadorListener from './MiAnalizadorListener.js';
import MiAnalizadorVisitor from './MiAnalizadorVisitor.js';

const serializedATN = [4,1,13,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,2,1,2,1,2,5,2,25,8,
2,10,2,12,2,28,9,2,1,2,1,2,1,2,1,2,1,2,1,3,4,3,36,8,3,11,3,12,3,37,1,3,3,
3,41,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,
10,12,0,1,1,0,5,6,50,0,15,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,40,1,0,0,0,
8,42,1,0,0,0,10,48,1,0,0,0,12,51,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,
17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,1,0,0,0,19,20,3,4,2,0,20,3,1,
0,0,0,21,22,5,1,0,0,22,26,5,7,0,0,23,25,3,6,3,0,24,23,1,0,0,0,25,28,1,0,
0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,8,0,
0,30,31,5,2,0,0,31,32,3,12,6,0,32,33,5,11,0,0,33,5,1,0,0,0,34,36,3,8,4,0,
35,34,1,0,0,0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,41,1,0,0,0,39,
41,3,10,5,0,40,35,1,0,0,0,40,39,1,0,0,0,41,7,1,0,0,0,42,43,5,3,0,0,43,44,
5,9,0,0,44,45,5,12,0,0,45,46,5,10,0,0,46,47,5,11,0,0,47,9,1,0,0,0,48,49,
5,4,0,0,49,50,5,11,0,0,50,11,1,0,0,0,51,52,7,0,0,0,52,13,1,0,0,0,4,17,26,
37,40];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "MiAnalizador.g4";
    static literalNames = [ null, "'repetir'", "'hasta'", "'imprimir'", 
                            "'salir'", "'verdadero'", "'falso'", "'{'", 
                            "'}'", "'('", "')'", "';'" ];
    static symbolicNames = [ null, "REPETIR", "HASTA", "IMPRIMIR", "SALIR", 
                             "VERDADERO", "FALSO", "LLAVE_A", "LLAVE_C", 
                             "PAREN_A", "PAREN_C", "PUNTOYCOMA", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "repeticion", "sentencia", 
                         "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiAnalizadorParser.ruleNames;
        this.literalNames = MiAnalizadorParser.literalNames;
        this.symbolicNames = MiAnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiAnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.instruccion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiAnalizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.repeticion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeticion() {
	    let localctx = new RepeticionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiAnalizadorParser.RULE_repeticion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(MiAnalizadorParser.REPETIR);
	        this.state = 22;
	        this.match(MiAnalizadorParser.LLAVE_A);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 23;
	            this.sentencia();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(MiAnalizadorParser.LLAVE_C);
	        this.state = 30;
	        this.match(MiAnalizadorParser.HASTA);
	        this.state = 31;
	        this.condicion();
	        this.state = 32;
	        this.match(MiAnalizadorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiAnalizadorParser.RULE_sentencia);
	    try {
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 34;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 37; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 39;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiAnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MiAnalizadorParser.IMPRIMIR);
	        this.state = 43;
	        this.match(MiAnalizadorParser.PAREN_A);
	        this.state = 44;
	        this.match(MiAnalizadorParser.CADENA);
	        this.state = 45;
	        this.match(MiAnalizadorParser.PAREN_C);
	        this.state = 46;
	        this.match(MiAnalizadorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiAnalizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(MiAnalizadorParser.SALIR);
	        this.state = 49;
	        this.match(MiAnalizadorParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiAnalizadorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiAnalizadorParser.EOF = antlr4.Token.EOF;
MiAnalizadorParser.REPETIR = 1;
MiAnalizadorParser.HASTA = 2;
MiAnalizadorParser.IMPRIMIR = 3;
MiAnalizadorParser.SALIR = 4;
MiAnalizadorParser.VERDADERO = 5;
MiAnalizadorParser.FALSO = 6;
MiAnalizadorParser.LLAVE_A = 7;
MiAnalizadorParser.LLAVE_C = 8;
MiAnalizadorParser.PAREN_A = 9;
MiAnalizadorParser.PAREN_C = 10;
MiAnalizadorParser.PUNTOYCOMA = 11;
MiAnalizadorParser.CADENA = 12;
MiAnalizadorParser.WS = 13;

MiAnalizadorParser.RULE_programa = 0;
MiAnalizadorParser.RULE_instruccion = 1;
MiAnalizadorParser.RULE_repeticion = 2;
MiAnalizadorParser.RULE_sentencia = 3;
MiAnalizadorParser.RULE_salida = 4;
MiAnalizadorParser.RULE_terminar = 5;
MiAnalizadorParser.RULE_condicion = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_instruccion;
    }

	repeticion() {
	    return this.getTypedRuleContext(RepeticionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeticionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_repeticion;
    }

	REPETIR() {
	    return this.getToken(MiAnalizadorParser.REPETIR, 0);
	};

	LLAVE_A() {
	    return this.getToken(MiAnalizadorParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(MiAnalizadorParser.LLAVE_C, 0);
	};

	HASTA() {
	    return this.getToken(MiAnalizadorParser.HASTA, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MiAnalizadorParser.PUNTOYCOMA, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterRepeticion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitRepeticion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitRepeticion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(MiAnalizadorParser.IMPRIMIR, 0);
	};

	PAREN_A() {
	    return this.getToken(MiAnalizadorParser.PAREN_A, 0);
	};

	CADENA() {
	    return this.getToken(MiAnalizadorParser.CADENA, 0);
	};

	PAREN_C() {
	    return this.getToken(MiAnalizadorParser.PAREN_C, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MiAnalizadorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(MiAnalizadorParser.SALIR, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MiAnalizadorParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiAnalizadorParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(MiAnalizadorParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(MiAnalizadorParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiAnalizadorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiAnalizadorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiAnalizadorParser.ProgramaContext = ProgramaContext; 
MiAnalizadorParser.InstruccionContext = InstruccionContext; 
MiAnalizadorParser.RepeticionContext = RepeticionContext; 
MiAnalizadorParser.SentenciaContext = SentenciaContext; 
MiAnalizadorParser.SalidaContext = SalidaContext; 
MiAnalizadorParser.TerminarContext = TerminarContext; 
MiAnalizadorParser.CondicionContext = CondicionContext; 
