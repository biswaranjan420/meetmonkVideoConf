exports.joinRoom = (req, res) => {
    let obj = new Object();
    try {
        const queryParams = req.query;
        const roomName = queryParams['name'];
        if (roomName && roomName != '') {
            const url = 'https://core.meetmonk.com/#/' + roomName;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><head><meta http-equiv="refresh"  content="0; url=' + url + '"/ ></head><body></body></html>');
            res.end();
        }


    } catch (error) {

    }


    // res.send(obj);

};