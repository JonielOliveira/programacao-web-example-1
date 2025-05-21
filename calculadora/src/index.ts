import * as readlineSync from 'readline-sync';

function mostrarMenu(): void {
    console.log('\n=== CALCULADORA ===');
    console.log('1. Soma');
    console.log('2. Subtração');
    console.log('3. Multiplicação');
    console.log('4. Divisão');
    console.log('5. Potência');
    console.log('6. Raiz Quadrada');
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
                console.log(`Resultado: ${a + b}`);
                break;
            }
            case 2: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                console.log(`Resultado: ${a - b}`);
                break;
            }
            case 3: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                console.log(`Resultado: ${a * b}`);
                break;
            }
            case 4: {
                const a = obterNumero('Digite o primeiro número: ');
                const b = obterNumero('Digite o segundo número: ');
                if (b === 0) {
                    console.log('Erro: divisão por zero.');
                } else {
                    console.log(`Resultado: ${a / b}`);
                }
                break;
            }
            case 5: {
                const base = obterNumero('Digite a base: ');
                const expoente = obterNumero('Digite o expoente: ');
                console.log(`Resultado: ${Math.pow(base, expoente)}`);
                break;
            }
            case 6: {
                const num = obterNumero('Digite o número: ');
                if (num < 0) {
                    console.log('Erro: não existe raiz quadrada de número negativo no conjunto dos reais.');
                } else {
                    console.log(`Resultado: ${Math.sqrt(num)}`);
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
