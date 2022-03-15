/**
 * Assignment 11 - W3D4 - Working with the DOM and Event-handling
 * 
 * @author Nebyat Tibebu
 * @since 2022-03-10
 * 
 */

"use strict";

const formSubmit = document.querySelector('#btnRegisterPatient');
formSubmit.addEventListener("click", addTableData);

const patientData = [];

function loadData(){
    const formData = {
        pID: document.querySelector('#patientIdNumber').value,
        fName: document.querySelector('#firstName').value,
        mName: document.querySelector('#middleInitials').value,
        lName: document.querySelector('#lastName').value,
        dob: document.querySelector('#dateOfBirth').value,
        dept: document.querySelector('#ddlDepartment').value,
        outPatient: document.querySelector('#radioIsOutPatientYes').checked === true ? document.querySelector('#radioIsOutPatientYes').value : document.querySelector('#radioIsOutPatientNo').value 
    }
    patientData.push(formData);
}


function addTableData(event){
    event.preventDefault();
    const table = document.querySelector('#divPatientsList');
    const tbody = table.querySelector('#tbodyPatientsList');
    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    loadData();
    cell1.innerHTML = patientData[patientData.length-1].pID;
    cell2.innerHTML = patientData[patientData.length-1].fName;
    cell3.innerHTML = patientData[patientData.length-1].mName;
    cell4.innerHTML = patientData[patientData.length-1].lName;
    cell5.innerHTML = patientData[patientData.length-1].dob;
    cell6.innerHTML = patientData[patientData.length-1].dept;
    cell7.innerHTML = patientData[patientData.length-1].outPatient;
}

const outPatientChkBox = document.querySelector('#chkShowOutPatients');
outPatientChkBox.addEventListener('change', filterOutPatientData);

function filterOutPatientData(event) {
    event.preventDefault();
    const chkBox = document.querySelector('#chkShowOutPatients');
    const table = document.querySelector('#tbodyPatientsList');
    const tr = table.querySelectorAll('tr');
    if(chkBox.checked){

        tr.forEach((p) => {
            const td = p.querySelectorAll('td');
                if(td[6].innerHTML == "No"){
                    p.style.display = "none";
                }
        });
    } else{
        tr.forEach((p) => {
            const td = p.querySelectorAll('td');
            if(td[6].innerHTML == "No"){
                p.style.display = "";
            }
        });
    }    
}

const elderlyChkBox = document.querySelector('#chkElderlyPatients');
elderlyChkBox.addEventListener('change', filterElderlyData);

function filterElderlyData(event) {
    event.preventDefault();
    const chkBox = document.querySelector('#chkElderlyPatients');
    const table = document.querySelector('#tbodyPatientsList');
    const tr = table.querySelectorAll('tr');
    if(chkBox.checked){
        tr.forEach((p) => {
            const td = p.querySelectorAll('td');
            let dob = td[4].innerHTML;
            dob = Number(dob.substring(0,4));
                if((2022 - dob) >= 65){
                    p.style.display = "none";
                }
        });
    } else{
        tr.forEach((p) => {
            const td = p.querySelectorAll('td');
            let dob = td[4].innerHTML;
            dob = Number(dob.substring(0,4));
            if((2022 - dob) >= 65){
                p.style.display = "";
            }
        });
    }    
}