describe('should test all functions in payments script', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
    });
    
    it('should update allPayments obj via submitPaymentInfo()',function(){
        
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('25');
        expect(allPayments['payment1'].tipPercent).toEqual(25);

    });

    it('should not update allPayments with a blank form via submitPaymentInfo()',function(){
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should return undefined through createCurPayment()', function(){
        billAmtInput.value = "";
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);

    });

    it('should return object with bill, tip, and tip % through createCurPayment()', function(){
        expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '25', tipPercent: 25});
        
    });

    it('should add new row to paymentTbody through appendPaymentTable()', function(){
        let newTr = document.createElement('tr');

        appendPaymentTable(createCurPayment());

        expect(paymentTbody.innerHTML).toContain(100);
        expect(paymentTbody.innerHTML).toContain(25);
        expect(paymentTbody.children.length).toEqual(1);

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