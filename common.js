const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body);
    return bodyStyles.getPropertyValue(variavel).trim() || 'default_value';  // Adiciona um valor default caso o valor da variável seja undefined
}

const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export { getCSS, tickConfig };
