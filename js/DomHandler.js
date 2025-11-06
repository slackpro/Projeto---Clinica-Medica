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
}

//
