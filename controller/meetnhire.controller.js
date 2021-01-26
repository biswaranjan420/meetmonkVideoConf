exports.joinRoom = (req, res) => {
    let obj = new Object();
    try {
        const queryParams = req.query;
        const roomName = queryParams['name'];
        if (roomName && roomName != '') {
            const url = 'https://core.meetmonk.com/#/' + roomName;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><iframe name="meetNhireIframe" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" src="' + url + '" allow="microphone; camera" title="Classroom"></iframe></body></html>');
            res.end();
        }


    } catch (error) {

    }


    // res.send(obj);

};