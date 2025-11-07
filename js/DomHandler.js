export class DomHandler {
  static atualizarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById('selectPaciente');
    selectPaciente.innerHTML = `<option value="">-- Selecione um paciente--</option>`;

    pacientes.forEach((paciente) => {
      const option = document.createElement('option');
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }
  static atualizarListaMedico(medicos) {
    const selectMedicos = document.getElementById('selecMeico');
    selectMedicos.innerHTML = `<option value="">-- Selecione um Médico--</option>`;

    medicos.forEach((medico) => {
      const option = document.createElement('option');
      option.value = medico.nome;
      option.textContent = medico.nome;
      selectMedicos.appendChild(option);
    });
  }
  static exibirConsulta(mensagem) {
    const listaConsulta = document.getElementById('listaConsultas');

    //verificar se já existe um elemento com a mesma mensagem/texto
    const consultas = Array.from(listaConsulta.getElementsByTagName('li'));
    const consultaExiste = consultas.some((li) =>
      li.textContent.includes(mensagem)
    );

    if (consultaExiste) {
      alert('Essa consulta já foi agendada!');
      return;
    }

    //Criar o elemento da lista
    const li = document.createElement('li');
    li.classList.add('consulta-item');
    li.textContent = mensagem;

    // Criar o botão de cancelar
    const btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.classList.add('btn-cancelar');

    //Evento para remover a consulta ao clicar no botão
    btnCancelar.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(btnCancelar);
    listaConsulta.appendChild(li);
  }
}
