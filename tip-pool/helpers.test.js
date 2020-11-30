describe('should test all funcions in helpers.js', function(){
    beforeEach(function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });
    
    it('should sum the bill and tip totals with the sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toBe(50);
        expect(sumPaymentTotal('tipAmt')).toBe(10);
        
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toBe(100);
        expect(sumPaymentTotal('tipAmt')).toBe(20);
    });
    
    it('should calculate the tip percent', function(){
    
        expect(calculateTipPercent(20,5)).toBe(25);
    });
    
    it('should append a new Td to a Tr', function(){
        let newTr = document.createElement('tr');

        appendTd(newTr, 'new data point');
           
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('new data point');
    
    });


    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
        
    });


});
