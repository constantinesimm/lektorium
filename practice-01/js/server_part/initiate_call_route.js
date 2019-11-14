let router = require("express").Router();
let axios = require('axios');
let { sip_online, simple_callback } = require('../config/endpoints').ringostat.old;

router.options('/initiateCall', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');  //allow access to current origin
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, x-route-guard');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.status(204).end();
})
router.post('/initiateCall', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');  //allow access to current origin
    const clientNumber = req.body.callee;

    //validate number
    if (!clientNumber.match(/^(067|097|096|098|093|073|063|095|050)([0-9]{7})$/)) {
        return res.status(400).send('Phone format is incorrect. Please, enter valid number');
    }

    //if number is valid -> get array sip. if anybody online - try to call or send error
    axios
        .get(sip_online)
        .then(response => response.data)
        .then(availableSip => { return !availableSip.length ? res.status(404).send('No available manager at current time. Please, try again later.') : initiateCallTo(clientNumber) });

    //initiate call to client
    function initiateCallTo(client) {
        axios
            .post(simple_callback, { 'extension': '380442992000', 'destination': client })
            .then(response => { return response.status === 200 ?
                res.send('Thank you! Manager will callback less than 30 sec ^_^').end() : res.send('Sorry, but currently we cant callback. Manager will call you ASAP').end()
            })
            .catch(error => res.send(error));
    }
});

module.exports = router;
