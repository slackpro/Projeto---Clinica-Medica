import { Medico } from './Medico.js';
import { Paciente } from './Paciente.js';
import { DomHandler } from './DomHandler.js';

let medicos = [];
let pacientes = [];

async function carregarDados() {
  try {
    //Requisição dos JSONs na pasta data com os dados de Médicos e paciente
    const responseMedico = await fetch('./data/medicos.json');
    const medicosData = await responseMedico.json();
    //   console.log(medicosData);

    //Criar instancias de médico
    medicos = medicosData.map(
      (medico) =>
        new Medico(medico.nome, medico.idade, medico.cpf, medico.especialidade)
    );
    //   console.log(medicos);

    const responsePaciente = await fetch('./data/pacientes.json');
    const pacienteData = await responsePaciente.json();
    //   console.log(pacienteData);

    //Criar instancias de pacientes
    pacientes = pacienteData.map(
      ({ nome, idade, cpf }) => new Paciente(nome, idade, cpf) //forma mais curta de instanciar (chamad dessestruturação)
    );
    //   console.log(pacientes);

    //Atualizar a interface - metodos que recebe a lista de pacientes e renderiza no html
    DomHandler.atualizarListaPaciente(pacientes);
    DomHandler.atualizarListaMedico(medicos);
  } catch (error) {
    console.error('Erro ao carregar os dados', error);
  }
}

//Função para formatar a data: YYYY-MM-DD para DD/MM/YYYY
function formataData(data) {
  const [ano, mes, dia] = data.split('-'); //o split separa o que antes era um elemento (string), e transforma em elementos separados, passiveis de ser maniulados
  return `${dia}/${mes}/${ano}`;
}

function agendarConsulta() {
  const pacienteSelecionado = document.getElementById('selectPaciente').value;
  const medicoSelecionado = document.getElementById('selecMeico').value;
  const dataSelecionada = document.getElementById('inputData').value;

  if (!pacienteSelecionado || !medicoSelecionado || !dataSelecionada) {
    alert('Por favor, selecione um paciente, um médico e uma data');
  }

  const paciente = pacientes.find((p) => p.nome === pacienteSelecionado);

  const medico = medicos.find((m) => m.nome === medicoSelecionado);

  if (paciente && medico) {
    medico
      .agendarConsulta(paciente, formataData(dataSelecionada))
      .then((mensagem) => {
        DomHandler.exibirConsulta(mensagem);
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carregarDados();
  document
    .getElementById('btnAgendar')
    .addEventListener('click', agendarConsulta);
});
