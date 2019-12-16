"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
exports.startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
exports.endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
exports.perOfmonthStart = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
exports.perOfmonthEnd = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
exports.yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');
exports.currentDay = moment().format('YYYY-MM-DD');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxpdHkvRGF0ZWZvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUVwQixRQUFBLFlBQVksR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlELFFBQUEsVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUQsUUFBQSxlQUFlLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZGLFFBQUEsYUFBYSxHQUFHLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuRixRQUFBLFNBQVMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3RCxRQUFBLFVBQVUsR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMifQ==