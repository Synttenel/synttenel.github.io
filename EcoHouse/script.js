let dispositivos = []; // Lista de dispositivos selecionados

// Função para adicionar um aparelho à lista
function adicionarAparelho() {
    const potencia = document.getElementById('aparelho').value;
    const nomeAparelho = document.getElementById('aparelho').options[document.getElementById('aparelho').selectedIndex].text;
    const horasPorDia = document.getElementById('horas').value;
    const tarifa = document.getElementById('tarifa').value;

    if (horasPorDia <= 0 || isNaN(horasPorDia)) {
        alert("Por favor, insira um valor válido para as horas de uso.");
        return;
    }

    if (tarifa <= 0 || isNaN(tarifa)) {
        alert("Por favor, insira um valor válido para a tarifa de energia.");
        return;
    }

    // Adiciona o dispositivo à lista
    const novoDispositivo = {
        nome: nomeAparelho,
        potencia: parseFloat(potencia),
        horasPorDia: parseFloat(horasPorDia),
        tarifa: parseFloat(tarifa)
    };

    dispositivos.push(novoDispositivo);
    atualizarListaDispositivos();
    calcularConsumoTotal();
}

// Função para remover um aparelho da lista
function removerAparelho(index) {
    dispositivos.splice(index, 1); // Remove o item pelo índice
    atualizarListaDispositivos();
    calcularConsumoTotal();
}

// Função para atualizar a lista de dispositivos na interface
function atualizarListaDispositivos() {
    const listaDiv = document.getElementById('listaAparelhos');
    listaDiv.innerHTML = ''; // Limpa a lista para recriar

    dispositivos.forEach((dispositivo, index) => {
        const diasNoMes = 30;
        const consumoMensal = (dispositivo.potencia * dispositivo.horasPorDia * diasNoMes) / 1000; // kWh
        const custoMensal = consumoMensal * dispositivo.tarifa; // Calcula o custo mensal em R$

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('list-item');

        itemDiv.innerHTML = `
            <span>${dispositivo.nome} - ${dispositivo.horasPorDia}h/dia - Consumo: ${consumoMensal.toFixed(2)} kWh - Custo: R$ ${custoMensal.toFixed(2)}</span>
            <button class="remove-button" onclick="removerAparelho(${index})">Remover</button>
        `;

        listaDiv.appendChild(itemDiv);
    });
}

// Função para calcular o consumo total de todos os dispositivos
function calcularConsumoTotal() {
    const diasNoMes = 30;
    let consumoTotal = 0;
    let custoTotal = 0;

    dispositivos.forEach(dispositivo => {
        const consumoMensal = (dispositivo.potencia * dispositivo.horasPorDia * diasNoMes) / 1000; // kWh
        const custoMensal = consumoMensal * dispositivo.tarifa; // R$
        consumoTotal += consumoMensal;
        custoTotal += custoMensal;
    });

    document.getElementById('consumoTotal').innerText = consumoTotal.toFixed(2) + ' kWh';
    document.getElementById('custoTotal').innerText = 'R$ ' + custoTotal.toFixed(2);
}
