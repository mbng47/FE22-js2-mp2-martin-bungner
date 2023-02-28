

function getFormData(formPara) {

    const inputs = formPara.childNodes;
    const inputData = {};

    inputs.forEach(input => {
        if (input.value != undefined && input.value != '' && input.value != 'none') {
            inputData[input.name] = input.value;
        }
    })

    return inputData;
}

export { getFormData };