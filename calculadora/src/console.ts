import * as readlineSync from 'readline-sync';

type Operacao = {
    data: Date;
    tipo: string;
    entrada: string;
    resultado: number | string;
};

const historico: Operacao[] = [];

function mostrarMenu(): void {
    console.log('\n=== CALCULADORA ===');
    console.log('1. Soma');
    console.log('2. Subtração');
    console.log('3. Multiplicação');
    console.log('4. Divisão');
    console.log('5. Potência');
    console.log('6. Raiz Quadrada');
    console.log('7. Ver Histórico');
    console.log('0. Sair');
}

function obterNumero(mensagem: string): number {
    return readlineSync.questionFloat(mensagem);
}

function calcular(): void {
    let opcao: number;

    do {
        mostrarMenu();
        opcao = readlineSync.questionInt('Escolha uma opção: ');

        switch (opcao) {
            case 1: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                const result = a + b;
                console.log(`Resultado: ${result}`);

                historico.push({
                    data: new Date(),
                    tipo: 'Soma',
                    entrada: `${a} + ${b}`,
                    resultado: result
                });

                break;
            }
            case 2: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                const result = a - b;
                console.log(`Resultado: ${result}`);

                historico.push({
                    data: new Date(),
                    tipo: 'Subtração',
                    entrada: `${a} - ${b}`,
                    resultado: result
                });

                break;
            }
            case 3: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                const result = a * b;
                console.log(`Resultado: ${result}`);

                historico.push({
                    data: new Date(),
                    tipo: 'Multiplicação',
                    entrada: `${a} * ${b}`,
                    resultado: result
                });
                
                break;
            }
            case 4: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                const result = a / b;
                if (b === 0) {
                    console.log('Erro: divisão por zero.');
                } else {
                    console.log(`Resultado: ${result}`);

                    historico.push({
                        data: new Date(),
                        tipo: 'Divisão',
                        entrada: `${a} / ${b}`,
                        resultado: result
                    });                    

                }
                break;
            }
            case 5: {
                const base = obterNumero('Digite a base: ');
                const expoente = obterNumero('Digite o expoente: ');
                const result = Math.pow(base, expoente);
                console.log(`Resultado: ${result}`);

                historico.push({
                    data: new Date(),
                    tipo: 'Potência',
                    entrada: `${base} ^ ${expoente}`,
                    resultado: result
                });        

                break;
            }
            case 6: {
                const num = obterNumero('Digite o número: ');
                const result = Math.sqrt(num);
                if (num < 0) {
                    console.log('Erro: não existe raiz quadrada de número negativo no conjunto dos reais.');
                } else {
                    console.log(`Resultado: ${result}`);

                    historico.push({
                        data: new Date(),
                        tipo: 'Raiz Quadrada',
                        entrada: `raiz(${num})`,
                        resultado: result
                    });  

                }
                break;
            }
            case 7: {
                console.log('\n=== HISTÓRICO DE OPERAÇÕES ===');
                if (historico.length === 0) {
                    console.log('Nenhuma operação realizada ainda.');
                } else {
                    historico.forEach((op, i) => {
                        console.log(`${i + 1}. [${op.data.toLocaleString()}] ${op.tipo}: ${op.entrada} = ${op.resultado}`);
                    });
                }
                break;    
            }
            case 0: {
                console.log('Encerrando a calculadora...');
                break;
            }
            default: {
                console.log('Opção inválida.');
            }
        }
    } while (opcao !== 0);
}

calcular();
