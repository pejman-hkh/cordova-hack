var cordova = {
  file : { applicationStorageDirectory : '' },
};

window.resolveLocalFileSystemURL = function( a, b ) {
  var s = {
    getFile : function( a, b, c ) {
      var d = {
        remove : function( a ) {},
      }
      c( d );
    }
  };

  b( s );
};

function FileTransfer() {
  this.download = function(a, b, c) {
    var s = {
      toURL : function() {}
    };
    c( s );
  }
}

var zip = {
  unzip : function(){},
};


window.sqlitePlugin = {
  openDatabase : function( a, b, c ) {
    var dbName = a.name;

    var d = {
      executeSql : function( a, b, c ) {
          $.ajax({
            url: 'http://localhost/cordova/executeSql.php',
            data: { db : dbName, query : a },
            type: "POST",
            dataType: "JSON",
            async: true,
            success: function (result) {

              var res = {
                rows : { 
                  length : result.length, 
                  item : function( i ) {
                    return result[i];
                  }
                }
              };

              c( res );
              var event = new CustomEvent('deviceready', { test : '123' });
              document.dispatchEvent(event);

            },
            error: function (e) {
              console.log( e );
            },
          });
      }
    }
    b( d );
  }
};

navigator.analytics = {
  setTrackingId : function() {},
  sendAppView : function() {},
};

navigator.connection.type = 'online';
var MobileAccessibility = {
  usePreferredTextZoom : function(){},
};

var device = {};
var inappbilling = {
  init : function(){},
};


navigator.app = {
  exitApp : function() {}
}

var event = new CustomEvent('deviceready', { test : '123' });
document.dispatchEvent(event);