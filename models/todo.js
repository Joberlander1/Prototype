
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Client = sequelize.define("Client", {
        name : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        birthday : { 
            type : DataTypes.DATE, 
            allowNull : true, 
        }, 
        canreceivetxt : { 
            type : DataTypes.BOOLEAN, 
            allowNull : true, 
        }, 
        phone : { 
           type : DataTypes.INTEGER,
           allowNull : true, 
       }, 
       address : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        ssn : { 
          type : DataTypes.INTEGER,
          allowNull : true, 
      }, 
        dln : { 
          type : DataTypes.INTEGER,
          allowNull : true, 
      }, 
        dls : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
        zip : { 
          type : DataTypes.INTEGER,
          allowNull : true, 
      }, 
        email : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 

        age : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
        scndcntctprsn : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
        casetype : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
        incidentloc : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        dol : { 
            type : DataTypes.DATE, 
            allowNull : true, 
        }, 
        pdp : { 
            type : DataTypes.BOOLEAN, 
            allowNull : true, 
        }, 
        pr : { 
           type : DataTypes.BOOLEAN,
           allowNull : true, 
       }, 
        incidentfcts : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
        posncar : { 
          type : DataTypes.STRING,
          allowNull : true, 
        },
        pdp : { 
            type : DataTypes.BOOLEAN, 
            allowNull : true, 
        }, 
        pr : { 
           type : DataTypes.BOOLEAN,
           allowNull : true, 
       }, 
       pdd : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
        ymmov : { 
          type : DataTypes.DATE,
          allowNull : true, 
      }, 
        advinfo : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
      wtnsnfo : { 
          type : DataTypes.STRING,
          allowNull : true, 
      }, 
        advtick : {
            type : DataTypes.BOOLEAN,
      },
        clitick : {
            type : DataTypes.BOOLEAN,
        },
        cai : { 
          type : DataTypes.STRING, 
        },
        policy : {
          type : DataTypes.INTEGER,
        },
        adjstrnme : {
          type : DataTypes.STRING, 
        },
        adjstrphne : {
          type : DataTypes.INTEGER,
        },
        adjstrfx : {
          type : DataTypes.INTEGER,
        },
        insclaimnum : {
          type : DataTypes.INTEGER,
        },
        advpol : {
          type : DataTypes.INTEGER,
        },
        advins : {
          type : DataTypes.STRING,
        },
        advinsn : {
          type : DataTypes.STRING,
        }, 
        advinsp : {
          type : DataTypes.INTEGER,
        },
        trnsprtbprmdc : {
          type : DataTypes.BOOLEAN,
        },
        whtcmpny : {
          type : DataTypes.STRING,
        },
        medtrtmnt : {
          type : DataTypes.BOOLEAN,
        },
        prvdrs : {
          type : DataTypes.STRING,
        },
        doi : {
          type : DataTypes.DATE,
        },
        rltdclaims : {
          type : DataTypes.STRING,
        },
        wglss : {
          type : DataTypes.INTEGER,
        },
        source : {
          type : DataTypes.STRING,
        },
        notes : {
          type : DataTypes.STRING,
      },
    });

    return Client;
};

