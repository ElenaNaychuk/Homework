// const brandSelect = document.querySelector('.brand');
// const modelsSelect = document.querySelector('.model');

// const modelsOfBrands = {
//     'lada': ['Гранта', 'Калина', 'Веста'],
//     'chevrolet': ['Aveo', 'Lanos', 'Nubira'],
//     'honda': ['Accord', 'Civic', 'Legend'],
// };





// if(selectedBrand === 'lada') {
//     for (let model of ladaModels) {
//         const option = document.createElement('option')
//         option.innerHTML = model.name;
//         option.value = model.price;
//         modelsSelect.append(option);
//     }
// } else if(selectedBrand === 'chev') {
//     for (let model of chevModels) {
//         const option = document.createElement('option')
//         option.innerHTML = model.name;
//         option.value = model.price;
//         modelsSelect.append(option);
//     }
// } else if(selectedBrand === 'honda') {
//     for (let model of hondaModels) {
//         const option = document.createElement('option')
//         option.innerHTML = model.name;
//         option.value = model.price;
//         modelsSelect.append(option);
//     }
// }



// if(selectedBrand === 'lada') {
//     const models = ladaModels;
// } else if(selectedBrand === 'chev') {
//     const models = chevModels;
// } else if(selectedBrand === 'honda') {
//     const models = hondaModels;
// }
// for (let model of models) {
//     const option = document.createElement('option')
//     option.innerHTML = model.name;
//     option.value = model.price;
//     modelsSelect.append(option);
// }





// brandSelect.addEventListener('change', onChangeBrand);

// function onChangeBrand(event) {
//     selectedBrand = event.target.value;
//     removeAllModels();
//     addModelsOfBrand(selectedBrand);//brand=selectedBrand
// }

// function removeAllModels() {
//     /* Цикл, который удаляет лишние <option> */
//     const howMuchOptionsToDelete = modelsSelect.length - 1;
//     for (i = 0; i < howMuchOptionsToDelete; i++) {
//         modelsSelect.remove(1);
//     }
// }

// function addModelsOfBrand(brand) {
//     const modelsOfBrand = modelsOfBrands[brand];
//     for (let model of modelsOfBrand) {
//         const option = document.createElement('option')
//         option.innerHTML = model.name;
//         option.value = model.price;
//         modelsSelect.append(option);
//     }
// }

