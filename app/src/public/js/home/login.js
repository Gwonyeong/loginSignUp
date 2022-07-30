"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    loginBtn = document.querySelector("button");

console.log(id)
loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        pw: pw.value,
    }
    console.log(req)

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)//오브젝트를 문자열로 바꿔줌
    }).then((res) => res.json())
    .then((res => {
        
    }))  //fetch로 데이터를 보내주고 반환받은 데이터로 then사용
}