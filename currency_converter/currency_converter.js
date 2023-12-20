let select =document.querySelectorAll('.currency');
let btn=document.querySelector('.btns')
let input=document.getElementById('input');
let wrong=document.querySelector('.wrong');


fetch('https://api.frankfurter.app/currencies')
.then(res => res.json())
.then(res=>displaydropdown(res))

function displaydropdown(res)
{
    let curr=Object.entries(res)
    for(let i=0;i<curr.length;i++)
    {
        let opt=`<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt;
        select[1].innerHTML+=opt;

    }
}

btn.addEventListener('click',() =>
{
     let curr1=select[0].value;
     let curr2=select[1].value;
     let inpval=input.value;
     if(inpval === "")
     wrong.innerHTML="input is empty."
     if(curr1===curr2)
    //  alert("converting into same currency not possible.")
    wrong.innerHTML="converting into same currency not possible."
     else
     convert(curr1,curr2,inpval)
 
});

function convert(curr1,curr2,inpval)
{
    const host = 'api.frankfurter.app';
   fetch(`https://${host}/latest?amount=${inpval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    //  alert( data.rates);
    //  console.log(data.rates)
   document.getElementById('result').value= Object.values(data.rates)[0]
  });

}