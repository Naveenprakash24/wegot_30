import * as mysql from 'mysql';

export class Connection {
  
  public sql;
  
  connectDataBase() {
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
    
    this.sql.query('SELECT * from users', (err, results) => {
      if (err) console.log(err);
        console.log('connected');
      });
    }
    
    public Get(qry: string) {
      return new Promise((resolve, reject) => {
        this.connectDataBase();
        this.sql.query(qry, function (error, results, rows) {
          if (error) {
          reject(error);
        } else {
          resolve(results);
          console.log(JSON.stringify(results));
        }
      });
    });
  }
  
}

const conn = new Connection();
conn.connectDataBase();





