let data =
    [{
        "student": "John",
        "class": "BA",
        "rollNumber": "19ba100",
        "mobile": 9087654321,
        "address": "12,iba,Yalei",
        "attendance": 75.4,
        "marks": {
            "sem_one": [90, 80, 70, 70, 60],
            "sem_two": [98, 85, 90, 90, 50],
            "sem_three": [90, 80, 70, 70, "a"],
            "sem_four": [90, 80, 70, 70, 100],
            "sem_five": [90, 80, 70, 70, 90],
            "sem_six": [90, 80, 70, 70, 100]
        }
    },
    {
        "student": "peker",
        "class": "BA",
        "rollNumber": "19ba101",
        "mobile": 9087659081,
        "address": "12,ia,naile",
        "attendance": 74.4,
        "marks": {
            "sem_one": [100, 84, 73, 72, 64],
            "sem_two": [95, 75, 83, 91, 100],
            "sem_three": [40, 100, 90, "a", "a"],
            "sem_four": [60, 70, 90, 76, "a"],
            "sem_five": [98, 100, 73, 40, 90],
            "sem_six": [60, 30, 80, 100, 100]

        }
    }]
    let first = [];
data.forEach(values => {
    let sum = 0;
    let mark1 = values.marks.sem_one;
    for (let i = 0; i < mark1.length; i++)
    if(typeof(values.marks.sem_one[i]) == "number")
    sum = sum + values.marks.sem_one[i];
    let ans1 = sum / mark1.length;
    // console.log(Math.round(ans1));
    first.push(ans1);
    // console.log(first);
    let mark2 = values.marks.sem_two;
    for(let i=0;i<mark2.length;i++)
    if(typeof(values.marks.sem_two[i]) == "number")
    sum = sum + values.marks.sem_two[i];
    let ans2 = sum / mark2.length;
    // console.log(Math.round(ans2));
    first.push(ans2);
    // console.log(ans2);
    let mark3 = values.marks.sem_three;
    let len = mark3.length;
    for(let i=0;i<mark3.length;i++)
    if(typeof(values.marks.sem_three[i]) == "number")
    sum = sum + values.marks.sem_three[i];
    let ans3 = sum / mark3.length;
    // console.log(Math.round(ans3));
    first.push(ans3);
    // console.log(first);
    let mark4 = values.marks.sem_four;
    for(let i=0;i<mark4.length;i++)
    if(typeof(values.marks.sem_four[i])== "number")
    sum = sum + values.marks.sem_four[i];
    let ans4 = sum / mark4.length;
    // console.log(Math.round(ans4));
    first.push(ans4);
    // console.log(first);
    let mark5 = values.marks.sem_five;
    for(let i=0;i<mark5.length;i++)
    if(typeof(values.marks.sem_five[i])== "number")
    sum = sum + values.marks.sem_five[i];
    let ans5 = sum / mark5.length;
    // console.log(Math.round(ans5));
    first.push(ans5);
    // console.log(first);
    let mark6 = values.marks.sem_six;
    for(let i=0;i<mark6.length;i++)
    if(typeof(values.marks.sem_six[i])== "number")
    sum = sum + values.marks.sem_six[i];
    let ans6 = sum / mark6.length;
    // console.log(Math.round(ans6));
    first.push(ans6);
    // console.log(first);
for(let i=0;i<first.length/2;i++)
{
let arr1 = first[i];
 console.log(arr1);
}
for(let i=6;i<first.length;i++)
{
    let arr2 = first[i];
    // console.log(arr2);

// if(arr1[0]>arr2[0] && arr1[1]>arr2[1])
//  console.log("john");
// else
//  console.log("pekar");

}

})