function selectDoor(ourDoor) {
    /*alert(Object.prototype.toString.call(ourDoor));*/

    ourDoor.setAttribute('style', 'border-radius:20px');
    console.log(ourDoor);
    console.log(ourDoor.id);
    /*newDoor = document.getElementById('doorA');*/
    newDoor = ourDoor;
    newDoor.setAttribute('class', 'selectedDoor');
 
    randomDoorValueArray = [];
    HighestValue = 0;
    HighestIndex = 0;
    doorWithHighestValue = '';
    doorAgoat = true;
    doorBgoat = true;
    doorCgoat = true;

    for (let i = 0; i < 3; i++) {
        randomNumber = Math.floor(Math.random() * 10);
        console.log('  pushing ' + randomNumber);
        randomDoorValueArray.push(randomNumber);
        if (randomNumber > HighestValue) {
            HighestValue = randomNumber;
            HighestIndex = i;
        }
    }
    console.log('highest index is: ' + HighestIndex);

    if (HighestIndex == 0) {
        doorAgoat = false;
        doorWithHighestValue = 'Door A';
    } else
    if (HighestIndex == 1) {
        doorBgoat = false;
        doorWithHighestValue = 'Door B';
    } else { doorCgoat = false; doorWithHighestValue = 'Door C'; }

    console.log('door with highest value is: ' + doorWithHighestValue);
    console.log(doorAgoat);
    console.log(doorBgoat);
    console.log(doorCgoat);
    console.log(randomDoorValueArray);

    const firstDoorChosen = ourDoor.id;
    goatDoorToOpen = 'A';
    if (firstDoorChosen == 'doorA') {
        console.log('door A chosen');
        if (doorAgoat == true) {
            if (doorBgoat == true) {
                goatDoorToOpen = 'B';
            }
            if (doorCgoat == true) {
                goatDoorToOpen = 'C';
            }
        }
    } else
    if (firstDoorChosen == 'doorB') {
        console.log('door B chosen');
        if (doorBgoat == true) {
            if (doorAgoat == true) {
                goatDoorToOpen = 'A';
            }
            if (doorCgoat == true) {
                goatDoorToOpen = 'C';
            }
        }
    } else
    if (firstDoorChosen == 'doorC') {
        console.log('door C chosen');
        if (doorCgoat == true) {
            if (doorAgoat == true) {
                goatDoorToOpen = 'A';
            }
            if (doorBgoat == true) {
                goatDoorToOpen = 'B';
            }
        }
    }

    console.log('Goat door to be opened is:' + goatDoorToOpen);
    /*
    alert('ourDoor');
    for(var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if(sheet.title == unique_title) {
        }
    }
    */
}
