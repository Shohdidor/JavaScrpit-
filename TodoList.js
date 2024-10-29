let btnAddDialog = document . querySelector ( ".btnAddDialog" )
let DialogClose = document . querySelector ( ".DialogClose" )
let Dialog = document . querySelector ( ".Dialog" )
let box = document . querySelector ( ".box" )
let inp1 = document . querySelector ( ".inp1" )
let inp2 = document . querySelector ( ".inp2" )
let btnShadowDialog = document . querySelector ( ".btnShadowDialog" )
let inpEdit1 = document . querySelector ( ".inpEdit1" )
let inpEdit2 = document . querySelector ( ".inpEdit2" )
let Dialog2 = document . querySelector ( ".Dialog2" )
let EditDialogClose = document . querySelector ( ".EditDialogClose" )
let btnEditDialog = document . querySelector ( ".btnEditDialog" )
let inpSearch = document . querySelector ( ".inpSearch" )
let select = document . querySelector ( ".select-status" )



let data = [ {
    id : 1 , 
    name : "Peter Parker",
    job : "Photographer" , 
    isCompleted : false 
},
{
    id : 2 , 
    name : "Walter White" ,
    job : "Chemistry" , 
    isCompleted : false
}, 
{
    id : 3 , 
    name : "Jassy",
    job : "Assistent Chemistry",
    isCompleted : false 
}, 
{
    id : 4 ,
    name : "Miles Morales" , 
    job : "Student",
    isCompleted : false  
}]


btnShadowDialog.onclick = () => {
    Dialog.style.display="inline"

    btnAddDialog.onclick = () => {
        let obj = {
            id : new Date().getTime (),
            name : inp1.value ,
            job : inp2.value , 
            isCompleted : false  
        }
        Dialog.style.display="none"
        inp1.value = ""
        inp2.value = ""
        data.push ( obj )
        
        console.log(obj);
        console.log(data);
        getData (data)
    }
}


DialogClose.onclick = () => {
    Dialog.style.display ="none"        
}

let idx = null


function getData ( data ) {
    box . innerHTML = ""
    data.forEach (( elem ) => {
        let div = document . createElement ( "div" )
        let name = document . createElement ( "h3" )
        name . innerHTML = elem.name + " : "
        name . style.fontFamily ="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'" 
        name.style.fontWeight = "500"
        name.style.paddingLeft = "20px"
        name.style.color="#ffff"
        div.style.backgroundColor="#654"
        div.style.width="350px"
        div.style.height="17.5vh"
        div.style.borderRadius = "5px"
        
        let job = document . createElement ( "h3" )
        job.style.fontFamily ="'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS'" 
        job.style.fontWeight = "500"
        job.style.paddingLeft = "20px"
        job.innerHTML = elem.job

        let btnDel = document . createElement ( "button" )
        btnDel.innerHTML = "Delete"
        btnDel.style.padding="3px" 
        btnDel.style.borderRadius = "2px"
        btnDel.style.cursor="pointer"
        btnDel.style.border="none"
        btnDel.style.backgroundColor = "#90A3A0"
        btnDel.style.paddingInline = "20px"
        btnDel.style.fontSize="15px"

        btnDel.onclick = () => {
            deleteUser ( elem.id )
        }
        let btnEdit = document . createElement ( "button" )
        btnEdit.innerHTML = "Edit"
        btnEdit.style.padding="3px" 
        btnEdit.style.borderRadius = "2px"
        btnEdit.style.cursor="pointer"
        btnEdit.style.border="none"
        btnEdit.style.backgroundColor = "#90A3A0"
        btnEdit.style.paddingInline = "20px"
        btnEdit.style.fontSize="15px"

        btnEdit.onclick = () => {
            editUser ( elem )
            Dialog2.style.display="inline"
        }


        
        let check = document . createElement ( "input" )
        check.type = "checkBox"
        check.checked = elem.isCompleted 
        elem.isCompleted?name.style.color="red":"white"
        elem.isCompleted?job.style.color="red":"white"

        check.onclick = () => {
            checkUser ( elem . id )
        }


                
        div.append ( name , job , btnDel , btnEdit , check )
        box.appendChild ( div )

    })
}
getData(data)



function deleteUser ( id ) {
    data = data.filter (( elem ) => {
        return elem . id != id 
    })
    getData ( data )
}


function editUser ( elem ) {
    idx = elem.id
    inpEdit1.value = elem.name 
    inpEdit2.value = elem.job
    btnEditDialog.onclick = () => {
        if ( elem . id == idx ) {
            elem.name = inpEdit1.value 
            elem.job = inpEdit2.value
        }
        Dialog2.style.display="none"
        getData ( data )
    }
}

EditDialogClose.onclick = () => {
    Dialog2.style.display="none"
}



function checkUser ( id ){
    data = data.map (( elem ) => {
        if ( elem . id == id ) {
            elem.isCompleted = ! elem.isCompleted
        }
        return elem
    })

    console.log( data );
    
    getData ( data )
}



inpSearch.oninput = () => {
    let filter = data.filter (( elem )=> {
        return elem.name.toLocaleLowerCase().trim().includes(inpSearch.value.toLocaleLowerCase().trim())
    })
    getData ( filter )
}



select.onclick = () => {
    if ( select . value == "All" ) {
        getData ( data )
    }
    else {
        let filter = data.filter (( elem ) => {
            if ( elem . isCompleted.toString () == select.value ) {
                return elem 
            }
        })
        getData ( filter )
    }
}