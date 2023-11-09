function challenge1() {
    if (document.getElementById('subscribe').checked == true) {
        console.log('this works');
        document.querySelector('#emailDiv').style.display='initial';
    } else {
        document.querySelector('#emailDiv').style.display='none';
    }
}

function challenge2(element) {
    let bill = document.querySelector('#bill')
    let home = document.querySelector('#home')
    if (element.checked) {
        home.value = bill.value;
        home.disabled=true;
    } else {
        home.value = '';
    }
    console.log('home value is '+home.value)
    console.log('bill value is '+bill.value)
}

// document.querySelector('h1').addEventListener('click', changeBackground)

function challenge3(element) {
    var standing = document.querySelector('input[name="standing"]:checked');
    var year = document.querySelector('input[name="gradDate"]:checked');
    if (standing && year){
        return true;
    } else {
        alert('check boxes');
        return false;
    }
}