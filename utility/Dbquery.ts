import {startOfMonth,endOfMonth,perOfmonthStart,perOfmonthEnd,yesterday,currentDay } from "./Dateformat";

export const month = `SELECT SUM(day_Total)
                      AS day_total FROM w2_component_day_total 
                      T1 INNER JOIN we2db.w2_component_dtl T2 ON T1.comp_id = T2.component_id AND 
                      T1.apart_id=T2.apart_id WHERE T1.apart_id = '1157' AND dt >= '${startOfMonth}'AND dt <= '${endOfMonth}'`

export const today = `SELECT SUM(day_total)
                      AS day_total FROM w2_component_day_total
                      T1 INNER JOIN we2db.w2_component_dtl T2 ON T1.comp_id = T2.component_id AND
                      T1.apart_id=T2.apart_id WHERE T1.apart_id = '1157' AND dt >= '${currentDay}' AND dt <= '${currentDay}'`             
        
export const overallBathRoom = `Select dt,cum AS cum_value,comp_id,cust_name  
                                From w2_component_day_total T1 INNER JOIN we2db.w2_component_dtl T2 ON T1.comp_id = T2.component_id AND
                                T1.apart_id=T2.apart_id where T1.apart_id = '1157' and dt = '${currentDay}'`
        
export const overallKitchen = `Select dt,cum AS cum_value,comp_id,cust_name  
                               From w2_component_day_total T1 INNER JOIN we2db.w2_component_dtl T2 ON T1.comp_id = T2.component_id AND
                               T1.apart_id=T2.apart_id where T1.apart_id = '1157' and dt = '${currentDay}'`
                              
export const overallTotal = `SELECT SUM(cum) AS cum FROM w2_component_day_total 
                             T1 INNER JOIN we2db.w2_component_dtl T2 ON T1.comp_id = T2.component_id AND T1.apart_id=T2.apart_id WHERE
                             T1.apart_id = '1157' AND dt = '${currentDay}'`                      

