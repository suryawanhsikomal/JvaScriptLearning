function Bank(bankName,location,ifscCode,branchcode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchcode=branchcode;
    console.log(`Bank detail is: ${bankName},${location},${ifscCode},${branchcode}`);

}
 Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
let yesBank=new Bank("yesBank","vashi","yes00021","yes00001");
let sbiBank=new Bank("sbiBank","juinagar","sbi000076","sbi000032");
let mahaBank=new Bank("mahaBank","nerul","maha434121","maha000043");
let axisBank=new Bank("axisBank","sanpada","axis9977654","axis000022");
console.log(`${sbiBank.bankName} :open Time =${ Bank.prototype.openTime}Close time:${Bank.prototype.closeTime}`);
console.log(`${axisBank.bankName}: Close Time=${Bank.prototype.closeTime}`);
console.log(`${yesBank.bankName} :${yesBank.branchcode} ,${Bank.prototype.openTime}`);

