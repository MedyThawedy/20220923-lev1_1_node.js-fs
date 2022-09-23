import f from 'fs';

/*
Öffne die Datei blog1.txt (fs.
    Ändere den Inhalt (Text) in der Datei blog1.txt
*/
//https://nodejs.dev/en/learn/writing-files-with-nodejs/
//https://nodejs.dev/en/learn/reading-files-with-nodejs/
f.readFile('./blog.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
f.appendFile('./blog.txt', (('\n' + '\n') + 'Text was changed'), (err) => {
    if (err) console.log(err);
});
let content = 'Another text';
f.writeFile('./text.txt', content, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
/*
    Erstelle eine neue Datei „blog2.txt“ und schreibe etwas in sie hinein
*/
let something = 'Something was written!';
f.writeFile('./blog2.txt', something, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});
/*
    Erstelle einen neuen Ordner „assets“.
*/
// https://nodejs.dev/en/learn/working-with-folders-in-nodejs/
// https://parallelcodes.com/node-js-how-to-create-directory/
const folderName = './testfolder';
function createFolder() {
    try {
        if (!f.existsSync(folderName)) {
            f.mkdir(folderName, (err) => {
                if (err) {
                    console.log("error occurred in creating new directory", err);
                    return;
                }
            })
        }
    } catch (err) {
        console.error(err);
    }
}

createFolder();

/*
    Existiert der Ordner „assets“ bereits? Dann lasse ihn wieder löschen.
*/

//https://nodejs.dev/en/learn/working-with-folders-in-nodejs/
let folderToDelete = './assets';
function deleteFolder() {
    try {
        if (f.existsSync(folderToDelete)) {
            f.rmdir(folderToDelete, { recursive: true }, err => {
                if (err) {
                    throw err;
                }

                console.log(`${folderToDelete} is deleted!`);
            });
        }
    } catch (err) {
        console.error(err);
    }
}
deleteFolder();

/*
    Erstelle eine Datei namens „delete.txt“.
*/

let somethingElse = 'delete.txt was created!';
f.writeFile('./delete.txt', somethingElse, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});

/*
    Lösche die Datei „delete.txt“, wenn sie bereits existiert. 
*/
// https://freecoder.co/post/how-to-delete-file-if-exists-in-node-js-8035
/*
const filePath = './delete.txt';
f.exists(filePath, function (exists) {
    if (exists) {
        console.log('File exists. Deleting now ...');
        f.unlinkSync(filePath);
    } else {
        console.log('File not found, so not deleting.');
    }
});
*/
// https://parallelcodes.com/node-js-how-to-check-if-directory-or-file-exists/
const filePath = './delete.txt';
if (f.existsSync(filePath)) {
    console.log('File exists. Deleting now ...');
    f.unlinkSync(filePath);
} else {
    console.log('File not found, so not deleting.');
}


/*
    Erstelle eine Datei namens „Hello.txt“ und füge ihr Text hinzu. Benenne sie dann in „HelloWorld.txt“ um. 
*/

let somethingElseAndSoOne = 'Hello.txt was created!';
f.writeFile('./hello.txt', somethingElseAndSoOne, err => {
    if (err) {
        console.error(err);
    }
    // file written successfully
});

f.appendFile('./hello.txt', (('\n' + '\n') + 'Somethin else and so one ... '), (err) => {
    if (err) console.log(err);
});

// https://stackoverflow.com/questions/22504566/renaming-files-using-node-js


f.rename('./hello.txt', './helloText.txt', function (err) {
    if (err) console.log('ERROR: ' + err);
});