// Task 1 

// let inp1 = document . querySelector ( ".inp1")
// let inp2 = document . querySelector ( ".inp2")
// let btn = document . querySelector ( ".btn")
// let answer = document . querySelector ( ".answer")

// btn.onclick = () => {
//     if ( inp1.value > inp2.value ) {
//         answer.innerHTML = "The Big number is " + inp1.value
//     }
//     else if ( inp2.value > inp1.value) {
//         answer. innerHTML = "The Big number is " + inp2 . value
// }
// else {
//     answer. innerHTML = "Draw"

// }
// }



// Task 2 


// let inp1 = document . querySelector ( ".inp1")
// let btn = document . querySelector ( ".btn" )

// btn.onclick = () => {
//     alert(inp1.value * inp1 . value )
// }


// Task 3 

// let inp1 = document . querySelector ( ".inp1")
// let btn = document . querySelector ( ".btn" )
// let answer = document . querySelector ( ".answer" )

// btn.onclick = () => {
//    inp1.value >= 1 && inp1.value <= 10 ? answer.innerHTML = "True" : answer.innerHTML = "False"
// }


// let btn1 = document . querySelector ( ".btn1")
// let btn2 = document . querySelector ( ".btn2")
// let btn3 = document . querySelector ( ".btn3")
// let answer = document . querySelector ( ".answer" )
// let cnt = 1
// btn1.onclick = () => {
//     cnt ++ 
//     answer . innerHTML = cnt 
    

// if ( cnt > 0 ) {
//     answer.style.color="green"
// }
// else { 
//     answer.style.color="red"
// }
// }
// btn2.onclick = () => {
//     cnt = 0 
//     answer . innerHTML = cnt 
    

// if ( cnt > 0 ) {
//     answer.style.color="green"
// }
// else { 
//     answer.style.color="black"
// }
// }
// btn3.onclick = () => {
//     cnt -- 
//     answer . innerHTML = cnt 
    

// if ( cnt > 0 ) {
//     answer.style.color="green"
// }
// else { 
//     answer.style.color="red"
// }
// }


// Умножение 

// (function  () {
//     for ( let i = 1 ; i <= 10 ; i ++ ) {
//         for ( let k = 1 ; k <= 10 ; k ++ ) {
//             console.log( i + " * " + k + " = " + k * i );
//         }
//     }
// }
// ())







let tbody = document . querySelector ( ".tbody ")
let inp1 = document . querySelector ( ".inp1")
let inp2 = document . querySelector ( ".inp2")
let inp3 = document . querySelector ( ".inp3")
let btn = document . querySelector ( ".btn")
let btn2 = document . querySelector ( ".btn2" )

let dialog = document . querySelector ( ".dialog" )
let inp1Edit = document . querySelector ( ".inp1Edit")
let inp2Edit = document . querySelector ( ".inp2Edit")
let inp3Edit = document . querySelector ( ".inp3Edit")
let Change = document . querySelector ( ".btnEdit" )

let inpSearch = document . querySelector ( ".inpSearch" )
let select = document . querySelector ( ".select-status" )



let data = [ { 
    id : 1 ,
    name : "Peter" ,
    age : 17 ,
    Job : "Photographer" ,
    isCompleted : false 
},
{
    id : 2 ,
    name : "Miles",
    age : 18 , 
    Job : "Student" ,
    isCompleted : false 
}] 



btn.onclick = () => {
    if ( inp1.value == "" || inp2.value == "" || inp3.value == "" ) {
        inp1.style.border="1px solid red"
        inp2.style.border="1px solid red"
        inp3.style.border="1px solid red"
        return 0
    }
    else {
        inp1.style.border="1px solid black"
        inp2.style.border="1px solid black"
        inp3.style.border="1px solid black"
    }
    let obj = { 
        id : new Date().getTime(),
        name : inp1 . value ,
        age : inp2 . value ,
        Job : inp3 . value ,
        isCompleted : false
    }
    data.push(obj)
    console.log( data );
    getData (data)
    inp1.value = ""
    inp2.value = ""
    inp3.value = ""
}

function getData (data) {
    tbody.innerHTML = ""
    data.forEach (( elem ) => {
        let tr = document . createElement ( "tr" )
        let td = document . createElement ( "td" )
        td.innerHTML = elem.name
        elem.isCompleted?td.style.color="red":td.style.color="black"               

        
        let td2 = document . createElement ( "td" )
        td2.innerHTML = elem.age
        
        elem.isCompleted?td2.style.color="red":td2.style.color="black"       
        
        let td3 = document . createElement ( "td" )
        td3.innerHTML = elem.Job
        elem.isCompleted?td3.style.color="red":td3.style.color="black"       



        let btnDel = document . createElement ( "button" )
        btnDel . innerHTML = "Delete"
        btnDel.onclick = () => {
            deleteUser(elem.id)
        }

        let checkBox = document . createElement ( "input" )
        elem.isCompleted?td.style.color="red":td.style.color="black"        
        checkBox.type = "checkBox"
        checkBox.checked = elem.isCompleted
        
        checkBox . onclick = () => {
            checkFunc ( elem . id ) 
        }

        let btnEdit = document . createElement ( "button" ) 
        btnEdit . innerHTML = "Change"
        let cnt = true
        btnEdit.onclick = () => {
            cnt?dialog.style.display="block":dialog.style.display="none"
            cnt = false             
            EditDialog ( elem )
        } 
    
        tr.append ( td , td2 , td3 , btnDel , checkBox , btnEdit  )
        tbody.appendChild ( tr )
    })
}
getData(data)



function deleteUser ( id ) {
    data = data.filter (( elem ) => {
        return elem.id != id 
    })
    console.log(data);
    
    getData (data)
}

function checkFunc ( id ) {
    data = data.map (( elem ) => {
        if ( elem . id === id ) {
            elem.isCompleted = ! elem.isCompleted
        }
        return elem
    })
   
    console.log( data );
    
    getData (data)
}


btn2.onclick = () => {
    data = data.filter (( elem ) => {
        return elem.isCompleted != true 
    })
    getData(data)
    return elem
}


function EditDialog ( elem ) {
    
    inp1Edit.value = elem.name 
    inp2Edit.value = elem.age 
    inp3Edit.value = elem.Job 

    Change.onclick = () => {
        elem.name = inp1Edit . value 
        elem.age = inp2Edit . value 
        elem.Job = inp3Edit . value 
        dialog.style.display="none"
        getData (data)
    }
}


inpSearch.oninput = () => {

    let filter = data.filter (( elem ) => {
    return elem.name.toLowerCase().includes(inpSearch.value.toLowerCase().trim())
    })
    getData(filter)
}


select.onclick = () => {
    if ( select . value == "All" ) {
        getData(data)
    }
    else {
        let filter = data . filter (( elem ) => {
            if ( elem . isCompleted.toString() == select.value ) {
                return elem
            }
        })
        getData ( filter )
    }
}




