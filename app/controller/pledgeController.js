

const createPledge = async (amount, interest_rate, term, monthly_payment, repayment_source, message) => {
    
    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    const auth = await account.authorised();
    myHeaders.append("X-CSRFToken", auth.csrf)
  
    var raw = JSON.stringify({
        "amount": amount,
        "interest_rate": interest_rate,
        "term": term,
        "monthly_payment": monthly_payment,
        "repayment_source": repayment_source,
        "message": message,
    });
  
    let req = new Request(
      'https://papp.rastava.com/pledge/CreateEditPledge/', 
      {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        body: raw,
        headers: myHeaders
      }
    );
    
    const response = await fetch(req)
    const json = await response.json();
    return {
      json: json.data,
      status: json.status,
      message: json.message
    };
  
  }
  


  export const pledge = {
    createPledge
  }