document.addEventListener('DOMContentLoaded', () => {
    // Gráfico 1: Produção de Alimentos por Continente
    const grafico1 = document.getElementById('grafico1');
    const data1 = [
        {
            x: ["África", "América", "Ásia", "Europa", "Oceania"],
            y: [400, 1200, 2000, 800, 150], // Produção em milhões de toneladas
            type: 'bar',
            marker: {
                color: ['#228B22', '#32CD32', '#66CDAA', '#8B0000', '#FFD700']
            }
        }
    ];
    const layout1 = {
        title: {
            text: 'Produção de Alimentos por Continente (Milhões de Toneladas)',
            font: {
                size: 18,
                color: '#006400'
            }
        },
        xaxis: { title: 'Continentes' },
        yaxis: { title: 'Produção (milhões de toneladas)' },
        plot_bgcolor: '#ffffff',
        paper_bgcolor: '#f5f5dc'
    };
    Plotly.newPlot(grafico1, data1, layout1);

    // Gráfico 2: Distribuição de Tipos de Cultivo no Brasil
    const grafico2 = document.getElementById('grafico2');
    const data2 = [
        {
            labels: ["Soja", "Milho", "Cana-de-Açúcar", "Café", "Algodão"],
            values: [35, 25, 20, 15, 5], // Percentuais
            type: 'pie',
            textinfo: 'label+percent',
            marker: {
                colors: ['#FFD700', '#32CD32', '#8B0000', '#FF8C00', '#228B22']
            }
        }
    ];
    const layout2 = {
        title: {
            text: 'Distribuição de Tipos de Cultivo no Brasil',
            font: {
                size: 18,
                color: '#006400'
            }
        },
        plot_bgcolor: '#ffffff',
        paper_bgcolor: '#f5f5dc'
    };
    Plotly.newPlot(grafico2, data2, layout2);
});
