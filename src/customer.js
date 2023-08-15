const category = require("./category");

var customerList = [];

const addCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      if (customerList.length == 0) {
            customerList.push([CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category])
            
      }else{            
       let emptyArray= customerList.filter(cust=>cust[0]===CustomerId)
       if(emptyArray.length==0){
        customerList.push([CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category])
       }else{
        // console.log("Customer is already added !!!")
       }
                 
      }   
      return customerList.length 
}

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      return  customerList.filter(currentCustomer => currentCustomer[0] === CustomerId)
                .map(requiredCustomer => [requiredCustomer[1]= CustomerName,requiredCustomer[2]= CustomerAge,requiredCustomer[3]= CustomerAddress,requiredCustomer[4]= CustomerContactNumber,requiredCustomer[5]= Category])
    
    }

    const getAllCustomers = () => {
      return customerList }
module.exports = { addCustomer, updateCustomer, getAllCustomers }