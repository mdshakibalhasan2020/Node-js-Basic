const fs = require('fs');
fs.writeFile('bird.txt', 'the bird is beautifull', (err) => {
    if (err) {
        console.log("error");
    } else {
        console.log("successfull");
    }
})
fs.appendFile('bird.txt', 'the bird lives in the tree', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("successfull");
    }
})

fs.readFile('bird.txt', 'utf-8', (data, error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

fs.rename('bird.txt', 'bird1.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("success");
    }

})
fs.unlink('bird1.txt', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("success");
    }

})
fs.exists('bird1.txt', (res) => {
    if (res) {
        console.log("found");
    } else {
        console.log("not-found");
    }

})