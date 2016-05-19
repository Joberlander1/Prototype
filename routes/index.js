/*
 * GET home page.
 */

var models = require("../models");

exports.index = function(req, res) {
    res.render('index', {
        title : 'WAV'
    });
};
exports.clientpage= function(req, res) {
    res.render('clientpage', {
        title : 'WAV'
    });
};
exports.clientpage1= function(req, res) {
    res.render('clientpage1', {
        title : 'WAV'
    });
};
    exports.clientpage2= function(req, res) {
    res.render('clientpage2', {
        title : 'WAV'
    });
};
exports.clientpage3= function(req, res) {
    res.render('clientpage3', {
        title : 'WAV'
    });
};
exports.clientpage4= function(req, res) {
    res.render('clientpage4', {
        title : 'WAV'
    });
};
exports.consultantpage= function(req, res) {
    res.render('consultantpage', {
        title : 'WAV'
    });
};
exports.login= function(req, res) {
    res.render('login', {
        title : 'WAV'
    });
};
/* clients */
exports.getclients = function(req, res) {
    models.Client.findAll().then(function(clients){
        res.json(clients);
    });
};

exports.saveclients = function(req, res) {
    models.Client.create({
        name: req.body.name,
        birthday: req.body.birthday,
        canreceivetxt: req.body.txt,
        phone: req.body.phone,
        address: req.body.address,
        ssn: req.body.ssn,
        dln: req.body.dln,
        dls: req.body.dls,
        zip: req.body.zip,
        email: req.body.email,
        scndcntctprsn: req.body.scndcntctprsn,
        casetype: req.body.casetype,
        age: req.body.age,
        done: req.body.done, 
        incidentloc: req.body.incidentloc,
        dol: req.body.dol,
        incidentfcts: req.body.incidentfcts,
        posncar: req.body.posncar,
        pdp: req.body.pdp,
        pr: req.body.pr,
        pdd: req.body.pdd,
        ymmov: req.body.ymmov,
        advinfo: req.body.advinfo,
        wtnsnfo: req.body.wtnsnfo,
        advtick: req.body.advtick,
        clitick: req.body.clitick,
        cai: req.body.cai,
        policy: req.body.policy,
        adjstrnme: req.body.adjstrnme,
        adjstrphne: req.body.adjstrphne,
        adjstrfx: req.body.adjstrfx,
        insclaimnum: req.body.insclaimnum,
        claim: req.body.claim,
        advpol: req.body.advpol,
        advins: req.body.advins,
        advinsn: req.body.advinsn,
        advinsp: req.body.advinsp,
        trnsprtbprmdc: req.body.trnsprtbprmdc,
        whtcmpny: req.body.whtcmpny,
        medtrtmnt: req.body.medtrtmnt,
        prvdrs: req.body.prvdrs,
        doi: req.body.doi,
        rltdclaims: req.body.rltdclaims,
        wglss: req.body.wglss,
        source: req.body.source,
        notes: req.body.notes,     
    }).then(function(clients){
        res.json(clients.dataValues);
    }).catch(function(error){
        console.log("ops: " + error);
        res.status(500).json({ error: 'error' });
    });
};
/*consultants*/
exports.gettodos = function(req, res) {
    models.Todo.findAll().then(function(todos){
        res.json(todos);

    });
};

exports.savetodos = function(req, res) {
    models.Todo.create({
        text: req.body.text,
        done: req.body.done                         
    }).then(function(todos){
        res.json(todos.dataValues);
    }).catch(function(error){
        console.log("ops: " + error);
        res.status(500).json({ error: 'error' });
    });
    
};


