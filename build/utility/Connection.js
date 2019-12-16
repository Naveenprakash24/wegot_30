"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Connection = /** @class */ (function () {
    function Connection() {
    }
    Connection.prototype.connectDataBase = function () {
        this.sql = mysql.createConnection({
            host: '104.211.213.209',
            port: 3306,
            user: 'wegotqa3',
            password: 'wegot@DB3',
            database: 'we2db'
        });
        this.sql.on('connect', function (sequence) {
            console.log('DB Connection established');
        });
        this.sql.query('SELECT * from users', function (err, results) {
            if (err)
                console.log(err);
            console.log('connected');
        });
    };
    Connection.prototype.Get = function (qry) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connectDataBase();
            _this.sql.query(qry, function (error, results, rows) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                    console.log(JSON.stringify(results));
                }
            });
        });
    };
    return Connection;
}());
exports.Connection = Connection;
var conn = new Connection();
conn.connectDataBase();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvQ29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUErQjtBQUUvQjtJQUFBO0lBcUNBLENBQUM7SUFqQ0Msb0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2hDLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsVUFBVTtZQUNoQixRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsT0FBTztTQUNsQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxRQUFRO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87WUFDakQsSUFBSSxHQUFHO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx3QkFBRyxHQUFWLFVBQVcsR0FBVztRQUF0QixpQkFZRDtRQVhHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJO2dCQUNoRCxJQUFJLEtBQUssRUFBRTtvQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDdEM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILGlCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQXJDWSxnQ0FBVTtBQXVDdkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUM5QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMifQ==