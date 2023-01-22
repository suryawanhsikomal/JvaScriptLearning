class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name=bank_name,
        this.location=location,
        this.account_no=account_no,
        this.ifsc=ifsc,
        this.interest_rate=interest_rate
    }
}
let axis_bank = new Bank("AXIS bank", "vashi", 778900132, "AXIS000212", "8%");
let sbi_bank = new Bank("SBI Bank", "Belapuri", 99071587908, "SBIN000313", "10%");
let icici_bank = new Bank("ICICI bank", "Thane", 477881312, "ICIC000414", "8. %");
let kotak_bank = new Bank("Kotak bank", "kharghar", 998132145, "KO000515", "11%");
let hdfc_bank = new Bank("HDFC bank", "Nerul", 8761327990, "HDFC000717", "10%");
let punjab_bank = new Bank("Punjab bank", "Sanpada", 76665667, "PUN000616", "11%")

 console.log(axis_bank);
 console.log(sbi_bank);
 console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);
console.log(`=========create map===========================`);


 console.log(`=============traverse the bank name account number and intrest rate of ech bank using for of loop`);
 
 const mapOfBank = new Map();
mapOfBank.set(axis_bank.account_no,axis_bank);
mapOfBank.set(sbi_bank.account_no,sbi_bank);
mapOfBank.set(icici_bank.account_no,icici_bank);
mapOfBank.set(kotak_bank.account_no,kotak_bank);
mapOfBank.set(hdfc_bank.account_no,hdfc_bank);
mapOfBank.set(punjab_bank.account_no,punjab_bank);

const keyMapOfBank = mapOfBank.keys();
console.log(keyMapOfBank);
for (const key of keyMapOfBank) {
    const bank = mapOfBank.get(key);
    console.log(`Bank Name: ${bank.bank_name} ,Account number: ${bank.account_no} ,Bank Location:  ${bank.location}`);
    
}

 





