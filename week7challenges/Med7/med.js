const volume = prompt(`Type Your Message Here`);

if (volume === volume.toUpperCase()){
    console.log(`You're shouting.`)
}

else if (volume === volume.toLowerCase()){
    console.log(`You're whispering.`);
}

else{
    console.log(`You're talking normally.`)
}