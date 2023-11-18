class Lead {
    constructor(id,alt, city,
        email, fwrap, loanamt, productType,
        name, mobileNo, status,subtype,updatedon,wrap) {
        this.id = id;
        // this.address = address;
        this.city = city;
        // this.district = district;
        // this.fatherName = fatherName;
        this.loanAmountRequired = loanamt;
        this.mobileNo = mobileNo;
        this.name = name;
        // this.pincode = pincode;
        this.productType = productType;
        this.subtype = subtype;
        // this.state = state;
        this.whatsAppMobileNo = alt;
        this.dateOfUpdation = updatedon;
        // this.gender = gender;
        this.email = email;
        this.status = status;
        this.wrap = wrap;
        this.fwrap = fwrap;
    }
}

export default Lead;
