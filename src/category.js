var category = function category(key,value) {
 if(key=='el'||key=='EL'||key=='El'||key=='eL'){
  return "Education Loan"
 }else if(key=='pl'||key=='pL'||key=='Pl'||key=='PL'){
  return "Personal Loan"
 }else if(key=='vl'||key=='Vl'||key=='vL'||key=='VL'){
  return "Vehicle Loan"
 }else if(key=='HL'||key=='hl'||key=='hL'||key=='Hl'){
  return "Home Loan"
 }
  };
  
  module.exports = {
    category: category
  };