"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const nconf = require("nconf");
class dataProvider {
    /**
     * This method is used to read data from Json file using language and dataname filters
     *
     * @author narottam
     * @param dataProviderFile
     * @param dataName
     * @returns result object
     */
    static getJsonData(dataProviderFile, dataName) {
        let data = null, result = null;
        data = JSON.parse(fs.readFileSync(dataProviderFile, 'utf8'));
        result = data[dataName];
        return result;
    }
    /**
     * This method is used to write Json data to Json file using language and dataname
     * filters with the help of key & value pair.
     *
     * @author narottamc
     * @param dataProviderFile
     * @param dataName
     * @param key
     * @param value
     */
    writeDataProvider(dataProviderFile, dataName, key, value) {
        nconf.argv()
            .env()
            .file({ file: dataProviderFile });
        nconf.set(dataName + ':' + key, value);
        nconf.save(function (err) {
            fs.readFile(dataProviderFile, 'utf-8', function (err, data) {
                if (err)
                    throw err;
            });
        });
    }
    ;
}
exports.dataProvider = dataProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGF0YS9kYXRhUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBeUI7QUFDekIsK0JBQStCO0FBRS9CO0lBRUk7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQXdCLEVBQUUsUUFBZ0I7UUFDekQsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBR0Q7Ozs7Ozs7OztPQVNHO0lBQ0gsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLO1FBQ3BELEtBQUssQ0FBQyxJQUFJLEVBQUU7YUFDUCxHQUFHLEVBQUU7YUFDTCxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO1FBRXBDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFHdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSTtnQkFDdEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQUEsQ0FBQztDQUNMO0FBMUNELG9DQTBDQyJ9