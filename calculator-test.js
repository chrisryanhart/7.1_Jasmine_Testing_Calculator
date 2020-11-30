
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {amount: 1000, years: 10, rate: 1};
  expect(calculateMonthlyPayment(values)).toEqual('8.76');
});


it("should return a result with 2 decimal places", function() {
  // ..
  //monthly payment DOM should have 2 decimal places
  const values = {amount: 10043, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

/// etc
