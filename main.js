const professors = [
    {id: 1, name: 'Jim Gardner', department: 'Bible', age:'5-23-1949', imageUrl: "gardner_james.jpg"},
    {id: 2, name: 'Lisa Beene', department: 'Social Work',  age:'5-23-1959', imageUrl: "beene_lisa.jpg"},
    {id: 3, name: 'Kenan Casey', department: 'Math, Engineering, and Computer Science', age:'4-1-1982', imageUrl: "casey-kenan.jpg"}
]

const MAX_GUESSES = 5
let currentGuessCount = 0;

//Pulls a random professor from index
let randomIndex = Math.floor(Math.random() * professors.length)

const professorName = professors[randomIndex]
const professorDepartment = professors[randomIndex]
const professorAge = professors[randomIndex]
const professorImage = document.getElementById('professorImage')

let currentProfessor = professors[randomIndex]

//update professor image
function updateProfession( professor ){
    const imageBasePath = "assets/images/"

    Name.textContent += professor.name
    Department.textContent += professor.department

    professorImage.src = imageBasePath + professor.imageUrl
    professorImageWin.src = imageBasePath + professor.imageUrl
    professorImageHigh.src = imageBasePath + professor.imageUrl
    professorImageLow.src = imageBasePath + professor.imageUrl
    professorImageLose.src = imageBasePath + professor.imageUrl
}

//Find the professor's age
function updateAge (professor){
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const currentDay = currentDate.getDate()

    date = professor.age.split('-').map(Number)

    const professorYear = date[2]
    const professorMonth = date[0]
    const professorDay = date[1]

    professor.correctGuessYear = currentYear - professorYear
    professor.correctGuessMonth = currentMonth - professorMonth
    professor.correctGuessDay = currentDay - professorDay


    console.log (professor.correctGuessYear)
    console.log (professor.correctGuessMonth)
    console.log (professor.correctGuessDay)
}

updateProfession(currentProfessor);
updateAge(currentProfessor);

guessButton.addEventListener("click", (event) => {
    event.preventDefault()

    const guessedYear = guessYear.value
    const guessedMonth = guessMonth.value
    const guessedDay = guessDay.value

    
    console.log(guessedYear)
    console.log(currentProfessor.correctGuessYear - guessedYear)
    
    //Tracking the Number of Guesses
    currentGuessCount++
    document.getElementById('guessesLeft').innerHTML ="Guesses Left: " + (MAX_GUESSES - currentGuessCount)

    if (currentGuessCount > MAX_GUESSES) {
        containerNormal.style.display = "none"
        containerLose.style.display = "grid"
    }
    else if (currentProfessor.correctGuessYear - guessedYear === 0 && currentProfessor.correctGuessMonth - guessedMonth === 0 && currentProfessor.correctGuessDay - guessedDay === 0) {
        containerNormal.style.display = "none"
        containerWin.style.display = "grid"
    } 
    else if (currentProfessor.correctGuessYear - guessedYear < 0) {
        containerNormal.style.display = "none"
        containerTooHigh.style.display = "grid"
    }
    else {
        containerNormal.style.display = "none"
        containerTooLow.style.display = "grid"
    }

    //year high or low
    if (guessedYear > currentProfessor.correctGuessYear) {
        document.getElementById('yearsInfoTooHigh').innerHTML = "Years: Too high!"
        document.getElementById('yearsInfoTooLow').innerHTML = "Years: Too high!"
    } 
    else if (guessedYear < currentProfessor.correctGuessYear) {
        document.getElementById('yearsInfoTooHigh').innerHTML = "Years: Too low!"
        document.getElementById('yearsInfoTooLow').innerHTML = "Years: Too low!"
    } 
    else {
        document.getElementById('yearsInfoTooHigh').innerHTML = "Years: Correct!"
        document.getElementById('yearsInfoTooLow').innerHTML = "Years: Correct!"
    }
    
    //month high or low
    if (guessedMonth > currentProfessor.correctGuessMonth) {
        document.getElementById('monthsInfoTooHigh').innerHTML = "Months: Too high!"
        document.getElementById('monthsInfoTooLow').innerHTML = "Months: Too high!"
    } 
    else if (guessedMonth < currentProfessor.correctGuessMonth) {
        document.getElementById('monthsInfoTooHigh').innerHTML = "Months: Too low!"
        document.getElementById('monthsInfoTooLow').innerHTML = "Months: Too low!"
    } 
    else {
        document.getElementById('monthsInfoTooHigh').innerHTML = "Months: Correct!"
        document.getElementById('monthsInfoTooLow').innerHTML = "Months: Correct!"
    }

    //day high or low
    if (guessedDay > currentProfessor.correctGuessDay) {
        document.getElementById('daysInfoTooHigh').innerHTML = "Days: Too high!"
        document.getElementById('daysInfoTooLow').innerHTML = "Days: Too high!"
    } 
    else if (guessedDay < currentProfessor.correctGuessDay) {
        document.getElementById('daysInfoTooHigh').innerHTML = "Days: Too low!"
        document.getElementById('daysInfoTooLow').innerHTML = "Days: Too low!"
    }
    else {
        document.getElementById('daysInfoTooHigh').innerHTML = "Days: Correct!"
        document.getElementById('daysInfoTooLow').innerHTML = "Days: Correct!"
    }
})

//return to containerNormal
highGuessButton.addEventListener("click", (event) => {
    containerNormal.style.display = "grid"
    containerTooHigh.style.display = "none"
})
lowGuessButton.addEventListener("click", (event) => {
    containerNormal.style.display = "grid"
    containerTooLow.style.display = "none"
})
loseGuessButton.addEventListener("click", (event) => {
    window.location.reload();
})
winGuessButton.addEventListener("click", (event) => {
    window.location.reload();
})